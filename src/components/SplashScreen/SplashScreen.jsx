import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BarLoader } from "react-spinners";

import css from "./SplashScreen.module.css";
import logoPath from "../../assets/logosBrand/full_logo.png";

export const SplashScreen = ({ isOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setTimeout(() => setShouldRender(false), 500);
    }
  }, [isOpen]);

  return shouldRender
    ? ReactDOM.createPortal(
        <div className={`${css.overlay} ${isVisible ? css.show : css.hide}`}>
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
                color="var(--toastify-bgr-color)"
                cssOverride={{}}
                height={10}
                loading
                speedMultiplier={2}
                width={250}
              />
            </div>
          </div>
        </div>,

        document.getElementById("portal-splash-screen")
      )
    : null;
};

// export default SplashScreen;
