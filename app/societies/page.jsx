'use client';
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';

const societies = [
  {
    name: "American Association of Petroleum Geologists",
    url: "https://www.aapg.org/",
    image: "/society1.jpeg", // Logo image path
  },
  {
    name: "Australian Society of Exploration Geophysicists",
    url: "https://www.aseg.org.au/",
    image: "/society2.png", // Logo image path
  },
  {
    name: "Canadian Society of Exploration Geophysicists",
    url: "https://cseg.ca/",
    image: "/society3.png", // Logo image path
  },
  {
    name: "European Association of Geoscientists & Engineers",
    url: "https://eage.org/",
    image: "/society4.webp", // Logo image path
  },
  {
    name: "Geophysical Society of Houston",
    url: "https://www.gshtx.org/",
    image: "/society5.jpeg", // Logo image path
  },
  {
    name: "Society of Exploration Geophysicists",
    url: "https://seg.org/",
    image: "/society6.png", // Logo image path
  },
  {
    name: "Society of Petroleum Engineers",
    url: "https://www.spe.org/en/",
    image: "/society7.png", // Logo image path
  },
  {
    name: "Society of Petroleum Geophysicists, India",
    url: "https://spgindia.org/",
    image: "/society8.jpg", // Logo image path
  },
  {
    name: "Society of Petrophysicists and Well Log Analysts",
    url: "https://www.spwla.org/",
    image: "/society9.jpg", // Logo image path
  },
];

const SocietiesPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ paddingTop: 4, paddingBottom: 4 }}>
        <Typography variant="h4" align="" gutterBottom>
          <strong>Societies</strong>
        </Typography>
        <Grid container spacing={4}>
          {societies.map((society, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{ display: 'flex', cursor: 'pointer' }}
                onClick={() => window.open(society.url, '_blank')}
              >
                <CardMedia
                  component="img"
                  sx={{paddingLeft: 1, width: 100, objectFit: 'contain' }}
                  image={society.image} // Use the logo image from the public folder
                  alt={society.name}
                />
                <CardContent>
                  <Typography variant="h6">
                    <strong>{society.name}</strong>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SocietiesPage;
