import { InterfaceInputProps } from '../../components/Input/types';

const baseStyle = () => {
  return {
    fontFamily: 'body',
    py: '2',
    px: '3',
    borderRadius: 'lg',
    overflow: 'hidden',
    _disabled: {
      bg: 'bg.disabled',
    },
    _invalid: {
      borderColor: 'border.critical',
    },
    _input: {
      bg: 'transparent',
      flex: 1,
      w: '100%',
      h: '100%',
    },
    placeholderTextColor: 'text.tertiary',
    color: 'text.primary',
    borderColor: 'border.regular',
    _stack: {
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
    },
    _focus: {
      borderColor: 'border.brand',
      _invalid: {
        borderColor: 'border.critical',
        bg: 'surface.critical',
        _stack: {
          style: {
            outlineWidth: '0',
          },
        },
      },
      _ios: {
        selectionColor: 'gray.800',
      },
      _android: {
        selectionColor: 'gray.800',
      },
      _disabled: {
        placeholderTextColor: 'gray.700',
      },
      _stack: {
        style: {
          outlineWidth: '0',
        },
      },
    },
  };
};

function roundedStyle() {
  return {
    borderRadius: 'full',
    borderWidth: '1',
    _focus: {
      bg: 'surface.brand', //transparentize('primary.500', 0.1)(theme),
    },
  };
}

function outlineStyle(_props: InterfaceInputProps & { theme: any }) {
  return {
    borderWidth: '1',
    _focus: {
      bg: 'surface.brand', //transparentize('primary.500', 0.1)(theme),
    },
  };
}

function underlinedStyle() {
  return {
    borderWidth: '0',
    pl: '0',
    borderBottomWidth: '1',
    _invalid: {
      borderBottomColor: 'border.critical',
    },

    borderRadius: 0,
  };
}

const variants = {
  outline: outlineStyle as any,
  underlined: underlinedStyle as any,
  rounded: roundedStyle as any,
};

const sizes = {
  '2xl': { fontSize: 'xl' },
  'xl': { fontSize: 'lg' },
  'lg': { fontSize: 'md' },
  'md': { fontSize: 'sm' },
  'sm': { fontSize: 'xs' },
  'xs': { fontSize: '2xs' },
};

const defaultProps = {
  size: 'md',
  variant: 'outline',
};

// Input
export const Input = {
  baseStyle,
  defaultProps,
  variants,
  sizes,
};

export default {};
