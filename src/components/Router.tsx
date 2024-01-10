import { Route } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "./pages/HomePage";
import { DogDetails } from "./pages/DogDetails";
import { ContactPage } from "./pages/ContactPage";
import { AboutPage } from "./pages/AboutPage";
import { AdoptedDogsPage } from "./pages/AdoptedDogs";
import { DonatePage } from "./pages/DonatePage";
import { RegisterInterestPage } from "./pages/RegisterInterestPage";
import { SpainPage } from "./pages/SpainPage";
import { AdoptionPage } from "./pages/AdoptionPage";
import { RequirementsForAdoptionPage } from "./pages/RequirementsForAdoptionPage";
import { DiseasesPage } from "./pages/DiseasesPage";
import { MythPage } from "./pages/MythPage";
import { WorkEthicsPage } from "./pages/WorkEthicsPage";
import { AllDogsPage } from "./pages/AllDogsPage";

export const router = [
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="hundar-som-soker-hem/" element={<AllDogsPage />} />
    <Route path="adopterade-hundar" element={<AdoptedDogsPage />} />
    <Route path="hundar-som-soker-hem/:id" element={<DogDetails />} />
    <Route path="om-oss" element={<AboutPage />} />
    <Route path="situationen-i-spanien" element={<SpainPage />} />
    <Route path="myter-om-gatuhundar" element={<MythPage />} />
    <Route path="sjukdomar" element={<DiseasesPage />} />
    <Route path="adoption" element={<AdoptionPage />} />
    <Route path="krav-pa-adoptorer" element={<RequirementsForAdoptionPage />} />
    <Route path="vart-arbetssatt" element={<WorkEthicsPage />} />
    <Route path="donera" element={<DonatePage />} />
    <Route path="intresseanmalan" element={<RegisterInterestPage />} />
    <Route path="kontakt" element={<ContactPage />} />
  </Route>,
];
