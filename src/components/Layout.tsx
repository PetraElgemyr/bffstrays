import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BehindNavigationDiv } from "../styled/Common/Common";

export const Layout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <BehindNavigationDiv></BehindNavigationDiv>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};
