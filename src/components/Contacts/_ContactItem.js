import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  align-self: center;
  justify-content: space-between;
  font-size: 1.8rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: #d4f1ff;
  box-shadow: 0 0.2rem 0.8rem -0.2rem rgba(0, 0, 0, 0.75);
  border-radius: 0.6rem;
  &:last-of-type {
    margin-bottom: none;
  }
`;

const Button = styled.button`
  display: inline-block;
  right: 0;
  padding: 0.2rem 2rem;
  border-radius: 1rem;
  background-color: #ffffff;
  &:active {
    background-color: blue;
    color: snow;
    border-color: black;
    outline: none;
  }
`;

export default function ContactItem({ name, number, onDeleteContact }) {
  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={onDeleteContact}>
        Delete
      </Button>
    </Item>
  );
}
