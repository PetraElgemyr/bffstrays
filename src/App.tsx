import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { router } from "./Router";
import { useCallback, useEffect, useState } from "react";
import { IPost } from "./components/models/IPost";
import { IDog } from "./components/models/IDog";
import { AppContext } from "./components/contexts/AppContext";
import {
  getAllDescriptions,
  getAllDogs,
  getAllPosts,
  getAllSlides,
  getLogo,
} from "./components/helpers/RepositoryHelper";
import { ISlide } from "./components/models/ISlide";
import { IPostDescription } from "./components/models/IPostDescription";
import { ILogo } from "./components/models/ILogo";
import { LoaderContext } from "./components/contexts/LoaderContext";

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [dogs, setDogs] = useState<IDog[]>([]);
  const [pageId, setPageId] = useState<string>("");
  const [slides, setSlides] = useState<ISlide[]>([]);
  const [descriptions, setDescriptions] = useState<IPostDescription[]>([]);
  const [logo, setLogo] = useState<ILogo>({} as ILogo);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const appContextValue = {
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

  const loaderContextValue = {
    isLoading,
    setIsLoading,
  };

  const getDogs = useCallback(async () => {
    setIsLoading(true);
    const response = await getAllDogs();
    setDogs(response);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (dogs.length > 0) return;
    if (dogs.length === 0) {
      getDogs();
    }
  });

  const getPosts = useCallback(async () => {
    setIsLoading(true);
    const response = await getAllPosts();
    setPosts(response);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (posts.length > 0) return;
    if (posts.length === 0) {
      getPosts();
    }
  });

  const getSlides = useCallback(async () => {
    setIsLoading(true);
    const response = await getAllSlides();
    setSlides(response);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (slides.length > 0) return;
    if (slides.length === 0) {
      getSlides();
    }
  });

  const getDescriptions = useCallback(async () => {
    setIsLoading(true);
    const response = await getAllDescriptions();
    setDescriptions(response);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (descriptions.length > 0) return;
    if (descriptions.length === 0) {
      getDescriptions();
    }
  }, [descriptions, getDescriptions]);

  const getNavLogo = useCallback(async () => {
    setIsLoading(true);
    const fetchedLogo = await getLogo();
    setLogo(fetchedLogo as ILogo);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getDogs();
    getPosts();
    getSlides();
    getDescriptions();
    getNavLogo();
  }, [getDogs, getPosts, getSlides, getDescriptions, getNavLogo]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2500);
  // }, []);

  // if (isLoading) {
  //   return <LoadingOverlay></LoadingOverlay>;
  // } else {
  return (
    <>
      <LoaderContext.Provider value={loaderContextValue}>
        <AppContext.Provider value={appContextValue}>
          <Router>
            <Routes>{router}</Routes>
          </Router>
        </AppContext.Provider>
      </LoaderContext.Provider>
    </>
  );
  // }
}

export default App;
