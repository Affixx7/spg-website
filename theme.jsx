'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

import { createTheme } from '@mui/material/styles';

// Professional Design System for SPG-NA
// Demonstrates: Design tokens, accessibility, consistency, scalability

const theme = createTheme({
  // Color Palette - WCAG AA compliant contrast ratios
  palette: {
    mode: 'light',
    primary: {
      main: '#123456', // Custom theme color
      light: '#4a6b8a',
      dark: '#0b1e2e',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#123456', // Custom theme color
      light: '#4a6b8a',
      dark: '#0b1e2e',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#123456', // Changed to theme color
      light: '#4a6b8a',
      dark: '#0b1e2e',
    },
    warning: {
      main: '#123456', // Changed to theme color
      light: '#4a6b8a',
      dark: '#0b1e2e',
    },
    error: {
      main: '#123456', // Changed to theme color
      light: '#4a6b8a',
      dark: '#0b1e2e',
    },
    info: {
      main: '#123456', // Changed to theme color
      light: '#4a6b8a',
      dark: '#0b1e2e',
    },
    background: {
      default: 'rgba(18, 52, 86, 0.02)', // Changed to theme
      paper: '#FFFFFF',
      elevation1: 'rgba(18, 52, 86, 0.05)', // Changed to theme
      elevation2: 'rgba(18, 52, 86, 0.1)', // Changed to theme
    },
    text: {
      primary: '#123456', // Changed to theme color
      secondary: 'rgba(18, 52, 86, 0.7)', // Changed to theme color
      disabled: 'rgba(18, 52, 86, 0.3)', // Changed to theme color
    },
    divider: '#DFE1E6',
    // Custom gradient palette - ALL using theme colors
    gradients: {
      primary: 'linear-gradient(135deg, #0b1e2e 0%, #123456 50%, #4a6b8a 100%)',
      secondary: 'linear-gradient(135deg, #0b1e2e 0%, #123456 50%, #4a6b8a 100%)',
      success: 'linear-gradient(135deg, #0b1e2e 0%, #123456 50%, #4a6b8a 100%)',
      hero: 'linear-gradient(135deg, #0b1e2e 0%, #123456 50%, #4a6b8a 100%)',
      dark: 'linear-gradient(135deg, #0b1e2e 0%, #123456 100%)',
    }
  },
  
  // Typography System - Follows Material Design 3 principles
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    // Display styles for hero sections
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.015em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.005em',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    button: {
      fontSize: '0.9375rem',
      fontWeight: 600,
      lineHeight: 1.75,
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  
  // Spacing System - 8px base grid
  spacing: 8,
  
  // Shape System - Consistent border radius
  shape: {
    borderRadius: 12,
  },
  
  // Shadow System - Elevation hierarchy
  shadows: [
    'none',
    '0px 2px 4px rgba(23, 43, 77, 0.08)',
    '0px 4px 8px rgba(23, 43, 77, 0.08)',
    '0px 8px 16px rgba(23, 43, 77, 0.08)',
    '0px 12px 24px rgba(23, 43, 77, 0.08)',
    '0px 16px 32px rgba(23, 43, 77, 0.08)',
    '0px 20px 40px rgba(23, 43, 77, 0.1)',
    '0px 24px 48px rgba(23, 43, 77, 0.12)',
    // ... MUI requires 25 shadow levels
    '0px 2px 4px rgba(23, 43, 77, 0.08)',
    '0px 4px 8px rgba(23, 43, 77, 0.08)',
    '0px 8px 16px rgba(23, 43, 77, 0.08)',
    '0px 12px 24px rgba(23, 43, 77, 0.08)',
    '0px 16px 32px rgba(23, 43, 77, 0.08)',
    '0px 20px 40px rgba(23, 43, 77, 0.1)',
    '0px 24px 48px rgba(23, 43, 77, 0.12)',
    '0px 2px 4px rgba(23, 43, 77, 0.08)',
    '0px 4px 8px rgba(23, 43, 77, 0.08)',
    '0px 8px 16px rgba(23, 43, 77, 0.08)',
    '0px 12px 24px rgba(23, 43, 77, 0.08)',
    '0px 16px 32px rgba(23, 43, 77, 0.08)',
    '0px 20px 40px rgba(23, 43, 77, 0.1)',
    '0px 24px 48px rgba(23, 43, 77, 0.12)',
    '0px 2px 4px rgba(23, 43, 77, 0.08)',
    '0px 4px 8px rgba(23, 43, 77, 0.08)',
    '0px 8px 16px rgba(23, 43, 77, 0.08)',
  ],
  
  // Component Customization
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 32px',
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0px 8px 16px rgba(23, 43, 77, 0.12)',
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0px 8px 16px rgba(23, 43, 77, 0.15)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 12px rgba(23, 43, 77, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0px 12px 24px rgba(23, 43, 77, 0.12)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
        elevation1: {
          boxShadow: '0px 4px 12px rgba(23, 43, 77, 0.08)',
        },
      },
    },
  },
  
  // Transitions - Smooth, professional animations
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
});

export default theme;
