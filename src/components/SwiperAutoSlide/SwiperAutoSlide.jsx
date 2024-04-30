import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./SwiperAutoSlide.css";

export const SwiperAutoSlide = ({ photos }) => {
  const renderImages = () => {
    return photos.map((photo) => (
      <SwiperSlide key={photo.alt} className="swiper-slide">
        <img
          src={photo.src}
          alt={photo.alt}
          className="swiper-slide img"
          loading="lazy"
        />
      </SwiperSlide>
    ));
  };

  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        lazy="true"
        className="artist-swiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {renderImages()}
      </Swiper>
    </div>
  );
};
