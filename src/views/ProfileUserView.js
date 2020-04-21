import React from "react";
import { connect } from "react-redux";
import ContainerViews from "../components/user-components/ContainerViews";
import ButtonDelete from "../components/user-components/ButtonDelete";
import StyledViews from "./StyledViews";
import { authSelectors, authOperations } from "../redux/auth";

function ProfileUserView({ avatar, name, email, onDelete }) {
  return (
    <ContainerViews viewName={"profile page"}>
      <StyledViews.ProfileContainer>
        <StyledViews.ProfileAvatar
          src={avatar}
          alt=""
        ></StyledViews.ProfileAvatar>
        <StyledViews.ProfileDetails>
          <StyledViews.ProfileText>Name: {name}</StyledViews.ProfileText>
          <StyledViews.ProfileText>Email: {email}</StyledViews.ProfileText>
        </StyledViews.ProfileDetails>
      </StyledViews.ProfileContainer>
      <ButtonDelete type="button" text={"delete account"} onClick={onDelete} />
    </ContainerViews>
  );
}

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  email: authSelectors.getUserEmail(state),
  avatar:
    "https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg",
});

export default connect(mapStateToProps, {
  onDelete: authOperations.deleteCurrentUser,
})(ProfileUserView);
