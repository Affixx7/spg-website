'use client';

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
import DropdownAbout from './DropdownAbout'; // Adjust the path as necessary

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // For About Us dropdown
  const router = useRouter();

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

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleAboutClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget); // Toggle the dropdown
  };

  const handleDropdownClose = () => {
    setAnchorEl(null); // Close the dropdown
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#1a3f6c' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ padding: 0 }}>
              <Image
                src="/spg_empty1.svg"
                alt="SPG Logo"
                width={59}
                height={70}
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

          {/* Menu Items for Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              color="inherit"
              sx={{
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
                onClick={() => handleNavigation(item.path)}
              >
                {item.title}
              </Button>
            ))}
          </Box>

          {/* Hamburger Menu Icon for Mobile */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
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

          {/* Expandable About Us Section for Mobile */}
          <ListItem button onClick={handleAboutClick}>
            <ListItemText primary="About Us" />
          </ListItem>
          <DropdownAbout
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            handleClose={handleDropdownClose}
          />

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
