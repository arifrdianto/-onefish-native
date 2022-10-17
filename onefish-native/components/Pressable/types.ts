import type { PressableProps } from 'react-native';
import type { StyledProps } from '../../theme/types';
import type { CustomProps } from '../types';
export interface InterfacePressableProps<T = IPressableProps>
  extends PressableProps,
    StyledProps {
  /**
   * Called when Pressable receives focus
   */
  onFocus?: () => void;
  /**
   * Style props to be applied when pressed
   */
  _pressed?: Omit<Partial<T>, '_pressed'>;
  /**
   * Style props to be applied when focus
   */
  _focus?: Omit<Partial<T>, '_focus'>;

  /**
   * Style props to be applied when disabled
   */
  _disabled?: Omit<Partial<T>, '_disabled'>;

  /**
   * 	If true, the p will be disabled.
   */
  isDisabled?: boolean;
  /**
   * 	If true, the p will be pressed.
   */
  isPressed?: boolean;
  /**
   * 	If true, the p will be focused.
   */
  isFocused?: boolean;

  children?:
    | React.ReactNode
    | (({
        isPressed,
        isFocused,
      }: {
        isPressed: boolean;
        isFocused: boolean;
      }) => any);
}

// export type IPressableProps<T> =
//   | InterfacePressableProps<T>
//   & CustomProps<'Pressable'>;

export type IPressableProps = InterfacePressableProps<IPressableProps> &
  CustomProps<'Pressable'>;
