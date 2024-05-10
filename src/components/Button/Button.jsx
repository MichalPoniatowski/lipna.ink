import { IoArrowForwardOutline } from "react-icons/io5";

import css from "./Button.module.css";

import { Link } from "react-router-dom";

export const Button = ({ path, text }) => {
  return (
    <div className={css.buttonWrapper}>
      <Link to={`/${path}`}>
        <button className={css.button}>
          {`${text} `}
          <IoArrowForwardOutline size="1.5rem" className={css.buttonArrow} />
        </button>
      </Link>
    </div>
  );
};
