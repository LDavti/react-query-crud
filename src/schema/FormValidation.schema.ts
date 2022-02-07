import * as Yup from 'yup';

export const FormValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .min(1, 'Title must be at least 1 characters')
    .max(1000, 'Title must not exceed 1000 characters'),
  body: Yup.string()
    .required('Body is required')
    .min(1, 'Body must be at least 1 characters')
    .max(1000, 'Body must not exceed 1000 characters'),
});
