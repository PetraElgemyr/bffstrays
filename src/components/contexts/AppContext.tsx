import { createContext, useContext } from "react";
import { DogEntrySkeleton } from "../models/Dog";
import { PostEntrySkeleton } from "../models/Post";

export type AppState = {
  dogs: DogEntrySkeleton[];
  setDogs: React.Dispatch<React.SetStateAction<DogEntrySkeleton[]>>;
  posts: PostEntrySkeleton[];
  setPosts: React.Dispatch<React.SetStateAction<PostEntrySkeleton[]>>;
};

export const AppContext = createContext<AppState>({} as AppState);
export const useAppContext = () => useContext(AppContext);
