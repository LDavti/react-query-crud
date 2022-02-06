import React, { useRef, memo, FC } from 'react';
import { Typography, Box } from '@mui/material';
import { BlogPostContextProvider } from '../../../context/BlogPostContext';
import { BlogPostActionBlock } from '../BlogPostActionBlock';
import { BlogPostData } from '../../../types';
import { useStyles } from './BlogPost.styles';

interface IBlogPostProps {
  item: BlogPostData;
  blogPostImage: string;
}

const BlogPostRoot:FC<IBlogPostProps> = ({ item, blogPostImage }: IBlogPostProps) => {
  const blogItemRef = useRef<HTMLDivElement>(null);
  const s = useStyles();
  const { title, body } = item;
  return (
    <Box className={s.postCardWrapper}>
      <Box className={s.imageWrapper}>
        <BlogPostContextProvider anchorRef={blogItemRef} item={item}>
          <div ref={blogItemRef} />
          <BlogPostActionBlock />
        </BlogPostContextProvider>
        <img src={blogPostImage} alt={title} className={s.mainImage} />
      </Box>
      <Box className={s.metaWrapper}>
        <Box className={s.title}>
          <Typography variant="subtitle2">{title}</Typography>
        </Box>
      </Box>
      <Typography className={s.body} variant="h4">
        {body}
      </Typography>
    </Box>
  );
};
const BlogPost = memo(BlogPostRoot);
export { BlogPost };
