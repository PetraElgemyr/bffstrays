import { Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/pages/HomePage";
import { DogDetails } from "./components/pages/DogDetails";
import { ContactPage } from "./components/pages/ContactPage";
import { AboutPage } from "./components/pages/AboutPage";
import { AdoptedDogsPage } from "./components/pages/AdoptedDogs";
import { DonatePage } from "./components/pages/DonatePage";
import { RegisterInterestPage } from "./components/pages/RegisterInterestPage";
import { SpainPage } from "./components/pages/SpainPage";
import { AdoptionPage } from "./components/pages/AdoptionPage";
import { RequirementsForAdoptionPage } from "./components/pages/RequirementsForAdoptionPage";
import { DiseasesPage } from "./components/pages/DiseasesPage";
import { MythPage } from "./components/pages/MythPage";
import { WorkEthicsPage } from "./components/pages/WorkEthicsPage";
import { AllDogsPage } from "./components/pages/AllDogsPage";

export const router = [
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="hundarna/hundar-som-soker-hem/" element={<AllDogsPage />} />
    <Route path="hundarna/adopterade-hundar" element={<AdoptedDogsPage />} />
    <Route path="hundarna/hundar-som-soker-hem/:id" element={<DogDetails />} />
    <Route path="om-oss" element={<AboutPage />} />
    <Route path="situationen-i-spanien" element={<SpainPage />} />
    <Route
      path="situationen-i-spanien/myter-om-gatuhundar"
      element={<MythPage />}
    />
    <Route path="situationen-i-spanien/sjukdomar" element={<DiseasesPage />} />
    <Route path="om-adoption" element={<AdoptionPage />} />
    <Route
      path="om-adoption/krav-pa-adoptorer"
      element={<RequirementsForAdoptionPage />}
    />
    <Route path="om-oss/vart-arbetssatt" element={<WorkEthicsPage />} />
    <Route path="donera" element={<DonatePage />} />
    <Route path="intresseanmalan" element={<RegisterInterestPage />} />
    <Route path="kontakt" element={<ContactPage />} />
  </Route>,
];
