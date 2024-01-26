import css from "./Gallery.module.css";
import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";
import { Pagination } from "swiper/modules";
import axios from "axios";

const KEY = "36285861-168bae95e05873f7547dc914e";
const API_URL = "https://pixabay.com/api/?";
let page = 1;
let perPage = 40;

const GalleryPreview = () => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          key: KEY,
          q: "tattoo",
          image_type: "photo",
          orientation: "horizontal",
          safesearch: true,
          page: page,
          per_page: perPage,
        },
      });

      return response.data.hits.map((photo) => ({
        id: photo.id,
        preview: photo.webformatURL,
        largeImage: photo.largeImageURL,
        alt: photo.tags,
      }));
    } catch (error) {
      console.log("ERRORS", error.name, error.message);
    }
  };

  useEffect(() => {
    fetchPhotos().then((newPhotos) => {
      setPhotos(newPhotos);
    });
  }, []);

  useEffect(() => {
    renderImages();
  }, [photos]);

  const renderImages = () => {
    return photos.map((photo) => (
      <SwiperSlide key={photo.id} className="swiper-slide">
        <img src={photo.preview} alt={photo.alt} className="swiper-slide img" />
      </SwiperSlide>
    ));
  };

  return (
    <div className={css.galleryBgr}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="gallery-swiper"
      >
        {renderImages()}
      </Swiper>
    </div>
  );
};

export default GalleryPreview;
