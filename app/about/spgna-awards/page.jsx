import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent, Paper, List, ListItem, ListItemText, Chip, CardMedia } from '@mui/material';
import { 
  EmojiEvents as EmojiEventsIcon,
  Stars as StarsIcon,
  PhotoLibrary as PhotoLibraryIcon,
  WorkspacePremium as PremiumIcon
} from '@mui/icons-material';
import fs from 'fs';
import path from 'path';

async function getAwardsData() {
  const filePath = path.join(process.cwd(), 'data', 'awards.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

export default async function AwardsPage() {
  const awardsData = await getAwardsData();

  const sections = [
    { title: 'Technical Achievement Award', data: ['Recognizes outstanding technical contributions to the field of petroleum geophysics', 'Awarded annually at the SPG meeting during SEG conference', 'Honors innovative research and practical applications'], icon: <EmojiEventsIcon /> },
    { title: 'Honorary Member of the Year', data: ['Honors exceptional service and dedication to the SPG-NA community', 'Recognizes leadership and mentorship in the geophysics field', 'Celebrates long-term contributions to professional development'], icon: <PremiumIcon /> },
  ];

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
              icon={<EmojiEventsIcon sx={{ color: 'white !important' }} />}
              label="Excellence & Recognition"
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
              {awardsData.title}
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
              {awardsData.introduction}
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
                  {sections.length}
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Award Categories
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
                  2010
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Since
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
                  Annual
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Recognition
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          {sections.map((section, sectionIndex) => (
            <Grid item xs={12} md={6} key={sectionIndex}>
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
                    {section.icon}
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: '#123456' }}>
                    {section.title}
                  </Typography>
                </Box>
                <List sx={{ p: 0 }}>
                  {section.data.map((item, index) => (
                    <ListItem 
                      key={index} 
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
                            {item}
                          </Typography>
                        } 
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Awards Gallery Section */}
        <Box sx={{ mt: 8 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<PhotoLibraryIcon sx={{ color: 'white !important' }} />}
              label="Award Ceremonies"
              sx={{
                backgroundColor: 'rgba(18, 52, 86, 0.1)',
                color: '#123456',
                fontWeight: 600,
                mb: 2,
                px: 2,
                py: 3,
                '& .MuiChip-icon': {
                  color: '#123456 !important'
                }
              }}
            />
            <Typography 
              variant="h4" 
              component="h3" 
              sx={{ 
                fontWeight: 700, 
                color: '#123456',
                mb: 2
              }}
            >
              Awards Gallery
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
              Celebrating our distinguished award recipients and their outstanding contributions to petroleum geophysics.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {awardsData.recipients.map((recipientYear, yearIndex) => (
              <React.Fragment key={yearIndex}>
                <Grid item xs={12} md={6}>
                  <Card 
                    sx={{ 
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0px 12px 24px rgba(18, 52, 86, 0.15)',
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={recipientYear.technical_achievement.image}
                      alt={recipientYear.technical_achievement.caption}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#123456' }}>
                        Technical Achievement Award - {recipientYear.year}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#172B4D', lineHeight: 1.6, fontStyle: 'italic' }}>
                        {recipientYear.technical_achievement.caption}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card 
                    sx={{ 
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0px 12px 24px rgba(18, 52, 86, 0.15)',
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={recipientYear.honorary_member.image}
                      alt={recipientYear.honorary_member.caption}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#123456' }}>
                        Honorary Member Award - {recipientYear.year}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#172B4D', lineHeight: 1.6, fontStyle: 'italic' }}>
                        {recipientYear.honorary_member.caption}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
}
