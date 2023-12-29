import * as contentful from "contentful";
import { Media } from "./Media";

export interface SlideImageEntrySkeleton {
  slideTitle: contentful.EntryFieldTypes.Text;
  slideImage: Media[];
}

export interface Slide {
  slideTitle: string;
  slideImage: Media[];
}
