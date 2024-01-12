import { IDog } from "../models/IDog";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";

export const filterPostsPerPage = (allPosts: IPost[], pageName: string) => {
  const postsToDisplay: IPost[] = allPosts.filter(
    (post: IPost) => post.pageId.toLowerCase() === pageName.toLowerCase()
  );

  postsToDisplay.sort((a, b) => a.id - b.id);
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
