import { Platform } from 'react-native';
import { omitUndefined, extractInObject, merge } from '../theme/tools';
import {
  propsFlattener,
  compareSpecificity,
  IStateProps,
} from './propsFlattener';
import type { ComponentTheme } from '../theme';
import { get } from '../theme/tools';
import { useTheme } from './useTheme';

const SPREAD_PROP_SPECIFICITY_ORDER = [
  'p',
  'padding',
  'px',
  'py',
  'pt',
  'pb',
  'pl',
  'pr',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'm',
  'margin',
  'mx',
  'my',
  'mt',
  'mb',
  'ml',
  'mr',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
];

const FINAL_SPREAD_PROPS = [
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
];

const MARGIN_MAP: any = {
  mx: ['marginRight', 'marginLeft'],
  my: ['marginTop', 'marginBottom'],
  mt: ['marginTop'],
  mb: ['marginBottom'],
  mr: ['marginRight'],
  ml: ['marginLeft'],
};

MARGIN_MAP.margin = [...MARGIN_MAP.mx, ...MARGIN_MAP.my];
MARGIN_MAP.m = MARGIN_MAP.margin;
MARGIN_MAP.marginTop = MARGIN_MAP.mt;
MARGIN_MAP.marginBottom = MARGIN_MAP.mb;
MARGIN_MAP.marginLeft = MARGIN_MAP.ml;
MARGIN_MAP.marginRight = MARGIN_MAP.mr;

const PADDING_MAP: any = {
  px: ['paddingRight', 'paddingLeft'],
  py: ['paddingTop', 'paddingBottom'],
  pt: ['paddingTop'],
  pb: ['paddingBottom'],
  pr: ['paddingRight'],
  pl: ['paddingLeft'],
};

PADDING_MAP.padding = [...PADDING_MAP.px, ...PADDING_MAP.py];
PADDING_MAP.p = PADDING_MAP.padding;
PADDING_MAP.paddingTop = PADDING_MAP.pt;
PADDING_MAP.paddingBottom = PADDING_MAP.pb;
PADDING_MAP.paddingLeft = PADDING_MAP.pl;
PADDING_MAP.paddingRight = PADDING_MAP.pr;

const SPREAD_PROP_SPECIFICITY_MAP: any = {
  ...PADDING_MAP,
  ...MARGIN_MAP,
};

function propsSpreader(incomingProps: any, incomingSpecifity: any) {
  const flattenedDefaultProps: any = { ...incomingProps };
  const specificity: any = {};

  SPREAD_PROP_SPECIFICITY_ORDER.forEach(prop => {
    if (prop in flattenedDefaultProps) {
      const val = incomingProps[prop] || flattenedDefaultProps[prop];
      if (!FINAL_SPREAD_PROPS.includes(prop)) {
        delete flattenedDefaultProps[prop];
        specificity[prop] = incomingSpecifity[prop];
      }

      SPREAD_PROP_SPECIFICITY_MAP[prop].forEach((newProp: string) => {
        if (compareSpecificity(specificity[newProp], specificity[prop])) {
          specificity[newProp] = incomingSpecifity[prop];
          flattenedDefaultProps[newProp] = val;
        }
      });
    }
  });

  return merge({}, flattenedDefaultProps);
}

/**
 * @summary Combines provided porps with component's theme props and resloves them.
 * @arg {string} component - Name of the component.
 * @arg {object} incomingProps - Props passed by the user.
 * @arg {object} state - dependent states.
 * @arg {object} config - configuration for resolution. Accepts key like ignoreProps, resolveResponsively.
 * @returns {object} Resolved and flattened props.
 */
export function usePropsResolution(
  component: string,
  incomingProps: any,
  state?: IStateProps,
  config?: {
    componentTheme?: any;
    resolveResponsively?: string[];
    ignoreProps?: string[];
    cascadePseudoProps?: boolean;
    extendTheme?: string[];
  },
) {
  const theme = useTheme();
  const componentTheme =
    config?.componentTheme ?? get(theme, `components.${component}`, {});

  const resolvedProps = usePropsResolutionWithComponentTheme(
    componentTheme,
    incomingProps,
    state,
    config,
  );

  // Not Resolve theme props and pseudo props
  if (incomingProps?.INTERNAL_notResolveThemeAndPseudoProps) {
    delete incomingProps.INTERNAL_notResolveThemeAndPseudoProps;
    return incomingProps;
  }

  return resolvedProps;
}

