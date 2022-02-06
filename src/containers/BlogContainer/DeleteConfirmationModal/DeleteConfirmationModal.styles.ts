import { makeStyles } from '@mui/styles';
import { Theme as DefaultTheme } from '@mui/material';
import { CustomStyleProps as Props } from '../../../types';

const useStyles = makeStyles<DefaultTheme, Props>(
  () => ({
    button: {
      width: ({ isMobile }) => (isMobile ? '100%' : '10.625rem'),
      height: '3.75rem',
    },
  }),
  { name: 'DeleteConfirmationModal' },
);
export { useStyles };
