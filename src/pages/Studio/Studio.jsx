// import { Suspense, lazy } from "react";

import css from "./Studio.module.scss";
import { Map } from "../../components/Map/Map";
import studio_3 from "../../assets/photos/studio/studio-3.JPG";

import { photos } from "./StudioImages";
import { SwiperAutoSlide } from "../../components/SwiperAutoSlide/SwiperAutoSlide";

const Studio = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.hero}>
        <h2 className={css.titleMain}>Studio</h2>
        <img src={studio_3} alt="studio" />
      </div>
      <div className={css.textWrapper}>
        <p className={css.text}>
          Witaj w moim studiu, zlokalizowanym w malowniczej oazie zieleni przy
          urokliwym skwerze, otoczonym zabytkowymi kamienicami. Studio mieści
          się przy ulicy Wandy 14/16, w sąsiedztwie alei Józefa Hallera,
          zapewniając łatwy dostęp z każdej części Wrocławia.
        </p>
        <p className={css.text}>
          Wnętrze studia to przemyślana przestrzeń, gdzie każdy detal ma
          znaczenie. Duże, jasne pomieszczenie, wypełnione zielenią roślin,
          obrazami, grafikami oraz nastrojowym oświetleniem, tworzy przyjazną i
          relaksującą atmosferę. Dzięki kameralności studia każde spotkanie
          odbywa się z zachowaniem intymności. Przestrzeń wzbogacona jest
          autorskimi obrazami i grafikami, które możesz podziwiać jak i również
          nabyć.
        </p>
        <p className={css.text}>
          Stawiam na estetykę, jakość oraz bezpieczeństwo, dlatego po skończonej
          sesji możesz kupić wysokiej klasy kosmetyki do pielęgnacji tatuażu.
          Serdecznie zapraszam do odkrycia mojego miejsca, gdzie pasja do sztuki
          spotyka się z dbałością o klienta.
        </p>
      </div>

      <div className={css.slides}>
        <SwiperAutoSlide photos={photos} />
      </div>

      <div className={css.map}>
        <h3 className={css.title}>Dojazd:</h3>
        <Map />
      </div>
    </div>
  );
};

export default Studio;
