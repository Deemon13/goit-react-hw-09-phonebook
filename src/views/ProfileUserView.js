import React from "react";
import ContainerViews from "../components/user-components/ContainerViews";
import ButtonForm from "../components/user-components/ButtonForm";
import StyledViews from "./StyledViews";

function ProfileUserView({
  avatar = "https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg",
  name,
  email,
  onDelete,
}) {
  return (
    <ContainerViews viewName={"profile page"}>
      <StyledViews.ProfileContainer>
        <StyledViews.ProfileAvatar
          src={avatar}
          alt=""
        ></StyledViews.ProfileAvatar>
        <StyledViews.ProfileDetails>
          <StyledViews.ProfileText>
            Name: some name{name}
          </StyledViews.ProfileText>
          <StyledViews.ProfileText>
            Email: some email{email}
          </StyledViews.ProfileText>
        </StyledViews.ProfileDetails>
      </StyledViews.ProfileContainer>
      <ButtonForm type="button" text={"delete account"} />
    </ContainerViews>
  );
}

export default ProfileUserView;

// class ProfileUserView extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onRegister({ ...this.state });
//     // this.setState({ name: "", email: "", password: "" });
//   };

//   render() {
//     const { email, password } = this.state;
//     return (
//       <ContainerViews viewName={"authorization"}>
//         <StyledViews.FormView>
//           {/* <FormRegistration onSubmit={this.handleSubmit}> */}
//           <StyledViews.LabelInput>
//             email:
//             <StyledViews.InputForm
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             ></StyledViews.InputForm>
//           </StyledViews.LabelInput>
//           <StyledViews.LabelInput>
//             password:
//             <StyledViews.InputForm
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             ></StyledViews.InputForm>
//           </StyledViews.LabelInput>

//           <ButtonForm type="submit" text={"log in"} />
//         </StyledViews.FormView>
//       </ContainerViews>
//     );
//   }
// }

// export default LoginUserView;
