import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const useStyles = makeStyles<Theme>(
  ({ palette }) => ({
    iconButton: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      zIndex: 20,
    },
    icon: {
      color: palette.common.white,
    },
    button: {
      justifyContent: 'flex-start',
      color: palette.text.primary,
      fontWeight: 700,
    },
  }),
  { name: 'BlogPostActionBlock' },
);

export { useStyles };
