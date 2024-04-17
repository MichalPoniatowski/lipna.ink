import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { TbMenu } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import { motion } from "framer-motion";

import style from "../../assets/icons/Icons.module.css";
import css from "./SharedLayout.module.css";
// import { Footer } from "../Footer/Footer";
import { Modal } from "../Modal/Modal";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";

// const logoPAth = "src/assets/logosBrand/full_logo.png";
// const logoPAth = "src/assets/logosBrand/line_logo.png";
// const logoPAth = "./src/assets/logosBrand/leafLogo.png";
import logoPath from "../../assets/logosBrand/leafLogo.png";

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

  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  const handleDocClick = (event) => {
    if (
      event.target.tagName === "A" &&
      new URL(event.target.href).pathname === location.pathname
    ) {
      setIsModalOpen(false);
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
      setIsModalOpen(false);
    }
  }, [location.pathname]);

  return (
    <section className={css.wrapper}>
      <div className={`${css.navBar} ${showNavBar ? css.show : css.hide}`}>
        <div className={css.logo}>
          <img src={logoPath} alt="logo lipna.ink" />
          <span className={css.lipna}>lipna.ink</span>
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

      <Modal portal={"portal-modal-nav"} open={isModalOpen}>
        <NavigationMenu />
      </Modal>

      <Suspense
        fallback={
          <div style={{ marginTop: "150px", fontSize: "5rem" }}>
            LOADING.....
          </div>
        }
      >
        <Outlet />
      </Suspense>

      {/* <Footer /> */}
    </section>
  );
};
