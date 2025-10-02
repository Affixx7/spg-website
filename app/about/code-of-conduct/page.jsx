import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GavelIcon from '@mui/icons-material/Gavel';
import { Paper, Chip, Grid } from '@mui/material';
import PolicyIcon from '@mui/icons-material/Policy';
import BalanceIcon from '@mui/icons-material/Balance';
import fs from 'fs';
import path from 'path';

// Fetch code of conduct data at build time
async function getCodeOfConductData() {
  const filePath = path.join(process.cwd(), 'data', 'codeOfConduct.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

export default async function CodeOfConductPage() {
  const data = await getCodeOfConductData();

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
              icon={<PolicyIcon sx={{ color: 'white !important' }} />}
              label="Professional Standards"
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
              {data.title}
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
              Upholding Professional Ethics and Integrity in Geophysical Sciences
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
                  {data.principles.length}
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Core Principles
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
                  Standards
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
                  Ethics
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Excellence
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Introduction Card */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 5, md: 6 }, 
            borderRadius: 4,
            background: 'white',
            border: '1px solid rgba(18, 52, 86, 0.08)',
            mb: 5,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 40px rgba(18, 52, 86, 0.12)',
              borderColor: 'rgba(18, 52, 86, 0.2)',
            }
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            mb: 4
          }}>
            <Box sx={{ 
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #123456 0%, #4a6b8a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 3
            }}>
              <BalanceIcon sx={{ color: 'white', fontSize: 28 }} />
            </Box>
            <Typography variant="h4" component="h2" sx={{ 
              fontWeight: 800, 
              color: '#123456',
              fontSize: { xs: '1.75rem', md: '2rem' }
            }}>
              Professional Standards & Ethics
            </Typography>
          </Box>
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.8, 
              color: '#172B4D',
              fontSize: '1.15rem',
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              px: { xs: 0, md: 4 }
            }}
          >
            {data.introduction}
          </Typography>
        </Paper>

        {/* Core Principles Cards */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {data.principles.map((principle, index) => (
            <Paper 
              key={index}
              elevation={0}
              sx={{ 
                borderRadius: 4,
                background: 'white',
                border: '1px solid rgba(18, 52, 86, 0.08)',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(18, 52, 86, 0.12)',
                  borderColor: 'rgba(18, 52, 86, 0.2)',
                  '& .principle-number': {
                    background: 'linear-gradient(135deg, #0b1e2e 0%, #123456 100%)',
                  }
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
                {/* Left side with number */}
                <Box 
                  className="principle-number"
                  sx={{ 
                    width: { xs: 80, md: 100 },
                    background: 'linear-gradient(135deg, #123456 0%, #4a6b8a 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 900,
                      fontSize: { xs: '1.5rem', md: '2rem' },
                      mb: 0.5
                    }}
                  >
                    {index + 1}
                  </Typography>
                  <Box sx={{ 
                    width: 24, 
                    height: 2, 
                    background: 'rgba(255, 255, 255, 0.6)',
                    borderRadius: 1
                  }} />
                </Box>

                {/* Right side with content */}
                <Box sx={{ 
                  flex: 1, 
                  p: { xs: 4, md: 5 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CheckCircleIcon sx={{ 
                      color: '#123456', 
                      fontSize: 24, 
                      mr: 2,
                      opacity: 0.8
                    }} />
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700, 
                        color: '#123456',
                        fontSize: '1.1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}
                    >
                      Core Principle
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#172B4D', 
                      lineHeight: 1.7,
                      fontSize: '1.05rem'
                    }}
                  >
                    {principle}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>

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
            Commitment to Excellence
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              mb: 3,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            By adhering to these principles, SPG-NA members maintain the highest standards of professional conduct and contribute to the advancement of geoscience worldwide.
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
            <PolicyIcon />
            <Typography variant="button" sx={{ fontWeight: 600 }}>
              Learn More
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
