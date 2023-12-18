import * as contentful from "contentful";
import { Media } from "./Media";

export interface DogEntrySkeleton {
  name: contentful.EntryFieldTypes.Text;
  age: contentful.EntryFieldTypes.Text;
  gender: contentful.EntryFieldTypes.Text;
  weight: contentful.EntryFieldTypes.Integer;
  isNeutered: contentful.EntryFieldTypes.Boolean;
  description: contentful.EntryFieldTypes.Text;
  img: Media[];
  size: contentful.EntryFieldTypes.Text;
  isChildFriendly: contentful.EntryFieldTypes.Text;
  isPetFriendly: contentful.EntryFieldTypes.Text;
  medias: Media[];
  isAdopted: contentful.EntryFieldTypes.Boolean;
  id: string;
}

// export interface Dog {
//   name: string;
//   age: string;
//   gender: string;
//   weight: number;
//   isNeutered: boolean;
//   description: string;
//   img: Media[];
//   size: string;
//   isChildFriendly: string;
//   isPetFriendly: string;
//   medias: Media[];
//   isAdopted: boolean;
//   id: string;
// }
