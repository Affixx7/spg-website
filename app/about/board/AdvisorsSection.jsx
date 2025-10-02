'use client';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import AdvisorCardWithDropdown from './AdvisorCardWithDropdown';

const AdvisorsSection = ({ advisors }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <Grid container spacing={4}>
      {advisors.map((advisor, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <AdvisorCardWithDropdown
            advisor={advisor}
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
            cardIndex={index}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default AdvisorsSection;