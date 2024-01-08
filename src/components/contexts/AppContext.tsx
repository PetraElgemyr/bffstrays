import { createContext, useContext } from "react";
import { IDog } from "../models/Dog";
import { IPost } from "../models/Post";
import { ISlide } from "../models/Slide";
import { IPostDescription } from "../models/PostDescription";
import { ILogo } from "../models/Logo";

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
export const useAppContext = () => useContext(AppContext);
