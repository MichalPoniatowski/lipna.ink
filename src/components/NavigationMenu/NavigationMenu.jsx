import { useLocation } from "react-router-dom";

import css from "./NavigationMenu.module.css";
import { Link, Pages, List, ListItem } from "./NavigationPages.styled.js";
import { AnimatedBgr } from "../AnimatedBgr/AnimatedBgr";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const NavigationMenu = ({ onClose }) => {
  const location = useLocation();

  const handleClose = (e, path) => {
    if (path === location.pathname) {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <div className={css.navBrg}>
      <AnimatedBgr />
      <div className={css.navBrg}>
        <div className={css.navContainer}>
          <div className={css.navPages}>
            <Pages>
              <nav>
                <List>
                  <li>
                    <Link to="/" onClick={(e) => handleClose(e, "/")}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/artists"
                      onClick={(e) => handleClose(e, "/artists")}
                    >
                      Artysta
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery"
                      onClick={(e) => handleClose(e, "/gallery")}
                    >
                      Galleria
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/studio"
                      onClick={(e) => handleClose(e, "/studio")}
                    >
                      Studio
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/contact"
                      onClick={(e) => handleClose(e, "/contact")}
                    >
                      Kontakt
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" onClick={(e) => handleClose(e, "/faq")}>
                      FAQ
                    </Link>
                  </li>
                </List>
              </nav>
            </Pages>
          </div>
          <div className={css.navFooter}>
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};
