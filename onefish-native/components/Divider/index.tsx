import React, { memo, forwardRef } from 'react';
import Box from '../Box';
import { usePropsResolution } from '../../hooks';

import type { IDividerProps } from './types';

const Divider = (props: IDividerProps, ref?: any) => {
  const { orientation, ...resolvedProps } = usePropsResolution(
    'Divider',
    props,
    {},
    { resolveResponsively: ['thickness'] }
  );

  return <Box {...resolvedProps} ref={ref} aria-orientation={orientation} />;
};

export default memo(forwardRef(Divider));
