import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import titleSlide from '../../assert/animations/titleSlide.module.css';
import withThemeContext from '../../hoc/withThemeContext';

const TitleName = styled.h1`
  font-size: 4rem;
  text-transform: capitalize;
  font-weight: 700;
  margin: 0;
  color: ${props => props.color};
`;

function ContactTitle({ text, color }) {
  return (
    <>
      <CSSTransition
        timeout={500}
        classNames={titleSlide}
        in={true}
        appear={true}
      >
        <TitleName color={color}>{text}</TitleName>
      </CSSTransition>
    </>
  );
}

export default withThemeContext(ContactTitle);
