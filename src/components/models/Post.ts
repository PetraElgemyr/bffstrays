import * as contentful from "contentful";
import { Media } from "./Media";

export interface PostEntrySkeleton {
  id: contentful.EntryFieldTypes.Integer;
  title: contentful.EntryFieldTypes.Text;
  pageId: contentful.EntryFieldTypes.Text;
  postText: contentful.EntryFieldTypes.Text;
  img: Media[];
  medias: Media[];
}
