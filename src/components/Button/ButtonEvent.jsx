import { IoArrowForwardOutline } from "react-icons/io5";

import css from "./Button.module.css";

import { Link } from "react-router-dom";

export const ButtonEvent = ({ handlerFunction, text }) => {
  return (
    <div className={css.buttonWrapper}>
      <button onClick={handlerFunction} className={css.button}>
        {`${text} `}
        <IoArrowForwardOutline size="1rem" className={css.buttonArrow} />
      </button>
    </div>
  );
};
