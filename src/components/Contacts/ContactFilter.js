import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import filterScale from '../../assert/animations/filterScale.module.css';

const Container = styled.div`
  margin-bottom: 1rem;
  min-width: 60rem;
  max-width: 72rem;
  background-color: #d4f1ff;
  box-shadow: 0 0.2rem 0.8rem -0.2rem rgba(0, 0, 0, 0.75);
  border-radius: 0.6rem;
  padding: 0.5rem;
`;

const Label = styled.label`
  font-size: 2rem;
  cursor: pointer;
`;

const Input = styled.input`
  font-size: 1.8rem;
  width: 25rem;
  margin-left: 1rem;
  padding: 0.1rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${props => props.backGroundColor};
  color: ${props => props.colorInputText};
`;

export default function ContactFilter({
  value,
  onChangeFilter,
  theme,
  appear,
  filterId,
}) {
  return (
    <CSSTransition
      timeout={250}
      classNames={filterScale}
      in={appear}
      unmountOnExit
    >
      <Container>
        <Label htmlFor={filterId}>Find contacts by name:</Label>
        <Input
          type="text"
          backGroundColor={theme.themeState.inputField}
          colorInputText={theme.themeState.inputFieldText}
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
          id={filterId}
        />
      </Container>
    </CSSTransition>
  );
}
