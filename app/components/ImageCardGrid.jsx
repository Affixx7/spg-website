import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function ImageCard({ image, title, alt, index }) {
  const gradients = [
    'linear-gradient(135deg, rgba(10, 102, 194, 0.8) 0%, rgba(74, 144, 226, 0.8) 100%)',
    'linear-gradient(135deg, rgba(123, 97, 255, 0.8) 0%, rgba(157, 132, 255, 0.8) 100%)',
    'linear-gradient(135deg, rgba(0, 135, 90, 0.8) 0%, rgba(54, 179, 126, 0.8) 100%)',
    'linear-gradient(135deg, rgba(255, 107, 53, 0.8) 0%, rgba(255, 149, 77, 0.8) 100%)'
  ];

  return (
    <Card
      sx={{
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
        height: '300px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(23, 43, 77, 0.08)',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.02)',
          boxShadow: '0 20px 40px rgba(23, 43, 77, 0.15)',
          '& .card-media': {
            transform: 'scale(1.1)',
          },
          '& .overlay': {
            background: gradients[index % gradients.length].replace('0.8', '0.6'),
          },
          '& .title': {
            transform: 'translateY(-5px)',
          }
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={alt || title}
        className="card-media"
        sx={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
      
      {/* Gradient Overlay */}
      <Box
        className="overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: gradients[index % gradients.length],
          transition: 'background 0.3s ease',
        }}
      />
      
      {/* Content */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          p: 3,
          zIndex: 2,
        }}
      >
        <Typography 
          variant="h6" 
          className="title"
          sx={{ 
            color: 'white',
            fontWeight: 800,
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s ease',
            fontSize: { xs: '1rem', sm: '1.25rem' }
          }}
        >
          {title}
        </Typography>
      </Box>
      
      {/* Decorative Element */}
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: 'white',
            boxShadow: '0 0 20px rgba(255,255,255,0.5)',
          }}
        />
      </Box>
    </Card>
  );
}

export default function ImageCardGrid({ heroImages }) {
  const cardData = heroImages || [
    { src: '/landing1.jpg', title: 'SPG Conference', alt: 'SPG Conference' },
    { src: '/landing2.png', title: 'Geophysics Research', alt: 'Geophysics Research' },
    { src: '/landing3.webp', title: 'Global Collaboration', alt: 'Global Collaboration' },
    { src: '/landing4.jpg', title: 'Innovation in Geophysics', alt: 'Innovation in Geophysics' },
  ];

  return (
    <Grid container spacing={4}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <ImageCard
            image={card.src || card.image}
            title={card.title}
            alt={card.alt}
            index={index}
          />
        </Grid>
      ))}
    </Grid>
  );
}

