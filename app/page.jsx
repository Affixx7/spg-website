'use client';

import * as React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Chip, Avatar, Stack, Divider, Paper, List, ListItem, ListItemText } from '@mui/material';
import ImageCardGrid from './components/ImageCardGrid';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PublicIcon from '@mui/icons-material/Public';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';
import EastIcon from '@mui/icons-material/East';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SpeedIcon from '@mui/icons-material/Speed';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import DevicesIcon from '@mui/icons-material/Devices';
import AnimationIcon from '@mui/icons-material/Animation';
import Link from 'next/link';

const homeData = {
  "heroImages": [
    {
      "src": "/landing1.jpg",
      "alt": "SPG Conference",
      "title": "Society of Petroleum Geophysicists"
    },
    {
      "src": "/landing2.png",
      "alt": "Geophysics Research",
      "title": "Advancing Geoscience Excellence"
    },
    {
      "src": "/landing3.webp",
      "alt": "Collaboration",
      "title": "Fostering Global Collaboration"
    },
    {
      "src": "/landing4.jpg",
      "alt": "Innovation",
      "title": "Innovation in Petroleum Geophysics"
    }
  ],
  "welcomeMessage": "Welcome to the Society of Petroleum Geophysicists of North America",
  "description": "A professional organization dedicated to fostering collaboration between Indian and American geoscientists."
};

