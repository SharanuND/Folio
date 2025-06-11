import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Experience = () => {
  const experiences = [
    {
      company: 'Thingularity Consulting PVT LTD',
      period: 'May 2024 - Present',
      role: 'Embedded Firmware Engineer',
      type: 'Full time'
    },
    {
      company: 'iTriangle Infotech PVT LTD',
      period: 'Aug 2022 - April 2024',
      role: 'Embedded Firmware Engineer',
      type: 'Full time'
    },
    {
      company: 'Revature',
      period: 'Jan 2022 - July 2022',
      role: 'Full stack web-developer',
      type: 'Internship'
    },
    {
      company: 'Exposys Data Labs',
      period: 'July 2021 - Sept 2021',
      role: 'Web-developer',
      type: 'Internship'
    }
  ];

  return (
    <Box id="experience" sx={{ mb: 4 }}>
      <Typography variant="h1" component="h1">
        Experience
      </Typography>
      <Paper sx={{ p: 2 }}>
        {experiences.map((exp, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="h3" component="h3">
              {exp.company}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {exp.period}
            </Typography>
            <Typography variant="body1">
              <em>{exp.role}</em> - {exp.type}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default Experience; 