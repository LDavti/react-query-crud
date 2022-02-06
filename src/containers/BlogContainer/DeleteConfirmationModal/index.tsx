import React, { FC, useCallback, MouseEvent, memo } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { BackdropModal, ModalBase } from '../../../components';
import useBreakpoints from '../../../hooks/useBreakpoints';
import { useStyles } from './DeleteConfirmationModal.styles';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleClick: (e?: MouseEvent<HTMLButtonElement>) => void;
}

const DeleteConfirmationModalRoot: FC<DeleteConfirmationModalProps> = ({
  isOpen,
  setIsOpen,
  handleClick,
}) => {
  const handleCloseModal = useCallback(() => setIsOpen(false), [setIsOpen]);
  const { isMobile } = useBreakpoints();
  const s = useStyles({ isMobile });
  return (
    <BackdropModal
      opened={isOpen}
      handleOpened={setIsOpen}
      onClose={handleCloseModal}
    >
      {({ handleClose }) => (
        <ModalBase
          title="Are you sure you want to delete this post?"
          subtitle="This action can't be undone"
          handleClose={handleClose}
          isClosable
        >
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection={isMobile ? 'column' : 'row'}
          >
            <Box mr={isMobile ? 0 : 2.5} mb={isMobile ? 2.5 : 0}>
              <Button
                className={s.button}
                type="button"
                onClick={handleClick}
                variant="contained"
                size="large"
                color="primary"
              >
                <Typography variant="h5" component="span">
                  Yes
                </Typography>
              </Button>
            </Box>
            <Box ml={isMobile ? 0 : 2.5}>
              <Button
                className={s.button}
                type="button"
                onClick={handleClose}
                variant="outlined"
                color="primary"
                size="large"
              >
                <Typography variant="h5" component="span" color="primary">
                  No
                </Typography>
              </Button>
            </Box>
          </Box>
        </ModalBase>
      )}
    </BackdropModal>
  );
};
const DeleteConfirmationModal = memo(DeleteConfirmationModalRoot);
export { DeleteConfirmationModal };
