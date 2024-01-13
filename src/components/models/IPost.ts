import * as contentful from "contentful";
import { IMedia } from "./IMedia";

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
