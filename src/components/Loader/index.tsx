import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { useStyles } from './Loader.styles';

export const Loader = () => {
  const { root } = useStyles();
  return (
    <Box className={root}>
      <CircularProgress />
    </Box>
  );
};
