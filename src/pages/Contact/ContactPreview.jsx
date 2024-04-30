import { IoArrowForwardOutline } from "react-icons/io5";
// import { useState, useRef, useEffect } from "react";

import css from "./ContactPreview.module.css";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";

const ContactPreview = () => {
  return (
    <div className={css.previewWrapper}>
      <div className={css.previewText}>
        <h3 className={css.previewTitle}>Jeżeli chcesz zapytać o:</h3>
        <ul className={css.previewList}>
          <li>
            <IoArrowForwardOutline size="1rem" />
            możliwość wykonania projektu?
          </li>
          <li>
            <IoArrowForwardOutline size="1rem" />
            wolne terminy?
          </li>
          <li>
            <IoArrowForwardOutline size="1rem" />
            konkretny projekt/ pomysł na tatuaż?
          </li>
          <li>
            <IoArrowForwardOutline size="1rem" />
            cenę?
          </li>
        </ul>
        <p className={css.previewText2}>
          Wypełnij poniższy formualarz kontaktowy, gdzie możesz również wsyłać
          zdjecia czy grafiki z inspiracjami.
        </p>
      </div>
      <div>
        Możesz rónież skontaktować się zemną poprzez maila:
        <a href="mailto:lipna.tattoostudio@gmail.com">
          lipna.tattoostudio@gmail.com
        </a>{" "}
        <br />
        lub social media:
        <div className={css.previewSocial}>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default ContactPreview;
