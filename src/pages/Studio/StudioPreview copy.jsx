import css from "./Studio.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

import studio_1 from "../../assets/photos/studio/studio-1.JPG";
import studio_2 from "../../assets/photos/studio/studio-2.JPG";
import studio_3 from "../../assets/photos/studio/studio-3.JPG";
import studio_4 from "../../assets/photos/studio/studio-4.JPG";
import studio_5 from "../../assets/photos/studio/studio-5.JPG";
import studio_6 from "../../assets/photos/studio/studio-6.JPG";
import studio_7 from "../../assets/photos/studio/studio-7.JPG";
import studio_8 from "../../assets/photos/studio/studio-8.JPG";
import studio_9 from "../../assets/photos/studio/studio-9.JPG";

export const StudioPreview = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <div className={css.studioSwiper}>
        <Carousel
          responsive={responsive}
          showDots={true}
          // infinite={true}
          arrows={false}
        >
          <img src={studio_1} />
          <img src={studio_2} />
          <img src={studio_3} />
          <img src={studio_4} />
          <img src={studio_5} />
          <img src={studio_6} />
          <img src={studio_7} />
          <img src={studio_8} />
          <img src={studio_9} />
        </Carousel>
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
