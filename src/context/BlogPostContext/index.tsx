import React, {
  memo,
  useContext,
  RefObject,
  FC,
  SetStateAction,
  Dispatch,
} from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { deletePost, editPost } from '../../api';
import { BlogPostData, UpdateBlogPostData } from '../../types';

export interface BlockPostContextValue {
  anchorEl: HTMLDivElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLDivElement | null>>;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
  handleClose: (e: React.MouseEvent<HTMLElement>) => void;
  handleRemoveBlogPost: (
    e: React.MouseEvent<HTMLButtonElement> | undefined
  ) => void;
  updateBlogPostData: (data: Partial<BlogPostData>) => Promise<void>;
  open: boolean;
  isLoadingForDelete: boolean;
  item: BlogPostData;
  isMutating: boolean;
}

interface BlogPostProps {
  anchorRef: RefObject<HTMLDivElement>;
  item: BlogPostData;
}

const initialValue: BlockPostContextValue = {
  anchorEl: null,
  handleClick: (_e) => {},
  handleClose: (_e) => {},
  open: false,
  setAnchorEl: () => {},
  handleRemoveBlogPost: (_e) => {},
  isLoadingForDelete: false,
  updateBlogPostData: async (data: Partial<BlogPostData>): Promise<void> => {},
  item: {
    id: 1,
    title: '',
    body: '',
    userId: 1,
  },
  isMutating: false,
};

const BlogPostContext = React.createContext<BlockPostContextValue>(initialValue);

export const BlogPostContextProvider: FC<BlogPostProps> = memo(
  ({ children, anchorRef, item }) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      setAnchorEl(anchorRef.current);
    };
    const handleClose = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const queryClient = useQueryClient();
    const { mutateAsync, isLoading } = useMutation(deletePost, {
      onSuccess: () => {
        const existingData: BlogPostData[] = queryClient.getQueryData('posts') || [];
        const updatedData = existingData.filter(
          (value) => value.id !== item.id,
        );
        queryClient.setQueryData(['posts'], updatedData);
      },
    });
    const { mutateAsync: mutateAsyncUpdate, isLoading: isMutating } = useMutation(editPost, {
      onSuccess: (id: number, data: UpdateBlogPostData) => {
        const existingData: BlogPostData[] = queryClient.getQueryData('posts') || [];
        const updatedData = existingData.map((elem) => (elem.id === data.id ? data : elem));
        queryClient.setQueryData(['posts'], updatedData);
      },
    });
    const handleRemoveBlogPost = async () => {
      await mutateAsync(item.id);
    };
    const updateBlogPostData = async (data: Partial<BlogPostData>) => {
      await mutateAsyncUpdate(data);
    };
    return (
      <BlogPostContext.Provider
        value={{
          open,
          handleClose,
          handleClick,
          anchorEl,
          handleRemoveBlogPost,
          isLoadingForDelete: isLoading,
          item,
          updateBlogPostData,
          isMutating,
          setAnchorEl,
        }}
      >
        {children}
      </BlogPostContext.Provider>
    );
  },
);

export const useBlogPostContext = () => useContext(BlogPostContext);
