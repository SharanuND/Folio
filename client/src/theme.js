import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3366cc', // Wikipedia blue
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#202122', // Wikipedia text color
      secondary: '#54595d', // Wikipedia secondary text
    },
  },
  typography: {
    fontFamily: '"Linux Libertine", "Georgia", "Times", serif',
    h1: {
      fontSize: '1.8em',
      fontWeight: 'normal',
      borderBottom: '1px solid #a2a9b1',
      paddingBottom: '0.25em',
      marginBottom: '0.5em',
    },
    h2: {
      fontSize: '1.5em',
      fontWeight: 'normal',
      borderBottom: '1px solid #a2a9b1',
      paddingBottom: '0.25em',
      marginBottom: '0.5em',
    },
    h3: {
      fontSize: '1.2em',
      fontWeight: 'normal',
    },
    body1: {
      fontSize: '1em',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
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
          color: '#202122',
          boxShadow: 'none',
          borderBottom: '1px solid #a2a9b1',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '3px',
        },
      },
    },
  },
});

export default theme; 