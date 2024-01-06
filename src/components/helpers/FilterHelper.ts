import { Post } from "../models/Post";
import { Slide } from "../models/Slide";

export const filterPostsPerPage = (allPosts: Post[], pageName: string) => {
  // Filter posts to display on each page
  const postsToDisplay: Post[] = allPosts.filter(
    (post: Post) => post.pageId.toLowerCase() === pageName.toLowerCase()
  );
  // const reversedArray = postsToDisplay.slice().reverse();

  return postsToDisplay;
};

export const findSlide = (slides: Slide[], pageName: string) => {
  const spainSlide = slides.find((slide) => {
    return slide.slideTitle.toLowerCase() === pageName.toLowerCase();
  });
  if (spainSlide) return spainSlide;
};
