import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';

const OfficeBearerCard = ({ title, name, affiliation }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto' }}>
      <Box
        sx={{
          height: 140,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
        }}
      >
        <PersonIcon sx={{ fontSize: 80, color: '#ccc' }} />
      </Box>
      <CardContent>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
          {name}
        </Typography>
        <Typography variant="body2">{affiliation}</Typography>
      </CardContent>
    </Card>
  );
};

export default OfficeBearerCard;