export default function Home() {

  const features = [
    {
      icon: <GroupsIcon sx={{ fontSize: 48 }} />,
      title: 'Professional Network',
      description: 'Connect with leading geoscientists across India and North America',
      link: '/about/members',
      color: '#123456',
      bgGradient: 'linear-gradient(135deg, #0b1e2e 0%, #123456 50%, #4a6b8a 100%)'
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 48 }} />,
      title: 'Annual Awards',
      description: 'Recognizing excellence in petroleum geophysics research and innovation',
      link: '/about/spgna-awards',
      color: '#123456',
      bgGradient: 'linear-gradient(135deg, #0b1e2e 0%, #123456 50%, #4a6b8a 100%)'
    },
    {
      icon: <MenuBookIcon sx={{ fontSize: 48 }} />,
      title: 'Resources & Publications',
      description: 'Access newsletters, research publications, and educational content',
      link: '/about/newsletters',
      color: '#123456',
      bgGradient: 'linear-gradient(135deg, #0b1e2e 0%, #123456 50%, #4a6b8a 100%)'
    },
    {
      icon: <PublicIcon sx={{ fontSize: 48 }} />,
      title: 'Global Societies',
      description: 'Explore affiliated societies and international collaboration opportunities',
      link: '/societies',
      color: '#123456',
      bgGradient: 'linear-gradient(135deg, #0b1e2e 0%, #123456 50%, #4a6b8a 100%)'
    }
  ];

  const spgFeatures = [
    {
      icon: <DesignServicesIcon sx={{ fontSize: 48, color: '#123456' }} />,
      title: 'Professional Development',
      description: 'Advancing geophysical knowledge through education and networking'
    },
    {
      icon: <CodeIcon sx={{ fontSize: 48, color: '#123456' }} />,
      title: 'Technical Excellence',
      description: 'Promoting best practices in geophysical exploration and research'
    },
    {
      icon: <AccessibilityNewIcon sx={{ fontSize: 48, color: '#123456' }} />,
      title: 'Community Engagement',
      description: 'Fostering collaboration among geophysicists and industry professionals'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 48, color: '#123456' }} />,
      title: 'Industry Innovation',
      description: 'Supporting technological advancement in geophysical sciences'
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 48, color: '#123456' }} />,
      title: 'Educational Resources',
      description: 'Providing learning opportunities for current and future geophysicists'
    },
    {
      icon: <AnimationIcon sx={{ fontSize: 48, color: '#123456' }} />,
      title: 'Research Support',
      description: 'Facilitating groundbreaking research in petroleum geophysics'
    }
  ];  const stats = [
    { value: '500+', label: 'Active Members', icon: <GroupsIcon />, color: '#123456' },
    { value: '15+', label: 'Years Strong', icon: <TrendingUpIcon />, color: '#123456' },
    { value: '50+', label: 'Publications', icon: <SchoolIcon />, color: '#123456' },
    { value: '100%', label: 'Professional', icon: <VerifiedIcon />, color: '#123456' }
  ];

  return (
    <Box sx={{ minHeight: '100vh', background: '#fafafa', overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        component="section"
        aria-label="Hero section"
        sx={{
          background: 'linear-gradient(135deg, #0b1e2e 0%, #123456 50%, #4a6b8a 100%)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 12, md: 16 },
          pb: { xs: 12, md: 20 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #123456 0%, #4a6b8a 100%)',
            animation: 'backgroundFloat 20s ease-in-out infinite',
          },
          '@keyframes backgroundFloat': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '33%': { transform: 'translateY(-10px) rotate(1deg)' },
            '66%': { transform: 'translateY(5px) rotate(-0.5deg)' }
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              
              
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontWeight: 900,
                  mb: 3,
                  lineHeight: 1.1,
                  textShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  fontSize: { xs: '3rem', md: '4rem', lg: '4.5rem' },
                  animation: 'fadeInUp 0.8s ease-out 0.2s both',
                  letterSpacing: '-0.02em',
                }}
              >
                Society of Petroleum
                <Box 
                  component="span" 
                  sx={{ 
                    display: 'block', 
                    background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.8) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Geophysicists
                </Box>
                <Typography
                  component="span"
                  sx={{
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.9)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  North America
                </Typography>
              </Typography>
              
                            <Typography
                variant="h4"
                sx={{
                  color: '#ffffff',
                  fontWeight: 400,
                  mb: 4,
                  maxWidth: '600px'
                }}
              >
                Advancing petroleum geophysics through professional development, 
                technical excellence, and collaborative innovation across North America.
              </Typography>
              
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                sx={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}
              >
                <Link href="/about/members" passHref style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<EastIcon />}
                    sx={{
                      backgroundColor: 'white',
                      color: 'primary.main',
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      borderRadius: '12px',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.95)',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                      }
                    }}
                  >
                    Explore Community
                  </Button>
                </Link>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  href="/contact"
                  sx={{
                    borderColor: 'white',
                    borderWidth: 2,
                    color: 'white',
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    borderRadius: '12px',
                    textTransform: 'none',
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(20px)',
                      transform: 'translateY(-3px)',
                    }
                  }}
                >
                  <EmailIcon sx={{ mr: 1 }} />
                  Contact Us
                </Button>
              </Stack>
            </Grid>

            {/* Stats Cards */}
            <Grid item xs={12} md={5}>
              <Grid container spacing={2}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} key={index}>
                    <Card
                      sx={{
                        background: 'rgba(255, 255, 255, 0.25)',
                        backdropFilter: 'blur(30px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: '#ffffff',
                        textAlign: 'center',
                        py: 3,
                        borderRadius: '16px',
                        animation: `fadeInScale 0.6s ease-out ${0.8 + index * 0.1}s both`,
                        '&:hover': {
                          transform: 'translateY(-5px) scale(1.02)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          background: 'rgba(255, 255, 255, 0.35)',
                        },
                      }}
                    >
                      <CardContent>
                        {React.cloneElement(stat.icon, { 
                          sx: { 
                            fontSize: 45, 
                            mb: 2, 
                            color: '#ffffff',
                            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                          } 
                        })}
                        <Typography variant="h3" sx={{ fontWeight: 900, mb: 0.5, fontSize: '2.5rem', color: '#ffffff' }}>
                          {stat.value}
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#ffffff', opacity: 0.95, fontWeight: 600 }}>
                          {stat.label}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          {spgFeatures.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: { xs: 4, md: 5 }, 
                  borderRadius: 3,
                  background: 'white',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0px 12px 24px rgba(18, 52, 86, 0.15)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ color: '#123456', mr: 2 }}>
                    {React.cloneElement(feature.icon, { sx: { fontSize: 32 } })}
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: '#123456' }}>
                    {feature.title}
                  </Typography>
                </Box>
                <List sx={{ p: 0 }}>
                  <ListItem 
                    sx={{ 
                      px: 0, 
                      py: 1,
                      '&::before': {
                        content: '"✓"',
                        color: '#123456',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        mr: 2,
                      }
                    }}
                  >
                    <ListItemText 
                      primary={
                        <Typography variant="body1" sx={{ color: '#172B4D', lineHeight: 1.6 }}>
                          {feature.description}
                        </Typography>
                      } 
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Organization Highlights Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              color: '#123456'
            }}
          >
            Organization Highlights
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Comprehensive resources and networking opportunities for petroleum geophysics professionals
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper 
                component={Link}
                href={feature.link}
                elevation={3} 
                sx={{ 
                  p: { xs: 3, md: 4 }, 
                  borderRadius: 3,
                  background: 'white',
                  height: '100%',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0px 12px 24px rgba(18, 52, 86, 0.15)',
                  }
                }}
              >
                <Box sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: feature.bgGradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3
                }}>
                  {React.cloneElement(feature.icon, { sx: { fontSize: 32, color: 'white' } })}
                </Box>
                
                <Typography variant="h6" component="h3" sx={{ fontWeight: 700, color: '#123456', mb: 2 }}>
                  {feature.title}
                </Typography>
                
                <Typography variant="body2" sx={{ color: '#172B4D', lineHeight: 1.6, mb: 2, flex: 1 }}>
                  {feature.description}
                </Typography>
                
                <Stack direction="row" alignItems="center" spacing={1} sx={{ color: '#123456' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>Learn More</Typography>
                  <EastIcon sx={{ fontSize: 16 }} />
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Gallery Section */}
      <Box 
        component="section" 
        aria-label="Community gallery" 
        sx={{ 
          py: { xs: 6, md: 8 },
          background: 'linear-gradient(135deg, rgba(18, 52, 86, 0.02) 0%, rgba(74, 107, 138, 0.02) 100%)'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                mb: 3,
                color: 'text.primary',
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Our Vibrant Community
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                fontWeight: 400,
                lineHeight: 1.7
              }}
            >
              Join a network of distinguished petroleum geophysics professionals making groundbreaking contributions
            </Typography>
          </Box>
          <ImageCardGrid heroImages={homeData.heroImages} />
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        component="section"
        aria-label="Get started"
        sx={{
          background: 'linear-gradient(135deg, #123456 0%, #4a6b8a 100%)',
          color: '#ffffff',
          py: { xs: 12, md: 16 },
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative' }}>
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontWeight: 900,
              mb: 3,
              textShadow: '0 4px 20px rgba(0,0,0,0.2)',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Ready to Connect?
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.95)',
              mb: 6,
              lineHeight: 1.7,
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.25rem'
            }}
          >
            Join SPG-NA and connect with a global network of petroleum geophysics professionals. Access resources, attend events, and advance your career.
          </Typography>
          
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            sx={{ justifyContent: 'center' }}
          >
            <Link href="/about/members" passHref style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<EastIcon />}
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  px: 6,
                  py: 2.5,
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  borderRadius: '12px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.25)'
                  }
                }}
              >
                Explore Membership
              </Button>
            </Link>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/about/newsletters"
              sx={{
                borderColor: 'white',
                borderWidth: 2,
                color: 'white',
                px: 6,
                py: 2.5,
                fontSize: '1.2rem',
                fontWeight: 800,
                borderRadius: '12px',
                textTransform: 'none',
                '&:hover': {
                  borderWidth: 2,
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(20px)',
                  transform: 'translateY(-3px)'
                }
              }}
            >
              <MenuBookIcon sx={{ mr: 1 }} />
              Latest News
            </Button>
          </Stack>

          {/* Trust Indicators */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            gap: { xs: 3, md: 6 },
            mt: 8, 
            maxWidth: '600px', 
            mx: 'auto',
            flexWrap: 'wrap'
          }}>
            {stats.map((stat, index) => (
              <Box key={index} sx={{ 
                textAlign: 'center',
                flex: '1 1 auto',
                minWidth: '120px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Typography variant="h3" sx={{ 
                  color: 'white', 
                  fontWeight: 900, 
                  mb: 1,
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.9)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

    </Box>
  );
}
