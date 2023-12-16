import { createContext } from "react";
import { PostEntrySkeleton } from "../models/Post";

export const PostsContext = createContext<PostEntrySkeleton[]>([]);
