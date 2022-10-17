import React, { memo, forwardRef } from 'react';
import Spinner from '../Spinner';
import { usePropsResolution } from '../../hooks';
import { default as Box, IBoxProps } from '../Box';
import HStack from '../Stack/HStack';
import { Pressable } from '../Pressable';
import type { IButtonProps } from './types';
import { composeEventHandlers } from '../../utils';
import { useFocus, useIsPressed } from '../Pressable/Pressable';

const Button = (
  {
    children,
    startIcon,
    rightIcon,
    leftIcon,
    endIcon,
    spinner,
    isDisabled,
    isLoading,
    isPressed: isPressedProp,
    isFocused: isFocusedProp,
    spinnerPlacement = 'start',
    ...props
  }: IButtonProps & IBoxProps,
  ref: any
) => {
  const { pressableProps, isPressed } = useIsPressed();
  const { isFocused } = useFocus();

  const {
    onPressIn,
    onPressOut,
    _text,
    _stack,
    _spinner,
    isLoadingText,
    _icon,
    ...resolvedProps
  } = usePropsResolution('Button', props, {
    isDisabled,
    isFocused: isFocusedProp || isFocused,
    isPressed: isPressedProp || isPressed,
    isLoading,
  });

  if (leftIcon) {
    startIcon = leftIcon;
  }
  if (rightIcon) {
    endIcon = rightIcon;
  }
  if (endIcon && React.isValidElement(endIcon)) {
    endIcon = React.Children.map(
      endIcon,
      (child: JSX.Element, index: number) => {
        return React.cloneElement(child, {
          key: `button-end-icon-${index}`,
          ..._icon,
          ...child.props,
        });
      }
    );
  }
  if (startIcon && React.isValidElement(startIcon)) {
    startIcon = React.Children.map(
      startIcon,
      (child: JSX.Element, index: number) => {
        return React.cloneElement(child, {
          key: `button-start-icon-${index}`,
          ..._icon,
          ...child.props,
        });
      }
    );
  }

  const spinnerElement = spinner ? (
    spinner
  ) : (
    <Spinner color={_text?.color} {..._spinner} />
  );

  const boxChildren = (child: any) => {
    return child ? <Box _text={_text}>{child}</Box> : null;
  };

  return (
    <Pressable
      disabled={isDisabled || isLoading}
      ref={ref}
      onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
      onPressOut={composeEventHandlers(onPressOut, pressableProps.onPressOut)}
      {...resolvedProps}
      accessibilityRole={props.accessibilityRole ?? 'button'}
    >
      <HStack {..._stack} test={true}>
        {startIcon && !isLoading ? startIcon : null}
        {isLoading && spinnerPlacement === 'start' ? spinnerElement : null}
        {isLoading
          ? isLoadingText
            ? boxChildren(isLoadingText)
            : null
          : boxChildren(children)}

        {endIcon && !isLoading ? endIcon : null}
        {isLoading && spinnerPlacement === 'end' ? spinnerElement : null}
      </HStack>
    </Pressable>
  );
};

export default memo(forwardRef(Button));
