import React from "react";
import styled from "styled-components";
import ButtonLogout from "../libs-components/ButtonLogout";

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

export default function UserMenu({
  avatar = "https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg",
  name,
  onLogout,
}) {
  return (
    <ContainerUserMenu>
      <AvatarUserMenu src={avatar} alt="" width="32" />
      <NameUserMenu>Welcome, {name}</NameUserMenu>
      <ButtonLogout type="button" onClick={onLogout} text={"Logout"} />
    </ContainerUserMenu>
  );
}
