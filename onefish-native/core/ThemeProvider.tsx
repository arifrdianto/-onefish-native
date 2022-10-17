import React from 'react';
import { theme as defaultTheme, ITheme } from '../theme';
import { ThemeConfigProvider } from './ThemeContext';

export interface ThemeProviderProps {
  theme?: ITheme;
  children?: React.ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, theme = defaultTheme } = props;

  return <ThemeConfigProvider theme={theme}>{children}</ThemeConfigProvider>;
};

export { ThemeProvider };
