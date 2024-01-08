import { IDog } from "../models/Dog";
import { IPost } from "../models/Post";
import { ISlide } from "../models/Slide";

export const filterPostsPerPage = (allPosts: IPost[], pageName: string) => {
  // Filter posts to display on each page
  const postsToDisplay: IPost[] = allPosts.filter(
    (post: IPost) => post.pageId.toLowerCase() === pageName.toLowerCase()
  );
  // const reversedArray = postsToDisplay.slice().reverse();

  return postsToDisplay;
};

export const findSlide = (slides: ISlide[], pageName: string) => {
  const spainSlide = slides.find((slide) => {
    return slide.slideTitle.toLowerCase() === pageName.toLowerCase();
  });
  if (spainSlide) return spainSlide;
};

export const filterAdoptedDogs = (dogs: IDog[], isAdopted: boolean) => {
  const dogsToReturn: IDog[] = dogs.filter(
    (dog) => dog.isAdopted === isAdopted
  );
  return dogsToReturn;
};
