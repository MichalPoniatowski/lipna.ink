import { Opinions } from "../../components/Opinions/Opinions";
import { PreviewContainer } from "../../components/PreviewContainer/PreviewContainer";
import { ArtistsPreview } from "../Artists/ArtistsPreview";
import { ContactPreview } from "../Contact/ContactPreview";
import { FAQPreview } from "../FAQ/FAQPreview";
import { GalleryPreview } from "../Gallery/GalleryPreview";
import { ShopPreview } from "../Shop/ShopPreview";
import { StudioPreview } from "../Studio/StudioPreview";
import { Hero } from "./Hero";
import { PreviewContainer2 } from "../../components/PreviewContainer2/PreviewContainer2";
import { Button } from "../../components/Button/Button";

export const Home = () => {
  return (
    <main>
      <Hero />
      <PreviewContainer title={"O Mnie"} color={"beige"}>
        <ArtistsPreview />
        <Button path="artist" text="Dowiedz sie więcej" />
      </PreviewContainer>

      <PreviewContainer2 title={"Galeria"} color={"light-green"}>
        <GalleryPreview />
        <Button path="gallery" text="Zobacz pełną galerie" />
      </PreviewContainer2>

      <PreviewContainer title={"Studio"} color={"beige"}>
        <StudioPreview />
        <Button path="studio" text="Studio i lokazlizacja" />
      </PreviewContainer>

      <PreviewContainer2 title={"Opinie"} color={"light-green"}>
        <Opinions />
      </PreviewContainer2>

      <PreviewContainer title={"Kontakt"} color={"beige"}>
        <ContactPreview />
        <Button path="contact" text="Wypełnij formularz kontaktowy" />
      </PreviewContainer>

      <PreviewContainer2 title={"FAQ"} color={"deep-green"}>
        <FAQPreview />
        <Button path="faq" text="Przejżyj wszytskie Q & A" />
      </PreviewContainer2>

      <PreviewContainer2 title={"ART shop"} color={"beige"}>
        <ShopPreview />
      </PreviewContainer2>
    </main>
  );
};
