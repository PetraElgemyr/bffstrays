import { Post } from "../models/Post";

export const filterPostsPerPage = (allPosts: Post[], pageName: string) => {
  console.log(allPosts, pageName, "tas emot som parametrar");

  const postsToDisplay: Post[] = allPosts.filter(
    (post: Post) => post.pageId.toLowerCase() === pageName.toLowerCase()
  );
  console.log(postsToDisplay, "ska visas");

  return postsToDisplay;
};
