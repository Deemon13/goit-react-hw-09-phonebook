import React from "react";
import styled from "styled-components";

const ButtonSignUp = styled.button`
  display: block;
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 700;

  margin: 0 auto;
  padding: 1rem 5rem;
  border: none;
  border-radius: 1rem;
  background-color: #c7c0ee;
  &:hover,
  &:focus {
    background-color: #5f6dfd;
    color: snow;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.75);
    outline: none;
  }
  &:active {
    background-color: #2033ff;
    color: snow;
    border-color: black;
    outline: none;
  }
`;

export default function ButtonForm({ text }) {
  return <ButtonSignUp type="submit">{text}</ButtonSignUp>;
}
