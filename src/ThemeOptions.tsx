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

  breakpoints: {
    // Add your custom breakpoints here
    values: {
      xs: 0,       // Mobile phones
      sm: 600,     // Tablets
      md: 960,     // Small laptops
      lg: 1280,    // Medium laptops
      xl: 1920,    // Large laptops and desktops
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

    h4: {
      fontSize: '2.0rem'
    },

    body1: {
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '0.7rem',   // Extra-small devices (phones)
        
      },
      '@media (min-width:960px)' : {
        fontSize: '1rem',   // Medium devices (desktops)
      },
      '@media (min-width:1280px)' : {
        fontSize: '1rem',   // Large devices (large desktops)

      }
      

    },

    body2: {
      fontFamily: 'Jura',
      fontSize: '1.375rem',
    },

    h5: {
      fontSize: '0.25rem',
      fontWeight:10

    },


    
  },
};