import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <footer>
      <Box mt={4} py={2} bgcolor="text.secondary" color="white" textAlign="center">
        <Typography variant="body2">
          &copy; 2024 Deepak Ray. All Rights Reserved. | Contact: <a href="mailto:deepakroy95624@gmail.com" style={{ color: 'white' }}>deepakroy95624@gmail.com</a>
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer;

