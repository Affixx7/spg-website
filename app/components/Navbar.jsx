'use client';

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
  Collapse,
  Stack,
  useScrollTrigger,
  Fade,
  Divider,
  ListItemIcon
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import DropdownAbout from './DropdownAbout';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PublicIcon from '@mui/icons-material/Public';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FolderIcon from '@mui/icons-material/Folder';
import WorkIcon from '@mui/icons-material/Work';
import HelpIcon from '@mui/icons-material/Help';
import ContactMailIcon from '@mui/icons-material/ContactMail';

// Elevate AppBar on scroll for better UX
function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      ...children.props.sx,
      backgroundColor: 'rgba(18, 52, 86, 0.05)',
      color: '#123456',
      backdropFilter: trigger ? 'blur(20px)' : 'blur(10px)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    }
  });
}

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { title: 'Home', path: '/', icon: <HomeIcon /> },
    { title: 'Societies', path: '/societies', icon: <PublicIcon /> },
    { title: 'FAQ', path: '/faq', icon: <HelpIcon /> },
    { title: 'Contact', path: '/contact', icon: <ContactMailIcon /> },
  ];

  const handleNavigation = (path) => {
    router.push(path);
    setDrawerOpen(false);
    setMobileAboutOpen(false);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    if (drawerOpen) setMobileAboutOpen(false);
  };

  const handleAboutClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileAbout = () => {
    setMobileAboutOpen(!mobileAboutOpen);
  };

  const isActive = (path) => pathname === path;

  return (
    <>
      <ElevationScroll>
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: 'rgba(18, 52, 86, 0.05)',
            color: '#123456',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                py: 1,
                minHeight: { xs: '64px', sm: '80px' }
              }}
            >
              {/* Logo and Brand */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
                onClick={() => handleNavigation('/')}
                role="button"
                tabIndex={0}
                aria-label="Go to homepage"
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '12px',
                    background: '#123456',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    border: '1px solid #123456',
                  }}
                >
                  <Image
                    src="/spg_empty1.svg"
                    alt="SPG Logo"
                    width={32}
                    height={32}
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#123456',
                      lineHeight: 1.2,
                    }}
                  >
                    SPG-NA
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'rgba(18, 52, 86, 0.7)',
                      fontWeight: 500,
                    }}
                  >
                    North American Chapter
                  </Typography>
                </Box>
              </Box>

              {/* Desktop Navigation */}
              <Stack
                direction="row"
                spacing={1}
                sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
              >
                <Button
                  onClick={() => handleNavigation('/')}
                  sx={{
                    color: isActive('/') ? '#123456' : 'rgba(18, 52, 86, 0.7)',
                    fontWeight: isActive('/') ? 700 : 600,
                    px: 2,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: isActive('/') ? '80%' : '0%',
                      height: '3px',
                      backgroundColor: '#123456',
                      borderRadius: '2px 2px 0 0',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover': {
                      color: '#123456',
                    },
                    '&:hover::after': {
                      width: '80%',
                    },
                  }}
                >
                  Home
                </Button>

                <Button
                  onClick={handleAboutClick}
                  endIcon={<ExpandMoreIcon />}
                  sx={{
                    color: pathname?.startsWith('/about') ? '#123456' : 'rgba(18, 52, 86, 0.7)',
                    fontWeight: pathname?.startsWith('/about') ? 700 : 600,
                    px: 2,
                    '&:hover': {
                      color: '#123456',
                    },
                  }}
                >
                  About
                </Button>
                <DropdownAbout
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  handleClose={handleDropdownClose}
                />

                {menuItems.slice(1).map((item, index) => (
                  <Button
                    key={index}
                    onClick={() => handleNavigation(item.path)}
                    sx={{
                      color: isActive(item.path) ? '#123456' : 'rgba(18, 52, 86, 0.7)',
                      fontWeight: isActive(item.path) ? 700 : 600,
                      px: 2,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: isActive(item.path) ? '80%' : '0%',
                        height: '3px',
                        backgroundColor: '#123456',
                        borderRadius: '2px 2px 0 0',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover': {
                        color: '#123456',
                      },
                      '&:hover::after': {
                        width: '80%',
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                ))}


              </Stack>

              {/* Mobile Menu Icon */}
              <IconButton
                onClick={toggleDrawer}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  color: '#333333',
                }}
                aria-label="Open menu"
                aria-expanded={drawerOpen}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      {/* Mobile Drawer - Professional Design */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '100%', sm: '380px' },
            backgroundColor: 'background.default',
          },
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Drawer Header */}
          <Box
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
              Menu
            </Typography>
            <IconButton onClick={toggleDrawer} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Drawer Content */}
          <List sx={{ flex: 1, px: 2, py: 2 }}>
            {menuItems.map((item, index) => (
              <ListItem
                key={index}
                onClick={() => handleNavigation(item.path)}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  backgroundColor: isActive(item.path) ? 'primary.light' : 'transparent',
                  color: isActive(item.path) ? 'primary.main' : 'text.primary',
                  '&:hover': {
                    backgroundColor: isActive(item.path) ? 'primary.light' : 'action.hover',
                  },
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontWeight: isActive(item.path) ? 700 : 600,
                  }}
                />
              </ListItem>
            ))}

            <Divider sx={{ my: 2 }} />

            {/* About Section in Mobile */}
            <ListItem
              onClick={toggleMobileAbout}
              sx={{
                borderRadius: 2,
                backgroundColor: pathname?.startsWith('/about') ? 'primary.light' : 'transparent',
                color: pathname?.startsWith('/about') ? 'primary.main' : 'text.primary',
                '&:hover': {
                  backgroundColor: pathname?.startsWith('/about') ? 'primary.light' : 'action.hover',
                },
                cursor: 'pointer',
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText
                primary="About"
                primaryTypographyProps={{
                  fontWeight: pathname?.startsWith('/about') ? 700 : 600,
                }}
              />
              {mobileAboutOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>

            <Collapse in={mobileAboutOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {[
                  { title: 'Mission', path: '/about/mission' },
                  { title: 'Board', path: '/about/board' },
                  { title: 'Members', path: '/about/members' },
                  { title: 'Achievements', path: '/about/achievement' },
                  { title: 'Awards', path: '/about/spgna-awards' },
                  { title: 'Testimonials', path: '/about/testimonial' },
                  { title: 'Code of Conduct', path: '/about/code-of-conduct' },
                  { title: 'Newsletters', path: '/about/newsletters' },
                ].map((subItem, index) => (
                  <ListItem
                    key={index}
                    onClick={() => handleNavigation(subItem.path)}
                    sx={{
                      pl: 8,
                      borderRadius: 2,
                      mb: 0.5,
                      backgroundColor: isActive(subItem.path) ? 'action.selected' : 'transparent',
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                      cursor: 'pointer',
                    }}
                  >
                    <ListItemText
                      primary={subItem.title}
                      primaryTypographyProps={{
                        fontSize: '0.9rem',
                        fontWeight: isActive(subItem.path) ? 600 : 500,
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>

          {/* Drawer Footer */}
          <Box
            sx={{
              p: 3,
              borderTop: '1px solid',
              borderColor: 'divider',
              backgroundColor: 'background.paper',
            }}
          >

          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
