import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Menu, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, toggleDarkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '/projects' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <AppBar position="fixed" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        {isMobile ? (
          <>
            <IconButton 
              edge="end" 
              color="inherit" 
              aria-label="menu" 
              onClick={() => setDrawerOpen(true)}
            >
              <Menu />
            </IconButton>
            <Drawer 
              anchor="right" 
              open={drawerOpen} 
              onClose={() => setDrawerOpen(false)}
            >
              <List sx={{ width: 200 }}>
                {navLinks.map((item, index) => (
                  <ListItem 
                    button 
                    key={index} 
                    component={Link} 
                    to={item.path}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText primary={item.title} />
                  </ListItem>
                ))}
                <ListItem>
                  <IconButton onClick={toggleDarkMode} color="inherit">
                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                  </IconButton>
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <>
            <div>
              {navLinks.map((item, index) => (
                <Button 
                  key={index} 
                  color="inherit" 
                  component={Link} 
                  to={item.path}
                  sx={{ mx: 1 }}
                >
                  {item.title}
                </Button>
              ))}
            </div>
            <IconButton onClick={toggleDarkMode} color="inherit">
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;