import React from "react";
import AppBar from "./AppBar";
import styled from "styled-components";

const ContainerStyled = styled.div`
  width: 100vw;
  margin: 0 auto;
  padding: 0 2rem;
`;

export default function Layout({ children }) {
  return (
    <ContainerStyled>
      <AppBar />
      {children}
    </ContainerStyled>
  );
}
