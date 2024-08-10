import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ImageCardGrid from './components/ImageCardGrid';

export default function Home() {
  return (
    // <div>
    //   <h1>Welcome to Our Site</h1>
    //   <ImageCardGrid />
    // </div>
    // <Container>
      <Box
        sx={{
          m: 4,
          display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
        }}
      >
       <ImageCardGrid/>
      </Box>
    // </Container>
  );
}
