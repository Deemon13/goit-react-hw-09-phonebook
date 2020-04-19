import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import PropTypes from "prop-types";
import ListItem from "./ListItemContainer";
import itemSlide from "../../animations/itemSlide.module.css";

const List = styled.ul`
  min-width: 60rem;
  max-width: 72rem;
  margin-bottom: 1rem;
`;

export default function ContactList({ contacts }) {
  return (
    <TransitionGroup component={List}>
      {contacts.map(({ id }) => (
        <CSSTransition key={id} timeout={250} classNames={itemSlide}>
          <ListItem id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    PropTypes.array,
  ]),
};
