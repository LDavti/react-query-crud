import React, { Dispatch, FC, memo, SetStateAction } from 'react';
import {
  Button,
  Typography,
  FormControl,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UpdateBlogPostData, PostFormData } from '../../../types';
import { BackdropModal, ModalBase } from '../../../components';
import { FormValidationSchema } from '../../../schema/FormValidation.schema';
import { useStyles } from './BlogPostForm.styles';

interface FormProps {
  defaultValues?: PostFormData;
  onFormSubmit: (data: UpdateBlogPostData) => Promise<void>;
  isLoading: boolean;
  title: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export const BlogPostFormRoot: FC<FormProps> = ({
  defaultValues,
  onFormSubmit,
  isLoading,
  isOpen,
  title,
  setIsOpen,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<PostFormData>({
    defaultValues,
    resolver: yupResolver(FormValidationSchema),
    mode: 'onChange',
  });
  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data).then(() => setIsOpen(false));
  });
  // TextAreaResize does not support error field, need to implement via styles
  const isError = Boolean(errors.body?.message);
  const s = useStyles({ isError });
  return (
    <BackdropModal opened={isOpen} handleOpened={setIsOpen}>
      {({ handleClose }) => (
        <ModalBase title={title} isClosable handleClose={handleClose}>
          <form onSubmit={onSubmit}>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                variant="outlined"
                id="title"
                label="Title"
                error={Boolean(errors.title?.message)}
                helperText={errors.title?.message}
                {...register('title', { required: true })}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <Typography variant="caption" className={s.textAreaControl}>
                Body:
              </Typography>
              <TextareaAutosize
                id="body"
                {...register('body', { required: true })}
              />
              {errors.body?.message && (
                <Typography variant="caption" className={s.textAreaControl}>
                  {errors.body.message}
                </Typography>
              )}
            </FormControl>
            {isLoading ? (
              <Typography variant="h5" component="div">
                ...Loading
              </Typography>
            ) : (
              <Button
                onClick={onSubmit}
                disabled={!isDirty || (isDirty && !isValid) || isLoading || !isValid}
                // need (isDirty && !isValid) for create form's first render
                variant="contained"
                className={s.submitButton}
              >
                Submit
              </Button>
            )}
          </form>
        </ModalBase>
      )}
    </BackdropModal>
  );
};
const BlogPostForm = memo(BlogPostFormRoot);
export { BlogPostForm };
