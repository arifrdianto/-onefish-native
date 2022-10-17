import React, { memo, forwardRef } from 'react';
import { TextInput } from 'react-native';
import type { IInputProps } from './types';
import { makeStyledComponent, mergeRefs } from '../../utils';
import {
  usePropsResolution,
  useResolvedFontFamily,
  useToken,
} from '../../hooks';
import { extractInObject, stylingProps } from '../../theme/tools';
import { Stack } from '../Stack';
import { useFormControl } from '../FormControl';

const StyledInput = makeStyledComponent(TextInput);

const Input = (
  {
    isFocused: isFocusedProp,
    onKeyPress,
    InputLeftElement,
    InputRightElement,
    leftElement,
    rightElement,
    ...props
  }: IInputProps,
  ref: any
) => {
  const inputProps = useFormControl({
    isDisabled: props.isDisabled,
    isInvalid: props.isInvalid,
    isReadOnly: props.isReadOnly,
    isRequired: props.isRequired,
    nativeID: props.nativeID,
  });
  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = (focusState: boolean, callback: any) => {
    setIsFocused(focusState);
    callback();
  };

  const _ref = React.useRef(null);

  const inputThemeProps = {
    isDisabled: inputProps.disabled,
    isInvalid: inputProps.accessibilityInvalid,
    isReadOnly: inputProps.accessibilityReadOnly,
    isRequired: inputProps.required,
  };

  const {
    ariaLabel,
    accessibilityLabel,
    type,
    isFullWidth,
    isDisabled,
    isReadOnly,
    fontFamily,
    fontWeight,
    fontStyle,
    placeholderTextColor,
    selectionColor,
    underlineColorAndroid,
    onFocus,
    onBlur,
    wrapperRef,
    _stack,
    _input,
    ...resolvedProps
  } = usePropsResolution('Input', props, {
    isDisabled: inputThemeProps.isDisabled,
    isFocused: isFocusedProp || isFocused,
    isInvalid: inputThemeProps.isInvalid,
    isReadOnly: inputThemeProps.isReadOnly,
  });

  const [layoutProps, nonLayoutProps] = extractInObject(resolvedProps, [
    ...stylingProps.margin,
    ...stylingProps.border,
    ...stylingProps.layout,
    ...stylingProps.flexbox,
    ...stylingProps.position,
    ...stylingProps.background,
    'shadow',
    'opacity',
  ]);

  const resolvedFontFamily = useResolvedFontFamily({
    fontFamily,
    fontWeight: fontWeight ?? 400,
    fontStyle: fontStyle ?? 'normal',
  });

  const resolvedPlaceholderTextColor = useToken('colors', placeholderTextColor);
  const resolvedSelectionColor = useToken('colors', selectionColor);
  const resolvedUnderlineColorAndroid = useToken(
    'colors',
    underlineColorAndroid
  );

  /**Converting into Hash Color Code */
  resolvedProps.focusOutlineColor = useToken(
    'colors',
    resolvedProps.focusOutlineColor
  );

  resolvedProps.invalidOutlineColor = useToken(
    'colors',
    resolvedProps.invalidOutlineColor
  );

  if (resolvedProps.focusOutlineColor && isFocused) {
    layoutProps.borderColor = resolvedProps.focusOutlineColor;
  }

  if (resolvedProps.invalidOutlineColor && props.isInvalid) {
    layoutProps.borderColor = resolvedProps.invalidOutlineColor;
  }

  return (
    <Stack
      {..._stack}
      {...layoutProps}
      ref={mergeRefs([_ref, wrapperRef])}
      isFocused={isFocused}
    >
      {InputLeftElement || leftElement ? InputLeftElement || leftElement : null}
      <StyledInput
        {...inputProps}
        secureTextEntry={type === 'password'}
        accessible
        accessibilityLabel={ariaLabel || accessibilityLabel}
        editable={isDisabled || isReadOnly ? false : true}
        w={isFullWidth ? '100%' : undefined}
        {...nonLayoutProps}
        {...resolvedFontFamily}
        placeholderTextColor={resolvedPlaceholderTextColor}
        selectionColor={resolvedSelectionColor}
        underlineColorAndroid={resolvedUnderlineColorAndroid}
        onKeyPress={(e: any) => {
          e.persist();
          onKeyPress && onKeyPress(e);
        }}
        onFocus={(e: any) => {
          handleFocus(true, onFocus ? () => onFocus(e) : () => {});
        }}
        onBlur={(e: any) => {
          handleFocus(false, onBlur ? () => onBlur(e) : () => {});
        }}
        {..._input}
        ref={mergeRefs([ref, _ref, wrapperRef])}
      />
      {InputRightElement || rightElement
        ? InputRightElement || rightElement
        : null}
    </Stack>
  );
};

export default memo(forwardRef(Input));
