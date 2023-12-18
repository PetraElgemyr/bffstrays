import { createContext, useContext } from "react";
import { Dog } from "../models/Dog";
import { Post } from "../models/Post";

export type AppState = {
  dogs: Dog[];
  setDogs: React.Dispatch<React.SetStateAction<Dog[]>>;
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  pageId: string;
};

export const AppContext = createContext<AppState>({} as AppState);
export const useAppContext = () => useContext(AppContext);
