import React, { PropsWithChildren } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { commonColors, darkColors, lightColors } from '../colors';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/types/Store';

const CustomThemeProviders = (props: PropsWithChildren<{}>) => {
  const darkMode = useAppSelector((state: RootState) => state.darkMode);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: commonColors.primary,
      },
    },
    background: darkMode ? darkColors.background : lightColors.background,
    font: darkMode ? darkColors.font : lightColors.font,
    commonColors,
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

declare module '@mui/material/styles' {
  interface Theme {
    background: string;
    font: string;
    commonColors: { [key: string]: string };
  }

  interface ThemeOptions {
    background: string;
    font: string;
    commonColors: { [key: string]: string };
  }
}

export default CustomThemeProviders;
