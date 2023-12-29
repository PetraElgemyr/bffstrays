import { Post } from "../models/Post";

export const filterPostsPerPage = (allPosts: Post[], pageName: string) => {
  // Filter posts to display on each page
  const postsToDisplay: Post[] = allPosts.filter(
    (post: Post) => post.pageId.toLowerCase() === pageName.toLowerCase()
  );
  // const reversedArray = postsToDisplay.slice().reverse();

  return postsToDisplay;
};
