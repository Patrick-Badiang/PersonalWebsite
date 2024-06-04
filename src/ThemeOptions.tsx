import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#FFD3AB',
    },
    secondary: {
      main: '#9ACCD3',
    },
    divider: '#FFBF46',
    background: {
      paper: '#FAF0ED',
      default: '#FFFBFA',
    },
    error: {
      main: '#cb6a6a',
    },
  },
  typography: {
    fontFamily: 'Inria Serif',
    h1: {
      fontFamily: 'Jura',
      fontWeight: 400,
      fontSize: '4.0rem',
    },

    h2: {
      fontFamily: 'Itim',
      fontWeight: 10,
      fontSize: '2.0 rem',
    },

    h3: {
      fontFamily: 'Italiana',
      fontWeight: 100,
      fontSize: '5.0rem',
    },

    body1: {
      fontWeight: 10,
      fontSize: '1.375rem',
    },

    body2: {
      fontFamily: 'Jura',
      fontSize: '1.375rem',
    }


    
  },
};