import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import routes from "../routes";

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

export default function Navigation() {
  return (
    <nav>
      {routes.map((route) => (
        <NavLinkItem exact={route.exact} key={route.label} to={route.path}>
          {route.label}
        </NavLinkItem>
      ))}
    </nav>
  );
}
