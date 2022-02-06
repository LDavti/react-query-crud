import { makeStyles } from '@mui/styles';
import { Theme as DefaultTheme } from '@mui/material';
import { CustomStyleProps as Props } from '../../types';

const useStyles = makeStyles<DefaultTheme, Props>(
  ({ palette }) => ({
    modal: {
      position: 'relative',
      maxWidth: '31.25rem',
      boxShadow: '0rem 0.5rem 3rem rgba(0, 0, 0, 0.1)',
      borderRadius: '0.5rem',
      height: ({ isMobile }) => (isMobile ? '100%' : 'auto'),
      width: ({ isMobile }) => (isMobile ? '100%' : 'auto'),
      overflow: 'scroll',
      maxHeight: ({ isMobile }) => (isMobile ? 'unset' : '30rem'),
    },
    title: {
      fontWeight: 700,
    },
    closeIcon: {
      color: palette.common.black,
    },
  }),
  { name: 'ModalBase' },
);
export { useStyles };
