import { useContext } from "react";
import { LoaderContext } from "../contexts/LoaderContext";

export const useLoaderContext = () => useContext(LoaderContext);
