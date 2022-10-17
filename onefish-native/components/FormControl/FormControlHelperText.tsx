import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../hooks';
import { combineContextAndProps } from '../../utils';
import Box from '../Box';
import { HStack } from '../Stack';
import Text from '../Text';
import { IFormControlHelperTextProps } from './types';
import { useFormControlContext } from './useFormControl';

const FormControlHelperText = (
  props: IFormControlHelperTextProps,
  ref: any,
) => {
  const formControlContext = useFormControlContext();
  const combinedProps = combineContextAndProps(formControlContext, props);
  const { leftIcon, children, _text, _stack, ...resolvedProps } =
    usePropsResolution('FormControlHelperText', combinedProps, {
      isDisabled: combinedProps.isDisabled,
      isReadOnly: combinedProps.isReadOnly,
      isInvalid: combinedProps.isInvalid,
    });

  let { startIcon } = resolvedProps;

  if (leftIcon) {
    startIcon = leftIcon;
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
    resolvedProps?.setHasHelpText(true);
    return () => {
      resolvedProps?.setHasHelpText(false);
    };
  });

  return (
    <Box {...resolvedProps} nativeID={resolvedProps?.feedbackId} ref={ref}>
      <HStack {..._stack}>
        {startIcon}
        <Text {..._text}>{children}</Text>
      </HStack>
    </Box>
  );
};

export default memo(forwardRef(FormControlHelperText));
