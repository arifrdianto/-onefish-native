import { InterfaceButtonProps } from '../../components/Button/types';

const baseStyle = () => {
  return {
    borderRadius: 'lg',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    _text: {
      fontWeight: 'medium',
    },
    _stack: {
      space: '2',
      alignItems: 'center',
    },
    _loading: {
      opacity: '50',
    },
    _disabled: {
      opacity: '50',
    },
    _spinner: {
      size: 'sm',
      focusable: false,
    },
  };
};

function variantGhost({ colorScheme }: InterfaceButtonProps) {
  return {
    _text: {
      color: `${colorScheme}.500`,
    },
    _icon: {
      color: `${colorScheme}.500`,
    },
    _spinner: {
      color: `${colorScheme}.500`,
    },
    _pressed: {
      bg: `${colorScheme}.50`,
    },
  };
}

function variantOutline({ colorScheme }: InterfaceButtonProps) {
  return {
    borderWidth: '1px',
    borderColor: 'border.regular',
    _text: {
      color: `${colorScheme}.500`,
    },
    _icon: {
      color: `${colorScheme}.500`,
    },
    _spinner: {
      color: `${colorScheme}.500`,
    },
    _pressed: {
      bg: 'bg.light',
    },
  };
}

function variantSolid({ colorScheme }: InterfaceButtonProps) {
  return {
    _text: {
      color: 'text.white',
    },
    _icon: {
      color: 'icon.white',
    },
    _spinner: {
      color: 'text.white',
    },
    bg: `${colorScheme}.500`,
    _pressed: {
      bg: `${colorScheme}.600`,
    },
  };
}

function variantSubtle({ colorScheme }: InterfaceButtonProps) {
  return {
    bg: `${colorScheme}.50`,
    _text: {
      color: `${colorScheme}.500`,
    },
    _icon: {
      color: `${colorScheme}.500`,
    },
    _spinner: {
      color: `${colorScheme}.500`,
    },
    _pressed: {
      bg: `${colorScheme}.70`,
    },
  };
}

const variants = {
  ghost: variantGhost as any,
  outline: variantOutline as any,
  solid: variantSolid as any,
  subtle: variantSubtle as any,
};

const sizes = {
  lg: {
    px: '3',
    py: '4',
    _text: {
      fontSize: 'md',
    },
    _icon: {
      size: 'md',
    },
  },
  md: {
    px: '2',
    py: '3',
    _text: {
      fontSize: 'sm',
    },
    _icon: {
      size: 'sm',
    },
  },
};

const defaultProps = {
  variant: 'solid',
  size: 'md',
  colorScheme: 'primary',
};

export const ButtonGroup = {
  baseStyle: { direction: 'row' },
  defaultProps: { space: 2 },
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
