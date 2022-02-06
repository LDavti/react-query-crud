import React, { FC, memo } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import cx from 'classnames';
import { BackdropModalActions } from '../BackdropModal';
import useBreakpoints from '../../hooks/useBreakpoints';
import { useStyles } from './ModalBase.styles';

export interface ModalBaseMainProps {
  title: string;
  subtitle?: string;
  className?: string;
  isClosable?: boolean;
  children?: React.ReactChildren | React.ReactNode;
  handleClose?: () => void;
}
type ModalBaseProps = ModalBaseMainProps & BackdropModalActions;
const ModalBaseRoot: FC<ModalBaseProps> = ({
  title,
  subtitle,
  handleClose,
  isClosable,
  children,
  className,
}) => {
  const { isMobile } = useBreakpoints();
  const s = useStyles({ isMobile });
  return (
    <Box
      p={isMobile ? 2.5 : 7.5}
      pt={6.5}
      className={cx(className, s.modal)}
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      bgcolor="common.white"
    >
      {isClosable && (
        <Box margin={2.5} position="absolute" top="0" right="0" zIndex="1">
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseOutlinedIcon className={s.closeIcon} />
          </IconButton>
        </Box>
      )}
      <Box pb={children ? 1.25 : 2.5}>
        <Typography variant="body1" component="h5" className={s.title}>
          {title}
        </Typography>
      </Box>
      {subtitle && (
        <Box pb={isMobile ? 2.5 : 5}>
          <Typography component="span" variant="body1">
            {subtitle}
          </Typography>
        </Box>
      )}
      {children}
    </Box>
  );
};
const ModalBase = memo(ModalBaseRoot);
export { ModalBase };
