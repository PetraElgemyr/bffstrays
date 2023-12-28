import * as contentful from "contentful";
import { Media } from "./Media";

export interface PostEntrySkeleton {
  id: contentful.EntryFieldTypes.Integer;
  title: contentful.EntryFieldTypes.Text;
  pageId: contentful.EntryFieldTypes.Text;
  postText: contentful.EntryFieldTypes.Text;
  img: Media[];
  medias: Media[];
  infoText: contentful.EntryFieldTypes.Text;
}

export interface Post {
  id: string;
  title: string;
  pageId: string;
  postText: string;
  img: Media[];
  medias: Media[];
  infoText: string;
}
