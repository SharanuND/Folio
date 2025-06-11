import React from 'react';
import { Box, Typography, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: 'background.paper',
  height: '100%',
}));

const Skills = () => {
  const skillsData = {
    'Firmware development': [
      'Programming languages: Embedded C',
      'Competitive coding: C + DSA',
      'Embedded platforms: ESP32, STM32, N58',
      'Embedded protocols: UART, USB, SPI, I2C, CAN, Wi-Fi, HTTP, BLE, ADC, GPIO',
      'Development tools: VS code, Jira, Git, Bugzilla, TestLink',
      'Firmware development: RTOS, Bare-metal, Device drivers',
      'Debugging tools: JTAG, GDB, Logic analyzer, Oscilloscope',
      'Version control: Git, GitLab, GitHub, Bitbucket, SourceTree',
      'AI tools: chatGPT, Gemini, grok, Copilot, Cursor, Deepseek',
      'Testing skills: Debugging, Manual testing + Automation testing',
      'Other skills: Agile methodologies, Cross-platform development, Hardware/software integration, Technical documentation'
    ]
  };

  return (
    <Box id="skills" sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
        Skills
      </Typography>
      <Grid container spacing={3}>
        {Object.entries(skillsData).map(([category, skills]) => (
          <Grid item xs={12} key={category}>
            <StyledPaper>
              <Typography variant="h5" color="primary" gutterBottom>
                {category}
              </Typography>
              <List>
                {skills.map((skill, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemText
                      primary={skill}
                      primaryTypographyProps={{
                        variant: 'body1',
                        sx: { color: 'text.primary' }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </StyledPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills; 