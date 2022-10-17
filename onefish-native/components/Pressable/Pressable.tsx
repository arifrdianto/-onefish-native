import React, { forwardRef, memo } from 'react';
import { Pressable as RNPressable } from 'react-native';
import { usePropsResolution } from '../../hooks';
import { makeStyledComponent, composeEventHandlers } from '../../utils';
import { IPressableProps } from './types';

export const useFocus = () => {
  const [isFocused, setFocused] = React.useState(false);
  return {
    focusProps: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
    },
    isFocused,
  };
};

export const useIsPressed = () => {
  const [isPressed, setIsPressed] = React.useState(false);
  return {
    pressableProps: {
      onPressIn: () => setIsPressed(true),
      onPressOut: () => setIsPressed(false),
    },
    isPressed,
  };
};

const StyledPressable = makeStyledComponent(RNPressable);

const Pressable = (
  {
    children,
    isDisabled,
    disabled,
    isPressed: isPressedProp,
    isFocused: isFocusedProp,
    ...props
  }: IPressableProps,
  ref: any
) => {
  const { pressableProps, isPressed } = useIsPressed();
  const { isFocused } = useFocus();

  const { onPressIn, onPressOut, ...resolvedProps } = usePropsResolution(
    'Pressable',
    props,
    {
      isPressed: isPressedProp || isPressed,
      isFocused: isFocusedProp || isFocused,
      isDisabled: disabled || isDisabled,
    }
  );

  return (
    <StyledPressable
      ref={ref}
      onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
      onPressOut={composeEventHandlers(onPressOut, pressableProps.onPressOut)}
      disabled={disabled || isDisabled}
      {...resolvedProps}
    >
      {typeof children !== 'function'
        ? children
        : children({
            isPressed,
            isFocused,
          })}
    </StyledPressable>
  );
};

export default memo(forwardRef(Pressable));
