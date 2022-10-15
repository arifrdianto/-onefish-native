import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../hooks';
import { combineContextAndProps, mergeRefs } from '../../utils';
import Box from '../Box';
import { HStack } from '../Stack';
import Text from '../Text';
import { IFormControlLabelProps } from './types';
import { useFormControlContext } from './useFormControl';

const FormControlLabel = (
  { children, ...props }: IFormControlLabelProps,
  ref: any,
) => {
  const formControlContext = useFormControlContext();
  const combinedProps = combineContextAndProps(formControlContext, props);
  const _ref = React.useRef<HTMLLabelElement>(null);
  const { rightIcon, _text, _icon, _stack, _astrick, ...resolvedProps } =
    usePropsResolution('FormControlLabel', combinedProps, {
      isDisabled: combinedProps.isDisabled,
      isReadOnly: combinedProps.isReadOnly,
      isInvalid: combinedProps.isInvalid,
    });

  let { endIcon } = resolvedProps;

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
      },
    );
  }

  const requiredAsterisk = () => <Text {..._astrick}>*</Text>;
  const mergedRef = mergeRefs([_ref, ref]);
  React.useEffect(() => {
    if (_ref.current) {
      // RN web doesn't support htmlFor for Label element yet
      if (props.htmlFor) {
        _ref.current.htmlFor = props.htmlFor;
      } else if (resolvedProps?.nativeID) {
        _ref.current.htmlFor = resolvedProps.nativeID;
      }
    }
  }, [resolvedProps?.nativeID, props.htmlFor]);

  return (
    <Box {...resolvedProps} nativeID={resolvedProps?.labelId} ref={mergedRef}>
      <HStack {..._stack}>
        <Text {..._text}>{children}</Text>
        {endIcon}
      </HStack>
      {resolvedProps?.isRequired && requiredAsterisk()}
    </Box>
  );
};
export default memo(forwardRef(FormControlLabel));
