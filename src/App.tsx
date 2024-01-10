import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { router } from "./components/Router";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (dogs.length > 0) return;

    const getDogs = async () => {
      const response = await getAllDogs();
      setDogs(response);
    };

    if (dogs.length === 0) {
      getDogs();
    }
  });

  useEffect(() => {
    if (posts.length > 0) return;

    const getPosts = async () => {
      const response = await getAllPosts();
      setPosts(response);
    };

    if (posts.length === 0) {
      getPosts();
    }
  });

  useEffect(() => {
    if (slides.length > 0) return;

    const getSlides = async () => {
      const response = await getAllSlides();
      setSlides(response);
    };

    if (slides.length === 0) {
      getSlides();
    }
  });

  useEffect(() => {
    if (descriptions.length > 0) return;

    const getDescriptions = async () => {
      const response = await getAllDescriptions();
      setDescriptions(response);
    };

    if (descriptions.length === 0) {
      getDescriptions();
    }
  });

  useEffect(() => {
    const getNavLogo = async () => {
      const fetchedLogo = await getLogo();
      setLogo(fetchedLogo as ILogo);
    };

    getNavLogo();
  }, []);

  return (
    <>
      <AppContext.Provider value={contextValue}>
        <Router>
          <Routes>{router}</Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
