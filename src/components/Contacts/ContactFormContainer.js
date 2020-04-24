import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import ContactForm from './ContactForm';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import withThemeContext from '../../hoc/withThemeContext';

class ContactFormContainer extends Component {
  static propTypes = {
    onAddContact: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
    showNotice: false,
    warning: null,
  };

  inputNameId = shortid.generate();
  inputPhoneId = shortid.generate();

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, onAddContact } = this.props;
    const findContact = contacts.find(contact => name === contact.name);
    if (findContact) {
      this.setState({
        warning: `${name} is already in contacts`,
        showNotice: true,
      });
      return setTimeout(
        () =>
          this.setState({
            showNotice: false,
          }),
        2000,
      );
    }
    onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <ContactForm
        {...this.props}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        showNotice={this.state.showNotice}
        warning={this.state.warning}
        name={this.state.name}
        number={this.state.number}
        idName={this.inputNameId}
        idPhone={this.inputPhoneId}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getContacts(state),
  };
};

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withThemeContext(ContactFormContainer));
