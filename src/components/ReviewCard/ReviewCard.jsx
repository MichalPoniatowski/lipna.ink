import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { FcGoogle } from "react-icons/fc";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

import css from "./ReviewCard.module.css";

export const ReviewCard = ({ user, rating, image, text, date }) => {
  const formattedDate = format(new Date(date), "d MMMM yyyy", { locale: pl });

  return (
    <div className={css.cardWrapper}>
      <div className={css.titleWrapper}>
        <div className={css.userData}>
          {image && (
            <img
              src={image}
              alt={""}
              className={css.avatar}
              loading="lazy"
            ></img>
          )}

          <div className={css.user}>
            <h3>{user}</h3>
            <div>{formattedDate}</div>
          </div>
        </div>

        <div className={css.rating}>
          <p>
            {rating} /5 <BsStarFill size={30} color="gold" />
            <BsStarFill size={30} color="gold" />
            <BsStarFill size={30} color="gold" />
            <BsStarFill size={30} color="gold" />
            <BsStarFill size={30} color="gold" />
          </p>
        </div>
      </div>

      <div className={css.textWrapper}>
        <p className={css.text}>{text}</p>
      </div>

      <div className={css.googleLogo}>
        <FcGoogle size={30} />
      </div>
    </div>
  );
};
