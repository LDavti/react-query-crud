import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { spacing } from './spacing';

const theme = createTheme({
  palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography,
  spacing,
});

export { theme };
