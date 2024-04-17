import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import css from "./Modal.module.css";

export const Modal = ({ portal, children, open }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setShouldRender(false), 1000);
    }
  }, [open]);

  return shouldRender
    ? ReactDOM.createPortal(
        <div className={`${css.overlay} ${isVisible ? css.show : css.hide}`}>
          <div className={css.childrenWrapper}>{children}</div>
        </div>,
        document.getElementById(portal)
      )
    : null;
};
