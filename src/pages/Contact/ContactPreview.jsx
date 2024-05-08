import { IoArrowForwardOutline } from "react-icons/io5";
// import { useState, useRef, useEffect } from "react";
import { FiMail } from "react-icons/fi";
import { FaArrowCircleDown } from "react-icons/fa";
import {
  IoLogoFacebook,
  IoLogoTiktok,
  IoLogoInstagram,
  IoArrowDownCircleSharp,
} from "react-icons/io5";
import { IconContext } from "react-icons/lib";

import css from "./ContactPreview.module.css";
import style from "../../assets/icons/Icons.module.css";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";

const ContactPreview = () => {
  return (
    <div className={css.previewWrapper}>
      <div className={css.previewText}>
        <h3 className={css.previewTitle}>Jak się można ze mną skontaktować?</h3>
        <ul className={css.previewList}>
          <IconContext.Provider
            value={{ size: "2rem", className: style.icons }}
          >
            <li>
              <a href="mailto:lipna.tattoostudio@gmail.com">
                <FiMail />
              </a>
              <p>Mailowo</p>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lipna.ink/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoInstagram />
              </a>
              <p>Instagram</p>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@lipna.ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoTiktok />
              </a>
              <p>Tik Tok</p>
            </li>
            <li>
              <a
                href="https://www.facebook.com/lipna.ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoFacebook />
              </a>
              <p>Facebook</p>
            </li>

            <li>
              <a href="https://www.lipna.ink/contact" rel="noopener noreferrer">
                <IoArrowDownCircleSharp />
              </a>

              <p>Wypełniając formularz kontaktowy</p>
            </li>
          </IconContext.Provider>
        </ul>
      </div>
    </div>
  );
};

export default ContactPreview;
