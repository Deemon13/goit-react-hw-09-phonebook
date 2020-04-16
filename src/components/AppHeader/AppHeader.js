import React from "react";
import styled from "styled-components";
import Title from "./Title";
import withThemeContext from "../../hoc/withThemeContext";

const HeaderCont = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 60rem;
  padding: 0 2rem;
  margin-bottom: 1rem;
`;

const ButCont = styled.div`
  display: flex;
  align-items: center;
`;

const ButLabel = styled.p`
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 900;
  color: ${(props) => props.color};
`;

const Button = styled.button`
  width: 10rem;
  margin-left: 2rem;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 900;
  border-radius: 1rem;
  background-color: ${(props) => props.bgButColor};
  color: ${(props) => props.color};
  &:active {
    background-color: ${(props) => props.bgButActiveColor};
    color: ${(props) => props.bgButActiveText};
    border-color: black;
    outline: none;
  }
`;

function Header({ theme }) {
  return (
    <HeaderCont>
      <Title text={"phonebook"} color={theme.themeState.titleColor} />
      <ButCont>
        <ButLabel color={theme.themeState.titleColor}>theme:</ButLabel>
        <Button
          bgButColor={theme.themeState.butColor}
          bgButActiveColor={theme.themeState.butColorActive}
          bgButActiveText={theme.themeState.bgButActiveText}
          color={theme.themeState.titleColor}
          type="button"
          onClick={theme.toggleTheme}
        >
          {theme.theme === "light" ? "Light" : "Dark"}
        </Button>
      </ButCont>
    </HeaderCont>
  );
}

export default withThemeContext(Header);
