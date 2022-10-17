import { getStyleAndFilteredProps, propConfig } from '../theme/styled-system';
import React from 'react';
import { useTheme } from './useTheme';

const getStyledSystemPropsAndRestProps = (props: any) => {
  const styledSystemProps: any = {};
  const restProps: any = {};

  for (let key in props) {
    if (key in propConfig) {
      styledSystemProps[key] = props[key];
    } else {
      restProps[key] = props[key];
    }
  }

  return { styledSystemProps, restProps };
};

export const useStyledSystemPropsResolver = ({
  style: propStyle,
  ...props
}: any) => {
  const theme = useTheme();

  const { styledSystemProps, restProps } =
    getStyledSystemPropsAndRestProps(props);

  const { style, dataSet } = React.useMemo(() => {
    // eslint-disable-next-line no-shadow
    const { styleSheet, dataSet } = getStyleAndFilteredProps({
      styledSystemProps,
      theme,
    });
    if (propStyle) {
      return { style: [styleSheet.box, propStyle], dataSet };
    } else {
      return { style: styleSheet.box, dataSet };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, propStyle, props]);

  restProps.dataSet = { ...restProps.dataSet, ...dataSet };

  return [style, restProps];
};
