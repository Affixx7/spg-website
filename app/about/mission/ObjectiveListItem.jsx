import React from 'react';
import { ListItem, ListItemText, Typography, List, ListItemIcon } from '@mui/material';

const ObjectiveListItem = ({ primary, secondary, index }) => {
  return (
    <ListItem sx={{ display: 'list-item', pl: 0, mb: 2 }}>
      <ListItemText
        primary={
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            {index + 1}. {primary}
          </Typography>
        }
        secondary={
          // Create a nested List for secondary items styled with bullets
          <List sx={{ padding: 0, listStyleType: 'disc', ml: 4, 'li': { display: 'list-item' } }}>
            {secondary.map((item, i) => (
              <ListItem key={i} sx={{ py: 0, minHeight: 'auto' }}>
                <ListItemText primary={<Typography variant="body2">{item}</Typography>} />
              </ListItem>
            ))}
          </List>
        }
      />
    </ListItem>
  );
};

export default ObjectiveListItem;
