import css from "./Studio.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./studioSwiper.css";
import { Pagination } from "swiper/modules";

import studio_1 from "../../assets/photos/studio/studio-1.JPG";
import studio_2 from "../../assets/photos/studio/studio-2.JPG";
import studio_3 from "../../assets/photos/studio/studio-3.JPG";
import studio_4 from "../../assets/photos/studio/studio-4.JPG";
import studio_5 from "../../assets/photos/studio/studio-5.JPG";
import studio_6 from "../../assets/photos/studio/studio-6.JPG";
import studio_7 from "../../assets/photos/studio/studio-7.JPG";
import studio_8 from "../../assets/photos/studio/studio-8.JPG";
import studio_9 from "../../assets/photos/studio/studio-9.JPG";

const photos = [
  { src: studio_1, alt: "studio_1" },
  { src: studio_2, alt: "studio_2" },
  { src: studio_3, alt: "studio_3" },
  { src: studio_4, alt: "studio_4" },
  { src: studio_5, alt: "studio_5" },
  { src: studio_6, alt: "studio_6" },
  { src: studio_7, alt: "studio_7" },
  { src: studio_8, alt: "studio_8" },
  { src: studio_9, alt: "studio_9" },
];

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        praesentium repellendus inventore dolorem animi provident culpa sed,
        facere alias magnam ab rem architecto delectus cupiditate, eius
        doloribus distinctio eveniet? Illum eius deserunt dolores magni ullam
        molestias laudantium unde asperiores accusantium iusto quo, ad
        repellendus sit quis enim magnam explicabo minima fugit ratione
        reprehenderit obcaecati aut corrupti eveniet repellat! Laudantium omnis
        ea vitae reiciendis atque, laborum iure eos enim illo nisi doloribus
        placeat corrupti distinctio corporis pariatur inventore culpa, eveniet
        sequi deleniti neque fuga nostrum! Blanditiis sapiente libero officiis
        tempora ullam laudantium fugiat consequuntur, quidem exercitationem
        aspernatur mollitia labore dicta ea!
      </p>
    </div>
  );
};

export default StudioPreview;
