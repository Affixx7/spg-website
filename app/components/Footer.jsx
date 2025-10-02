'use client';

import React from 'react';
import { 
  Box, 
  Typography, 
  IconButton, 
  Container, 
  Grid, 
  Link, 
  Divider, 
  Button,
  Stack,
  Chip
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';
import Image from 'next/image';
import NextLink from 'next/link';

export default function Footer() {
  const quickLinks = [
    { title: 'About Us', href: '/about/mission'},
    { title: 'Members', href: '/about/members' },
    { title: 'Awards', href: '/about/spgna-awards' },
    { title: 'FAQ', href: '/faq' },
  ];

  const resources = [
    { title: 'Newsletters', href: '/about/newsletters' },
    { title: 'Achievements', href: '/about/achievement' },
    { title: 'Global Societies', href: '/societies' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: 'rgba(18, 52, 86, 0.05)',
        color: '#123456',
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 6 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'transparent',
          pointerEvents: 'none',
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '12px',
                    background: '#123456',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 3,
                    border: '1px solid #123456',
                  }}
                >
                  <Image
                    src="/spg_empty1.svg"
                    alt="SPG-NA Logo"
                    width={32}
                    height={32}
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 0, color: '#123456' }}>
                    SPG-NA
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(18, 52, 86, 0.7)', fontSize: '0.8rem' }}>
                    North American Chapter
                  </Typography>
                </Box>
              </Box>
              
              <Chip
                label="Fostering collaboration between Indian and American geoscientists through innovation, research, and professional excellence."
                sx={{
                  height: 'auto',
                  py: 1.5,
                  px: 2,
                  backgroundColor: 'rgba(18, 52, 86, 0.08)',
                  border: '1px solid rgba(18, 52, 86, 0.2)',
                  borderRadius: '12px',
                  '& .MuiChip-label': {
                    display: 'block',
                    whiteSpace: 'normal',
                    color: 'rgba(18, 52, 86, 0.7)',
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    textAlign: 'left',
                    padding: 0
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(18, 52, 86, 0.12)',
                  }
                }}
              />
              
              <Stack direction="row" spacing={1}>
                <IconButton
                  component="a"
                  href="https://www.facebook.com/SPGNA/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  sx={{
                    color: '#123456',
                    backgroundColor: 'rgba(18, 52, 86, 0.1)',
                    '&:hover': {
                      color: '#ffffff',
                      backgroundColor: '#123456',
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  sx={{
                    color: '#123456',
                    backgroundColor: 'rgba(18, 52, 86, 0.1)',
                    '&:hover': {
                      color: '#ffffff',
                      backgroundColor: '#123456',
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="mailto:secretary@spgna.org"
                  aria-label="Email"
                  sx={{
                    color: '#123456',
                    backgroundColor: 'rgba(18, 52, 86, 0.1)',
                    '&:hover': {
                      color: '#ffffff',
                      backgroundColor: '#123456',
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  <EmailIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                fontSize: '1.1rem',
                color: '#123456'
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={2}>
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  component={NextLink}
                  href={link.href}
                  sx={{
                    color: '#123456',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#0b1e2e',
                      transform: 'translateX(4px)',
                      textDecoration: 'underline'
                    }
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                fontSize: '1.1rem',
                color: '#123456'
              }}
            >
              Resources
            </Typography>
            <Stack spacing={2}>
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  component={NextLink}
                  href={resource.href}
                  sx={{
                    color: '#123456',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#0b1e2e',
                      transform: 'translateX(4px)',
                      textDecoration: 'underline'
                    }
                  }}
                >
                  {resource.title}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* UX Showcase */}
          
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(0, 0, 0, 0.1)' }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 2,
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#123456',
              fontSize: '0.9rem',
              fontWeight: 500
            }}
          >
            © 2025 Society of Petroleum Geophysicists - North America. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
