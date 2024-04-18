import { Suspense, lazy } from "react";

import { PreviewContainer2 } from "../../components/PreviewContainer2/PreviewContainer2";
import { Button } from "../../components/Button/Button";
import { PreviewContainer } from "../../components/PreviewContainer/PreviewContainer";
// import { SplashScreen } from "../../components/SplashScreen/SplashScreen";

const Reviews = lazy(() => import("../../components/Reviews/Reviews"));
const ArtistsPreview = lazy(() => import("../Artists/ArtistsPreview"));
const ContactPreview = lazy(() => import("../Contact/ContactPreview"));
const FAQPreview = lazy(() => import("../FAQ/FAQPreview"));
const GalleryPreview = lazy(() => import("../Gallery/GalleryPreview"));
const StudioPreview = lazy(() => import("../Studio/StudioPreview"));
const Hero = lazy(() => import("./Hero"));

// import { Opinions } from "../../components/Opinions/Opinions";
// import { ArtistsPreview } from "../Artists/ArtistsPreview";
// import { ContactPreview } from "../Contact/ContactPreview";
// import { FAQPreview } from "../FAQ/FAQPreview";
// import { GalleryPreview } from "../Gallery/GalleryPreview";
// import { ShopPreview } from "../Shop/ShopPreview";
// import { StudioPreview } from "../Studio/StudioPreview";
// import { Hero } from "./Hero";
// import {Footer} from '../../components/Footer/Footer'

const Home = () => {
  return (
    <main>
      <Suspense fallback={<div>LOADING........</div>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<div>LOADING........</div>}>
        <PreviewContainer title={"O Mnie"} color={"beige"}>
          <ArtistsPreview />
          <Button path="artist" text="Dowiedz sie więcej" />
        </PreviewContainer>
      </Suspense>

      <Suspense fallback={<div>LOADING........</div>}>
        <PreviewContainer2 title={"Galeria"} color={"light-green"}>
          <GalleryPreview />
          <Button path="gallery" text="Zobacz pełną galerie" />
        </PreviewContainer2>
      </Suspense>

      <Suspense fallback={<div>LOADING........</div>}>
        <PreviewContainer title={"Studio"} color={"beige"}>
          <StudioPreview />
          <Button path="studio" text="Studio i lokazlizacja" />
        </PreviewContainer>
      </Suspense>

      <Suspense fallback={<div>LOADING........</div>}>
        <PreviewContainer title={"Kontakt"} color={"beige"}>
          <ContactPreview />
          <Button path="contact" text="Wypełnij formularz kontaktowy" />
        </PreviewContainer>
      </Suspense>

      <Suspense fallback={<div>LOADING........</div>}>
        <PreviewContainer2 title={"FAQ"} color={"deep-green"}>
          <FAQPreview />
          <Button path="faq" text="Przejżyj wszytskie Q & A" />
        </PreviewContainer2>
      </Suspense>

      <Suspense fallback={<div>LOADING........</div>}>
        <PreviewContainer2 title={"Opinie"} color={"light-green"}>
          <Reviews />
        </PreviewContainer2>
      </Suspense>
    </main>
  );
};

export default Home;
