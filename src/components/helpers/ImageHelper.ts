import { IDog } from "../models/IDog";
import { IDogSlide } from "../pages/DogDetails";

export const makeFoundImagesToSlides = (
  dogExists: IDog,
  mediasExist: boolean
) => {
  const createdSlides: IDogSlide[] = [];
  if (mediasExist) {
    dogExists.medias.map((imgObject, index) => {
      const newSlide: IDogSlide = {
        url: imgObject.fields.file.url,
        imgName: `${dogExists.name}-${index.toString()}`,
      };

      createdSlides.push(newSlide);
    });
  } else {
    dogExists.img.map((imgObject, index) => {
      const newSlide: IDogSlide = {
        url: imgObject.fields.file.url,
        imgName: `${dogExists.name}-${index.toString()}`,
      };
      createdSlides.push(newSlide);
    });
  }

  return createdSlides;
};
