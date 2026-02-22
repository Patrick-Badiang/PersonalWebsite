import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box, useMediaQuery, useTheme } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: 'background.paper', backdropFilter: 'blur(10px)', boxShadow: 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Button onClick={() => scrollToSection('about')} sx={{ fontSize: '1.25rem', fontWeight: 600, color: 'text.primary' }}>
          Portfolio
        </Button>
        {isMobile ? (
          <>
            <IconButton onClick={() => setIsMenuOpen(true)} sx={{ color: 'text.primary' }}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
              <List sx={{ width: 250 }}>
                {['about', 'projects', 'resume'].map((section) => (
                  <ListItem key={section} disablePadding>
                    <ListItemButton onClick={() => scrollToSection(section)}>
                      <ListItemText primary={section.charAt(0).toUpperCase() + section.slice(1)} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button onClick={() => scrollToSection('about')} sx={{ color: 'text.primary' }}>About</Button>
            <Button onClick={() => scrollToSection('projects')} sx={{ color: 'text.primary' }}>Projects</Button>
            <Button onClick={() => scrollToSection('resume')} sx={{ color: 'text.primary' }}>Resume</Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
