import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import routes from "../routes";
import { authSelectors } from "../redux/auth";

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

function Navigation({ isAuthenticated }) {
  return (
    <nav>
      <NavLinkItem to="/" exact>
        Home
      </NavLinkItem>
      {isAuthenticated && (
        <>
          <NavLinkItem to="/profile" exact>
            Profile
          </NavLinkItem>
          <NavLinkItem to="/contacts" exact>
            Contacts
          </NavLinkItem>
          <NavLinkItem to="/tasks" exact>
            Tasks
          </NavLinkItem>
        </>
      )}
    </nav>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
