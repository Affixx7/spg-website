'use client';
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function FAQAccordion({ faqs }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      {faqs.map((faqCategory, categoryIndex) => (
        <Box key={categoryIndex} sx={{ mb: 6 }}>
          {/* Category Header */}
          <Box sx={{ mb: 3, textAlign: 'center' }}>
            <Chip
              label={faqCategory.category}
              sx={{
                fontSize: '1.1rem',
                py: 3,
                px: 3,
                backgroundColor: '#4a90e2',
                color: 'white',
                fontWeight: 'bold'
              }}
            />
          </Box>

          {/* Questions */}
          {faqCategory.questions.map((item, questionIndex) => {
            const panelId = `${categoryIndex}-${questionIndex}`;
            return (
              <Accordion
                key={panelId}
                expanded={expanded === panelId}
                onChange={handleChange(panelId)}
                sx={{
                  mb: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  '&:before': { display: 'none' },
                  borderRadius: '12px !important',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 6px 16px rgba(0,0,0,0.12)'
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#4a90e2' }} />}
                  sx={{
                    backgroundColor: expanded === panelId ? '#f0f7ff' : 'white',
                    '& .MuiAccordionSummary-content': {
                      my: 2
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <HelpOutlineIcon sx={{ color: '#4a90e2', mr: 2 }} />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: expanded === panelId ? 'bold' : '600',
                        color: '#333'
                      }}
                    >
                      {item.question}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: '#fafafa',
                    pt: 3,
                    pb: 3
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color: '#555',
                      pl: 5
                    }}
                  >
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      ))}
    </Box>
  );
}
