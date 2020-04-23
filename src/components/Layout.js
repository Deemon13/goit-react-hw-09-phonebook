import React from 'react';
import styled from 'styled-components';
import AppBar from './Header/_AppBar';

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
