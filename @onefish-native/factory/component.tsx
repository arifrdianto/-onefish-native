import React, { useMemo } from 'react';
import type { ComponentTheme } from '../theme';
import type { FactoryComponentProps } from './types';
import { makeStyledComponent } from '../utils/styled';
import { usePropsResolutionWithComponentTheme } from '../hooks';

export default function Factory<P>(
  Component: React.ComponentType<P>,
  componentTheme?: ComponentTheme,
) {
  return React.forwardRef(
    ({ children, ...props }: P & FactoryComponentProps, ref: any) => {
      const StyledComponent = useMemo(() => makeStyledComponent(Component), []);
      const calculatedProps = usePropsResolutionWithComponentTheme(
        componentTheme ?? {},
        props,
      );
      return (
        <StyledComponent {...(calculatedProps as P)} ref={ref}>
          {children}
        </StyledComponent>
      );
    },
  );
}
