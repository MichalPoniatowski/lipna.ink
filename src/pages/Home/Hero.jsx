// import css from "./Hero.module.css";
// import filmSrc from "../../assets/movies/Hero_movie.mp4";

// const Hero = () => {
//   return (
//     <div className={css.wrapper}>
//       {/* <h2 className={css.title}>SZTUKA ZAPISANA NA SKÓRZE</h2> */}
//       <h2 className={css.title}>
//         Sztuka
//         <br />
//         zapisana
//         <br />
//         na
//         <br />
//         skórze
//       </h2>
//       <p></p>
//       <video autoPlay loop muted playsInline className={css.backgroundVideo}>
//         <source src={filmSrc} type="video/mp4" />
//         Twoja przeglądarka nie obsługujue tego formatu
//       </video>
//     </div>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import css from "./Hero.module.css";
import filmSrc from "../../assets/movies/Hero_movie.mp4";
import { Loader } from "../../components/Loader/Loader";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Przygotowanie funkcji do obsługi zdarzenia załadowania wideo
  const handleLoadedData = () => {
    setVideoLoaded(true);
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>
        Sztuka
        <br />
        zapisana
        <br />
        na
        <br />
        skórze
      </h2>

      <video
        autoPlay
        loop
        muted
        playsInline
        className={css.backgroundVideo}
        onLoadedData={handleLoadedData}
      >
        <source src={filmSrc} type="video/mp4" />
        Twoja przeglądarka nie obsługuje tego formatu wideo.
      </video>

      {!videoLoaded && <Loader />}
    </div>
  );
};

export default Hero;
