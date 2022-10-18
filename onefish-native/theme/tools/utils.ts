export const stylingProps = {
  margin: [
    'margin',
    'm',
    'marginTop',
    'mt',
    'marginRight',
    'mr',
    'marginBottom',
    'mb',
    'marginLeft',
    'ml',
    'marginX',
    'mx',
    'marginY',
    'my',
  ],
  padding: [
    'padding',
    'p',
    'paddingTop',
    'pt',
    'paddingRight',
    'pr',
    'paddingBottom',
    'pb',
    'paddingLeft',
    'pl',
    'paddingX',
    'px',
    'paddingY',
    'py',
  ],
  border: [
    'border',
    'borderWidth',
    'borderStyle',
    'borderColor',
    'borderRadius',
    'borderTop',
    'borderTopWidth',
    'borderTopStyle',
    'borderTopColor',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderRight',
    'borderRightWidth',
    'borderRightStyle',
    'borderRightColor',
    'borderBottom',
    'borderBottomWidth',
    'borderBottomStyle',
    'borderBottomColor',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderLeft',
    'borderLeftWidth',
    'borderLeftStyle',
    'borderLeftColor',
    'borderX',
    'borderY',
    'rounded',
  ],
  layout: [
    'width',
    'w',
    'height',
    'h',
    'display',
    'minWidth',
    'minW',
    'minH',
    'minHeight',
    'maxWidth',
    'maxW',
    'maxHeight',
    'maxH',
    'size',
    'verticalAlign',
    'overflow',
    'overflowX',
    'overflowY',
  ],
  flexbox: [
    'alignItems',
    'alignContent',
    'justifyItems',
    'justifyContent',
    'flexWrap',
    'flexDirection',
    'flex',
    'flexGrow',
    'flexShrink',
    'flexBasis',
    'justifySelf',
    'alignSelf',
    'order',
  ],
  position: ['position', 'zIndex', 'top', 'right', 'bottom', 'left'],
  outline: ['outlineWidth', 'outlineColor', 'outlineStyle'],
  background: ['bg', 'backgroundColor', 'bgColor'],
};

export type Dict = Record<string, any>;

/**
 * Get value from a deeply nested object using a string path.
 * Memorizes the value.
 * @param obj - the object
 * @param path - the string path
 * @param fallback  - the fallback value
 *
 * original https://github.com/chakra-ui/chakra-ui/blob/main/packages/legacy/utils/src/object.ts
 */
export function get(
  obj: Record<string, any>,
  path: string | number,
  fallback?: any,
  index?: number
) {
  const key = typeof path === 'string' ? path.split('.') : [path];

  for (index = 0; index < key.length; index += 1) {
    if (!obj) {
      break;
    }
    obj = obj[key[index]];
  }

  return obj === undefined ? fallback : obj;
}

export const merge = (a: { [x: string]: any }, b: { [x: string]: any }) => {
  let result = Object.assign({}, a, b);
  for (const key in a) {
    if (!a[key] || typeof b[key] !== 'object') {
      continue;
    }
    Object.assign(result, {
      [key]: Object.assign(a[key], b[key]),
    });
  }
  return result;
};

// original https://github.com/chakra-ui/chakra-ui/blob/main/packages/utilities/object-utils/src/index.ts
export function omit<T extends Record<any, any>, K extends keyof T>(
  object: T,
  keysToOmit: K[] = []
) {
  const clone = Object.assign({}, object);
  for (const key of keysToOmit) {
    // @ts-ignore
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone as Omit<T, K>;
}

export function pick<T extends Record<any, any>, K extends keyof T>(
  object: T,
  keysToPick: K[]
) {
  const result = {} as { [P in K]: T[P] };
  for (const key of keysToPick) {
    if (key in object) {
      result[key] = object[key];
    }
  }
  return result;
}

export function omitUndefined(obj: any) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== null));
}

export function extractInObject(parent: any, values: Array<string>) {
  return [
    omitUndefined(pick(parent, values)),
    omitUndefined(omit(parent, values)),
  ];
}

export function getColorFormColorScheme(props: Record<string, any>) {
  const { theme, colorScheme, isDisabled } = props;
  const simpleColorScheme = colorScheme.split('.')[0];
  if (isDisabled) {
    return 'gray.300';
  } else if (simpleColorScheme in theme.colors) {
    return theme.colors[simpleColorScheme][0] === '#'
      ? simpleColorScheme
      : theme.colors[simpleColorScheme][400] ||
          theme.colors[simpleColorScheme][200];
  } else {
    return 'primary.200';
  }
}

export function getColorScheme(
  props: Record<string, any>,
  customColorScheme?: string
) {
  let { theme, colorScheme } = props;
  colorScheme = customColorScheme || colorScheme;
  if (!(colorScheme in theme.colors)) {
    return 'primary';
  } else {
    if (typeof theme.colors[colorScheme] === 'object') {
      return colorScheme;
    }
  }
}
