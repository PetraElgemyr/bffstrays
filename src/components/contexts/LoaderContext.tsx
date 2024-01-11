import { SetStateAction, createContext } from "react";

export type LoaderState = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>;
};

export const LoaderContext = createContext<LoaderState>({} as LoaderState);
