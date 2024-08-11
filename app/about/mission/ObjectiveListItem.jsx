import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const ObjectiveListItem = ({ primary, secondary, index }) => {
  return (
    <ListItem sx={{ display: 'list-item', pl: 0, mb: 2 }}>
      <ListItemText
        primary={
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {index + 1}. {primary}
          </Typography>
        }
        secondary={
          <Typography component="div" variant="body2">
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {secondary.map((item, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>
                  {item}
                </li>
              ))}
            </ul>
          </Typography>
        }
      />
    </ListItem>
  );
};

export default ObjectiveListItem;
