import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BarLoader } from "react-spinners";

import css from "./SplashScreen.module.css";
import logoPath from "../../assets/logosBrand/full_logo.png";

export const SplashScreen = () => {
  //   const [isVisible, setIsVisible] = useState(false);
  //   const [shouldRender, setShouldRender] = useState(false);

  //   useEffect(() => {
  //     if (open) {
  //       setShouldRender(true);
  //       setTimeout(() => setIsVisible(true), 10);
  //     } else {
  //       setIsVisible(false);
  //       setTimeout(() => setShouldRender(false), 1000);
  //     }
  //   }, [open]);

  return ReactDOM.createPortal(
    <div className={css.wrapper}>
      <h2 className={css.title}>
        Lipna tattoo
        <br />
        studio
      </h2>
      <div className={css.logo}>
        <img src={logoPath} alt="lipna logo full" />
      </div>
      <div className={css.loader}>
        <BarLoader
          //     color="var(--toastify-bgr-color)"
          color="#36d7b7"
          cssOverride={{}}
          height={10}
          loading
          speedMultiplier={1}
          width={200}
        />
      </div>
    </div>,
    document.getElementById("portal-splash-screen")
  );
};

// export default SplashScreen;
