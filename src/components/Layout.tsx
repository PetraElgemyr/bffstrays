import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BehindNavigationDiv } from "../styled/Navigation";
// import { LoadingOverlay } from "./LoadingOverlay";
import { useLoaderContext } from "./hooks/useLoaderContext";
import { LoadingOverlay } from "./LoadingOverlay";
// import { useEffect } from "react";

export const Layout = () => {
  const {
    isLoading,
    // setIsLoading
  } = useLoaderContext();

  // useEffect(() => {
  //   setIsLoading(true);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2500);
  // }, []);

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <BehindNavigationDiv></BehindNavigationDiv>
        {isLoading ? <LoadingOverlay></LoadingOverlay> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};
