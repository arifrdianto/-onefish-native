function baseStyle(props: Record<string, any>) {
  const { orientation, thickness } = props;
  const orientationProps =
    orientation === 'vertical'
      ? {
          width: `${thickness}`,
          height: '100%',
        }
      : {
          width: '100%',
          height: `${thickness}`,
        };

  return {
    bg: 'border.regular',
    ...orientationProps,
  };
}

export default {
  baseStyle,
  defaultProps: {
    orientation: 'horizontal',
    thickness: '0.5',
  },
};
