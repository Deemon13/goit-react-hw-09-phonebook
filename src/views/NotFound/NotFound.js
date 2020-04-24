import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../../components/Loader/Loader';
import routes from '../../routes';

import imageNotFound from '../../assert/images/notFound.png';

const Container = styled.div`
  display flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto 0;
  padding 1rem;
`;

const Img = styled.img`
  max-width: 50%;
  margin: 2rem auto;
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

function NotFound() {
  return (
    <Container>
      <Suspense fallback={<Spinner />}>
        <Img src={imageNotFound} alt="cat detective" width="320" />
        <Text>
          Something went wrong. Let`s{' '}
          <RouteLink to={(routes.path = '/')}>go back</RouteLink>!
        </Text>
      </Suspense>
    </Container>
  );
}

export default NotFound;
