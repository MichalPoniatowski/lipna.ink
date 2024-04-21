import { Swiper, SwiperSlide } from "swiper/react";
import React, { Suspense, useEffect, useRef, useState } from "react";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";
import { Pagination } from "swiper/modules";
import css from "./Gallery.module.css";
import { GALLERY_URL } from "../../../api.URLs.js";
import { toastError } from "../../components/Toasts/Toasts.js";

// import { ButtonEvent } from "../../components/Button/ButtonEvent.jsx";

const API_URL = GALLERY_URL;
let page = 1;
let perPage = 10;
let nextPage = false;

const GalleryPreview = () => {
  const [images, setImages] = useState([]);
  const swiperRef = useRef(null);

  const fetchImages = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          page: page,
          per_page: perPage,
        },
      });

      const convertedResponse = response.data.images.docs.map((image) => ({
        id: image._id,
        imageUrl: `${GALLERY_URL + image._id}`,
        alt: image.image_name,
      }));

      nextPage = response.data.images.hasNextPage;

      return convertedResponse;
    } catch (error) {
      console.log("Error with fetching images from API: ", error.message);
      toastError(
        "Bład podczas pobierania galerii. Przełąduj stronę lub spróbuj za chwilę."
      );
      return [];
    }
  };

  useEffect(() => {
    fetchImages().then((newImages) => {
      setImages(newImages);
    });
  }, []);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const handleSlideChange = () => {
      let imagesToEnd =
        swiperInstance.slides.length - swiperInstance.activeIndex;
      if (imagesToEnd < 3) {
        loadMoreImages();
      }
    };

    if (swiperInstance) {
      swiperInstance.on("slideChange", handleSlideChange);
      return () => {
        swiperInstance.off("slideChange", handleSlideChange);
      };
    }
  }, []);

  const loadMoreImages = async () => {
    if (nextPage) {
      page++;
      const newImages = await fetchImages();
      setImages((prevImages) => [...prevImages, ...newImages]);
    } else {
      console.log("No more results");
      return null;
    }
  };

  const renderImages = () => {
    return images.map((image) => (
      <SwiperSlide key={image.id} className="swiper-slide">
        <img
          src={image.imageUrl}
          alt={image.alt}
          className="swiper-slide img"
          loading="lazy"
        />
      </SwiperSlide>
    ));
  };

  return (
    <div className={css.galleryBgr}>
      <Suspense fallback={<div>LOADING</div>}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination]}
          lazy="true"
          className="gallery-swiper"
          ref={swiperRef}
        >
          {renderImages()}
        </Swiper>
      </Suspense>
    </div>
  );
};

export default GalleryPreview;
