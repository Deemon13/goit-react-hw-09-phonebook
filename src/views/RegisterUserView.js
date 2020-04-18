import React, { Component } from "react";
import ContainerViews from "../components/user-components/ContainerViews";
import ButtonForm from "../components/user-components/ButtonForm";
import StyledViews from "./StyledViews";

class RegisterUserView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    // this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <ContainerViews viewName={"new user registration"}>
        <StyledViews.FormView>
          {/* <FormRegistration onSubmit={this.handleSubmit}> */}
          <StyledViews.LabelInput>
            name:
            <StyledViews.InputForm
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            ></StyledViews.InputForm>
          </StyledViews.LabelInput>
          <StyledViews.LabelInput>
            email:
            <StyledViews.InputForm
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            ></StyledViews.InputForm>
          </StyledViews.LabelInput>
          <StyledViews.LabelInput>
            password:
            <StyledViews.InputForm
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            ></StyledViews.InputForm>
          </StyledViews.LabelInput>

          <ButtonForm type="submit" text={"sign up"} />
        </StyledViews.FormView>
      </ContainerViews>
    );
  }
}

export default RegisterUserView;
