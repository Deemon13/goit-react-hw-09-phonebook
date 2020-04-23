import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contacts from './Contacts';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

class ContactsContainer extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return <Contacts {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getContacts(state),
    isloadingContact: contactsSelectors.getLoading(state),
  };
};

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
