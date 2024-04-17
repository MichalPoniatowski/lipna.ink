import { useEffect, useState } from "react";

import css from "./ModalPortal.module.css";
import { ComponentForModal } from "./ComponentForModal";
import { ModalPortal } from "./ModalPortal";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";

export const PortalBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
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
          OPEN
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("CLICKED OPEN");
            setIsOpen(false);
          }}
          className={css.button}
        >
          CLOSE
        </button>
      </div>
      <ModalWrapper portal="portal" open={isOpen}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          consectetur deserunt nihil laudantium quas dicta exercitationem.
          Labore odit quia obcaecati officia tempora in exercitationem dolorum,
          esse provident vero autem consectetur ullam, hic fugiat odio molestiae
          rerum modi dolore eaque eum, sapiente nisi voluptatibus quidem. Eos
          maiores quo nisi cum? Facilis incidunt error tenetur laudantium.
          Facere quis, sapiente quod iste ipsam fuga ex error aspernatur illum
          dolorem cupiditate deserunt totam ducimus doloremque! Deserunt id
          nulla ipsum laborum rerum repudiandae sint, repellat officia
          repellendus nihil facilis eum eveniet pariatur sequi distinctio neque
          odit reprehenderit minima ea impedit! Voluptas incidunt doloribus ex
          dolorum.
        </p>
      </ModalWrapper>
    </>
  );
};

// return (
//   <>
//     <div className={css.wrapper}>
//       <h2 className={css.title}> PORTAL BAR</h2>
//       <button
//         type="button"
//         onClick={() => {
//           console.log("CLICKED OPEN");
//           setIsOpen(true);
//         }}
//         className={css.button}
//       >
//         OPEN MODAL
//       </button>
//       <ModalPortal
//         open={isOpen}
//         onClose={() => {
//           console.log("CLICKED CLOSE");
//           setIsOpen(false);
//         }}
//       >
//         <ComponentForModal />
//       </ModalPortal>
//     </div>

//     <div className={css.hideWrapper}>
//       <button
//         className={css.hideButton}
//         onClick={() => setIsHidden(!isHidden)}
//       >
//         SHOW / HIDE
//       </button>
//       <div className={`${css.hideBox} ${isHidden ? css.hide : css.show}`}>
//         HIDE ME!
//       </div>
//     </div>
//   </>
// );
