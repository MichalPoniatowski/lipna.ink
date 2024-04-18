import "../../index.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Pages = styled.div`
  margin-bottom: 16px;
  display: block;
  margin-left: 0;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
`;

export const ListItem = styled.li`
  &.active {
    border-bottom: 2px solid;
  }
`;

export const Link = styled(NavLink)`
  display: block;
  text-decoration: none;
  margin-bottom: 16px;
  color: var(--beige);
  font-weight: 500;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 1);

  &.active {
    border: 3px solid;
    border-radius: 20px;
    padding-left: 10px;
    margin-right: -20px;
  }
`;
