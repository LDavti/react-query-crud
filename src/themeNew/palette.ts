import { PaletteOptions } from '@mui/material/styles/createPalette';

const palette: PaletteOptions = {
  background: {
    default: 'rgba(0,0,0,0)',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#222222',
    secondary: '#8C9091',
    disabled: '#8C9091',
  },
  primary: {
    main: '#00C092',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#8C9091',
    light: '#E8E8E8',
    dark: '#616161',
    contrastText: '#FFFFFF',
  },
  common: {
    black: '#222222',
    white: '#FFFFFF',
  },
  error: {
    main: '#FF3D00',
  },
  warning: {
    main: '#C88C46',
    dark: '#965E1D',
  },
};

export { palette };
