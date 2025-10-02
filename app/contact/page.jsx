'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Avatar,
  Stack,
  Chip,
  Paper,
  Button
} from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';

const boardMembers = [
  {
    name: 'Gopal Mohapatra',
    title: 'President',
    company: 'Hess Corporation, Houston',
    email: 'president@spgna.org',
    expertise: 'Petroleum Geophysics'
  },
  {
    name: 'Sanjay Sood',
    title: 'General Secretary',
    company: 'Shearwater GeoServices, Houston',
    email: 'secretary@spgna.org',
    expertise: 'Seismic Processing'
  }
];

export default function ContactPage() {
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const getAvatarColor = (name) => {
    const colors = ['#123456', '#4a6b8a', '#0b1e2e', '#2d5016', '#7b1fa2', '#d32f2f'];
    const index = name.length % colors.length;
    return colors[index];
  };

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
              icon={<ContactMailIcon sx={{ color: 'white !important' }} />}
              label="Connect & Collaborate"
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
              Get in Touch
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
              Connect with SPG-NA leadership and explore opportunities for collaboration in petroleum geophysics
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
                  {boardMembers.length}
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Board Members
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
                  24/7
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Available
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
                  Expert
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Support
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {boardMembers.map((member, index) => (
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
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: getAvatarColor(member.name),
                      color: '#ffffff !important',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      mr: 2
                    }}
                  >
                    {getInitials(member.name)}
                  </Avatar>
                  <Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: '#123456' }}>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#4a6b8a', fontWeight: 600 }}>
                      {member.title}
                    </Typography>
                  </Box>
                </Box>
                
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <BusinessIcon sx={{ fontSize: 20, color: '#123456', mr: 1 }} />
                    <Typography variant="body1" sx={{ color: '#172B4D', lineHeight: 1.6 }}>
                      {member.company}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <EmailIcon sx={{ fontSize: 20, color: '#123456', mr: 1 }} />
                    <Typography variant="body1" sx={{ color: '#123456', fontWeight: 600 }}>
                      {member.email}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PersonIcon sx={{ fontSize: 20, color: '#123456', mr: 1 }} />
                    <Typography variant="body1" sx={{ color: '#172B4D', lineHeight: 1.6 }}>
                      Expertise: {member.expertise}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Additional Information */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
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
                  <EmailIcon />
                </Box>
                <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: '#123456' }}>
                  General Inquiries
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 3, color: '#172B4D', lineHeight: 1.6 }}>
                For membership information, event details, or general questions about SPG-NA, please reach out to our General Secretary.
              </Typography>
              <Box sx={{ pl: 2 }}>
                <Typography variant="body1" sx={{ color: '#172B4D', lineHeight: 1.6, mb: 1, '&::before': { content: '"✓"', color: '#123456', fontWeight: 'bold', fontSize: '1.1rem', mr: 2 } }}>
                  Membership Applications
                </Typography>
                <Typography variant="body1" sx={{ color: '#172B4D', lineHeight: 1.6, mb: 1, '&::before': { content: '"✓"', color: '#123456', fontWeight: 'bold', fontSize: '1.1rem', mr: 2 } }}>
                  Event Information
                </Typography>
                <Typography variant="body1" sx={{ color: '#172B4D', lineHeight: 1.6, '&::before': { content: '"✓"', color: '#123456', fontWeight: 'bold', fontSize: '1.1rem', mr: 2 } }}>
                  Collaboration Opportunities
                </Typography>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
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
                  <ContactMailIcon />
                </Box>
                <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: '#123456' }}>
                  Technical & Awards
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 3, color: '#172B4D', lineHeight: 1.6 }}>
                Questions about technical programs, annual awards, or research collaborations? Contact our President for specialized assistance.
              </Typography>
              <Box sx={{ pl: 2 }}>
                <Typography variant="body1" sx={{ color: '#172B4D', lineHeight: 1.6, mb: 1, '&::before': { content: '"✓"', color: '#123456', fontWeight: 'bold', fontSize: '1.1rem', mr: 2 } }}>
                  Annual Awards Program
                </Typography>
                <Typography variant="body1" sx={{ color: '#172B4D', lineHeight: 1.6, mb: 1, '&::before': { content: '"✓"', color: '#123456', fontWeight: 'bold', fontSize: '1.1rem', mr: 2 } }}>
                  Research Collaborations
                </Typography>
                <Typography variant="body1" sx={{ color: '#172B4D', lineHeight: 1.6, '&::before': { content: '"✓"', color: '#123456', fontWeight: 'bold', fontSize: '1.1rem', mr: 2 } }}>
                  Technical Committees
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Call to Action Section */}
        <Box sx={{ 
          textAlign: 'center', 
          mt: 8,
          p: 4,
          background: 'linear-gradient(135deg, rgba(18, 52, 86, 0.05) 0%, rgba(74, 107, 138, 0.05) 100%)',
          borderRadius: 3,
          border: '1px solid rgba(18, 52, 86, 0.1)'
        }}>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 700, 
              mb: 2, 
              color: '#123456'
            }}
          >
            Ready to Connect?
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              mb: 3,
              maxWidth: '500px',
              mx: 'auto'
            }}
          >
            Join our vibrant community of petroleum geophysics professionals and unlock opportunities for growth and collaboration.
          </Typography>
          <Box sx={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: 2,
            px: 3,
            py: 2,
            background: '#123456',
            color: 'white',
            borderRadius: 2,
            fontWeight: 600,
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            '&:hover': {
              background: '#0b1e2e',
              transform: 'translateY(-2px)'
            }
          }}>
            <ContactMailIcon />
            <Typography variant="button" sx={{ fontWeight: 600 }}>
              Get Started
            </Typography>
          </Box>
        </Box>

        
      </Container>
    </Box>
  );
}