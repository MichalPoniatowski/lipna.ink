import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { IoIosCloseCircleOutline } from "react-icons/io";

import questionsAnswears from "./uestionsAnswears.jsx";
import css from "./FAQ.module.scss";
import { Modal } from "../../components/Modal/Modal.jsx";

const FAQ = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setIndex] = useState(0);

  useEffect(() => {
    if (open) {
      console.log("Modal opened with index:", currentIndex);
    }
  }, [open, currentIndex]);

  const renderQA = () => {
    return questionsAnswears.map((item, index) => (
      <div
        key={index}
        className={css.qaContainer}
        onClick={() => {
          console.log("Setting index to:", index);
          setIndex(index);
          setOpen(true);
        }}
      >
        {item.question}
        <p>{item.answear}</p>
      </div>
    ));
  };

  const renderSlides = () => {
    return questionsAnswears.map((item, index) => (
      <SwiperSlide key={index}>
        <div className={css.slide}>
          <h3>{item.question}</h3>
          <p>{item.answear}</p>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.wrapperContent}>
          <h2 className={css.titleMain}>FAQ:</h2>
          <div className={css.gridContainer}>{renderQA()}</div>
        </div>
      </div>

      {open && (
        <Modal portal="swiper" open={open}>
          <div className={css.modalContent}>
            <div className={css.btnWrapper}>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className={css.swiperCloseBtn}
              >
                <IoIosCloseCircleOutline size="2rem" color="beige" />
              </button>
            </div>

            <Swiper
              slidesPerView={"auto"}
              spaceBetween={20}
              lazy={true}
              initialSlide={currentIndex}
            >
              {renderSlides()}
            </Swiper>
          </div>
        </Modal>
      )}
    </>
  );
};

export default FAQ;

// import { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { IoIosCloseCircleOutline } from "react-icons/io";

// import questionsAnswears from "./uestionsAnswears.jsx";
// import css from "./FAQ.module.css";
// import { Modal } from "../../components/Modal/Modal.jsx";

// const FAQ = () => {
//   const [open, setOpen] = useState(false);
//   const [currentIndex, setIndex] = useState(0);

//   useEffect(() => {
//     if (open) {
//       console.log("Modal opened with index:", currentIndex);
//     }
//   }, [open, currentIndex]);

//   const renderQA = () => {
//     return questionsAnswears.map((item, index) => (
//       <div
//         key={index}
//         className={css.qaContainer}
//         onClick={() => {
//           console.log("Setting index to:", index);
//           setIndex(index);
//           setOpen(true);
//         }}
//       >
//         {item.question}
//         <p>{item.answear}</p>
//       </div>
//     ));
//   };

//   const renderSlides = () => {
//     return questionsAnswears.map((item, index) => (
//       <SwiperSlide key={index} activeIndex={currentIndex}>
//         <div className={css.slide}>
//           <h3>{item.question}</h3>
//           <p>{item.answear}</p>
//         </div>
//       </SwiperSlide>
//     ));
//   };

//   return (
//     <>
//       <div className={css.wrapper}>
//         <div className={css.wrapperContent}>
//           <h2 className={css.titleMain}>FAQ:</h2>
//           <div className={css.gridContainer}>{renderQA()}</div>
//         </div>
//       </div>

//       {open && (
//         <Modal portal="swiper" open={open}>
//           <div className={css.modalContent}>
//             <div className={css.btnWrapper}>
//               <button
//                 type="button"
//                 onClick={() => setOpen(false)}
//                 className={css.swiperCloseBtn}
//               >
//                 <IoIosCloseCircleOutline size="2rem" color="beige" />
//               </button>
//             </div>

//             <Swiper
//               slidesPerView={"auto"}
//               spaceBetween={20}
//               lazy="true"
//               className="artist-swiper"
//             >
//               {renderSlides()}
//             </Swiper>
//           </div>
//         </Modal>
//       )}
//     </>
//   );
// };

// export default FAQ;
