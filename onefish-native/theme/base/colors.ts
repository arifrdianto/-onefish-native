import { Leaves } from './types';

export interface IColorHues {
  50: string;
  70: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

const colors = {
  contrastThreshold: '4',
  // Main Colors
  white: '#FFFFFF',
  black: '#000000',
  observatory: {
    50: '#f3f9f7',
    70: '#E4F4F1',
    100: '#cde7e1',
    200: '#9acfc2',
    300: '#68b7a4',
    400: '#359f85',
    500: '#038767',
    600: '#026c52',
    700: '#02513e',
    800: '#01372A',
    900: '#01281F',
  },
  dark: {
    50: '#f6f6f6',
    70: '#E0E0E0',
    100: '#d2d2d2',
    200: '#a5a5a5',
    300: '#777777',
    400: '#4a4a4a',
    500: '#1d1d1d',
    600: '#171717',
    700: '#111111',
    800: '#0E0E0E',
    900: '#0D0D0D',
  },
  gray: {
    50: '#FAFAFA',
    70: '#F5F5F5',
    100: '#EFEFEF',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  // Other Colors
  red: {
    50: '#FFF1F2',
    70: '#FFEDEE',
    100: '#FFE4E6',
    200: '#FECDD3',
    300: '#FDA4AF',
    400: '#FB7185',
    500: '#F43F5E',
    600: '#E11D48',
    700: '#BE123C',
    800: '#9F1239',
    900: '#881337',
  },
  yellow: {
    50: '#FFFBEB',
    70: '#FFF7D8',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },
  blue: {
    50: '#EFF6FF',
    70: '#E6F1FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
  },
  aqua: {
    50: '#ECFDF5',
    70: '#DFFCED',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',
  },
  lightBlue: {
    50: '#F0F9FF',
    70: '#EAF6FF',
    100: '#E0F2FE',
    200: '#BAE6FD',
    300: '#7DD3FC',
    400: '#38BDF8',
    500: '#0EA5E9',
    600: '#0284C7',
    700: '#0369A1',
    800: '#075985',
    900: '#0C4A6E',
  },
  teal: {
    50: '#F0FDFA',
    70: '#E1FAF5',
    100: '#D3F7F0',
    200: '#99F6E4',
    300: '#5EEAD4',
    400: '#2DD4BF',
    500: '#14B8A6',
    600: '#0D9488',
    700: '#0F766E',
    800: '#115E59',
    900: '#134E4A',
  },
  lime: {
    50: '#F7FEE7',
    70: '#F2FDDB',
    100: '#CDE7E1',
    200: '#ECFCCB',
    300: '#BEF264',
    400: '#A3E635',
    500: '#84CC16',
    600: '#65A30D',
    700: '#4D7C0F',
    800: '#3F6212',
    900: '#365314',
  },
  purple: {
    50: '#FAF5FF',
    70: '#F7EFFF',
    100: '#F3E8FF',
    200: '#E9D5FF',
    300: '#D8B4FE',
    400: '#C084FC',
    500: '#A855F7',
    600: '#9333EA',
    700: '#7E22CE',
    800: '#6B21A8',
    900: '#581C87',
  },
  pink: {
    50: '#FDF2F8',
    70: '#FDEFF7',
    100: '#FCE7F3',
    200: '#FBCFE8',
    300: '#F9A8D4',
    400: '#F472B6',
    500: '#EC4899',
    600: '#DB2777',
    700: '#BE185D',
    800: '#9D174D',
    900: '#831843',
  },
  orange: {
    50: '#FFF9F5',
    70: '#FEF0E5',
    100: '#FDE9D9',
    200: '#FBD4B3',
    300: '#F8BE8E',
    400: '#F49342',
    500: '#C05717',
    600: '#9E430B',
    700: '#763208',
    800: '#542103',
    900: '#331102',
  },
  green: {
    50: '#F3F9F2',
    70: '#DFEFDC',
    100: '#d1e7cc',
    200: '#a4d099',
    300: '#76b866',
    400: '#49a133',
    500: '#1B8900',
    600: '#166e00',
    700: '#105200',
    800: '#043900',
    900: '#002200',
  },

  // Supportive Colors
  primary: {} as IColorHues,
  critical: {} as IColorHues,
  caution: {} as IColorHues,
  info: {} as IColorHues,
  success: {} as IColorHues,

  // Text Colors
  text: {
    primary: '' as string,
    secondary: '' as string,
    tertiary: '' as string,
    brand: '' as string,
    brandDarker: '' as string,
    critical: '' as string,
    criticalDarker: '' as string,
    caution: '' as string,
    cautionDarker: '' as string,
    white: '' as string,
  },

  // Icon Colors
  icon: {
    primary: '' as string,
    secondary: '' as string,
    brand: '' as string,
    critical: '' as string,
    caution: '' as string,
    white: '' as string,
  },

  // Background Colors
  bg: {
    white: '' as string,
    light: '' as string,
    disabled: '' as string,
    brandLighter: '' as string,
    brand: '' as string,
    brandDarker: '' as string,
    critical: '' as string,
    criticalDarker: '' as string,
    caution: '' as string,
    cautionDarker: '' as string,
  },

  // Surface Colors
  surface: {
    gray: '' as string,
    grayDarker: '' as string,
    brand: '' as string,
    brandDarker: '' as string,
    critical: '' as string,
    criticalDarker: '' as string,
    caution: '' as string,
    cautionDarker: '' as string,
  },

  // Border Colors
  border: {
    regular: '' as string,
    light: '' as string,
    brandLight: '' as string,
    brandLighter: '' as string,
    brand: '' as string,
    critical: '' as string,
    criticalLighter: '' as string,
    caution: '' as string,
    cautionDarker: '' as string,
  },
};

colors.primary = colors.observatory;
colors.critical = colors.red;
colors.caution = colors.yellow;
colors.info = colors.blue;
colors.success = colors.aqua;

colors.text = {
  primary: colors.gray[800],
  secondary: colors.gray[500],
  tertiary: colors.gray[400],
  brand: colors.primary[400],
  brandDarker: colors.primary[600],
  critical: colors.red[600],
  criticalDarker: colors.red[700],
  caution: colors.yellow[600],
  cautionDarker: colors.yellow[700],
  white: colors.gray[50],
};

colors.icon = {
  primary: colors.gray[500],
  secondary: colors.gray[400],
  brand: colors.primary[500],
  critical: colors.red[600],
  caution: colors.yellow[600],
  white: colors.gray[50],
};

colors.bg = {
  white: colors.white,
  light: colors.gray[50],
  disabled: colors.gray[200],
  brandLighter: colors.primary[400],
  brand: colors.primary[500],
  brandDarker: colors.primary[600],
  critical: colors.red[600],
  criticalDarker: colors.red[700],
  caution: colors.yellow[600],
  cautionDarker: colors.yellow[700],
};

colors.surface = {
  gray: colors.gray[50],
  grayDarker: colors.gray[70],
  brand: colors.primary[50],
  brandDarker: colors.primary[70],
  critical: colors.red[50],
  criticalDarker: colors.red[100],
  caution: colors.yellow[50],
  cautionDarker: colors.yellow[100],
};

colors.border = {
  regular: colors.gray[200],
  light: colors.gray[100],
  brandLight: colors.primary[200],
  brandLighter: colors.primary[100],
  brand: colors.primary[500],
  critical: colors.red[600],
  criticalLighter: colors.red[200],
  caution: colors.yellow[600],
  cautionDarker: colors.yellow[200],
};

export default colors;

export type IColors = Leaves<typeof colors>;
