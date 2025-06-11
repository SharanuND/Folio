import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Education = () => {
  const educationData = [
    {
      school: 'SDM College of Engineering and Technology, Dharwad',
      period: '2018 - 2022',
      degree: 'B.E. in Electrical and Electronics Engineering'
    },
    {
      school: 'Aryabhata PU Science College, Dharwad',
      period: '2016 - 2018',
      degree: 'Pre-University Course in Science'
    },
    {
      school: 'Kendriya Vidyalaya Sangathan, Dharwad',
      period: '2006 - 2016',
      degree: 'School'
    }
  ];

  return (
    <Box id="education" sx={{ mb: 4 }}>
      <Typography variant="h1" component="h1">
        Education
      </Typography>
      <Paper sx={{ p: 2 }}>
        {educationData.map((edu, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="h3" component="h3">
              {edu.school}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {edu.period}
            </Typography>
            <Typography variant="body1">
              {edu.degree}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default Education; 