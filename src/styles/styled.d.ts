import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    color: {
      darkGrey: string,
      middleGrey: string,
      lightGrey: string
    };
  }

  interface ThemeOptions {
    color?: {
      darkGrey?: string,
      middleGrey?: string,
      lightGrey?: string
    };
  }
}

export default function createTheme(options?: ThemeOptions, ...args: object[]): Theme;