import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

const useStyles = makeStyles<Theme>(
  ({ palette }) => ({
    postCardWrapper: {
      overflow: 'hidden',
      cursor: 'pointer',
    },
    imageWrapper: {
      position: 'relative',
      height: '18.75rem',
      overflow: 'hidden',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      borderRadius: '.5rem',
    },
    mainImage: {
      height: '100%',
      width: '100%',
    },
    metaWrapper: {
      marginTop: '1.25rem',
      textTransform: 'uppercase',
      display: 'flex',
    },
    body: {
      marginTop: '0.625rem',
      color: palette.text.primary,
    },
    title: {
      color: palette.primary.main,
      marginRight: '0.625rem',
    },
  }),
  {
    name: 'BlogPost',
  },
);

export { useStyles };
