import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { styled } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work';

const StyledTimelineItem = styled(TimelineItem)(({ theme }) => ({
  '&:before': {
    flex: 0,
    padding: 0,
  },
}));

const Experience = () => {
  const experienceData = [
    {
      company: 'Thingularity Consulting PVT LTD',
      period: 'May 2024 - Present',
      position: 'Embedded Firmware Engineer',
      type: 'Full time'
    },
    {
      company: 'iTriangle Infotech PVT LTD',
      period: 'Aug 2022 - April 2024',
      position: 'Embedded Firmware Engineer',
      type: 'Full time'
    },
    {
      company: 'Revature',
      period: 'Jan 2022 - July 2022',
      position: 'Full stack web-developer',
      type: 'Internship'
    },
    {
      company: 'Exposys Data Labs',
      period: 'July 2021 - Sept 2021',
      position: 'Web-developer',
      type: 'Internship'
    }
  ];

  return (
    <Box id="experience" sx={{ py: 4 }}>
      <Typography variant="h2" component="h2" gutterBottom>
        Experience
      </Typography>
      <Timeline position="alternate">
        {experienceData.map((exp, index) => (
          <StyledTimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <WorkIcon />
              </TimelineDot>
              {index < experienceData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={0} sx={{ p: 2, border: '1px solid #a2a9b1' }}>
                <Typography variant="h3" color="primary" gutterBottom>
                  {exp.company}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {exp.period}
                </Typography>
                <Typography variant="body1">
                  {exp.position} - {exp.type}
                </Typography>
              </Paper>
            </TimelineContent>
          </StyledTimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Experience; 