import { IMedia } from "./IMedia";

export interface IDog {
  name: string;
  age: string;
  ageGroup: string;
  gender: string;
  weight: number;
  isNeutered: boolean;
  description: string;
  img: IMedia[];
  size: string;
  isChildFriendly: string;
  isPetFriendly: string;
  medias: IMedia[];
  isAdopted: boolean;
  id: string;
  breed: string;
  price: number;
  yearAdopted: number;
}
