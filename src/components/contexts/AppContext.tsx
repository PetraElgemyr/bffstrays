import { createContext } from "react";
import { IDog } from "../models/IDog";
import { IPost } from "../models/IPost";
import { ISlide } from "../models/ISlide";
import { IPostDescription } from "../models/IPostDescription";
import { ILogo } from "../models/ILogo";

export type AppState = {
  dogs: IDog[];
  setDogs: React.Dispatch<React.SetStateAction<IDog[]>>;
  posts: IPost[];
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
  pageId: string;
  slides: ISlide[];
  setSlides: React.Dispatch<React.SetStateAction<ISlide[]>>;
  descriptions: IPostDescription[];
  setDescriptions: React.Dispatch<React.SetStateAction<IPostDescription[]>>;
  logo: ILogo;
  setLogo: React.Dispatch<React.SetStateAction<ILogo>>;
};

export const AppContext = createContext<AppState>({} as AppState);
