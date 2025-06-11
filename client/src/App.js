import React from 'react';
import { ThemeProvider, CssBaseline, Container, Box, AppBar, Toolbar, Typography, Link } from '@mui/material';
import theme from './theme';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Links from './components/Links';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/" color="inherit" underline="none">
                Sharanu N Dibbadamani
              </Link>
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="#about" color="inherit" underline="none">About</Link>
              <Link href="#education" color="inherit" underline="none">Education</Link>
              <Link href="#experience" color="inherit" underline="none">Experience</Link>
              <Link href="#skills" color="inherit" underline="none">Skills</Link>
              <Link href="#links" color="inherit" underline="none">Links</Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Container>
          <Box sx={{ mt: 4 }}>
            <About />
            <Education />
            <Experience />
            <Skills />
            <Links />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
