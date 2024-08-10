// app/layout.jsx
import React from 'react';
import ThemeProvider from './components/ThemeProvider';  // Use the client-side ThemeProvider
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <ThemeProvider>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>  {/* Main content expands to fill available space */}
          <Footer />  {/* Footer stays at the bottom */}
        </ThemeProvider>
      </body>
    </html>
  );
}
