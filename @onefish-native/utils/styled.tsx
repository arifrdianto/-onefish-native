import React from 'react';
import { useStyledSystemPropsResolver } from '../hooks';

export const makeStyledComponent = (Comp: any) => {
  return React.forwardRef(({ ...props }: any, ref: any) => {
    const [style, restProps] = useStyledSystemPropsResolver(props);
    console.log('style :>> ', style);
    return (
      <Comp {...restProps} style={style} ref={ref}>
        {props.children}
      </Comp>
    );
  });
};
