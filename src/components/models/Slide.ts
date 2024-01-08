// import * as contentful from "contentful";
import { IMedia } from "./Media";

// export interface SlideImageEntrySkeleton {
//   slideTitle: contentful.EntryFieldTypes.Text;
//   slideImage: IMedia[];
// }

export interface ISlide {
  slideTitle: string;
  slideImage: IMedia[];
}
