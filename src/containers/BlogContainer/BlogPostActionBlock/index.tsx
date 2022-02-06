import React from 'react';
import { Popover, Button, Divider, IconButton } from '@mui/material';
import PendingRoundedIcon from '@mui/icons-material/PendingRounded';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { DeleteConfirmationModal } from '../DeleteConfirmationModal';
import { BlogPostForm } from '../BlogPostForm';
import { useBlogPostContext } from '../../../context/BlogPostContext';
import { useStyles } from './BlogPostActionBlock.styles';

export const BlogPostActionBlock = () => {
  const {
    open,
    handleClick,
    handleClose,
    anchorEl,
    handleRemoveBlogPost,
    item,
    updateBlogPostData,
    setAnchorEl,
    isMutating,
  } = useBlogPostContext();
  const popoverId = open ? 'simple-popover' : undefined;
  const [confirmationModalOpen, setIsConfirmationModalOpen] = React.useState<boolean>(false);
  const [editionModalOpen, setIsEditionModalOpen] = React.useState<boolean>(false);
  const handleOpenEditModal = () => {
    setAnchorEl(null);
    setIsEditionModalOpen(!editionModalOpen);
  };
  const s = useStyles();
  return (
    <>
      <IconButton
        aria-label="open"
        className={s.iconButton}
        onClick={handleClick}
        aria-describedby={popoverId}
      >
        <PendingRoundedIcon className={s.icon} />
      </IconButton>
      <Popover
        open={open}
        onClose={handleClose}
        id={popoverId}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          style: {
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
          },
        }}
      >
        <Button
          color="error"
          fullWidth
          variant="text"
          startIcon={<DeleteOutlineOutlinedIcon color="error" />}
          onClick={(e) => setIsConfirmationModalOpen(!confirmationModalOpen)}
          className={s.button}
        >
          Delete
        </Button>
        <Divider />
        <Button
          color="secondary"
          fullWidth
          variant="text"
          startIcon={<EditOutlinedIcon color="secondary" />}
          onClick={handleOpenEditModal}
          className={s.button}
        >
          Edit
        </Button>
      </Popover>
      <DeleteConfirmationModal
        isOpen={confirmationModalOpen}
        setIsOpen={setIsConfirmationModalOpen}
        handleClick={(e) => {
          handleRemoveBlogPost(e);
          setIsConfirmationModalOpen(false);
        }}
      />
      <BlogPostForm
        title="Edit blog post"
        defaultValues={item}
        onFormSubmit={updateBlogPostData}
        isLoading={isMutating}
        isOpen={editionModalOpen}
        setIsOpen={setIsEditionModalOpen}
      />
    </>
  );
};
