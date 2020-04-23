import React from 'react';
import styled from 'styled-components';

const WrapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  margin: 2rem auto 0;
  padding 1rem;
  border-radius: 0.6rem;
  box-shadow: 0 0.2rem 0.8rem -0.2rem rgba(0, 0, 0, 0.75);
  background-color: #d6eec0;
`;

const ViewName = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 2rem;
`;

export default function Container({ children, viewName }) {
  return (
    <WrapContainer>
      <ViewName>{viewName}</ViewName>
      {children}
    </WrapContainer>
  );
}
