'use client';
import React, { useState } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const NewsletterPreview = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const pdfFiles = {
    2017: '/spgna_newsletter_2017.pdf',
    2011: '/spgna_newsletter_2011.pdf',
    2010: '/spgna_newsletter_2010.pdf',
    2009: '/spgna_newsletter_2009.pdf',
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
    {/* <Box sx={{ textAlign: 'center', padding: 2 }}> */}
      <Typography variant="h4" gutterBottom component="div">
        <strong>SPGNA Newsletters</strong>
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        {Object.keys(pdfFiles).map((year) => (
          <Button
            key={year}
            variant="contained"
            color="primary"
            sx={{ margin: 1 }}
            onClick={() => handleYearClick(year)}
          >
            {year}
          </Button>
        ))}
      </Box>
      <Box sx={{ marginTop: 4 }}>
        {selectedYear && (
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <div
              style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                height: '750px',
              }}
            >
              <Viewer fileUrl={pdfFiles[selectedYear]} />
            </div>
          </Worker>
        )}
      </Box>
    {/* </Box> */}
    </Container>
  );
};

export default NewsletterPreview;
