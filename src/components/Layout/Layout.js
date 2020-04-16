import React from "react";
import styled from "styled-components";
import withThemeContext from "../../hoc/withThemeContext";

const BG = styled.div`
  width: 100%;
  height: 100vw;
  padding: 5rem 0 5rem;
  background-color: ${(props) => props.color};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 78rem;
  margin: 0 auto;
  padding: 0 2rem;
`;
const Layout = ({ children, theme }) => (
  <BG color={theme.themeState.backgroundColor}>
    <Container>{children}</Container>
  </BG>
);
export default withThemeContext(Layout);
