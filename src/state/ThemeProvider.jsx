import React from 'react';
import { ThemeProvider } from 'styled-components';

export const themes = {
  light: {
    bg_color: '#fafafa',
    main_color: '#212b43',
    caret_color: '#212b43',
    sub_color: '#62cfe6',
    text_color: '#212b43',
    error_color: '#f19dac',
    error_extra_color: '#e58c9d',
    colorful_error_color: '#f19dac',
    colorful_error_extra_color: '#e58c9d',
  },
  dark: {
    bg_color: '#212b43',
    main_color: '#fafafa',
    caret_color: '#fafafa',
    sub_color: '#212b43',
    text_color: '#fafafa',
    error_color: '#f19dac',
    error_extra_color: '#e58c9d',
    colorful_error_color: '#f19dac',
    colorful_error_extra_color: '#e58c9d',
  },
};

function Theme({ children, theme }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
