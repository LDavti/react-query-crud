import React, { FC, memo, ReactElement, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import useBreakpoints from '../../hooks/useBreakpoints';
import { useStyles } from './BackdropModal.styles';

export interface BackdropModalActions {
  handleClose?: () => void;
}

export type Props = {
  children: (actions: BackdropModalActions) => ReactElement;
  opened: boolean;
  handleOpened: (opened: boolean) => void;
  onClose?: () => void;
};

const BackdropModalRoot: FC<Props> = ({
  children,
  opened,
  handleOpened,
  onClose,
}) => {
  const { isMobile } = useBreakpoints();
  const s = useStyles({ isMobile });

  const handleClose = useCallback(() => {
    handleOpened(false);
    if (onClose) {
      onClose();
    }
  }, [handleOpened, onClose]);

  return (
    <Modal open={opened} onClose={handleClose} className={s.modal}>
      {children({ handleClose })}
    </Modal>
  );
};

const BackdropModal = memo(BackdropModalRoot);
export { BackdropModal };