export const usePropsResolutionWithComponentTheme = (
  componentTheme: ComponentTheme,
  incomingProps: any,
  state?: IStateProps,
  config?: {
    componentTheme?: any;
    resolveResponsively?: string[];
    ignoreProps?: string[];
    cascadePseudoProps?: boolean;
    extendTheme?: string[];
  },
) => {
  const [ignoredProps, cleanIncomingProps] = extractInObject(
    incomingProps,
    ['children', 'onPress', 'icon', 'onOpen', 'onClose'].concat(
      config?.ignoreProps || [],
    ),
  );

  const resolveResponsively = [
    'colorScheme',
    'size',
    'variant',
    ...(config?.resolveResponsively || []),
  ];

  const theme = useTheme();

  const extendedTheme: Array<any> = [];
  if (config?.extendTheme) {
    config?.extendTheme.map((componentName: string) => {
      extendedTheme.push(get(theme, `components.${componentName}`, {}));
    });
  }

  if (componentTheme) {
    extendedTheme.push(componentTheme);
  }

  const resolveComponentTheme = (
    themeType: Array<string>,
    providedTheme: any,
  ): any => {
    try {
      if (themeType[1]) {
        return typeof providedTheme[themeType[0]][themeType[1]] !== 'function'
          ? providedTheme[themeType[0]][themeType[1]]
          : providedTheme[themeType[0]][themeType[1]]({
              theme,
              ...incomingWithDefaultProps,
            });
      } else {
        return typeof providedTheme[themeType[0]] !== 'function'
          ? providedTheme[themeType[0]]
          : providedTheme[themeType[0]]({
              theme,
              ...incomingWithDefaultProps,
            });
      }
    } catch {
      return {};
    }
  };
  const callPropsFlattener = (
    targetProps = {},
    latestSpecifictyMap = {},
    specificity = 1,
  ): any => {
    return propsFlattener(
      {
        props: targetProps,
        platform: Platform.OS,
        colormode: {},
        state: state || {},
        currentSpecificityMap: latestSpecifictyMap,
        previouslyFlattenProps: flattenProps || {},
        cascadePseudoProps: config?.cascadePseudoProps,
      },
      specificity,
    );
  };

  // STEP 1: combine default props and incoming props

  const incomingWithDefaultProps = merge(
    componentTheme.defaultProps || {},
    cleanIncomingProps,
  );

  // STEP 1.5: resolving component theme
  let combinedBaseStyle = {};
  let combinedVariantStyle = {};
  let combinedSizeStyle = {};
  extendedTheme.map((extededComponentTheme: any) => {
    if (extededComponentTheme.baseStyle) {
      combinedBaseStyle = {
        ...combinedBaseStyle,
        ...resolveComponentTheme(['baseStyle'], extededComponentTheme),
      };
    }
    if (incomingWithDefaultProps.variant) {
      if (extededComponentTheme.variants) {
        combinedVariantStyle = {
          ...combinedVariantStyle,
          ...resolveComponentTheme(
            ['variants', incomingWithDefaultProps.variant],
            extededComponentTheme,
          ),
        };
      }
    }
    if (
      incomingWithDefaultProps.size &&
      extededComponentTheme?.sizes &&
      extededComponentTheme?.sizes[incomingWithDefaultProps.size]
    ) {
      if (
        typeof extededComponentTheme.sizes[incomingWithDefaultProps.size] ===
          'string' ||
        typeof extededComponentTheme.sizes[incomingWithDefaultProps.size] ===
          'number'
      ) {
        incomingWithDefaultProps.size =
          extededComponentTheme.sizes[incomingWithDefaultProps.size];
      } else {
        combinedSizeStyle = {
          ...combinedSizeStyle,
          ...resolveComponentTheme(
            ['sizes', incomingWithDefaultProps.size],
            extededComponentTheme,
          ),
        };
        incomingWithDefaultProps.size = undefined;
      }
    }
  });

  // STEP 2: flatten them

  //TODO: hack
  let flattenProps: any, specificityMap;
  [flattenProps, specificityMap] = callPropsFlattener(
    incomingWithDefaultProps,
    {},
    2,
  );
  const responsiveProps = {};

  if (resolveResponsively.includes('direction')) {
    const propName = 'direction';
    if (flattenProps[propName]) {
      // @ts-ignore
      responsiveProps[propName] = flattenProps[propName];
    }
  }

  // STEP 3: Pass it to baseStyle, then variant and then size and resolve them.

  // NOTE: Resoloving baseStyle
  let flattenBaseStyle, baseSpecificityMap;
  if (combinedBaseStyle) {
    [flattenBaseStyle, baseSpecificityMap] = callPropsFlattener(
      combinedBaseStyle,
      specificityMap,
    );
  }

  // NOTE: Resolving variants
  let flattenVariantStyle, variantSpecificityMap;
  // Extracting props from variant
  if (combinedVariantStyle) {
    [flattenVariantStyle, variantSpecificityMap] = callPropsFlattener(
      combinedVariantStyle,
      baseSpecificityMap || specificityMap,
    );

    // We remove variant from original props if we found it in the componentTheme
    //@ts-ignore
    flattenProps.variant = undefined;
  }

  // NOTE: Resolving size

  let flattenSizeStyle, sizeSpecificityMap;
  // Extracting props from size
  if (combinedSizeStyle) {
    [flattenSizeStyle, sizeSpecificityMap] = callPropsFlattener(
      combinedSizeStyle,
      variantSpecificityMap || baseSpecificityMap || specificityMap,
    );
  }

  // STEP 4: merge
  const defaultStyles = merge(
    flattenBaseStyle,
    merge(flattenVariantStyle, flattenSizeStyle),
  );

  /*Resolve all the internal used Pseudo Props*/
  const resolvePseudoProps = (
    flatPseudoProp: any /** Props coming from Pseudo inside flattenProps */,
    baseStylePseudoProp: any /** Props coming from Pseudo inside defaultStyles(baseStyle) */,
  ) => {
    for (const prop in flatPseudoProp) {
      baseStylePseudoProp[prop] =
        flatPseudoProp[
          prop
        ]; /* Replace all the similar prop from from internal props */
    }
    return baseStylePseudoProp;
  };

  for (const prop in defaultStyles) {
    if (prop.startsWith('_') && flattenProps.hasOwnProperty(prop)) {
      /*Resolve all the internal used Pseudo Props*/
      defaultStyles[prop] = resolvePseudoProps(
        flattenProps[prop],
        defaultStyles[prop],
      );
    }
    delete flattenProps[prop];
  }

  const defaultSpecificity = merge(
    merge(specificityMap, baseSpecificityMap),
    merge(variantSpecificityMap, sizeSpecificityMap),
  );

  flattenProps = propsSpreader(
    { ...defaultStyles, ...flattenProps },
    defaultSpecificity,
  );

  const resolvedProps = omitUndefined({
    ...flattenProps,
    ...ignoredProps,
  });

  // STEP 5: Return
  return resolvedProps;
};
