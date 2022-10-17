import type { CustomProps, SpaceType } from '../../components/types';
import { InterfaceBoxProps } from '../Box';

export interface InterfaceDividerProps extends InterfaceBoxProps {
  /**
   * The orientation of the divider.
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * The thickness of the divider.
   */
  thickness?: SpaceType;
}

export type IDividerProps = InterfaceDividerProps & CustomProps<'Divider'>;
