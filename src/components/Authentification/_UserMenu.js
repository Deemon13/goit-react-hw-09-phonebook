import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { authSelectors, authOperations } from '../../redux/auth';
import ButtonLogout from '../ButtonLogout/_ButtonLogout';

const ContainerUserMenu = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarUserMenu = styled.img`
  margin-right: 1rem;
`;

const NameUserMenu = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  margin-right: 1rem;
`;

function UserMenu({ avatar, name, onLogout }) {
  return (
    <ContainerUserMenu>
      <AvatarUserMenu src={avatar} alt="" width="32" />
      <NameUserMenu>Welcome, {name}</NameUserMenu>
      <ButtonLogout type="button" onClick={onLogout} text={'Logout'} />
    </ContainerUserMenu>
  );
}

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar:
    'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
