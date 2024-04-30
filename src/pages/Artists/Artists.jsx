import { FaPaw } from "react-icons/fa6";

import css from "./Artists.module.css";

import profilePhoto from "../../assets/photos/jagoda-profile2.jpg";
import moonWomen from "../../assets/graphics/moon_women.jpg";
import panda from "../../assets/graphics/panda.jpg";
import otter from "../../assets/graphics/otter.JPG";

import logoPath from "../../assets/logosBrand/leafLogo.png";

import aura_1 from "../../assets/photos/artis-page/aura1.jpg";
import aura_2 from "../../assets/photos/artis-page/aura2.jpg";
import aura_3 from "../../assets/photos/artis-page/aura3.jpg";
import aura_4 from "../../assets/photos/artis-page/aura4.jpg";
import aura_5 from "../../assets/photos/artis-page/aura5.jpg";
import holidays1 from "../../assets/photos/artis-page/holidays1.jpg";
import holidays2 from "../../assets/photos/artis-page/holidays2.jpg";
import painting1 from "../../assets/photos/artis-page/painting1.jpg";

const photos = [
  { src: aura_1, alt: "aura_1" },
  { src: aura_2, alt: "aura_2" },
  { src: aura_3, alt: "aura_3" },
  { src: aura_4, alt: "aura_4" },
  { src: aura_5, alt: "aura_5" },

  { src: holidays1, alt: "holidays1" },
  { src: holidays2, alt: "holidays2" },
  { src: painting1, alt: "painting1" },
];

import { SwiperAutoSlide } from "../../components/SwiperAutoSlide/SwiperAutoSlide";

const Artists = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.wrapperContent}>
        <h2 className={css.titleMain}>O mnie</h2>
        <div className={css.headContainer}>
          <div className={css.photo2}>
            <img src={profilePhoto} alt="Jagoda profile photo"></img>
          </div>
          <div className={css.photo}>
            <img src={moonWomen} alt="Moon women graphic"></img>
          </div>
        </div>

        <div className={css.containerHorizontal}>
          <p className={css.text}>
            Cześć! Mam na imię Jagoda i jestem tatuatorką z pięcioletnim
            doświadczeniem. Prowadzę swoje studio we Wrocławiu o wdzięcznej
            nazwie „Lipna tattoo studio”
          </p>
          <p className={css.text}>
            Czemu Lipna? Trochę zaczepnie, trochę z przekory. Jeśli chodzi o
            tatuaże jestem raczej perfekcjonistką. W moim poprzednim studiu
            zwykło się mówić, że kiedy w studiu jest lipna, to ”nie ma lipy”
            ;-). Mój styl charakteryzuje się precyzyjnym lineartem i
            cieniowaniem. Nazywam go ilustracyjnym, graficznym.
          </p>
        </div>

        <div className={css.containerVertical}>
          <div>
            <h3 className={css.titleSecound}>Tatuuję:</h3>
            <ul className={css.textList}>
              <li>
                <img src={logoPath} alt="logo lipna.ink" />
                Freehand
              </li>
              <li>
                <img src={logoPath} alt="logo lipna.ink" />
                Indywidualne projekty
              </li>
              <li>
                <img src={logoPath} alt="logo lipna.ink" />
                Uwielbiam kobiece graficzne portrety{" "}
              </li>
              <li>
                <img src={logoPath} alt="logo lipna.ink" />
                Fauna i flora
              </li>
            </ul>
          </div>
          <div className={css.photo}>
            <img src={otter} alt="otter graphic"></img>
          </div>
          <div className={css.photo}>
            <img src={panda} alt="panda graphic"></img>
          </div>
          <div>
            <h3 className={css.titleSecound}>Nie tatuuję:</h3>
            <ul className={css.textList}>
              <li>
                <img src={logoPath} alt="logo lipna.ink" />
                Palców
              </li>
              <li>
                <img src={logoPath} alt="logo lipna.ink" />
                Dłoni
              </li>
              <li>
                <img src={logoPath} alt="logo lipna.ink" />
                Warg
              </li>
              <li>
                <img src={logoPath} alt="logo lipna.ink" />
                Męskich miejsc intymnych
              </li>
              <li>
                <img src={logoPath} alt="logo lipna.ink" />
                Nie kopiuje czyichś wzorów
              </li>
            </ul>
          </div>
        </div>

        <div className={css.containerHorizontal}>
          <p className={css.text}>
            W wolnym czasie jestem typową psią matką <FaPaw />, chodzę na długie
            spacery z moją psią córką, ćwiczę jogę, maluje obrazy, czytam
            książki i podróżuje
          </p>
          <div className={css.carousel}>
            <SwiperAutoSlide photos={photos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
