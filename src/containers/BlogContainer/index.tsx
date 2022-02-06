import React, { FC } from 'react';
import { Typography, Grid, IconButton, Box } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import { getPostList, createPost } from '../../api';
import { BlogPostData, UpdateBlogPostData } from '../../types';
import { BlogPost } from './BlogPost';
import { Loader } from '../../components/Loader';
import { BlogPostForm } from './BlogPostForm';
import { useStyles } from './BlogContainer.styles';

export const BlogContainer: FC = () => {
  const s = useStyles();
  const { data: blogData, status } = useQuery('posts', getPostList);
  const queryClient = useQueryClient();
  const [isCreateFormOpen, setIsCreateFormOpen] = React.useState<boolean>(false);
  const { mutateAsync, isLoading } = useMutation(createPost, {
    onSuccess: (data: BlogPostData) => {
      const existingData: BlogPostData[] = queryClient.getQueryData('posts') || [];
      existingData.unshift(data as BlogPostData);
      queryClient.setQueryData(['posts'], existingData);
    },
  });
  const getStaticImageUrl = (id: number): string => `https://picsum.photos/500/300?random=${id}`;
  const onFormSubmit = async (data: UpdateBlogPostData) => {
    await mutateAsync(data);
  };
  if (status === 'error') {
    return <Typography variant="h1">{blogData.error.message}</Typography>;
  }
  return status === 'loading' ? (
    <Loader />
  ) : (
    <>
      <Box className={s.root}>
        <Typography component="h1" variant="h1" color="primary">
          #BLOG
        </Typography>
        <Grid container spacing={5}>
          {blogData
            && blogData.map((item: BlogPostData) => (
              <Grid key={item.id} xs={12} sm={6} md={6} lg={4} item>
                <BlogPost
                  blogPostImage={getStaticImageUrl(item.id)}
                  item={item}
                />
              </Grid>
            ))}
        </Grid>
        <IconButton
          className={s.createButton}
          onClick={(e) => setIsCreateFormOpen(true)}
        >
          <AddCircleTwoToneIcon fontSize="inherit" className={s.createIcon} />
        </IconButton>
      </Box>
      <BlogPostForm
        onFormSubmit={onFormSubmit}
        isLoading={isLoading}
        isOpen={isCreateFormOpen}
        setIsOpen={setIsCreateFormOpen}
        title="Create new blog post"
      />
    </>
  );
};
