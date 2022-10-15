import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../hooks';
import { default as Box, IBoxProps } from '../Box';

export const InputLeftAddon = memo(
  forwardRef((props: IBoxProps, ref?: any) => {
    const resolvedProps = usePropsResolution('InputLeftAddon', props);

    return (
      <Box {...resolvedProps} ref={ref}>
        {props.children}
      </Box>
    );
  }),
);
export const InputRightAddon = memo(
  forwardRef((props: IBoxProps, ref?: any) => {
    const resolvedProps = usePropsResolution('InputRightAddon', props);

    return (
      <Box {...resolvedProps} ref={ref}>
        {props.children}
      </Box>
    );
  }),
);
