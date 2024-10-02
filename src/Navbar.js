import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" style={{ background: 'linear-gradient(to right, #00C9FF, #92FE9D)' }}>
      <Toolbar>
        <Typography variant="h6">
        MorseMaster
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
