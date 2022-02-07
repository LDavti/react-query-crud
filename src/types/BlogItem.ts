export interface BlogPostData {
  id: number;
  body: string;
  title: string;
  userId: number;
}
export type UpdateBlogPostData = Partial<BlogPostData>
