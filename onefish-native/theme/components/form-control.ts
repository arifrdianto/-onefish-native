// FormControl
export const FormControl = {
  baseStyle: {
    width: '100%',
  },
};

// FormControlErrorMessage
export const FormControlErrorMessage = {
  baseStyle: () => {
    return {
      mt: '2',
      _text: {
        fontSize: 'sm',
        color: 'text.critical',
      },
      _stack: { space: 1, alignItems: 'center' },
    };
  },
};

// FormControlLabel
export const FormControlLabel = {
  baseStyle: () => {
    return {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      _text: {
        fontSize: 'md',
        fontWeight: 'medium',
        color: 'text.primary',
      },
      my: '1',
      _astrick: {
        color: 'text.critical',
      },
      _stack: { space: 1, alignItems: 'center' },
      _icon: { color: 'icon.primary' },
    };
  },
};

// FormControlHelperText
export const FormControlHelperText = {
  baseStyle: () => {
    return {
      mt: '2',
      _text: {
        fontSize: 'sm',
        color: 'text.secondary',
      },
      _stack: { space: 1, alignItems: 'center' },
    };
  },
};
