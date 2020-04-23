import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../../components/Loader/_Loader';
import routes from '../../routes';

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

export default function TaskUserViews() {
  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <Text>
          Sorry, but this feature will be available in future versions of the
          App. Now only the{' '}
          <RouteLink to={(routes.path = '/contacts')}>phonebook</RouteLink> !
        </Text>
      </Suspense>
    </Container>
  );
}
