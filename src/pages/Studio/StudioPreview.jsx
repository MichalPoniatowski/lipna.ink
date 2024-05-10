import css from "./Studio.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./studioSwiper.css";
import { Pagination } from "swiper/modules";
import { photos } from "./StudioImages";

const StudioPreview = () => {
  const renderImages = () => {
    return photos.map((photo) => (
      <SwiperSlide key={photo.alt} className="swiper-slide">
        <img src={photo.src} alt={photo.alt} className="swiper-slide img" />
      </SwiperSlide>
    ));
  };

  return (
    <div>
      <div className={css.studioSwiper}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="studio-swiper"
        >
          {renderImages()}
        </Swiper>
      </div>
      <p className={css.studioText}>
        Witaj w moim studiu tatuażu, zlokalizowanym w malowniczej oazie zieleni
        przy urokliwym skwerze, otoczonym zabytkowymi kamienicami. Studio mieści
        się przy ulicy Wandy 14/16, w sąsiedztwie alei Józefa Hallera,
        zapewniając łatwy dostęp z każdej części Wrocławia.
      </p>
    </div>
  );
};

export default StudioPreview;
