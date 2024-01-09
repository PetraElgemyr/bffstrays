import * as contentful from "contentful";
import { IMedia } from "./IMedia";

// export interface PostEntrySkeleton {
//   id: contentful.EntryFieldTypes.Integer;
//   title: contentful.EntryFieldTypes.Text;
//   pageId: contentful.EntryFieldTypes.Text;
//   postText: contentful.EntryFieldTypes.Text;
//   img: IMedia[];
//   medias: IMedia[];
//   infoText: contentful.EntryFieldTypes.Text;
// }

export interface IPost {
  id: number;
  title: string;
  pageId: string;
  postText: string;
  img: IMedia[];
  medias: IMedia[];
  infoText: string;
  list: contentful.EntryFieldTypes.RichText;
}
