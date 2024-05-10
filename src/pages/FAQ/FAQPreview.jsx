import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { nanoid } from "nanoid";

import "./FAQswiper.css";
import css from "./FAQ.module.scss";

import questionsAnswears from "./uestionsAnswears.jsx";

const FAQPreview = () => {
  const renderQA = () => {
    return questionsAnswears.map((item) => (
      <SwiperSlide key={nanoid()} className="swiper-slide">
        <div className="swiper-faq__wrapper">
          <div className="swiper-question">{item.question}</div>
          <div className="swiper-answear">{item.answear}</div>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <div className={css.faqWrapper}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="faq-swiper"
      >
        {renderQA()}
      </Swiper>
    </div>
  );
};

export default FAQPreview;
