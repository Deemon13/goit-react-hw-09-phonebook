import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { authOperations } from '../../redux/auth';
import Container from '../../components/Authentification/Container';
import ButtonSignUp from '../../components/ButtonSubmit/ButtonSubmit';

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

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <Container viewName={'new user registration'}>
        <FormView onSubmit={this.handleSubmit}>
          <LabelInput>
            name:
            <InputForm
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            ></InputForm>
          </LabelInput>
          <LabelInput>
            email:
            <InputForm
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            ></InputForm>
          </LabelInput>
          <LabelInput>
            password:
            <InputForm
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            ></InputForm>
          </LabelInput>

          <ButtonSignUp text={'sign up'} />
        </FormView>
      </Container>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(Register);
