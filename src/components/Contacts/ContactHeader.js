import React from 'react';
import styled from 'styled-components';
import ContactTitle from './ContactTitle';
import withThemeContext from '../../hoc/withThemeContext';

const HeaderCont = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 60rem;
  padding: 0 2rem;
  margin-bottom: 1rem;
`;

function ContactHeader({ theme }) {
  return (
    <HeaderCont>
      <ContactTitle text={'phonebook'} color={theme.themeState.titleColor} />
    </HeaderCont>
  );
}

export default withThemeContext(ContactHeader);
