import css from "./ModalAlert.module.css";
import ReactDOM from "react-dom";

export const ModalAlert = ({ children, open, onClose }) => {
  if (!open) {
    return null;
  }

  const handleOverlayClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className={css.overlay} onClick={handleOverlayClick}>
        <div className={css.buttonWrapper}>
          <button className={css.button} onClick={onClose}>
            CLOSE MODAL
          </button>
        </div>
        <div className={css.childrenWrapper} onClick={handleModalClick}>
          {children}
        </div>
      </div>
    </>
  );
};
