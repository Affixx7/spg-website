// 'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function CodeOfConductPage() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      {/* Code of Conduct Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Code of Conduct
        </Typography>
        <Typography variant="body1" component="p" sx={{ lineHeight: 1.6, marginBottom: 2 }}>
          Membership of any class shall be contingent upon conformance with the established principles of professional ethics.
        </Typography>

        {/* Bulleted Points */}
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="Honesty, integrity, loyalty, fairness, impartiality, fidelity to trust and inviolability of confidence are incumbent upon every member as professional obligations." />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="Members shall not make false, misleading, or unwarranted statements, representation, or claims in regard to professional matters, nor shall they engage in false or deceptive advertising." />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="Members shall not falsely or maliciously attempt to injure the reputation of others." />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="Members shall endeavour to cooperate with others in the profession and shall encourage the ethical dissemination of Geoscientific knowledge." />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}

