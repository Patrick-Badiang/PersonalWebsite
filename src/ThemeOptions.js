export const getLightTheme = () => ({
  palette: {
    mode: 'light',
    primary: {
      main: '#C2D685',
      light: '#D4E5A3',
      dark: '#A8C05E',
      contrastText: '#2C3E1F',
    },
    secondary: {
      main: '#8B9DC3',
      light: '#A8B8D9',
      dark: '#6B7FA3',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    divider: '#E0E0E0',
    error: {
      main: '#D32F2F',
    },
    success: {
      main: '#A8C05E',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'Inria Serif',
    h1: {
      fontFamily: 'Jura',
      fontWeight: 400,
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '4.0rem',
      },
    },
    h2: {
      fontFamily: 'Itim',
      fontWeight: 10,
      fontSize: '1.0rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '2.0rem',
      },
    },
    h3: {
      fontFamily: 'Italiana',
      fontWeight: 100,
      fontSize: '1.25rem',
      '@media (min-width:600px)': {
        fontSize: '1.25rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '5.0rem',
      },
    },
    h4: {
      fontSize: '2.0rem',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 10,
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '2rem',
      },
    },
    body1: {
      fontSize: '0.7rem',
      '@media (min-width:600px)': {
        fontSize: '0.7rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: '0.4rem',
      '@media (min-width:600px)': {
        fontSize: '0.4rem',
      },
      '@media (min-width:960px)': {
        fontSize: '0.8rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '1rem',
      },
    },
  },
});

export const getDarkTheme = () => ({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C2D685',
      light: '#D4E5A3',
      dark: '#A8C05E',
      contrastText: '#2C3E1F',
    },
    secondary: {
      main: '#8B9DC3',
      light: '#A8B8D9',
      dark: '#6B7FA3',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
    divider: '#424242',
    error: {
      main: '#EF5350',
    },
    success: {
      main: '#A8C05E',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'Inria Serif',
    h1: {
      fontFamily: 'Jura',
      fontWeight: 400,
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '4.0rem',
      },
    },
    h2: {
      fontFamily: 'Itim',
      fontWeight: 10,
      fontSize: '1.0rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '2.0rem',
      },
    },
    h3: {
      fontFamily: 'Italiana',
      fontWeight: 100,
      fontSize: '1.25rem',
      '@media (min-width:600px)': {
        fontSize: '1.25rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '5.0rem',
      },
    },
    h4: {
      fontSize: '2.0rem',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 10,
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '2rem',
      },
    },
    body1: {
      fontSize: '0.7rem',
      '@media (min-width:600px)': {
        fontSize: '0.7rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: '0.4rem',
      '@media (min-width:600px)': {
        fontSize: '0.4rem',
      },
      '@media (min-width:960px)': {
        fontSize: '0.8rem',
      },
      '@media (min-width:1280px)': {
        fontSize: '1rem',
      },
    },
  },
});

export const themeOptions = getLightTheme();
