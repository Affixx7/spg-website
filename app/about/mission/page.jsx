import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import ObjectiveListItem from './ObjectiveListItem';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AssignmentIcon from '@mui/icons-material/Assignment';
import fs from 'fs';
import path from 'path';

// Fetch mission data at build time
async function getMissionData() {
  const filePath = path.join(process.cwd(), 'data', 'mission.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

export default async function ObjectivesSection() {
  const missionData = await getMissionData();
  const { mission, objectives } = missionData;
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
              icon={<TrackChangesIcon sx={{ color: 'white !important' }} />}
              label="Mission & Vision"
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
              Our Mission & Objectives
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
              Advancing geophysical excellence through collaboration, innovation, and professional development worldwide.
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
                  {objectives.length}
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Core Objectives
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
                  Impact
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
                  Excellence
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

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Mission Section */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<EmojiObjectsIcon sx={{ color: 'white !important' }} />}
              label="Our Mission"
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
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, color: '#123456', mb: 2 }}>
              Mission Statement
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
              Our commitment to advancing geophysical sciences and supporting professional growth.
            </Typography>
          </Box>

          <Paper 
            elevation={3} 
            sx={{ 
              p: { xs: 4, md: 6 }, 
              borderRadius: 3,
              background: 'white',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0px 12px 24px rgba(18, 52, 86, 0.15)',
              }
            }}
          >
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', color: '#172B4D', textAlign: 'center' }}>
              {mission}
            </Typography>
          </Paper>
        </Box>

        {/* Objectives Section */}
        <Box>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<AssignmentIcon sx={{ color: 'white !important' }} />}
              label="Strategic Goals"
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
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, color: '#123456', mb: 2 }}>
              Our Objectives
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
              Key objectives that guide our organization's activities and strategic direction.
            </Typography>
          </Box>

          <Paper 
            elevation={3} 
            sx={{ 
              p: { xs: 4, md: 6 }, 
              borderRadius: 3,
              background: 'white',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0px 12px 24px rgba(18, 52, 86, 0.15)',
              }
            }}
          >
            <List sx={{ listStyleType: 'none', pl: 0 }}>
              {objectives.map((objective, index) => (
                <ObjectiveListItem 
                  key={index}
                  primary={objective.primary}
                  secondary={objective.secondary}
                  index={index}
                />
              ))}
            </List>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}