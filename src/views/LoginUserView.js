import React, { Component } from "react";
import ContainerViews from "../components/user-components/ContainerViews";
import ButtonForm from "../components/user-components/ButtonForm";
import StyledViews from "./StyledViews";

class LoginUserView extends Component {
  state = {
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
    const { email, password } = this.state;
    return (
      <ContainerViews viewName={"authorization"}>
        <StyledViews.FormView>
          {/* <FormRegistration onSubmit={this.handleSubmit}> */}
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

          <ButtonForm type="submit" text={"log in"} />
        </StyledViews.FormView>
      </ContainerViews>
    );
  }
}

export default LoginUserView;
