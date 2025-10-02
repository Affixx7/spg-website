'use client';
import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Button, 
  Chip,
  Paper,
  Fade,
  Zoom,
  Divider,
  IconButton,
  Tooltip
} from '@mui/material';
import { 
  PictureAsPdf as PdfIcon,
  Download as DownloadIcon,
  Visibility as ViewIcon,
  CalendarToday as CalendarIcon,
  Description as DocumentIcon
} from '@mui/icons-material';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function NewsletterViewer({ newsletters }) {
  const [selectedYear, setSelectedYear] = useState(null);
  const [isViewerLoading, setIsViewerLoading] = useState(false);

  const handleYearClick = (year) => {
    setIsViewerLoading(true);
    setSelectedYear(year);
    setTimeout(() => setIsViewerLoading(false), 300);
  };

  const handleDownload = (file, year) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = `SPGNA_Newsletter_${year}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sortedNewsletters = [...newsletters].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return (
    <Box>
      {/* Section Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 700, 
            mb: 2, 
            color: '#123456',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Newsletter Archive
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#4a6b8a', 
            fontSize: '1.1rem',
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6
          }}
        >
          Access our historical collection of newsletters spanning over a decade of petroleum geoscience excellence.
        </Typography>
      </Box>

      {/* Newsletter Cards Grid */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {sortedNewsletters.map((newsletter, index) => (
          <Grid item xs={12} sm={6} md={3} key={newsletter.year}>
            <Zoom in timeout={300 + (index * 100)}>
              <Card 
                sx={{ 
                  height: '100%',
                  borderRadius: 3,
                  border: selectedYear === newsletter.year ? '2px solid #123456' : '1px solid rgba(18, 52, 86, 0.1)',
                  background: selectedYear === newsletter.year 
                    ? 'linear-gradient(135deg, #123456 0%, #4a6b8a 100%)' 
                    : 'white',
                  color: selectedYear === newsletter.year ? 'white' : 'inherit',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer',
                  transform: selectedYear === newsletter.year ? 'translateY(-8px)' : 'none',
                  boxShadow: selectedYear === newsletter.year 
                    ? '0px 16px 32px rgba(18, 52, 86, 0.3)' 
                    : '0px 4px 12px rgba(18, 52, 86, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0px 12px 24px rgba(18, 52, 86, 0.2)',
                    borderColor: selectedYear === newsletter.year ? '#123456' : 'rgba(18, 52, 86, 0.3)',
                  }
                }}
                onClick={() => handleYearClick(newsletter.year)}
              >
                <CardContent sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Box>
                    <PdfIcon 
                      sx={{ 
                        fontSize: '3rem', 
                        mb: 2,
                        color: selectedYear === newsletter.year ? 'white' : '#123456',
                        opacity: 0.9
                      }} 
                    />
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 700, 
                        mb: 1,
                        color: selectedYear === newsletter.year ? 'white' : '#123456'
                      }}
                    >
                      {newsletter.year}
                    </Typography>
                    <Chip
                      icon={<CalendarIcon sx={{ fontSize: '0.875rem' }} />}
                      label={`${newsletter.year} Edition`}
                      size="small"
                      sx={{
                        backgroundColor: selectedYear === newsletter.year ? 'rgba(255,255,255,0.2)' : 'rgba(18, 52, 86, 0.1)',
                        color: selectedYear === newsletter.year ? 'white' : '#123456',
                        fontWeight: 500,
                        mb: 2
                      }}
                    />
                  </Box>
                  
                  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                    <Tooltip title="View Newsletter">
                      <IconButton 
                        size="small"
                        sx={{ 
                          color: selectedYear === newsletter.year ? 'white' : '#123456',
                          backgroundColor: selectedYear === newsletter.year ? 'rgba(255,255,255,0.1)' : 'rgba(18, 52, 86, 0.1)',
                          '&:hover': {
                            backgroundColor: selectedYear === newsletter.year ? 'rgba(255,255,255,0.2)' : 'rgba(18, 52, 86, 0.2)',
                          }
                        }}
                      >
                        <ViewIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Download PDF">
                      <IconButton 
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(newsletter.file, newsletter.year);
                        }}
                        sx={{ 
                          color: selectedYear === newsletter.year ? 'white' : '#123456',
                          backgroundColor: selectedYear === newsletter.year ? 'rgba(255,255,255,0.1)' : 'rgba(18, 52, 86, 0.1)',
                          '&:hover': {
                            backgroundColor: selectedYear === newsletter.year ? 'rgba(255,255,255,0.2)' : 'rgba(18, 52, 86, 0.2)',
                          }
                        }}
                      >
                        <DownloadIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </CardContent>
              </Card>
            </Zoom>
          </Grid>
        ))}
      </Grid>

      {/* PDF Viewer Section */}
      {selectedYear && (
        <Fade in timeout={500}>
          <Paper 
            elevation={3}
            sx={{ 
              borderRadius: 3,
              overflow: 'hidden',
              border: '1px solid rgba(18, 52, 86, 0.1)'
            }}
          >
            {/* Viewer Header */}
            <Box 
              sx={{ 
                background: 'linear-gradient(135deg, #123456 0%, #4a6b8a 100%)',
                color: 'white',
                p: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 2
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <DocumentIcon sx={{ fontSize: '1.5rem' }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  SPGNA Newsletter - {selectedYear}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                startIcon={<DownloadIcon />}
                onClick={() => {
                  const newsletter = newsletters.find(n => n.year === selectedYear);
                  if (newsletter) handleDownload(newsletter.file, selectedYear);
                }}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Download PDF
              </Button>
            </Box>

            <Divider />
            
            {/* PDF Viewer */}
            <Box sx={{ position: 'relative' }}>
              {isViewerLoading && (
                <Box 
                  sx={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    zIndex: 2
                  }}
                >
                  <Typography>Loading newsletter...</Typography>
                </Box>
              )}
              <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <div
                  style={{
                    height: '800px',
                    background: '#f8f9fa'
                  }}
                >
                  <Viewer 
                    fileUrl={newsletters.find(n => n.year === selectedYear)?.file} 
                  />
                </div>
              </Worker>
            </Box>
          </Paper>
        </Fade>
      )}

      {/* Call to Action */}
      {!selectedYear && (
        <Box 
          sx={{ 
            textAlign: 'center', 
            mt: 6,
            p: 4,
            backgroundColor: 'rgba(18, 52, 86, 0.05)',
            borderRadius: 3,
            border: '1px solid rgba(18, 52, 86, 0.1)'
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              mb: 2, 
              color: '#123456' 
            }}
          >
            Select a Newsletter Above
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#4a6b8a',
              mb: 3
            }}
          >
            Click on any newsletter card to view its contents or download the PDF directly.
          </Typography>
          <Chip 
            label={`${newsletters.length} Issues Available`}
            icon={<DocumentIcon />}
            sx={{
              backgroundColor: '#123456',
              color: 'white',
              fontWeight: 600
            }}
          />
        </Box>
      )}
    </Box>
  );
}
