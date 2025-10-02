'use client';
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function SocietyCard({ society }) {
  return (
    <Card
      sx={{ display: 'flex', cursor: 'pointer' }}
      onClick={() => window.open(society.url, '_blank')}
    >
      <CardMedia
        component="img"
        sx={{paddingLeft: 1, width: 100, objectFit: 'contain' }}
        image={society.image}
        alt={society.name}
      />
      <CardContent>
        <Typography variant="h6">
          <strong>{society.name}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}
