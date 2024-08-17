import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ImageCard from './ImageCard';

const AwardsSection = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom component="div">
        <strong>SPG-NA Annual Awards 2010</strong>
      </Typography>

      <Typography variant="h6" gutterBottom component="div">
        <strong>Awards Overview</strong>
      </Typography>
      <Typography paragraph>
        In 2010 SPG-NA introduced two annual awards:
      </Typography>
      <Typography paragraph>
        <ul>
          <li>Technical Achievement</li>
          <li>Honorary Member of the Year</li>
        </ul>
        These awards are presented to the selected members at the SPG meeting during the SEG annual conference.
      </Typography>

      <Typography variant="h6" gutterBottom component="div">
        <strong>2010 Award Recipients</strong>
      </Typography>
      <Typography paragraph>
        Dr. Samik Sil was awarded the "Technical Achievement Award".
      </Typography>
      <Typography paragraph>
        Dr. Dhananjay Kumar received the "Honorary Member of the Year Award".
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <ImageCard 
            image="/award1.jpg" 
            title="SPGNA Annual Technical Award: Prof. Mrinal Sen (Univ. of Texas) presenting award to Samil Sil (ConocoPhillips)"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageCard 
            image="/award2.jpg" 
            title="SPGNA Honorable Member of the Year: Prof. Subhashis Mallick (Univ. of Wyoming) presenting award to Dhananjay Kumar (Chevron)"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AwardsSection;