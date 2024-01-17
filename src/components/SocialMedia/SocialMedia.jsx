import css from "./SocialMedia.module.css";
import style from "../../assets/icons/Icons.module.css";

import { IoLogoFacebook, IoLogoTiktok, IoLogoInstagram } from "react-icons/io5";
import { IconContext } from "react-icons/lib";

export const SocialMedia = () => {
  return (
    <div className={css.wrapper}>
      <IconContext.Provider value={{ size: "2rem", className: style.icons }}>
        <a
          href="https://www.instagram.com/lipna.ink/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@lipna.ink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoTiktok />
        </a>
        <a
          href="https://www.facebook.com/lipna.ink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoFacebook />
        </a>
      </IconContext.Provider>
    </div>
  );
};
