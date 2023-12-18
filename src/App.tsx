import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./components/Router";
import { useState } from "react";
import { PostEntrySkeleton } from "./components/models/Post";
import { DogEntrySkeleton } from "./components/models/Dog";
import { AppContext } from "./components/contexts/AppContext";

function App() {
  const [posts, setPosts] = useState<PostEntrySkeleton[]>([]);
  const [dogs, setDogs] = useState<DogEntrySkeleton[]>([]);
  const [pageId, setPageId] = useState<string>("");

  const contextValue = {
    posts,
    setPosts,
    dogs,
    setDogs,
    pageId,
    setPageId,
  };

  return (
    <>
      <AppContext.Provider value={contextValue}>
        <RouterProvider router={router}></RouterProvider>
      </AppContext.Provider>
    </>
  );
}

export default App;
