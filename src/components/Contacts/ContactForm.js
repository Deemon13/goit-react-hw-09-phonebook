import React from 'react';
import styled from 'styled-components';
import Notification from '../Notification/Notification';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 60rem;
  max-width: 72rem;
  background-color: #d4f1ff;
  padding: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 0.2rem 0.8rem -0.2rem rgba(0, 0, 0, 0.75);
  border-radius: 0.6rem;
`;
const Label = styled.label`
  font-size: 1.8rem;
`;
const Input = styled.input`
  font-size: 1.8rem;
  width: 25rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  padding: 0.1rem 0.5rem;
  border-radius: 0.5rem;
  background-color: ${props => props.backGroundColor};
  color: ${props => props.colorInputText};
`;
const Button = styled.button`
  display: block;
  font-size: 1.8rem;
  margin: 0 auto;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  background-color: #ffffff;
  &:active {
    background-color: blue;
    color: snow;
    border-color: black;
    outline: none;
  }
`;

export default function ContactForm({
  warning,
  showNotice,
  theme,
  name,
  number,
  handleSubmit,
  handleChange,
}) {
  return (
    <>
      <Notification message={warning} showNotice={showNotice} />
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            backGroundColor={theme.themeState.inputField}
            colorInputText={theme.themeState.inputFieldText}
            value={name}
            onChange={handleChange}
            name="name"
          />
        </Label>
        <Label>
          Phone:
          <Input
            type="text"
            backGroundColor={theme.themeState.inputField}
            colorInputText={theme.themeState.inputFieldText}
            value={number}
            onChange={handleChange}
            name="number"
          />
        </Label>
        <Button type="submit" disabled={!name || !number}>
          Add contact
        </Button>
      </Form>
    </>
  );
}
