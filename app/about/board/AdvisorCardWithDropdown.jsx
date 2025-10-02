'use client';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';

const AdvisorCardWithDropdown = ({ advisor, expandedCard, setExpandedCard, cardIndex }) => {
  const isExpanded = expandedCard === cardIndex;

  const handleExpandClick = () => {
    setExpandedCard(isExpanded ? null : cardIndex);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const getAvatarColor = (name) => {
    const colors = ['#123456', '#4a6b8a', '#0b1e2e', '#2d5016', '#7b1fa2', '#d32f2f'];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <Paper
      elevation={2}
      sx={{
        borderRadius: 3,
        height: '100%',
        transition: 'all 0.3s ease',
        border: '1px solid #e0e0e0',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0px 12px 24px rgba(18, 52, 86, 0.12)',
          borderColor: '#123456',
        }
      }}
    >
      {/* Main Card Content */}
      <Box sx={{ p: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Avatar
            sx={{
              width: 70,
              height: 70,
              backgroundColor: getAvatarColor(advisor.name),
              color: '#ffffff !important',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              mx: 'auto',
              mb: 2
            }}
          >
            {getInitials(advisor.name)}
          </Avatar>
          
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#123456', mb: 1 }}>
            {advisor.name}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <Chip
              label="Advisor"
              size="small"
              sx={{
                backgroundColor: 'rgba(18, 52, 86, 0.1)',
                color: '#123456',
                fontWeight: 500,
                fontSize: '0.75rem',
                borderRadius: '4px', // Same as the button
              }}
            />
            <IconButton
              onClick={handleExpandClick}
              sx={{
                backgroundColor: isExpanded ? '#123456' : 'rgba(18, 52, 86, 0.1)',
                color: isExpanded ? 'white' : '#123456',
                width: 28,
                height: 28,
                borderRadius: '4px', // Match the chip border radius
                '&:hover': {
                  backgroundColor: isExpanded ? '#0b1e2e' : 'rgba(18, 52, 86, 0.2)',
                },
                transition: 'all 0.3s ease',
              }}
              size="small"
              title={isExpanded ? 'Hide Bio' : 'Show Bio'}
            >
              <InfoIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Collapsible Bio Section */}
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <Box 
          sx={{ 
            px: 4, 
            pb: 4, 
            pt: 2,
            backgroundColor: '#f8f9fa',
            borderTop: '1px solid #e0e0e0'
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#444', 
              lineHeight: 1.8,
              fontSize: '0.95rem',
              textAlign: 'left',
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              letterSpacing: '0.01em',
              '& p': {
                marginBottom: '12px',
              }
            }}
          >
            {advisor.bio}
          </Typography>
        </Box>
      </Collapse>
    </Paper>
  );
};

export default AdvisorCardWithDropdown;