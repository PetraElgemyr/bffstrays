import { createContext, useContext } from "react";
import { Dog } from "../models/Dog";
import { Post } from "../models/Post";
import { Slide } from "../models/Slide";
import { PostDescription } from "../models/PostDescription";

export type AppState = {
  dogs: Dog[];
  setDogs: React.Dispatch<React.SetStateAction<Dog[]>>;
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  pageId: string;
  slides: Slide[];
  setSlides: React.Dispatch<React.SetStateAction<Slide[]>>;
  descriptions: PostDescription[];
  setDescriptions: React.Dispatch<React.SetStateAction<PostDescription[]>>;
};

export const AppContext = createContext<AppState>({} as AppState);
export const useAppContext = () => useContext(AppContext);
