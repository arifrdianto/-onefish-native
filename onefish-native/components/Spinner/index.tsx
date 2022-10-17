import React, { memo, forwardRef } from 'react';
import { ActivityIndicator } from 'react-native';
import {
  usePropsResolution,
  useStyledSystemPropsResolver,
  useTheme,
} from '../../hooks';
import { getColor } from '../../theme';
import type { ISpinnerProps } from './types';

const Spinner = (props: ISpinnerProps, ref: any) => {
  const { color, size, style, testID, ...resolvedProps } = usePropsResolution(
    'Spinner',
    props,
  );
  const resolvedColor = getColor(color, useTheme().colors);
  const resolvedStyle = useStyledSystemPropsResolver(resolvedProps);

  return (
    <ActivityIndicator
      testID={testID}
      accessible
      accessibilityLabel="loading"
      color={resolvedColor}
      ref={ref}
      size={size}
      style={[resolvedStyle, style]}
    />
  );
};

export default memo(forwardRef(Spinner));
export type { ISpinnerProps };
