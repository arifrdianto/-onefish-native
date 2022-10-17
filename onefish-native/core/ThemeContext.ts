import { ITheme } from '../theme';
import { createContext } from '../utils';

export const [ThemeConfigProvider, useThemeConfig] = createContext<{
  theme?: ITheme;
}>('ThemeConfigProvider');
