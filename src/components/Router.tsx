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
        path: "/hundar-som-soker-hem/",
        element: <AllDogsPage></AllDogsPage>,
      },
      {
        path: "/adopterade-hundar",
        element: <AdoptedDogsPage></AdoptedDogsPage>,
      },
      {
        path: "/hundar-som-soker-hem/:id",
        element: <DogDetails></DogDetails>,
      },
      { path: "/om-oss", element: <AboutPage></AboutPage> },
      { path: "/situationen-i-spanien", element: <SpainPage></SpainPage> },
      { path: "/donera", element: <DonatePage></DonatePage> },
      {
        path: "/intresseanmalan",
        element: <RegisterInterestPage></RegisterInterestPage>,
      },
      {
        path: "/kontakt",
        element: <ContactPage></ContactPage>,
      },
    ],
  },
]);
