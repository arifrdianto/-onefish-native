import type { ITextProps } from '../Text/types';
import type { IStackProps } from '../Stack';
import {
  ColorSchemeType,
  VariantType,
  ThemeComponentSizeType,
  CustomProps,
} from '../types';
import { PressableProps } from 'react-native';
import { IIconProps } from '../Icon';
import { ISpinnerProps } from '../Spinner';

export interface InterfaceChipProps extends PressableProps {
  /**
   * The color of the radio when it's checked. This should be one of the color keys in the theme (e.g."green", "red").
   * @default 'primary'
   */
  colorScheme?: ColorSchemeType;
  /**
   * The variant of the Chip style to use.
   * @default 'solid'
   */
  variant?: VariantType<'Chip'>;
  /**
   * If true, the Chip will show a spinner.
   */
  isLoading?: boolean;
  /**
   * If true, the Chip will be in pressed state.
   */
  isPressed?: boolean;
  /**
   * If true, the Chip will be focused.
   */
  isFocused?: boolean;
  /**
   * The size of the Chip.
   */
  size?: ThemeComponentSizeType<'Chip'>;
  // size?: SizeType;
  /**
   * The start icon element to use in the Chip.
   */
  startIcon?: JSX.Element | Array<JSX.Element>;
  /**
   * The end icon element to use in the Chip.
   */
  endIcon?: JSX.Element | Array<JSX.Element>;
  /**
   * The end icon element to use in the Chip.
   */
  isLoadingText?: string;
  /**
   * The spinner element to use when isLoading is set to true.
   */
  spinner?: JSX.Element;
  /**
   * If true, the Chip will be disabled.
   */
  isDisabled?: boolean;
  /**
   * Props to style the child text
   */
  _text?: Partial<ITextProps>;
  /**
   * Props to be passed to the HStack used inside of Chip.
   */
  _stack?: Partial<IStackProps>;
  /**
   * Props to be passed to the Icon used inside of Chip.
   */
  _icon?: Partial<IIconProps>;
  /**
   * Prop to decide placement of spinner.
   */
  spinnerPlacement?: 'start' | 'end';
  /**
   * Props to be passed to the Chip when isLoading is true.
   */
  _loading?: Partial<IChipProps>;
  /**
   * Props to be passed to the Chip when Chip is disabled.
   */
  _disabled?: Partial<IChipProps>;
  /**
   * Props to be passed to the spinner when isLoading is true.
   */
  _spinner?: Partial<ISpinnerProps>;
  /**
   * Props to be passed to the Chip when Chip is pressed.
   */
  _pressed?: Partial<IChipProps>;
  /**
   * Props to be passed to the Chip when Chip is focused.
   */
  _focus?: Partial<IChipProps>;
  /**
   * The right icon element to use in the Chip.
   */
  rightIcon?: JSX.Element | Array<JSX.Element>;
  /**
   * The left icon element to use in the Chip.
   */
  leftIcon?: JSX.Element | Array<JSX.Element>;
}

export type IChipProps = InterfaceChipProps & CustomProps<'Chip'>;
