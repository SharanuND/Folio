import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const Education = () => {
  const educationData = [
    {
      school: 'SDM College of Engineering and Technology, Dharwad',
      period: '2018 - 2022',
      degree: 'B.E. in Electrical and Electronics Engineering',
      image: 'assets/img/education/SDM.jpg'
    },
    {
      school: 'Aryabhata PU Science College, Dharwad',
      period: '2016 - 2018',
      degree: 'Pre-University Course in Science',
      image: 'assets/img/education/ACS.jpg'
    },
    {
      school: 'Kendriya Vidyalaya Sangathan, Dharwad',
      period: '2006 - 2016',
      degree: 'School',
      image: 'assets/img/education/kvs.jpg'
    }
  ];

  return (
    <Box id="education" sx={{ py: 4 }}>
      <Typography variant="h2" component="h2" gutterBottom>
        Education
      </Typography>
      <Grid container spacing={3}>
        {educationData.map((edu, index) => (
          <Grid item xs={12} key={index}>
            <Paper elevation={0} sx={{ p: 3, border: '1px solid #a2a9b1' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  component="img"
                  src={edu.image}
                  alt={edu.school}
                  sx={{
                    width: 80,
                    height: 80,
                    objectFit: 'cover',
                    border: '1px solid #a2a9b1'
                  }}
                />
                <Box>
                  <Typography variant="h3" color="primary" gutterBottom>
                    {edu.school}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {edu.period}
                  </Typography>
                  <Typography variant="body1">
                    {edu.degree}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Education; 