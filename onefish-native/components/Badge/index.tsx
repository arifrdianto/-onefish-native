import { usePropsResolution } from 'libs/onefish-native/hooks';
import React, { memo, forwardRef } from 'react';
import Box from '../Box';
import { HStack } from '../Stack';
import { IBadgeProps } from './types';

const Badge = (
  {
    children,
    startIcon,
    rightIcon,
    leftIcon,
    endIcon,
    dot,
    ...props
  }: IBadgeProps,
  ref: any
) => {
  const { _icon, _text, ...newProps } = usePropsResolution('Badge', props);
  if (leftIcon) {
    startIcon = leftIcon;
  }
  if (rightIcon) {
    endIcon = rightIcon;
  }

  const colorDot = props.colorScheme ?? 'primary';

  if (dot) {
    endIcon = (
      <Box
        bg={`${colorDot}.300`}
        p={0.5}
        borderRadius="full"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          bg={props.variant === 'solid' ? `${colorDot}.50` : `${colorDot}.500`}
          w={1.5}
          h={1.5}
          p={0.5}
          borderRadius="full"
          justifyContent="center"
          alignItems="center"
        />
      </Box>
    );
  }

  if (endIcon && React.isValidElement(endIcon)) {
    endIcon = React.Children.map(
      endIcon,
      (child: JSX.Element, index: number) => {
        return React.cloneElement(child, {
          key: `badge-end-icon-${index}`,
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
          key: `badge-start-icon-${index}`,
          ..._icon,
          ...child.props,
        });
      }
    );
  }

  return (
    <HStack {...newProps} ref={ref}>
      {startIcon ? startIcon : null}
      <Box _text={_text}>{children}</Box>
      {endIcon ? endIcon : null}
    </HStack>
  );
};

export type IBadgeComponentType = (props: IBadgeProps) => JSX.Element;

export default memo(forwardRef(Badge)) as IBadgeComponentType;
export type { IBadgeProps };
