import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  max-width: 72rem;
  margin: 2rem auto 0;
  padding 1rem;
  border-radius: 0.6rem;
  box-shadow: 0 0.2rem 0.8rem -0.2rem rgba(0, 0, 0, 0.75);
  background-color: snow;
`;

const HomeText = styled.p`
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

const FormView = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 32rem;
  max-width: 72rem;
`;

const LabelInput = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  text-transform: capitalize;
  width: 32rem;
  margin-bottom: 1rem;
  &: last-of-type {
    margin-bottom: 3rem;
  }
`;

const InputForm = styled.input`
  padding: 0.1rem 0.5rem;
  border-radius: 0.5rem;
  background-color: #c7c0ee;
  color: black;
`;

const ProfileAvatar = styled.img`
  max-width: 25%;
  margin: 0 2rem 2rem 0;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileText = styled.span`
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

const NotFoundContainer = styled.div`
  display flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto 0;
  padding 1rem;
`;

const NotFoundImg = styled.img`
  max-width: 50%;
  margin: 2rem auto;
`;

export default {
  HomeContainer,
  HomeText,
  RouteLink,
  FormView,
  LabelInput,
  InputForm,
  ProfileAvatar,
  ProfileContainer,
  ProfileDetails,
  ProfileText,
  NotFoundContainer,
  NotFoundImg,
};
