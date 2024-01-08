import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./components/Router";
import { useCallback, useEffect, useState } from "react";
import { IPost } from "./components/models/Post";
import { IDog } from "./components/models/Dog";
import { AppContext } from "./components/contexts/AppContext";
import {
  getAllDogs,
  getAllPosts,
  getLogo,
  getPageDescriptions,
  getSlides,
} from "./components/helpers/RepositoryHelper";
import { ISlide } from "./components/models/Slide";
import { IPostDescription } from "./components/models/PostDescription";
import { ILogo } from "./components/models/Logo";

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [dogs, setDogs] = useState<IDog[]>([]);
  const [pageId, setPageId] = useState<string>("");
  const [slides, setSlides] = useState<ISlide[]>([]);
  const [descriptions, setDescriptions] = useState<IPostDescription[]>([]);
  const [logo, setLogo] = useState<ILogo>({} as ILogo);

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
    logo,
    setLogo,
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

  const fetchLogo = useCallback(async () => {
    const fetchedLogo: ILogo | null = await getLogo();
    if (fetchedLogo) {
      setLogo(fetchedLogo as ILogo);
    }
  }, []);

  useEffect(() => {
    fetchLogo();
  }, [fetchLogo]);

  useEffect(() => {
    fetchPosts();
    fetchDogData();
    fetchSlides();
    fetchDescriptions();
    fetchLogo();
  }, [fetchPosts, fetchDogData, fetchSlides, fetchDescriptions, fetchLogo]);

  return (
    <>
      <AppContext.Provider value={contextValue}>
        <RouterProvider router={router}></RouterProvider>
      </AppContext.Provider>
    </>
  );
}

export default App;
