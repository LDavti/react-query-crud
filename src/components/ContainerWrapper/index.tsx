import React, { FC } from 'react';
import { Box } from '@mui/material';
import cx from 'classnames';
import useBreakpoints from '../../hooks/useBreakpoints';
import { useStyles } from './ContainerWrapper.styles';

interface ContainerWrapperProps{
  className?: string;
  children:React.ReactNode
}
export const ContainerWrapper: FC<ContainerWrapperProps> = ({ className, children }) => {
  const { isMobile } = useBreakpoints();
  const s = useStyles({ isMobile });
  return (
    <Box className={cx(s.root, className)}>
      <Box className={s.containerInner}>{children}</Box>
    </Box>
  );
};
