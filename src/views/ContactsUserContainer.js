import React, { Component } from "react";
import { connect } from "react-redux";
import ContactsUserView from "./ContactsUserView";
import contactsOperations from "../redux/contacts/contactsOperations";
import contactsSelectors from "../redux/contacts/contactsSelectors";

class ContactsUserContainer extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return <ContactsUserView {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelectors.getContacts(state),
    isloadingContact: contactsSelectors.getLoading(state),
  };
};

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsUserContainer);
