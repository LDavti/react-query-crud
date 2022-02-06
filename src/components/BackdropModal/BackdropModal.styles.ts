import { makeStyles } from '@mui/styles';
import { Theme as DefaultTheme } from '@mui/material';
import { CustomStyleProps as Props } from '../../types';

const useStyles = makeStyles<DefaultTheme, Props>(() => ({
  modal: {
    display: 'flex',
    alignItems: ({ isMobile }) => (isMobile ? 'baseline' : 'center'),
    justifyContent: ({ isMobile }) => (isMobile ? 'baseline' : 'center'),
  },
}), {
  name: 'BackdropModal',
});

export { useStyles };
