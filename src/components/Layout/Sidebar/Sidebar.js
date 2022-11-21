import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import EditIcon from '@mui/icons-material/Edit';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

const drawerWidth = 240;

const menuItems = [
  { label: "Questionnaire", icon: <HelpCenterIcon /> },
  { label: "JSON Editor", icon: <EditIcon /> }
];

export default function Sidebar({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          {menuItems.map((item) => {
            return (
              <ListItem key={item.label} >
                <ListItemButton>
                  <ListItemIcon>
                    <div style={{ marginRight: "10px" }}>{item.icon}</div>
                    <ListItemText primary={item.label} />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            )
          })}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}