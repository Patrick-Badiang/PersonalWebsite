// AppHeader.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const EllipseButton = styled(Button)(({ theme, selected }) => ({
  color: theme.palette.text.primary,
  backgroundColor: selected ? theme.palette.secondaryContainer: 'transparent',
  borderRadius: '100px', // pill shape
  padding: '6px 16px',
fontSize: '1.20rem', // smaller font size
  margin: '0 8px',
  textTransform: 'none',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  '&:hover': {
    backgroundColor: selected ? theme.palette.secondaryContainer : theme.palette.action.hover,
  }
}));

const AppHeader = () => {
  const [selected, setSelected] = useState('Home');

  const handleClick = (label) => {
    setSelected(label);
    // Optionally scroll to section or trigger route
  };

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        {/* Left Section */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          {['Home', 'About'].map(label => (
            <EllipseButton
              key={label}
              selected={selected === label}
              onClick={() => handleClick(label)}
            >
              {label}
            </EllipseButton>
          ))}
        </Box>

        {/* Center Section */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
          <EllipseButton
            selected={selected === 'Projects'}
            onClick={() => handleClick('Projects')}
          >
            Projects
          </EllipseButton>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          {['Socials', 'Contact'].map(label => (
            <EllipseButton
              key={label}
              selected={selected === label}
              onClick={() => handleClick(label)}
            >
              {label}
            </EllipseButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
