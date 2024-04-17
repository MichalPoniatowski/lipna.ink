import { Link, Pages, List, ListItem } from "./NavigationPages.styled.js";

export const NavigationPages = () => {
  return (
    <Pages>
      <nav>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/artists">Artysta</Link>
          </li>
          <li>
            <Link to="/gallery">Galleria</Link>
          </li>
          <li>
            <Link to="/studio">Studio</Link>
          </li>

          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </List>
      </nav>
    </Pages>
  );
};
