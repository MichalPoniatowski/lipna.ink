import css from "./NavigationMenu.module.css";

import { AnimatedBgr } from "../AnimatedBgr/AnimatedBgr";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { NavigationPages } from "../NavigationPages/NavigationPages";

export const NavigationMenu = () => {
  return (
    <div className={css.navBrg}>
      <AnimatedBgr />
      <div className={css.navBrg}>
        <div className={css.navContainer}>
          <div className={css.navPages}>
            <NavigationPages />
          </div>
          <div className={css.navFooter}>
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};
