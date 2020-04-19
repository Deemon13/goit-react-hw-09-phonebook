import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import noticeSlide from "../../animations/noticeSlide.module.css";

const Container = styled.div`
  background-color: blue;
  border-radius: 0.8rem;
  position: fixed;
  top: 25%;
  left: 25%;
`;

const Text = styled.p`
  display: inline-block;
  margin: 0 auto;
  color: snow;
  padding: 1.4rem;
  font-size: 2rem;
`;

export default function Notification({ message, showNotice }) {
  return (
    <CSSTransition
      timeout={250}
      classNames={noticeSlide}
      in={showNotice}
      unmountOnExit
    >
      <Container>
        <Text>{message}</Text>
      </Container>
    </CSSTransition>
  );
}
