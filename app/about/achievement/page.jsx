import ImageCard from './ImageCard';
import Grid from '@mui/material/Grid'
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const ObjectivesSection = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom component="div">
        <strong>Achievements</strong>
      </Typography>

      <Typography variant="h6" gutterBottom component="div">
        <strong>Publications</strong>
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Successfully published a special issue of journal 'Geohorizons' in Dec. 2009." />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom component="div">
        <strong>Support for Conferences</strong>
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Puneet Saraswat (student, ISMU), SEG-2011" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Shaunak Ghosh (Student, IIT Kharagpur), AGU-2010" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Vishal Das (Student, ISMU), SEG-2010" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Rima Chatterjee (Professor, ISMU), SEG-2009" />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom component="div">
        <strong>Career Guidance</strong>
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Internship options" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Full-time job opportunities" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Admission into graduate school and financial assistantship" />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom component="div">
        <strong>Educational Contributions</strong>
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Various short courses were taught by SPG-NA members in India during biannual SPG-India conference." />
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <ImageCard 
            image="/achievement1.jpg" 
            title="Priyank Jaiswal presenting SPGNA 2010 scholarship to a student from India (Shaunak Ghosh) to attend/present paper at AGU-2010" 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageCard 
            image="/achievement2.jpg" 
            title="Abhijit Gangopadhyay presenting SPGNA 2011 scholarship to a student from India (Puneet Saraswat) to attend/present paper at SEG-2011" 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageCard 
            image="/achievement3.jpeg" 
            title="Supported a faculty from India to attend/present paper at SEG-2009" 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageCard 
            image="/achievement4.jpeg" 
            title="Supported a student from India to attend/present paper at SEG-2010" 
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ObjectivesSection;

