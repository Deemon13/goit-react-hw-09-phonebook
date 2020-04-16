import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SectionWrapper = styled.section`
  min-width: 60rem;
  max-width: 72rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;
const Title = styled.h2`
  font-size: 2rem;
  font-weight: 900;
`;

export default function Section({ title, children }) {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
