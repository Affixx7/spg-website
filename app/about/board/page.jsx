import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import PreviousOfficersTable from './PreviousOfficersTable';
import AdvisorCard from './AdvisorCard';
import OfficeBearerCard from './OfficeBearerCard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AdvisorsSection from './AdvisorsSection';
import fs from 'fs';
import path from 'path';

// Fetch board data at build time
async function getBoardData() {
  const filePath = path.join(process.cwd(), 'data', 'board.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

const oldAdvisors = [
  {
    name: 'Mrinal K. Sen',
    bio: 'Mrinal K. Sen received his B.Sc (1977) and M.Sc (1979) degrees in Applied Geophysics from Indian School of Mines and a PhD in Geophysics (Theoretical Seismology) from the University of Hawaii at Manoa (Hawaii Institute of Geophysics). He is a senior research scientist at the Institute for Geophysics of the University of Texas at Austin. His research areas include seismic wave propagation, inverse theory, seismic imaging, and computational physics.',
  },
  {
    name: 'Subhashis Mallick',
    bio: 'Subhashis Mallick received his Bachelors degree with honors in geological sciences in 1976 and masters degree in exploration geophysics in 1978, both from Indian Institute of Technology, Kharagpur. After working in the industry for five years, he joined the University of Hawaii in 1983 and obtained a PhD degree in geophysics in 1987. After working as a post-doctoral researcher for three years at the University of Hawaii, in 1990 he joined Western Geophysical Company (now called WesternGeco). In 2005, he left WesternGeco and joined Chevron Energy Technology Company. Beginning Fall 2008, he joined the faculty of the University of Wyoming as a Professor of Geophysics. His research and teaching interests include all aspects of computational seismology and their application in reservoir characterization and carbon sequestration monitoring.',
  },
  {
    name: 'Partha S. Routh',
    bio: 'Partha Routh received his masters degree in exploration geophysics in 1993 from Indian Institute of Technology, Kharagpur. He completed his PhD in 1999 from University of British Columbia, Canada. Presently he is working as Senior Research Geophysicist at ExxonMobil, URC, Houston. His research and teaching interests include modeling and inversion of electromagnetic data as well as seismic data.',
  },
  {
    name: 'Raghu K. Chunduru',
    bio: 'Raghu K. Chunduru is a Senior Geophysicist at Shell. Prior to joining at Shell he worked as a research scientist at Baker Hughes for five and half years. He received his M.Sc.(Tech) (1989) in Geophysics from Osmania University and M.S. (1992) in Applied Physics from University of New Orleans. He received his Ph.D. (1996) in Geophysics from The University of Texas at Austin. He holds five patents and authored and co-authored in several technical publications. His experience includes Geophysical Inversion, Borehole Geophysics, Quantitative Interpretation, and Pore Pressure Prediction.',
  },
  {
    name: 'Sudarshan Singh',
    bio: 'Sudarshan Singh received his Bachelors degree with honors in Geological Sciences in 1968 and Masters degree in Exploration Geophysics in 1970, both from Indian Institute of Technology, Kharagpur. After obtaining MS degree in Geophysics from the University of Minnesota in 1972, Sudarshan taught for four years at the University of Roorkee, Roorkee. He then joined St. Louis University, St. Louis and obtained a PhD degree in Geophysics in 1981. He joined ExxonMobil in 1981 and after working in exploration, research and several overseas assignments, he is currently a Geophysical Advisor at ExxonMobil’s Iraq Operations based in Dubai, UAE. His experience includes Geophysical acquisition & processing, Borehole Geophysics and Geophysical Operations in both onshore and offshore seismic surveys.',
  },
];


export default async function BoardPage() {
  const boardData = await getBoardData();
  const { currentOfficeBearers, advisors } = boardData;

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
              icon={<LeaderboardIcon sx={{ color: 'white !important' }} />}
              label="Leadership Team"
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
              Board of Directors
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
              Meet the distinguished professionals leading SPG North America with expertise, vision, and dedication to advancing geophysics worldwide.
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
                  {currentOfficeBearers.officers.length}
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Officers
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
                  {advisors.length}
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Advisors
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
                  2019
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}>
                  Current Term
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        {/* Office Bearers Section */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<BusinessCenterIcon />}
              label={`Current Term: ${currentOfficeBearers.term}`}
              sx={{
                backgroundColor: 'rgba(18, 52, 86, 0.1)',
                color: '#123456',
                fontWeight: 600,
                mb: 2,
                px: 2,
                py: 3,
              }}
            />
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, color: '#123456', mb: 2 }}>
              Executive Officers
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
              The elected leadership guiding our organization's mission and strategic direction.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {currentOfficeBearers.officers.map((officer, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    textAlign: 'center',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0px 16px 32px rgba(18, 52, 86, 0.15)',
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      backgroundColor: getAvatarColor(officer.name),
                      color: '#ffffff !important',
                      fontSize: '1.8rem',
                      fontWeight: 'bold',
                      mx: 'auto',
                      mb: 3
                    }}
                  >
                    {getInitials(officer.name)}
                  </Avatar>
                  
                  <Chip
                    label={officer.title}
                    size="small"
                    sx={{
                      backgroundColor: '#123456',
                      color: 'white',
                      fontWeight: 600,
                      mb: 2,
                      fontSize: '0.8rem'
                    }}
                  />
                  
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#123456', mb: 1 }}>
                    {officer.name}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.5 }}>
                    {officer.affiliation}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Board Advisors Section */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<SupervisorAccountIcon />}
              label="Expert Advisory Panel"
              sx={{
                backgroundColor: 'rgba(18, 52, 86, 0.1)',
                color: '#123456',
                fontWeight: 600,
                mb: 2,
                px: 2,
                py: 3,
              }}
            />
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, color: '#123456', mb: 2 }}>
              Board Advisors
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
              Distinguished professionals providing strategic guidance and expertise to our organization.
            </Typography>
          </Box>

          <AdvisorsSection advisors={advisors} />
        </Box>

        {/* Previous Office Bearers Section */}
        <Box>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<AccountCircleIcon />}
              label="Historical Leadership"
              sx={{
                backgroundColor: 'rgba(18, 52, 86, 0.1)',
                color: '#123456',
                fontWeight: 600,
                mb: 2,
                px: 2,
                py: 3,
              }}
            />
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, color: '#123456', mb: 2 }}>
              Previous Office Bearers
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
              Honoring the leaders who have guided our organization through the years.
            </Typography>
          </Box>

          <Paper
            elevation={2}
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
              border: '1px solid #e0e0e0'
            }}
          >
            <PreviousOfficersTable />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
