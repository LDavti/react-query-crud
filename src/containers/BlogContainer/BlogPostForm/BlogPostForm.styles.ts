import { makeStyles } from '@mui/styles';
import { Theme as DefaultThemeProps } from '@mui/system';

interface Props {
  isError: boolean;
}
const useStyles = makeStyles<DefaultThemeProps, Props>(
  ({ palette }) => ({
    textAreaControl: {
      color: ({ isError }) => (isError ? palette.error.main : palette.common.black),
      textAlign: 'left',
    },
    submitButton: {
      marginTop: '1rem',
    },
  }),
  { name: 'BlogPostForm' },
);

export { useStyles };
