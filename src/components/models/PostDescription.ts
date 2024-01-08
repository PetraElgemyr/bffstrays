import * as contentful from "contentful";
import { IMedia } from "./Media";

export interface PostDescriptionEntrySkeleton {
  title: contentful.EntryFieldTypes.Text;
  img: IMedia[];
  description: contentful.EntryFieldTypes.Text;
}

export interface IPostDescription {
  title: string;
  img: IMedia;
  description: string;
}
