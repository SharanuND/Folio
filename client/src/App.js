import React from 'react';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import theme from './theme';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
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
              Sharanu N Dibbadamani
            </Typography>
            <Button color="inherit" href="#about">About</Button>
            <Button color="inherit" href="#education">Education</Button>
            <Button color="inherit" href="#experience">Experience</Button>
            <Button color="inherit" href="#skills">Skills</Button>
            <Button color="inherit" href="#links">Links</Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 1 }}>
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
