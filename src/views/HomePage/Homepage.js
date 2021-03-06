import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../../components/Loader/Loader';
import routesPathes from '../../routesPathes';
import { authSelectors } from '../../redux/auth';

const Container = styled.div`
  max-width: 72rem;
  margin: 2rem auto 0;
  padding 1rem;
  border-radius: 0.6rem;
  box-shadow: 0 0.2rem 0.8rem -0.2rem rgba(0, 0, 0, 0.75);
  background-color: snow;
`;

const Text = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
`;

const RouteLink = styled(Link)`
  text-decoration: none;
  transition: color 0.2s linear;
  color: #072696;
  &:hover {
    color: red;
  }
`;

function HomePage({ isAuthenticated }) {
  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        {isAuthenticated ? (
          <Text>
            Hi! Registration in this App will allow you to add contacts to the{' '}
            <RouteLink to={routesPathes.contacts}>phonebook</RouteLink> , use
            notes to plan and write tasks.
          </Text>
        ) : (
          <Text>
            Hi! Registration in this App will allow you to add contacts to the
            phone book, use notes to plan and write tasks. For all this you need
            to <RouteLink to={routesPathes.register}>sign up</RouteLink> or{' '}
            <RouteLink to={routesPathes.login}>sign in</RouteLink>.
          </Text>
        )}
      </Suspense>
    </Container>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(HomePage);
