import { makeStyles } from '@mui/styles';
import { Theme as DefaultTheme } from '@mui/material/styles';
import { CustomStyleProps as Props } from '../../types';

const useStyles = makeStyles<DefaultTheme, Props>(
  () => ({
    root: {
      display: 'flex',
      width: '100%',
      alignItems: 'stretch',
      justifyContent: 'center',
      flexDirection: ({ isMobile }) => (isMobile ? 'column' : 'row'),
    },
    containerInner: {
      maxWidth: '86.75rem',
      padding: ({ isMobile }) => (isMobile ? '0 1.25rem' : '0 .625rem'),
    },
  }),
  { name: 'ContainerWrapper' },
);

export { useStyles };
