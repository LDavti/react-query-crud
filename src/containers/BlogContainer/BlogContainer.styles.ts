import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      backgroundColor: theme.palette.secondary.text,
    },
    createButton: {
      position: 'fixed',
      overflow: 'hidden',
      bottom: 0,
      right: '1.625rem',
      borderRadius: '.5rem',
      fontSize: '4rem',
      justifyContent: 'end',
      zIndex: 40,
    },
    pre: {
      whiteSpace: 'pre-wrap',
    },
    createIcon: {
      '& > path': {
        opacity: 1,
        fill: theme.palette.common.white,
      },
      '& > path ~ path': {
        fill: theme.palette.primary.main,
      },
    },
  }),
  { name: 'BlogContainer' },
);

export { useStyles };
