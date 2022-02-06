import { BlogPostData, UpdateBlogPostData } from '../../types';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
const errorHandler = (response:Response) => {
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
};
export const getPostList = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  errorHandler(response);
  return response.json();
};
export const deletePost = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  errorHandler(response);
  return true;
};
export const editPost = async ({ id, ...data }: Partial<BlogPostData>) => {
  const response = await fetch(
    `${BASE_URL}/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  errorHandler(response);
  return response.json();
};
export const createPost = async (data: UpdateBlogPostData) => {
  const response = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });
  errorHandler(response);
  return response.json();
};
