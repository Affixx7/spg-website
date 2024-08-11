'use client';

import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const previousOfficeBearersData = [
  {
    title: "Office Bearers (2017 - 2019)",
    data: [
      { role: "President", name: "Samarjit Chakraborty", company: "BP", location: "Houston" },
      { role: "General Secretary", name: "Sanjay Sood", company: "ConocoPhillips", location: "Houston" },
    ]
  },
  {
    title: "Office Bearers (2014 - 2017)",
    data: [
      { role: "President", name: "Abhijit Gangopadhyay", company: "BP", location: "Houston" },
      { role: "Vice-President", name: "Samarjit Chakraborty", company: "BP", location: "Houston" },
      { role: "General Secretary", name: "Sagnik Dasgupta", company: "Schlumberger", location: "Houston" },
      { role: "Web Secretary", name: "Debanjan Datta", company: "UT Austin", location: "" },
    ]
  },
  {
    title: "Office Bearers (2010 - 2012)",
    data: [
      { role: "President", name: "Chandan Kumar", company: "BP", location: "Houston" },
      { role: "Vice-President", name: "Abhijit Gangopadhyay", company: "BP", location: "Houston" },
      { role: "General Secretary", name: "Samarjit Chakraborty", company: "BP", location: "Houston" },
      { role: "Web Secretary", name: "Sri Bharath", company: "WesternGeco", location: "Houston" },
      { role: "Regional Executives", name: "Debraj Mukherjee", company: "University of Wyoming", location: "" },
    ]
  },
  {
    title: "Office Bearers (2010 - 2012)",
    data: [
      { role: "President", name: "Dhananjay Kumar", company: "Chevron", location: "Houston" },
      { role: "Vice-President", name: "Abhijit Gangopadhyay", company: "BP", location: "Houston" },
      { role: "Secretaries", name: "Samik Sil", company: "ConocoPhillips", location: "Houston" },
      { role: "Secretary", name: "Tania Mukherjee", company: "University of Houston", location: "" },
      { role: "Web Secretary", name: "Dip Shankar Nanda", company: "Geokinetics", location: "Houston" },
      { role: "Web Secretary", name: "Pavan Elapavaluri", company: "WesternGeco", location: "Houston" },
      {
        role: "Regional Executives",
        name: "Paritosh Singh",
        company: "Colorado School of Mines",
        location: "Colorado"
      },
      {
        role: "Regional Executives",
        name: "Nishank Saxena",
        company: "Stanford University",
        location: "California"
      },
      {
        role: "Regional Executives",
        name: "Tanima Dutta",
        company: "Exxon Mobil",
        location: "Houston"
      },
    ]
  },
  {
    title: "Office Bearers (2008 - 2010)",
    data: [
      { role: "President", name: "Dhananjay Kumar", company: "Chevron", location: "Houston" },
      { role: "Vice-President", name: "Abhijit Gangopadhyay", company: "BP", location: "Houston" },
      { role: "Secretaries", name: "Imtiaz Ahmed", company: "BP", location: "Houston" },
      { role: "Secretaries", name: "Chandan Kumar", company: "BP", location: "Houston" },
      { role: "Secretaries", name: "Pradip Mukhopadhyay", company: "University of Wyoming", location: "" },
      { role: "Joint-Secretary", name: "Ranjan Dash", company: "Chevron", location: "San Ramon" },
      { role: "Treasurer", name: "Madhav Vyas", company: "WesternGeco", location: "Houston" },
      { role: "Canada Contact", name: "Vishal Kumar", company: "Univ. of British Columbia", location: "Vancouver" },
    ]
  },
  {
    title: "Office Bearers (2002 - 2008)",
    data: [
      { role: "President", name: "Raghu Chunduru", company: "Shell", location: "Houston" },
      { role: "Vice-President", name: "Anubrati Mukherjee", company: "Schlumberger", location: "Houston" },
      { role: "Secretaries", name: "Gopal Palacharla", company: "", location: "" },
      { role: "Joint-Secretary", name: "Prabhakar AadiReddy", company: "Halliburton", location: "Houston" },
      { role: "Treasurer", name: "Subhashis Mallick", company: "WesternGeco", location: "Houston" },
      { role: "Executive", name: "Mrinal K. Sen", company: "University of Texas at Austin", location: "" },
      { role: "Executive", name: "Mrinal Sen Gupta", company: "Petronas", location: "Malaysia" },
      { role: "Executive", name: "Priyank Jaiswal", company: "Rice University", location: "Houston" },
    ]
  }
];

const PreviousOfficersTable = () => {
  return (
    <>
      {previousOfficeBearersData.map((bearer, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{bearer.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              {bearer.data.map((item, idx) => (
                <React.Fragment key={idx}>
                  <Grid item xs={4}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {item.role}
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  {item.name}
                    </Typography>
                    <Typography variant="body2">
                      {item.company}, {item.location}
                    </Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default PreviousOfficersTable;
