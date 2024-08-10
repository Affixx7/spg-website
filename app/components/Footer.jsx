import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: '#06203e',
        color: 'white',
        mt: 'auto',
      }}
    >
    <Image
            src="/spg_empty1.svg" // Ensure this path is correct relative to the public directory
            width={44} // Adjust the size as needed
            height={55} // Adjust the size as needed
            style={{
                // marginTop: 20,
                // marginBottom: 20,
                // marginRight: 10,
                marginLeft: 10
            }}
    />
      <Box sx={{ ml: 3}}>
              <Typography sx={{ fontWeight: 'bold' }} variant="h7" component="div">
              © 2024 North American Chapter
              </Typography>
              <Typography variant="subtitle2" component="div">
                Society of Petroleum Geophysicists
              </Typography>
            </Box>
      <Box>
        <IconButton
          color="inherit"
          component="a"
          href="https://www.facebook.com/SPGNA/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          sx={{ marginRight: '8px' }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="inherit"
          component="a"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
