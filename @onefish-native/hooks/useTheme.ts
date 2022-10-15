import { useThemeConfig } from '../core/ThemeContext';

export function useTheme() {
  const theme = useThemeConfig('useTheme').theme;
  if (!theme) {
    throw Error(
      'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ThemeProvider />`',
    );
  }

  return theme;
}
