import React from 'react';
import { Container, Typography, Box, Chip, Grid, Paper, CardContent } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import fs from 'fs';
import path from 'path';

// Fetch FAQ data at build time
async function getFAQData() {
  const filePath = path.join(process.cwd(), 'data', 'faq.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

export default async function FAQPage() {
  const data = await getFAQData();

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
              icon={<HelpOutlineIcon sx={{ color: 'white !important' }} />}
              label="Support Center"
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
                background: 'white',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Frequently Asked Questions
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
              Find answers to common questions about SPG-NA membership, awards, activities, and professional opportunities.
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
                  {data.faqs.length}
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Questions
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
                  Quick
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Answers
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          {data.faqs.map((category, categoryIndex) => (
            <Grid item xs={12} md={6} key={categoryIndex}>
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
                    <HelpOutlineIcon />
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: '#123456' }}>
                    {category.category}
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  {category.questions.map((qa, qaIndex) => (
                    <Box key={qaIndex} sx={{ mb: qaIndex < category.questions.length - 1 ? 3 : 0 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600, 
                          color: '#123456', 
                          mb: 1, 
                          fontSize: '1rem'
                        }}
                      >
                        Q: {qa.question}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#172B4D', 
                          lineHeight: 1.6,
                          pl: 2,
                          borderLeft: '3px solid rgba(18, 52, 86, 0.2)'
                        }}
                      >
                        {qa.answer}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
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
            Still Have Questions?
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
            Can't find what you're looking for? Our board members are here to provide personalized assistance and detailed information.
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
            <ContactSupportIcon />
            <Typography variant="button" sx={{ fontWeight: 600 }}>
              Contact Board
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
