import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "./pages/HomePage";
import { AllDogsPage } from "./pages/AllDogsPage";
import { DogDetails } from "./pages/DogDetails";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
import { AdoptedDogsPage } from "./pages/AdoptedDogs";
import { DonatePage } from "./pages/DonatePage";
import { RegisterInterestPage } from "./pages/RegisterInterestPage";
import { SpainPage } from "./pages/SpainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <HomePage></HomePage> },
      {
        path: "/hundarsomsokerhem",
        element: <AllDogsPage></AllDogsPage>,
      },
      {
        path: "/adopteradehundar",
        element: <AdoptedDogsPage></AdoptedDogsPage>,
      },
      {
        path: "/hundarsomsokerhem/:id",
        element: <DogDetails></DogDetails>,
      },
      {
        path: "/intresseanmalan",
        element: <RegisterInterestPage></RegisterInterestPage>,
      },
      {
        path: "/kontakt",
        element: <ContactPage></ContactPage>,
      },
      { path: "/omoss", element: <AboutPage></AboutPage> },
      { path: "/donera", element: <DonatePage></DonatePage> },
      { path: "/situationenispanien", element: <SpainPage></SpainPage> },
    ],
  },
]);
