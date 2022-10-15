import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../hooks';
import Box from '../Box';
import { IFormControlProps } from './types';
import { useFormControlProvider, FormControlContext } from './useFormControl';

const FormControl = (props: IFormControlProps, ref: any) => {
  const { htmlProps, ...context } = useFormControlProvider(props);
  const resolvedProps = usePropsResolution('FormControl', props, {
    isDisabled: context.isDisabled,
    isReadOnly: context.isReadOnly,
    isInvalid: context.isInvalid,
  });

  return (
    <FormControlContext.Provider value={context}>
      <Box {...resolvedProps} {...htmlProps} ref={ref} />
    </FormControlContext.Provider>
  );
};

export default memo(forwardRef(FormControl));
