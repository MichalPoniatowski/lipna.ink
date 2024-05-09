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
import { AiOutlineForm } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

import css from "./ContactPreview.module.css";
import style from "../../assets/icons/Icons.module.css";

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
              <a
                href="mailto:lipna.tattoostudio@gmail.com"
                className={css.itemLink}
              >
                <FiMail />
                <span className={css.space} />
                Mailowo
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/lipna.ink/"
                target="_blank"
                rel="noopener noreferrer"
                className={css.itemLink}
              >
                <IoLogoInstagram />
                <span className={css.space} />
                Instagram
              </a>
            </li>

            <li>
              <a
                href="https://www.tiktok.com/@lipna.ink"
                target="_blank"
                rel="noopener noreferrer"
                className={css.itemLink}
              >
                <IoLogoInstagram />
                <span className={css.space} />
                Tik Tok
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/lipna.ink"
                target="_blank"
                rel="noopener noreferrer"
                className={css.itemLink}
              >
                <IoLogoInstagram />
                <span className={css.space} />
                Facebook
              </a>
            </li>

            <li>
              <Link to="contact" className={css.itemLink}>
                <AiOutlineForm />
                <span className={css.space} />
                Wypełniając formularz kontaktowy
              </Link>
            </li>
          </IconContext.Provider>
        </ul>
      </div>
    </div>
  );
};

export default ContactPreview;
