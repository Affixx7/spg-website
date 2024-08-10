"use client";
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import DropdownAbout from './DropdownAbout';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Checks if the screen size is 'md' or smaller

  const menuItems = [
    { title: 'Societies', path: '/societies' },
    { title: 'Journals', path: '/journals' },
    { title: 'News', path: '/news' },
    { title: 'Resources', path: '/resources' },
    { title: 'Career Info', path: '/career' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Contact Us', path: '/contact' },
  ];

  const handleNavigation = (path) => {
    router.push(path);
    setDrawerOpen(false); // Close the drawer on navigation
  };

  const handleAboutClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget); // Toggle the dropdown
  };

  const handleDropdownClose = () => {
    setAnchorEl(null); // Close the dropdown
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#1a3f6c' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ padding: 0 }}>
              <Image
                src="/spg_empty1.svg" // Ensure this path is correct relative to the public directory
                width={59} // Adjust the size as needed
                height={70} // Adjust the size as needed
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  marginRight: 10,
                  marginLeft: 10,
                }}
                onClick={() => handleNavigation('/')}
              />
            </IconButton>
            <Box sx={{ ml: 1 }}>
              <Typography sx={{ fontWeight: 'bold' }} variant="h6" component="div">
                North American Chapter
              </Typography>
              <Typography variant="subtitle1" component="div">
                Society of Petroleum Geophysicists
              </Typography>
            </Box>
          </Box>

          {/* Conditional rendering based on screen size */}
          {isMobile ? (
            // Hamburger Menu Icon for Mobile
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ display: { ml: 20, xs: 'flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            // Menu Items for Desktop
            <Box sx={{ display: 'flex' }}>
              <Button
                color="inherit"
                sx={{
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Lighter background color on hover
                  },
                }}
                onClick={() => handleNavigation('/')}
              >
                Home
              </Button>
              <Button
                color="inherit"
                sx={{
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Lighter background color on hover
                  },
                }}
                onClick={handleAboutClick}
              >
                About Us
              </Button>
              <DropdownAbout
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                handleClose={handleDropdownClose}
              />
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  sx={{
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Lighter background color on hover
                    },
                  }}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
          },
        }}
      >
        <List>
          <ListItem button onClick={() => handleNavigation('/')}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={handleAboutClick}>
            <ListItemText primary="About Us" />
          </ListItem>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={() => handleNavigation(item.path)}>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
