import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Container from '../../components/Authentification/Container';
import ButtonDelete from '../../components/ButtonDelete/ButtonDelete';
import { authSelectors, authOperations } from '../../redux/auth';

const WrapContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  max-width: 25%;
  margin: 0 2rem 2rem 0;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1rem;
  box-shadow: 0 0.2rem 0.8rem -0.2rem rgba(0, 0, 0, 0.75);
  border-radius: 0.6rem;
  background-color: snow;
  padding: 0.3rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

function Profile({ avatar, name, email, onDelete }) {
  return (
    <Container viewName={'profile page'}>
      <WrapContainer>
        <Avatar src={avatar} alt="" />
        <DetailsContainer>
          <Text>Name: {name}</Text>
          <Text>Email: {email}</Text>
        </DetailsContainer>
      </WrapContainer>
      <ButtonDelete text={'delete account'} onClick={onDelete} />
    </Container>
  );
}

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  email: authSelectors.getUserEmail(state),
  avatar:
    'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
});

export default connect(mapStateToProps, {
  onDelete: authOperations.deleteCurrentUser,
})(Profile);
