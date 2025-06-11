import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: 'background.paper',
  borderRadius: theme.spacing(2),
  height: '100%',
}));

const About = () => {
  const personalInfo = [
    { label: 'Name', value: 'Sharanu N Dibbadamani' },
    { label: 'DOB', value: '5th Aug 2001' },
    { label: 'Location', value: 'Bangalore, Karnataka, India' },
    { label: 'Email', value: 'sharanudibbadamani2001@gmail.com' },
    { label: 'Profession', value: 'Embedded Firmware Engineer' },
  ];

  return (
    <Box id="about" sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
        About
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <StyledPaper>
            <Typography variant="h6" gutterBottom color="primary">
              Personal Information
            </Typography>
            <Grid container spacing={2}>
              {personalInfo.map((info) => (
                <Grid item xs={12} sm={6} key={info.label}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 'bold' }}>
                      {info.label}:
                    </Typography>
                    <Typography variant="body1">
                      {info.value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </StyledPaper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About; 