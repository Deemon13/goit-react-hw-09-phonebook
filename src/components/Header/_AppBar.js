import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SwitchTheme from '../Theme/_Switcher';
import Navigation from '../Header/_Navigation';
import UserMenu from '../Authentification/_UserMenu';
import AuthMenu from '../Authentification/_AuthMenu';
import withThemeContext from '../../hoc/withThemeContext';
import { authSelectors } from '../../redux/auth';

const HeaderAppBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 0.1rem solid #2a363b;
`;

const ContainerTheme = styled.div`
  display: flex;
  align-items: center;
`;

const ThemeName = styled.p`
  margin-right: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
`;

function AppBar({ theme, isAuthenticated }) {
  return (
    <HeaderAppBar>
      <ContainerTheme>
        <ThemeName>
          Theme: {theme.theme === 'light' ? 'Light' : 'Dark'}
        </ThemeName>
        <SwitchTheme
          onChecked={theme.theme === 'light'}
          onChange={theme.toggleTheme}
        />
      </ContainerTheme>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthMenu />}
    </HeaderAppBar>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(withThemeContext(AppBar));
