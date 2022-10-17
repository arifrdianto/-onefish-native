import React, { forwardRef, memo } from 'react';
import { View } from 'react-native';
import { usePropsResolution } from '../../hooks';
import { makeStyledComponent } from '../../utils/styled';
import Text from '../Text';
import { IBoxProps, InterfaceBoxProps } from './types';

const StyledBox = makeStyledComponent(View);

const Box = ({ children, ...props }: IBoxProps, ref: any) => {
  const { _text, ...resolvedProps } = usePropsResolution('Box', props);

  return (
    <StyledBox ref={ref} {...resolvedProps}>
      {React.Children.map(children, (child) => {
        return typeof child === 'string' ||
          typeof child === 'number' ||
          (child?.type === React.Fragment &&
            (typeof child.props?.children === 'string' ||
              typeof child.props?.children === 'number')) ? (
          <Text {..._text}>{child}</Text>
        ) : (
          child
        );
      })}
    </StyledBox>
  );
};

export type { IBoxProps, InterfaceBoxProps };
export default memo(forwardRef(Box));
