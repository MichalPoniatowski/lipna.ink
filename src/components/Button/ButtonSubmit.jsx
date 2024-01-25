import { IoArrowForwardOutline } from "react-icons/io5";

import css from "./Button.module.css";

export const ButtonSubmit = ({ text }) => {
  return (
    <div className={css.buttonWrapper}>
      <button className={css.button}>
        {`${text} `}
        <IoArrowForwardOutline size="1rem" className={css.buttonArrow} />
      </button>
    </div>
  );
};
