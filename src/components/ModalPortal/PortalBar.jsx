import { useState } from "react";

import css from "./ModalPortal.module.css";
import { ComponentForModal } from "./ComponentForModal";
import { ModalPortal } from "./ModalPortal";

export const PortalBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}> PORTAL BAR</h2>
      <button
        type="button"
        onClick={() => {
          console.log("CLICKED OPEN");
          setIsOpen(true);
        }}
        className={css.button}
      >
        OPEN MODAL
      </button>
      <ModalPortal
        open={isOpen}
        onClose={() => {
          console.log("CLICKED CLOSE");
          setIsOpen(false);
        }}
      >
        <ComponentForModal />
      </ModalPortal>
    </div>
  );
};
