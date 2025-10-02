'use client';

import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box, Card, CardContent, Paper, Chip, CardMedia } from '@mui/material';
import { 
  Public as PublicIcon,
  Groups as GroupsIcon,
  Language as LanguageIcon,
  Link as LinkIcon
} from '@mui/icons-material';

const SocietiesPage = () => {
  const [societies, setSocieties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch societies data from a static JSON file or API
    const fetchSocieties = async () => {
      try {
        const response = await fetch('/api/societies');
        if (response.ok) {
          const data = await response.json();
          setSocieties(data.societies);
        }
      } catch (error) {
        console.error('Error fetching societies:', error);
        // Fallback data if API fails
        setSocieties([
          {
            "name": "American Association of Petroleum Geologists",
            "url": "https://www.aapg.org/",
            "image": "/society1.jpeg"
          },
          {
            "name": "Australian Society of Exploration Geophysicists",
            "url": "https://www.aseg.org.au/",
            "image": "/society2.png"
          },
          {
            "name": "Canadian Society of Exploration Geophysicists",
            "url": "https://cseg.ca/",
            "image": "/society3.png"
          },
          {
            "name": "European Association of Geoscientists & Engineers",
            "url": "https://eage.org/",
            "image": "/society4.webp"
          },
          {
            "name": "Geophysical Society of Houston",
            "url": "https://www.gshtx.org/",
            "image": "/society5.jpeg"
          },
          {
            "name": "Society of Exploration Geophysicists",
            "url": "https://seg.org/",
            "image": "/society6.png"
          },
          {
            "name": "Society of Petroleum Engineers",
            "url": "https://www.spe.org/en/",
            "image": "/society7.png"
          },
          {
            "name": "Society of Petroleum Geophysicists, India",
            "url": "https://spgindia.org/",
            "image": "/society8.jpg"
          },
          {
            "name": "Society of Petrophysicists and Well Log Analysts",
            "url": "https://www.spwla.org/",
            "image": "/society9.jpg"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSocieties();
  }, []);

  if (loading) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography>Loading societies...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', background: '#fafafa' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0b1e2e 0%, #123456 50%, #4a6b8a 100%)',
          color: 'white',
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%)
            `,
            pointerEvents: 'none',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
            <Chip
              icon={<PublicIcon sx={{ color: 'white !important' }} />}
              label="Global Network"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontWeight: 600,
                mb: 3,
                px: 2,
                py: 3,
                fontSize: '1rem',
                '& .MuiChip-icon': {
                  color: 'white !important'
                }
              }}
            />
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 900, 
                mb: 3,
                background: 'linear-gradient(45deg, #ffffff 30%, #e3f2fd 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Global Societies
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                opacity: 0.9, 
                lineHeight: 1.6,
                fontSize: '1.25rem',
                fontWeight: 400,
                maxWidth: '700px',
                mx: 'auto'
              }}
            >
              Connect with prestigious geophysical organizations and professional societies worldwide to expand your network and advance your career.
            </Typography>

            {/* Stats */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              gap: { xs: 3, md: 6 },
              mt: 6, 
              maxWidth: '600px', 
              mx: 'auto',
              flexWrap: 'wrap'
            }}>
              <Box sx={{ 
                textAlign: 'center',
                flex: '1 1 auto',
                minWidth: '120px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Typography variant="h3" sx={{ 
                  fontWeight: 900, 
                  mb: 1, 
                  color: 'white',
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}>
                  {societies.length}
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Societies
                </Typography>
              </Box>
              <Box sx={{ 
                textAlign: 'center',
                flex: '1 1 auto',
                minWidth: '120px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Typography variant="h3" sx={{ 
                  fontWeight: 900, 
                  mb: 1, 
                  color: 'white',
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}>
                  Global
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Reach
                </Typography>
              </Box>
              <Box sx={{ 
                textAlign: 'center',
                flex: '1 1 auto',
                minWidth: '120px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <Typography variant="h3" sx={{ 
                  fontWeight: 900, 
                  mb: 1, 
                  color: 'white',
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}>
                  Network
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Partners
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Societies Section */}
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
            Professional Organizations
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
            Explore our affiliated societies and expand your professional network in the global geophysics community.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {societies.map((society, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                onClick={() => window.open(society.url, '_blank')}
                sx={{
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '1px solid rgba(18, 52, 86, 0.08)',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(18, 52, 86, 0.08)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(18, 52, 86, 0.15)',
                    borderColor: '#123456',
                  },
                }}
              >
                {/* Image Section */}
                <Box
                  sx={{
                    height: 180,
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3,
                    borderBottom: '1px solid rgba(18, 52, 86, 0.08)'
                  }}
                >
                  <CardMedia
                    component="img"
                    image={society.image}
                    alt={society.name}
                    sx={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))'
                    }}
                  />
                </Box>

                {/* Content Section */}
                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#123456',
                      lineHeight: 1.3,
                      mb: 2,
                      fontSize: '1.1rem'
                    }}
                  >
                    {society.name}
                  </Typography>
                  
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: '#4a6b8a',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}>
                    <LinkIcon sx={{ fontSize: 16 }} />
                    <Typography variant="body2" sx={{ color: '#4a6b8a', fontWeight: 600 }}>
                      Visit Website
                    </Typography>
                  </Box>
                </CardContent>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SocietiesPage;
