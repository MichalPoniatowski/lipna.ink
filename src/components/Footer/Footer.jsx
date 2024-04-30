import { Suspense, lazy } from "react";
import { SocialMedia } from "../SocialMedia/SocialMedia";

const AnimatedBgr2 = lazy(() => import("./AnimatedBgr2/AnimatedBgr2"));
// import { AnimatedBgr2 } from "./AnimatedBgr2/AnimatedBgr2";
import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={css.footerWrapper}>
      <Suspense fallback={<div></div>}>
        <AnimatedBgr2 />
      </Suspense>

      <div className={css.footerAdress}>
        <p>
          Lipna tattoo
          <br />
          studio
        </p>
        <a href="https://maps.app.goo.gl/jLiNrDgLBMNMR2wE9" target="_blank">
          <address>
            ul. Wandy14/16
            <br />
            53 320 Wrocław
          </address>
        </a>

        <a href="mailto:lipna.tattoostudio@gmail.com">
          lipna.tattoostudio@gmail.com
        </a>
      </div>
      <div className={css.footerSocial}>
        <SocialMedia />
      </div>
      <div className={css.footerCopyRights}>
        <p>
          &copy; 2024 Lipna.ink
          <br />
          by PoniatProductions
        </p>
      </div>
    </footer>
  );
};

// export default Footer;
