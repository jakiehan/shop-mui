import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#e97f03',
    }
  },

  breakpoints: {
    values: {
      xs: 356,
      sm: 562,
      md: 855,
      lg: 1448,
      xl: 1536,
    },
  },

  color: {
    darkGrey: '#323232',
    middleGrey: '#0000008a',
    lightGrey: '#f2f2f2',
  },
});

export default theme;