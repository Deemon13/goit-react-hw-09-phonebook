import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import routes from "../routes";

const NavLinkItem = styled(NavLink).attrs((props) => ({
  activeClassName: props.activeClassName || "activeLink",
  activeStyle: {
    color: "#adff2f",
  },
}))`
  font-size: 2rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s linear;
  color: #072696;

  &:not(:last-of-type) {
    margin-right: 1rem;
  }
  &:hover {
    color: red;
  }
`;

function AuthMenu() {
  return (
    <nav>
      <NavLinkItem to="/register" exact>
        register
      </NavLinkItem>
      <NavLinkItem to="/login" exact>
        login
      </NavLinkItem>
    </nav>
  );
}

export default AuthMenu;
