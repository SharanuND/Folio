import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActionArea, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  backgroundColor: 'background.paper',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const Links = () => {
  const linksData = [
    {
      title: 'Resume',
      icon: <DescriptionIcon />,
      url: 'https://drive.google.com/drive/folders/1u71WAV9DbHIecxBWcnki4-p1LOdCIJ4p?usp=sharing',
      description: 'Download my resume here'
    },
    {
      title: 'Portfolio',
      icon: <LanguageIcon />,
      url: 'https://sharanund.github.io/Folio/',
      description: 'View my work portfolio'
    },
    {
      title: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/in/sharanu-dibbadamani/',
      description: 'Connect with me on LinkedIn'
    },
    {
      title: 'GitHub',
      icon: <GitHubIcon />,
      url: 'https://github.com/SharanuND',
      description: 'Check out my projects on GitHub'
    },
    {
      title: 'LeetCode',
      icon: <CodeIcon />,
      url: 'https://leetcode.com/u/Sharanu2001/',
      description: 'View my coding challenges'
    },
    {
      title: 'Twitter',
      icon: <TwitterIcon />,
      url: 'https://x.com/SDibbadamani',
      description: 'Follow me on Twitter'
    },
    {
      title: 'Instagram',
      icon: <InstagramIcon />,
      url: 'https://www.instagram.com/username.9991118/',
      description: 'Follow me on Instagram'
    },
    {
      title: 'Facebook',
      icon: <FacebookIcon />,
      url: 'https://www.facebook.com/sharanu.dibbadamani.7/',
      description: 'Connect with me on Facebook'
    },
    {
      title: 'Pinterest',
      icon: <PinterestIcon />,
      url: 'https://in.pinterest.com/SharanuNdibbadamani/',
      description: 'Follow me on Pinterest'
    },
    {
      title: 'YouTube',
      icon: <YouTubeIcon />,
      url: 'https://www.youtube.com/@sharanu.dibbadamani',
      description: 'Subscribe to my YouTube channel'
    }
  ];

  return (
    <Box id="links" sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
        Resume & Links
      </Typography>
      <Grid container spacing={3}>
        {linksData.map((link, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardActionArea
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ height: '100%' }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <IconButton
                    color="primary"
                    sx={{ fontSize: '2.5rem', mb: 1 }}
                  >
                    {link.icon}
                  </IconButton>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {link.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {link.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Links; 