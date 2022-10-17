import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../hooks';
import { combineContextAndProps } from '../../utils';
import Box from '../Box';
import { HStack } from '../Stack';
import Text from '../Text';
import { IFormControlErrorMessageProps } from './types';
import { useFormControlContext } from './useFormControl';

const FormControlErrorMessage = (
  props: IFormControlErrorMessageProps,
  ref: any,
) => {
  const formControlContext = useFormControlContext();
  const combinedProps = combineContextAndProps(formControlContext, props);
  const { leftIcon, rightIcon, children, _text, _stack, ...resolvedProps } =
    usePropsResolution('FormControlErrorMessage', combinedProps, {
      isDisabled: combinedProps.isDisabled,
      isReadOnly: combinedProps.isReadOnly,
      isInvalid: combinedProps.isInvalid,
    });
  let { startIcon, endIcon } = resolvedProps;

  if (rightIcon) {
    endIcon = rightIcon;
  }
  if (leftIcon) {
    startIcon = leftIcon;
  }
  if (endIcon && React.isValidElement(endIcon)) {
    endIcon = React.Children.map(
      endIcon,
      (child: JSX.Element, index: number) => {
        return React.cloneElement(child, {
          key: `button-end-icon-${index}`,
          ..._text,
          ...child.props,
        });
      },
    );
  }
  if (startIcon && React.isValidElement(startIcon)) {
    startIcon = React.Children.map(
      startIcon,
      (child: JSX.Element, index: number) => {
        return React.cloneElement(child, {
          key: `button-start-icon-${index}`,
          ..._text,
          ...child.props,
        });
      },
    );
  }

  React.useEffect(() => {
    resolvedProps?.setHasFeedbackText(true);
    return () => {
      resolvedProps?.setHasFeedbackText(false);
    };
  });

  return resolvedProps?.isInvalid && children ? (
    <Box nativeID={resolvedProps?.helpTextId} {...resolvedProps} ref={ref}>
      <HStack {..._stack}>
        {startIcon}
        <Text {..._text}>{children}</Text>
        {endIcon}
      </HStack>
    </Box>
  ) : null;
};

export default memo(forwardRef(FormControlErrorMessage));
