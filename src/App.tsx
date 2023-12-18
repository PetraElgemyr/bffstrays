import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./components/Router";
import { useState } from "react";
import { Post } from "./components/models/Post";
import { Dog } from "./components/models/Dog";
import { AppContext } from "./components/contexts/AppContext";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [dogs, setDogs] = useState<Dog[]>([]);
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
