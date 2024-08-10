import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function ImageCard({ image, title, link, borderColor }) {
  return (
    <Card
      sx={{
        cursor: 'pointer',
        border: `2px solid ${borderColor}`,
        borderRadius: '8px',
        overflow: 'hidden', // Ensure the image stays within the card
        position: 'relative', // Required for the title to position correctly
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: '200px', // Set a fixed height for the card to maintain consistency
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          className="card-media"
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover', // Ensure the image covers the entire area
            transition: 'transform 0.3s ease-in-out', // Smooth transition for the zoom effect
            '&:hover': {
              transform: 'scale(1.1)', // Slight zoom effect on hover
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            color: 'white',
            zIndex: 1, // Ensure the text stays on top of the image
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default function ImageCardGrid() {
  const cardData = [
    { image: '/landing1.jpg', title: 'Contractor Database', link: '#', borderColor: '#FFD700' },
    { image: '/landing2.png', title: 'Publications', link: '#', borderColor: '#00FF00' },
    { image: '/landing3.webp', title: 'Membership', link: '#', borderColor: '#FF0000' },
    { image: '/landing4.jpg', title: 'Corporate Members', link: '#', borderColor: '#ADD8E6' },
  ];

  return (
    <Grid container spacing={4} sx={{ padding: '20px' }}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ImageCard
            image={card.image}
            title={card.title}
            link={card.link}
            borderColor={card.borderColor}
          />
        </Grid>
      ))}
    </Grid>
  );
}

