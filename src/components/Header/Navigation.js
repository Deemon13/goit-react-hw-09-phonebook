import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import routesPathes from '../../routesPathes';
import routes from '../../routes';
import { authSelectors } from '../../redux/auth';

const NavLinkItem = styled(NavLink).attrs(props => ({
  activeClassName: props.activeClassName || 'activeLink',
  activeStyle: {
    color: '#adff2f',
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
  const privateRoutes = routes.filter(route => route.private);
  console.log(privateRoutes);
  return (
    <nav>
      <NavLinkItem to={routesPathes.home} exact>
        home
      </NavLinkItem>
      {isAuthenticated && (
        <>
          {privateRoutes.map(route => (
            <NavLinkItem key={route.label} to={route.path}>
              {route.label}
            </NavLinkItem>
          ))}
        </>
      )}
    </nav>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
