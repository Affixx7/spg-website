import React from 'react';
import { ListItem, ListItemText, Typography, List, Box } from '@mui/material';

const ObjectiveListItem = ({ primary, secondary, index }) => {
  return (
    <ListItem 
      sx={{ 
        display: 'block', 
        pl: 0, 
        mb: 4,
        p: 3,
        borderRadius: 2,
        border: '1px solid rgba(18, 52, 86, 0.1)',
        backgroundColor: 'rgba(18, 52, 86, 0.02)',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: 'rgba(18, 52, 86, 0.05)',
          borderColor: '#123456',
          transform: 'translateX(8px)',
        }
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 700, 
            color: '#123456',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: '#123456',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1rem',
              mr: 2,
              minWidth: 32
            }}
          >
            {index + 1}
          </Box>
          {primary}
        </Typography>
      </Box>
      
      <List sx={{ padding: 0, ml: 5 }}>
        {secondary.map((item, i) => (
          <ListItem 
            key={i} 
            sx={{ 
              py: 0.5, 
              px: 0, 
              minHeight: 'auto',
              '&::before': {
                content: '"•"',
                color: '#123456',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                mr: 1,
              }
            }}
          >
            <Typography variant="body1" sx={{ color: '#172B4D', lineHeight: 1.6 }}>
              {item}
            </Typography>
          </ListItem>
        ))}
      </List>
    </ListItem>
  );
};

export default ObjectiveListItem;
