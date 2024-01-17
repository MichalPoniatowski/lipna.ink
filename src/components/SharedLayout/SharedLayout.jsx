import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import style from "../../assets/icons/Icons.module.css";
import { Modal } from "../Modal/Modal";
import css from "./SharedLayout.module.css";
import { Footer } from "../Footer/Footer";
import { NavigationPages } from "../NavigationPages/NavigationPages";

import { TbMenu } from "react-icons/tb";
import { LuLeaf } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import { motion } from "framer-motion";

export const SharedLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  const [showNavBar, setShowNavBar] = useState(true);

  const controllNavBar = () => {
    if (window.scrollY > scrollValue) {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
    setScrollValue(window.scrollY);
  };

  useEffect(() => {
    addEventListener("scroll", controllNavBar);
    if (isModalOpen) {
      setShowNavBar(true);
    }
    return () => {
      removeEventListener("scroll", controllNavBar);
    };
  }, [scrollValue]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <section className={css.wrapper}>
      <div className={`${css.navBar} ${showNavBar ? css.show : css.hide}`}>
        <div className={css.logo}>
          <LuLeaf size="2rem " className={style.icons} />
          <span className={css.lipna}>LIPNA</span>
        </div>

        <IconContext.Provider value={{ size: "2rem", className: style.icons }}>
          <motion.button
            whileHover={{ scale: 1.4, transition: { duration: 0.5 } }}
            whileTap={{
              rotate: 180,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            className={css.hamburger}
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
          >
            {!isModalOpen ? <TbMenu /> : <CgClose />}
          </motion.button>
        </IconContext.Provider>
      </div>

      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(false)} open={isModalOpen}>
          <NavigationPages />
        </Modal>
      )}
      <Outlet />

      <Footer />
    </section>
  );
};
