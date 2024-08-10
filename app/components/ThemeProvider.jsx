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
      main: '#654321',
    },
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
    },
    error: {
      main: '#ff0000',
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
      color: '#654321',
    },
    body1: {
      fontSize: '1rem',
      color: '#333333',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#555555',
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
