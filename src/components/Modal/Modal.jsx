import { useEffect, useRef } from "react";
import css from "./Modal.module.css";
import { useLocation } from "react-router-dom";

import { AnimatedBgr } from "../AnimatedBgr/AnimatedBgr";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const Modal = ({ closeModal, children, open }) => {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  const handleDocClick = (event) => {
    if (
      event.target.tagName === "A" &&
      new URL(event.target.href).pathname === location.pathname
    ) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocClick);
    return () => {
      document.removeEventListener("click", handleDocClick);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== prevPathRef.current) {
      closeModal();
    }
  }, [location.pathname]);

  return (
    <div className={css.modalWrapper}>
      <AnimatedBgr />
      <div className={css.modalBrg}>
        <div className={css.modalContainer}>
          <div className={css.modalPages}>{children}</div>
          <div className={css.modalFooter}>
            <SocialMedia />
          </div>
          {/* <button className={css.modalClose} onClick={() => closeModal()}>
          &times;
        </button> */}
        </div>
      </div>
    </div>
  );
};
