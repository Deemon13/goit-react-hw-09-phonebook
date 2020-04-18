import React from "react";
import Navigation from "./Navigation";
import UserMenu from "./user-components/UserMenu";
import styled from "styled-components";
import SwitchTheme from "./libs-components/SwitchTheme";
import withThemeContext from "../hoc/withThemeContext";

const HeaderAppBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
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

function AppBar({ theme }) {
  return (
    <HeaderAppBar>
      <Navigation />
      <UserMenu />
      <ContainerTheme>
        <ThemeName>
          Theme: {theme.theme === "light" ? "Light" : "Dark"}
        </ThemeName>
        <SwitchTheme
          onChecked={theme.theme === "light"}
          onChange={theme.toggleTheme}
        />
      </ContainerTheme>
    </HeaderAppBar>
  );
}

export default withThemeContext(AppBar);
