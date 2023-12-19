import { Media } from "./Media";

export interface Dog {
  name: string;
  age: string;
  gender: string;
  weight: number;
  isNeutered: boolean;
  description: string;
  img: Media[];
  size: string;
  isChildFriendly: string;
  isPetFriendly: string;
  medias: Media[];
  isAdopted: boolean;
  id: string;
  breed: string;
  price: number;
}
