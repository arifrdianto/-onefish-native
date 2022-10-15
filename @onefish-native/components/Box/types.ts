import type { ViewProps } from 'react-native';
import { StyledProps } from '../../theme/types';
import type { ResponsiveValue, ColorType, CustomProps } from '../types';
import type { ITextProps } from '../Text/types';

export interface InterfaceBoxProps
  extends ViewProps,
    Omit<StyledProps, 'bgColor' | 'background' | 'bg' | 'backgroundColor'> {
  /**
   * Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element. */
  children?: JSX.Element | JSX.Element[] | string | any;
  /**
   * For providing props to Text inside Box
   */
  _text?: Partial<ITextProps>;
  bg?: ResponsiveValue<ColorType | (string & {})>;
  background?: ResponsiveValue<ColorType | (string & {})>;
  bgColor?: ResponsiveValue<ColorType | (string & {})>;
  backgroundColor?: ResponsiveValue<ColorType | (string & {})>;
}

export type IBoxProps = InterfaceBoxProps & CustomProps<'Box'>;
