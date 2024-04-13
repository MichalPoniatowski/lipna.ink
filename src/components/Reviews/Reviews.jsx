import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";

import "./Reviews.css";
import { Pagination } from "swiper/modules";
import css from "./Reviews.module.css";
import { REVIEWS_URL } from "../../../api.URLs.js";
import { ReviewCard } from "../ReviewCard/ReviewCard.jsx";

const API_URL = REVIEWS_URL;
let page = 1;
let perPage = 10;
let nextPage = false;
let totalRating = null;

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const swiperReviewsRef = useRef(null);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          page: page,
          per_page: perPage,
          rating: 4,
        },
      });

      const convertedResponse = response.data.reviews.docs;

      nextPage = response.data.reviews.hasNextPage;
      totalRating = response.data.reviews.averageRating;

      return convertedResponse;
    } catch (error) {
      console.log("Error with fetching images from API: ", error.message);
      return [];
    }
  };

  useEffect(() => {
    fetchReviews().then((newReviews) => {
      setReviews(newReviews);
    });
  }, []);

  useEffect(() => {
    const swiperInstance = swiperReviewsRef.current.swiper;

    const handleSlideChange = () => {
      let reviewsToEnd =
        swiperInstance.slides.length - swiperInstance.activeIndex;
      if (reviewsToEnd < 3) {
        loadMoreReviews();
      }
    };

    if (swiperInstance) {
      swiperInstance.on("slideChange", handleSlideChange);
      return () => {
        swiperInstance.off("slideChange", handleSlideChange);
      };
    }
  }, []);

  const loadMoreReviews = async () => {
    if (nextPage) {
      page++;
      const newReviews = await fetchReviews();
      setReviews((prevReviews) => [...prevReviews, ...newReviews]);
      console.log("REVIEWS LOADED NEXT PAGE");
    } else {
      console.log("No more results");
      return null;
    }
  };

  const renderReviews = () => {
    return reviews.map((review) => (
      <SwiperSlide key={review._id} className="swiper-slide">
        <ReviewCard
          user={review.source}
          rating={review.rating}
          image={review.source_image}
          text={review.body}
          date={review.date}
        />
      </SwiperSlide>
    ));
  };

  return (
    <div>
      <h2>OPINIE Z GOOGLA: {totalRating}</h2>
      <div className={css.reviewsBgr}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination]}
          className="reviews-swiper"
          ref={swiperReviewsRef}
        >
          {renderReviews()}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
