// app/components/ThemeProvider.jsx
'use client';

import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#123456',
    },
    secondary: {
      main: '#123456', // Changed to match theme
    },
    background: {
      default: 'rgba(18, 52, 86, 0.02)', // Changed to theme
    },
    text: {
      primary: '#123456', // Changed to theme
      secondary: 'rgba(18, 52, 86, 0.7)', // Changed to theme
    },
    error: {
      main: '#4a6b8a', // Changed to theme gradient color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#123456',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#123456', // Changed to theme
    },
    body1: {
      fontSize: '1rem',
      color: '#123456', // Changed to theme
    },
    body2: {
      fontSize: '0.875rem',
      color: 'rgba(18, 52, 86, 0.7)', // Changed to theme
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Disable uppercase transformation
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#123456', // Override AppBar background
        },
      },
    },
  },
});

export default function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
