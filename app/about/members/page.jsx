'use client';

import React from 'react';
import MembersTable from './MembersTable';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function MembersInfo() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      {/* Member Benefits Section */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Member Benefits:
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="Opportunity to create contacts in India, especially if interested in career options in India." />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="To create contacts with globally present Indian Geoscientists." />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="To get recommendations for jobs." />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="Recommendations and advice on green card applications in the US." />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="Professors can communicate with potential students." />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="Opportunity to publish articles in Geohorizons." />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="Eligibility for SPGNA annual award." />
          </ListItem>
        </List>
      </Box>

      {/* Members Table Section */}
      <Box sx={{ mb:4}}>
        {/* <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Members Information:
        </Typography> */}
        <MembersTable />
      </Box>
    </Container>
  );
}

export default MembersInfo;
