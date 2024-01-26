import { SocialMedia } from "../SocialMedia/SocialMedia";
import { AnimatedBgr2 } from "./AnimatedBgr2/AnimatedBgr2";
import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={css.footerWrapper}>
      <AnimatedBgr2 />
      <div className={css.footerAdress}>
        <p>
          Lipna tattoo
          <br />
          studio
        </p>
        <address>
          ul. Wandy14/16
          <br />
          53 320 Wrocław
        </address>
        <a href="+48777888666">tel: 777 888 666</a>
      </div>
      <div className={css.footerSocial}>
        <SocialMedia />
      </div>
      <div className={css.footerCopyRights}>
        <p>
          Copy Right &copy; Lipna.ink
          <br />
          by PoniatProductions
        </p>
      </div>
    </footer>
  );
};
