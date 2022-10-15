import React, { memo, forwardRef } from 'react';
import { Text as RNText } from 'react-native';
import { usePropsResolution, useResolvedFontFamily } from '../../hooks';
import { makeStyledComponent } from '../../utils/styled';
import { ITextProps } from './types';

const StyledText = makeStyledComponent(RNText);

const Text = ({ children, ...props }: ITextProps, ref: any) => {
  const {
    isTruncated,
    noOfLines,
    bold,
    italic,
    sub,
    highlight,
    underline,
    strikeThrough,
    fontFamily: propFontFamily,
    fontWeight: propFontWeight,
    fontStyle: propFontStyle,
    fontSize,
    numberOfLines,
    ...resolvedProps
  } = usePropsResolution(
    'Text',
    props,
    {},
    {
      resolveResponsively: ['noOfLines', 'numberOfLines'],
    },
  );

  let fontFamily = propFontFamily;
  const fontStyle = italic ? 'italic' : propFontStyle;
  const fontWeight = bold ? 'bold' : propFontWeight;

  const resolvedFontFamily = useResolvedFontFamily({
    fontFamily,
    fontWeight: fontWeight ?? 400,
    fontStyle: fontStyle ?? 'normal',
  });

  if (resolvedFontFamily) {
    fontFamily = resolvedFontFamily;
  }

  const propsToSpread = {
    ...resolvedProps,
    numberOfLines:
      numberOfLines || noOfLines
        ? numberOfLines || noOfLines
        : isTruncated
        ? 1
        : undefined,
    ...resolvedFontFamily,
    bg: highlight ? 'warning.300' : resolvedProps.bg,
    textDecorationLine:
      underline && strikeThrough
        ? 'underline line-through'
        : underline
        ? 'underline'
        : strikeThrough
        ? 'line-through'
        : resolvedProps.textDecorationLine,
    fontSize: sub ? 10 : fontSize,
    ref,
  };

  return <StyledText {...propsToSpread}>{children}</StyledText>;
};

export default memo(forwardRef(Text));
export type { ITextProps };
