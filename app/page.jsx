'use client';

import * as React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Chip, Avatar, Stack, Divider, Paper, List, ListItem, ListItemText } from '@mui/material';

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
      "src": "/landing2.jpg",
      "alt": "Geophysics Research",
      "title": "Advancing Geoscience Excellence"
    },
    {
      "src": "/landing3.jpg",
      "alt": "Collaboration",
      "title": "Fostering Global Collaboration"
    },
    {
      "src": "/landing4.jpeg",
      "alt": "Innovation",
      "title": "Innovation in Petroleum Geophysics"
    }
  ],
  "welcomeMessage": "Welcome to the Society of Petroleum Geophysicists of North America",
  "description": "A professional organization dedicated to fostering collaboration between Indian and American geoscientists."
};

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % homeData.heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
  ];

  return (
    <Box sx={{ minHeight: '100vh', background: '#fafafa', overflow: 'hidden' }}>
      {/* Hero Section with Image Carousel */}
      <Box
        component="section"
        aria-label="Hero section"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          height: { xs: '700px', md: '700px' },
          '@keyframes fadeIn': {
            from: { opacity: 0 },
            to: { opacity: 1 }
          }
        }}
      >
        {/* Background Images */}
        {homeData.heroImages.map((image, index) => (
          <Box
            key={image.src}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: currentImageIndex === index ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(11, 30, 46, 0.85) 0%, rgba(18, 52, 86, 0.75) 50%, rgba(74, 107, 138, 0.65) 100%)'
              }
            }}
          />
        ))}

        {/* Content Overlay */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pt: { xs: 14, md: 16 },
            pb: { xs: 8, md: 20 },
            px: { xs: 2, md: 0 }
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontWeight: 900,
                  mb: { xs: 2, md: 3 },
                  lineHeight: 1.1,
                  textShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '4.5rem' },
                  animation: 'fadeInUp 0.8s ease-out 0.2s both',
                  letterSpacing: '-0.02em',
                }}
              >
                Society of Petroleum
                <Box 
                  component="span" 
                  sx={{ 
                    display: 'block', 
                    color: 'white',
                  }}
                >
                  Geophysicists
                </Box>
                <Typography
                  component="span"
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.5rem' },
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
                variant="h5"
                sx={{
                  color: '#ffffff',
                  fontWeight: 400,
                  mb: { xs: 4, md: 5 },
                  lineHeight: 1.6,
                  mx: 'auto',
                  maxWidth: '700px',
                  fontSize: { xs: '1.1rem', md: '1.5rem' },
                  px: { xs: 1, md: 0 }
                }}
              >
                Advancing petroleum geophysics through professional development, 
                technical excellence, and collaborative innovation across North America.
              </Typography>
              
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 2, sm: -50 }}
                sx={{ 
                  animation: 'fadeInUp 0.8s ease-out 0.6s both',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: { xs: '100%', sm: 'auto' },
                  px: { xs: 2, sm: 0 }
                }}
              >
                <Link href="/about/members" passHref style={{ textDecoration: 'none', width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>
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
                      width: { xs: '100%', sm: 'auto' },
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
                <Link href="/contact" passHref style={{ textDecoration: 'none', width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>
                  <Button
                    variant="outlined"
                    size="large"
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
                      width: { xs: '100%', sm: 'auto' },
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
                </Link>
              </Stack>
            </Box>
          </Container>
        </Box>

        {/* Carousel Indicators */}
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2
          }}
        >
          {homeData.heroImages.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              sx={{
                width: currentImageIndex === index ? 40 : 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: currentImageIndex === index ? '#ffffff' : 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.7)'
                }
              }}
            />
          ))}
        </Stack>
      </Box>

      {/* Our Vibrant Community */}
      <Box 
        component="section" 
        aria-label="Community gallery" 
        sx={{ 
          py: { xs: 8, md: 8 },
          background: 'linear-gradient(135deg, rgba(18, 52, 86, 0.02) 0%, rgba(74, 107, 138, 0.02) 100%)'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 }, px: { xs: 2, md: 0 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                mb: { xs: 2, md: 3 },
                color: 'text.primary',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' }
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
          
          {/* Colorful Feature Cards - 3 Cards Only */}
          <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center" sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3, md: 0 } }}>
            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                sx={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  height: 'auto',
                  background: 'linear-gradient(135deg, rgba(123, 97, 255, 0.9) 0%, rgba(157, 132, 255, 0.9) 100%)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                  },
                }}
              >
                <CardContent sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-end',
                  p: 2.5,
                  position: 'relative',
                  zIndex: 2
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'white',
                      fontWeight: 700,
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      lineHeight: 1.3
                    }}
                  >
                    Advancing Geoscience Excellence
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                sx={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  height: 'auto',
                  background: 'linear-gradient(135deg, rgba(0, 135, 90, 0.9) 0%, rgba(54, 179, 126, 0.9) 100%)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                  },
                }}
              >
                <CardContent sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-end',
                  p: 2.5,
                  position: 'relative',
                  zIndex: 2
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'white',
                      fontWeight: 700,
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      lineHeight: 1.3
                    }}
                  >
                    Fostering Global Collaboration
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                sx={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  position: 'relative',
                  height: 'auto',
                  background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.9) 0%, rgba(255, 149, 77, 0.9) 100%)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                  },
                }}
              >
                <CardContent sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-end',
                  p: 2.5,
                  position: 'relative',
                  zIndex: 2
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'white',
                      fontWeight: 700,
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      lineHeight: 1.3
                    }}
                  >
                    Innovation in Petroleum Geophysics
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          
          {/* Feature Cards from Image */}
          <Box sx={{ mt: 8 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px rgba(18, 52, 86, 0.15)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <DesignServicesIcon sx={{ fontSize: 32, color: '#123456', mr: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#123456' }}>
                      Professional Development
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box 
                      sx={{ 
                        color: '#123456', 
                        mr: 2, 
                        mt: 0.5,
                        '&::before': {
                          content: '"✓"',
                          fontWeight: 'bold',
                          fontSize: '1.1rem'
                        }
                      }} 
                    />
                    <Typography variant="body1" sx={{ color: '#172B4D', lineHeight: 1.6 }}>
                      Advancing geophysical knowledge through education and networking
                    </Typography>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px rgba(18, 52, 86, 0.15)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <CodeIcon sx={{ fontSize: 32, color: '#123456', mr: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#123456' }}>
                      Technical Excellence
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box 
                      sx={{ 
                        color: '#123456', 
                        mr: 2, 
                        mt: 0.5,
                        '&::before': {
                          content: '"✓"',
                          fontWeight: 'bold',
                          fontSize: '1.1rem'
                        }
                      }} 
                    />
                    <Typography variant="body1" sx={{ color: '#172B4D', lineHeight: 1.6 }}>
                      Promoting best practices in geophysical exploration and research
                    </Typography>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px rgba(18, 52, 86, 0.15)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <AccessibilityNewIcon sx={{ fontSize: 32, color: '#123456', mr: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#123456' }}>
                      Community Engagement
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box 
                      sx={{ 
                        color: '#123456', 
                        mr: 2, 
                        mt: 0.5,
                        '&::before': {
                          content: '"✓"',
                          fontWeight: 'bold',
                          fontSize: '1.1rem'
                        }
                      }} 
                    />
                    <Typography variant="body1" sx={{ color: '#172B4D', lineHeight: 1.6 }}>
                      Fostering collaboration among geophysicists and industry professionals
                    </Typography>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px rgba(18, 52, 86, 0.15)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <SpeedIcon sx={{ fontSize: 32, color: '#123456', mr: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#123456' }}>
                      Industry Innovation
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box 
                      sx={{ 
                        color: '#123456', 
                        mr: 2, 
                        mt: 0.5,
                        '&::before': {
                          content: '"✓"',
                          fontWeight: 'bold',
                          fontSize: '1.1rem'
                        }
                      }} 
                    />
                    <Typography variant="body1" sx={{ color: '#172B4D', lineHeight: 1.6 }}>
                      Supporting technological advancement in geophysical sciences
                    </Typography>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px rgba(18, 52, 86, 0.15)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <DevicesIcon sx={{ fontSize: 32, color: '#123456', mr: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#123456' }}>
                      Educational Resources
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box 
                      sx={{ 
                        color: '#123456', 
                        mr: 2, 
                        mt: 0.5,
                        '&::before': {
                          content: '"✓"',
                          fontWeight: 'bold',
                          fontSize: '1.1rem'
                        }
                      }} 
                    />
                    <Typography variant="body1" sx={{ color: '#172B4D', lineHeight: 1.6 }}>
                      Providing learning opportunities for current and future geophysicists
                    </Typography>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px rgba(18, 52, 86, 0.15)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <AnimationIcon sx={{ fontSize: 32, color: '#123456', mr: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#123456' }}>
                      Research Support
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box 
                      sx={{ 
                        color: '#123456', 
                        mr: 2, 
                        mt: 0.5,
                        '&::before': {
                          content: '"✓"',
                          fontWeight: 'bold',
                          fontSize: '1.1rem'
                        }
                      }} 
                    />
                    <Typography variant="body1" sx={{ color: '#172B4D', lineHeight: 1.6 }}>
                      Facilitating groundbreaking research in petroleum geophysics
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Organization Highlights Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
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


        </Container>
      </Box>

    </Box>
  );
}
