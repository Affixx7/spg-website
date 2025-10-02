import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent, Chip, Avatar } from '@mui/material';
import { 
  FormatQuote as FormatQuoteIcon,
  RecordVoiceOver as VoiceIcon,
  School as SchoolIcon
} from '@mui/icons-material';
import fs from 'fs';
import path from 'path';

async function getTestimonialsData() {
  const filePath = path.join(process.cwd(), 'data', 'testimonials.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

export default async function TestimonialPage() {
  const data = await getTestimonialsData();

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
    const index = name.charCodeAt(0) % colors.length;
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
              icon={<VoiceIcon sx={{ color: 'white !important' }} />}
              label="Community Voices"
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
              Member Testimonials
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
              Inspiring stories from our community members who have experienced the impact of SPG-NA's support and fellowship.
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
                  {data.testimonials.length}
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Stories
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
                  Community
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
                  Impact
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Driven
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
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
            What Our Members Say
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
            Discover how SPG-NA has made a difference in the lives and careers of our community members.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {data.testimonials.map((testimonial, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '1px solid rgba(18, 52, 86, 0.08)',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(18, 52, 86, 0.08)',
                  mb: 3,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(18, 52, 86, 0.12)',
                    borderColor: '#123456',
                  },
                }}
              >
                {/* Author Info Section */}
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #123456 0%, #4a6b8a 100%)',
                    p: { xs: 3, md: 4 },
                    color: 'white',
                    minWidth: { md: '280px' },
                    maxWidth: { md: '320px' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                >
                  <Avatar 
                    sx={{ 
                      backgroundColor: getAvatarColor(testimonial.name),
                      color: '#ffffff !important',
                      width: 72,
                      height: 72,
                      mb: 2,
                      fontWeight: 'bold',
                      fontSize: '1.75rem'
                    }}
                  >
                    {getInitials(testimonial.name)}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: 'white' }}>
                    {testimonial.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'white',
                      opacity: 0.9,
                      mb: 1, 
                      fontSize: '0.9rem',
                      lineHeight: 1.3
                    }}
                  >
                    {testimonial.position}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: 0.5, 
                    mt: 1,
                    flexWrap: 'wrap'
                  }}>
                    <SchoolIcon sx={{ fontSize: 16, color: 'white', opacity: 0.9 }} />
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'white',
                        opacity: 0.9, 
                        fontSize: '0.8rem', 
                        textAlign: 'center',
                        lineHeight: 1.2
                      }}
                    >
                      {testimonial.school}
                    </Typography>
                  </Box>
                </Box>

                {/* Content Section */}
                <CardContent 
                  sx={{ 
                    p: { xs: 3, md: 4 }, 
                    flexGrow: 1, 
                    position: 'relative', 
                    display: 'flex', 
                    alignItems: 'center',
                    background: '#ffffff'
                  }}
                >

                  
                  <Box sx={{ position: 'relative', zIndex: 2, width: '100%' }}>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.8,
                        color: 'text.primary',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        fontStyle: 'italic',
                        position: 'relative',
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {testimonial.content}
                    </Typography>
                    
                    {/* Attribution line */}
                    <Box 
                      sx={{ 
                        mt: 3, 
                        pt: 2, 
                        borderTop: '2px solid #4a6b8a',
                        display: 'flex',
                        justifyContent: 'flex-end'
                      }}
                    >
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#4a6b8a', 
                          fontWeight: 600,
                          fontStyle: 'normal'
                        }}
                      >
                        — {testimonial.name}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
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
            Share Your Story
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
            Have you been impacted by SPG-NA? We'd love to hear about your experience and journey with our community.
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
            <VoiceIcon />
            <Typography variant="button" sx={{ fontWeight: 600 }}>
              Contact Us
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
