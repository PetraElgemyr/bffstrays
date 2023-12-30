import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./components/Router";
import { useCallback, useEffect, useState } from "react";
import { Post } from "./components/models/Post";
import { Dog } from "./components/models/Dog";
import { AppContext } from "./components/contexts/AppContext";
import {
  getAllDogs,
  getAllPosts,
  getPageDescriptions,
  getSlides,
} from "./components/helpers/RepositoryHelper";
import { Slide } from "./components/models/Slide";
import { PostDescription } from "./components/models/PostDescription";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [pageId, setPageId] = useState<string>("");
  const [slides, setSlides] = useState<Slide[]>([]);
  const [descriptions, setDescriptions] = useState<PostDescription[]>([]);

  const contextValue = {
    posts,
    setPosts,
    dogs,
    setDogs,
    pageId,
    setPageId,
    slides,
    setSlides,
    descriptions,
    setDescriptions,
  };

  const fetchPosts = useCallback(async () => {
    // Fetch posts, filter them and set them to state
    if (posts.length === 0) {
      try {
        const response = await getAllPosts();
        if (response) {
          setPosts(response);
        } else {
          console.log("Inga inlägg");
          setPosts([]);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const fetchDogData = useCallback(async () => {
    if (dogs.length === 0) {
      try {
        const response = await getAllDogs();

        if (response) {
          setDogs(response);
        } else {
          console.log("Inga hundar");
          setDogs([]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const fetchSlides = useCallback(async () => {
    //Fetch slides and set them to state
    if (slides.length === 0) {
      try {
        const response = await getSlides();
        response ? setSlides(response) : setSlides([]);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const fetchDescriptions = useCallback(async () => {
    if (descriptions.length === 0) {
      try {
        const response = await getPageDescriptions();

        response ? setDescriptions(response) : setDescriptions([]);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    fetchPosts();
    fetchDogData();
    fetchSlides();
    fetchDescriptions();
  }, [fetchPosts, fetchDogData, fetchSlides, fetchDescriptions]);

  return (
    <>
      <AppContext.Provider value={contextValue}>
        <RouterProvider router={router}></RouterProvider>
      </AppContext.Provider>
    </>
  );
}

export default App;
