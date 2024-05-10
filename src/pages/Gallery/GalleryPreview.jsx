import { Swiper, SwiperSlide } from "swiper/react";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";
import { Pagination } from "swiper/modules";
import css from "./Gallery.module.scss";
import {
  getImages,
  getMoreImages,
} from "../../redux/gallery/API-actions-gallery";
import {
  selectImages,
  selectIsLoading,
  selectError,
  selectNextPage,
  selectCurrentPage,
} from "../../redux/gallery/selectors-gallery";

// import { toastError } from "../../components/Toasts/Toasts.js";

const GalleryPreview = () => {
  const swiperRef = useRef(null);
  const dispatch = useDispatch();

  const images = useSelector(selectImages);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const nextPage = useSelector(selectNextPage);
  const currentPage = useSelector(selectCurrentPage);

  const loadMoreImages = async () => {
    // console.log("NEXT PAGE?", nextPage);
    if (nextPage && !isLoading) {
      dispatch(getMoreImages(currentPage + 1));
    } else {
      console.log("No more results");
      return null;
    }
  };

  useEffect(() => {
    const handleScroll = (event) => {
      // Logika obsługi przewijania
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const handleSlideChange = () => {
      let imagesToEnd =
        swiperInstance.slides.length - swiperInstance.activeIndex;
      if (imagesToEnd < 3 && nextPage) {
        loadMoreImages();
      }
    };

    if (swiperInstance) {
      swiperInstance.on("slideChange", handleSlideChange);
      return () => {
        swiperInstance.off("slideChange", handleSlideChange);
      };
    }
  }, [swiperRef, loadMoreImages]);

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
