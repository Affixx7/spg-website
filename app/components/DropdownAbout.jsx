'use client';
import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';

function DropdownAbout({ anchorEl, open, handleClose }) {
  const router = useRouter();

  const handleMenuItemClick = (path) => {
    router.push(path);
    handleClose();
  };

  return (
    <Menu
      id="about-menu"
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={handleClose}
      MenuListProps={{
        onMouseLeave: handleClose, // This handles closing when mouse leaves the menu
      }}
    >
      <MenuItem onClick={() => handleMenuItemClick('/about/mission')}>Mission</MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('/about/code-of-conduct')}>Code of Conduct</MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('/about/board')}>Board</MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('/about/members')}>Member Info</MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('/about/achievement')}>Achievement</MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('/about/spgna-awards')}>SPGNA Awards</MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('/about/newsletters')}>Newsletters</MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('/about/testimonial')}>Testimonial</MenuItem>
    </Menu>
  );
}

export default DropdownAbout;
