import { InterfaceChipProps } from '../../components/Chip/types';

const baseStyle = () => {
  return {
    borderRadius: 'full',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    _text: {
      fontWeight: 'medium',
    },
    _stack: {
      space: 1.5,
      alignItems: 'center',
    },
    _loading: {
      opacity: '70',
    },
    _disabled: {
      opacity: '30',
    },
    _spinner: {
      size: 'sm',
      focusable: false,
    },
  };
};

function variantOutline({ colorScheme }: InterfaceChipProps) {
  return {
    borderWidth: '1',
    borderColor: 'border.regular',
    _text: {
      color: 'text.secondary',
    },
    _icon: {
      color: 'icon.primary',
    },
    _spinner: {
      color: 'icon.primary',
    },
    _pressed: {
      bg: `${colorScheme}.70`,
      borderColor: `${colorScheme}.200`,
      _text: { color: `${colorScheme}.500` },
      _icon: { color: `${colorScheme}.500` },
      _spinner: {
        color: `${colorScheme}.500`,
      },
    },
  };
}

const variants = {
  outline: variantOutline as any,
};

const sizes = {
  lg: {
    px: 2.5,
    py: 1.5,
    _text: {
      fontSize: 'md',
    },
    _icon: {
      size: 'md',
    },
  },
  md: {
    px: 2.5,
    py: 1.5,
    _text: {
      fontSize: 'sm',
    },
    _icon: {
      size: 'sm',
    },
  },
};

const defaultProps = {
  variant: 'outline',
  size: 'md',
  colorScheme: 'primary',
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
