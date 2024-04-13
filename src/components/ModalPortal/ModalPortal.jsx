import css from "./ModalPortal.module.css";
import ReactDOM from "react-dom";

export const ModalPortal = ({ children, open, onClose }) => {
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <div className={css.overlay}>
        <div className={css.wrapper}>
          <h3>SOME COMPONENT TEXT</h3>
          <button className={css.button} onClick={onClose}>
            CLOSE MODAL
          </button>
        </div>
        <div className={css.childrenWrapper}>{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
};
