import { Suspense, lazy } from "react";

import { PreviewContainer2 } from "../../components/PreviewContainer2/PreviewContainer2";
import { Button } from "../../components/Button/Button";
import { PreviewContainer } from "../../components/PreviewContainer/PreviewContainer";
import { Loader } from "../../components/Loader/Loader";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import artisPreviewImgPath from "../../assets/photos/place-holders/jagoda-profile-place_holder.jpg";
import studioPreviewImgPath from "../../assets/photos/place-holders/studio-place_holder.jpg";
import galleryPreviewImgPath from "../../assets/photos/place-holders/gallery-place_holder.jpg";

import {
  SkeletonHeroLoader,
  SkeletonLoader,
  SkeletonGallerLoader,
  SkeletonLoader2,
} from "../../components/SkeletonLoader/SkeletonLoader";

const Reviews = lazy(() => import("../../components/Reviews/Reviews"));
const ArtistsPreview = lazy(() => import("../Artists/ArtistsPreview"));
const ContactPreview = lazy(() => import("../Contact/ContactPreview"));
const FAQPreview = lazy(() => import("../FAQ/FAQPreview"));
const GalleryPreview = lazy(() => import("../Gallery/GalleryPreview"));
const StudioPreview = lazy(() => import("../Studio/StudioPreview"));
const Hero = lazy(() => import("./Hero"));

const Home = () => {
  return (
    <main>
      <Suspense fallback={<SkeletonHeroLoader />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<SkeletonLoader previePath={artisPreviewImgPath} />}>
        <PreviewContainer title={"O Mnie"} color={"beige"}>
          <ArtistsPreview />
          <Button path="artist" text="Dowiedz sie więcej" />
        </PreviewContainer>
      </Suspense>

      <Suspense
        fallback={<SkeletonGallerLoader previePath={galleryPreviewImgPath} />}
      >
        <PreviewContainer2 title={"Galeria"} color={"light-green"}>
          <GalleryPreview />
          <Button path="gallery" text="Zobacz pełną galerie" />
        </PreviewContainer2>
      </Suspense>

      <Suspense fallback={<SkeletonLoader previePath={studioPreviewImgPath} />}>
        <PreviewContainer title={"Studio"} color={"beige"}>
          <StudioPreview />
          <Button path="studio" text="Studio i lokazlizacja" />
        </PreviewContainer>
      </Suspense>

      <Suspense fallback={<SkeletonLoader2 />}>
        <PreviewContainer title={"Kontakt"} color={"beige"}>
          <ContactPreview />
          <Button path="contact" text="Wypełnij formularz kontaktowy" />
        </PreviewContainer>
      </Suspense>

      <Suspense fallback={<SkeletonLoader2 />}>
        <PreviewContainer2 title={"FAQ"} color={"deep-green"}>
          <FAQPreview />
          <Button path="faq" text="Przejżyj wszytskie Q & A" />
        </PreviewContainer2>
      </Suspense>

      <Suspense fallback={<SkeletonLoader2 />}>
        <PreviewContainer2 title={"Opinie"} color={"light-green"}>
          <Reviews />
        </PreviewContainer2>
      </Suspense>

      {/* <SkeletonHeroLoader /> */}
    </main>
  );
};

export default Home;
