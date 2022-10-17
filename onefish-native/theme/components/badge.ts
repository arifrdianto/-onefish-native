import { getColorScheme } from '../tools';
import type { InterfaceBadgeProps } from '../../components/Badge/types';

const baseStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  space: 1,
  px: '2',
  py: '1',
  alignItems: 'center',
  borderRadius: '2xl',
  _text: { fontSize: 'xs', fontWeight: 'medium' },
};

function variantSolid(props: InterfaceBadgeProps & { colorScheme: any }) {
  const colorScheme = getColorScheme(props);
  return {
    _text: {
      color: 'text.white',
    },
    _icon: {
      color: 'icon.white',
    },
    bg: `${colorScheme}.500`,
    borderColor: 'transparent',
  };
}

function variantSubtle(props: InterfaceBadgeProps & { colorScheme: any }) {
  const colorScheme = getColorScheme(props);
  return {
    _text: { color: `${colorScheme}.600` },
    _icon: { color: `${colorScheme}.600` },
    bg: `${colorScheme}.70`,
    borderColor: 'transparent',
  };
}

function variantOutline(props: InterfaceBadgeProps & { colorScheme: any }) {
  const colorScheme = getColorScheme(props);
  return {
    _text: { color: `${colorScheme}.600` },
    _icon: { color: `${colorScheme}.600` },
    borderColor: `${colorScheme}.600`,
    borderWidth: '1',
  };
}

const variants = {
  solid: variantSolid as any,
  subtle: variantSubtle as any,
  outline: variantOutline as any,
};

const defaultProps = {
  variant: 'subtle',
  colorScheme: 'primary',
  // size: 'md',
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
