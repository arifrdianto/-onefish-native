import base from './base';
import components from './components';
import type { StyledProps } from './types';

export interface ComponentTheme {
  baseStyle?: ((props: any) => StyledProps) | StyledProps;
  sizes?: Record<string, ((props: any) => StyledProps) | StyledProps>;
  variants?: Record<string, ((props: any) => StyledProps) | StyledProps>;
  defaultProps?: Record<string, any>;
}

const theme = {
  ...base,
  components,
};

export type Theme = typeof theme & { fontConfig: any };

export interface ICustomTheme {}

export interface ITheme extends ICustomTheme, Omit<Theme, keyof ICustomTheme> {}

export { getColor } from './styled-system';
export { theme };
