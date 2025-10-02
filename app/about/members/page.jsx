import React from 'react';
import MembersTable from './MembersTable';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PublicIcon from '@mui/icons-material/Public';
import fs from 'fs';
import path from 'path';

// Fetch member data at build time
async function getMembersData() {
  const benefitsPath = path.join(process.cwd(), 'data', 'memberBenefits.json');
  const membersPath = path.join(process.cwd(), 'data', 'members.json');
  
  const benefitsData = JSON.parse(fs.readFileSync(benefitsPath, 'utf8'));
  const membersData = JSON.parse(fs.readFileSync(membersPath, 'utf8'));
  
  return { benefits: benefitsData.benefits, members: membersData.members };
}

export default async function MembersInfo() {
  const { benefits, members } = await getMembersData();

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
              icon={<GroupsIcon sx={{ color: 'white !important' }} />}
              label="Professional Community"
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
              Our Global Community
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
              Connect with distinguished geophysics professionals from around the world. Join our network of experts, researchers, and industry leaders.
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
                  {members.length}+
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Active Members
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
                  15+
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Years Strong
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
                  Network
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 6 },
          alignItems: 'stretch'
        }}>
          {/* Member Benefits Section - 40% */}
          <Box sx={{ 
            flex: { xs: '1 1 100%', md: '0 0 40%' },
            minWidth: 0
          }}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: { xs: 4, md: 6 }, 
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
                <EmojiEventsIcon sx={{ fontSize: 32, color: '#123456', mr: 2 }} />
                <Typography variant="h5" component="h2" sx={{ fontWeight: 700, color: '#123456' }}>
                  Member Benefits
                </Typography>
              </Box>
              
              <List sx={{ listStyleType: 'none', pl: 0 }}>
                {benefits.map((benefit, index) => (
                  <ListItem 
                    key={index} 
                    sx={{ 
                      px: 0, 
                      py: 1.5,
                      alignItems: 'flex-start'
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                      <CheckCircleIcon sx={{ fontSize: 20, color: '#123456' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={benefit}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: '0.95rem',
                          lineHeight: 1.6,
                          color: '#123456'
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>

              <Box sx={{ mt: 4, p: 3, backgroundColor: 'rgba(18, 52, 86, 0.05)', borderRadius: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PublicIcon sx={{ fontSize: 24, color: '#123456', mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#123456' }}>
                    Global Network
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'rgba(18, 52, 86, 0.8)', lineHeight: 1.5 }}>
                  Connect with professionals across continents and expand your career opportunities in the geophysics industry.
                </Typography>
              </Box>
            </Paper>
          </Box>

          {/* Members Directory Section - 60% */}
          <Box sx={{ 
            flex: { xs: '1 1 100%', md: '0 0 60%' },
            minWidth: 0
          }}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: { xs: 4, md: 6 }, 
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
              <Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: 4, color: '#123456' }}>
                Members Directory
              </Typography>
              <MembersTable membersData={members} />
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
