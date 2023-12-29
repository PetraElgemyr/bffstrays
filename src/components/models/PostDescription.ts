import * as contentful from "contentful";
import { Media } from "./Media";

export interface PostDescriptionEntrySkeleton {
  title: contentful.EntryFieldTypes.Text;
  img: Media[];
  description: contentful.EntryFieldTypes.Text;
}

export interface PostDescription {
  title: string;
  img: Media;
  description: string;
}
