import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#54595d',
    },
  },
  typography: {
    fontFamily: '"Linux Libertine", "Georgia", "Times", serif',
    h1: {
      fontSize: '1.8em',
      fontWeight: 'normal',
      borderBottom: '1px solid #a2a9b1',
      paddingBottom: '0.25em',
      marginBottom: '0.25em',
    },
    h2: {
      fontSize: '1.5em',
      fontWeight: 'normal',
      borderBottom: '1px solid #a2a9b1',
      paddingBottom: '0.25em',
      marginBottom: '0.25em',
    },
    h3: {
      fontSize: '1.2em',
      fontWeight: 'bold',
    },
    h4: {
      fontSize: '1em',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '0.875em',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '960px',
          padding: '1em',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid #a2a9b1',
          borderRadius: '3px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#f8f9fa',
          color: '#000000',
          boxShadow: 'none',
          borderBottom: '1px solid #a2a9b1',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          backgroundColor: '#f8f9fa',
          border: '1px solid #a2a9b1',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#eaecf0',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#0645ad',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});

export default theme; 