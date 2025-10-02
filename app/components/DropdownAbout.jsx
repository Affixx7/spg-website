'use client';
import React from 'react';
import { 
  Menu, 
  MenuItem, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  Box,
  Typography 
} from '@mui/material';
import { 
  Flag as MissionIcon,
  Gavel as ConductIcon,
  People as BoardIcon,
  PersonAdd as MemberIcon,
  EmojiEvents as AchievementIcon,
  WorkspacePremium as AwardIcon,
  Article as NewsletterIcon,
  Reviews as TestimonialIcon
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';

function DropdownAbout({ anchorEl, open, handleClose }) {
  const router = useRouter();

  const handleMenuItemClick = (path) => {
    router.push(path);
    handleClose();
  };

  const organizationItems = [
    { path: '/about/mission', label: 'Mission', icon: <MissionIcon />, description: 'Our purpose & vision' },
    { path: '/about/code-of-conduct', label: 'Code of Conduct', icon: <ConductIcon />, description: 'Professional standards' },
    { path: '/about/board', label: 'Board', icon: <BoardIcon />, description: 'Leadership team' },
    { path: '/about/members', label: 'Member Info', icon: <MemberIcon />, description: 'Member directory' },
  ];

  const achievementsItems = [
    { path: '/about/achievement', label: 'Achievements', icon: <AchievementIcon />, description: 'Our accomplishments' },
    { path: '/about/spgna-awards', label: 'SPGNA Awards', icon: <AwardIcon />, description: 'Recognition program' },
  ];

  const communicationItems = [
    { path: '/about/newsletters', label: 'Newsletters', icon: <NewsletterIcon />, description: 'Stay informed' },
    { path: '/about/testimonial', label: 'Testimonials', icon: <TestimonialIcon />, description: 'Member experiences' },
  ];

  return (
    <Menu
      id="about-menu"
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={handleClose}
      MenuListProps={{
        onMouseLeave: handleClose,
      }}
      PaperProps={{
        elevation: 8,
        sx: {
          mt: 1.5,
          minWidth: 280,
          borderRadius: 3,
          '& .MuiMenuItem-root': {
            px: 2,
            py: 1.5,
            borderRadius: 2,
            mx: 1,
            my: 0.5,
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.08)',
              transform: 'translateX(4px)',
            },
          },
        },
      }}
    >
      <Box sx={{ px: 2, py: 1 }}>
        <Typography variant="subtitle2" color="primary" fontWeight="600">
          Organization
        </Typography>
      </Box>
      
      {organizationItems.map((item) => (
        <MenuItem key={item.path} onClick={() => handleMenuItemClick(item.path)}>
          <ListItemIcon sx={{ minWidth: 36, color: 'primary.main' }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText 
            primary={item.label}
            secondary={item.description}
            primaryTypographyProps={{ fontWeight: 500, fontSize: '0.95rem' }}
            secondaryTypographyProps={{ fontSize: '0.8rem', color: 'text.secondary' }}
          />
        </MenuItem>
      ))}

      <Divider sx={{ my: 1, mx: 2 }} />
      
      <Box sx={{ px: 2, py: 1 }}>
        <Typography variant="subtitle2" color="primary" fontWeight="600">
          Recognition
        </Typography>
      </Box>
      
      {achievementsItems.map((item) => (
        <MenuItem key={item.path} onClick={() => handleMenuItemClick(item.path)}>
          <ListItemIcon sx={{ minWidth: 36, color: 'primary.main' }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText 
            primary={item.label}
            secondary={item.description}
            primaryTypographyProps={{ fontWeight: 500, fontSize: '0.95rem' }}
            secondaryTypographyProps={{ fontSize: '0.8rem', color: 'text.secondary' }}
          />
        </MenuItem>
      ))}

      <Divider sx={{ my: 1, mx: 2 }} />
      
      <Box sx={{ px: 2, py: 1 }}>
        <Typography variant="subtitle2" color="primary" fontWeight="600">
          Communication
        </Typography>
      </Box>
      
      {communicationItems.map((item) => (
        <MenuItem key={item.path} onClick={() => handleMenuItemClick(item.path)}>
          <ListItemIcon sx={{ minWidth: 36, color: 'primary.main' }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText 
            primary={item.label}
            secondary={item.description}
            primaryTypographyProps={{ fontWeight: 500, fontSize: '0.95rem' }}
            secondaryTypographyProps={{ fontSize: '0.8rem', color: 'text.secondary' }}
          />
        </MenuItem>
      ))}
    </Menu>
  );
}

export default DropdownAbout;
