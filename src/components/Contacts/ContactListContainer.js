import { connect } from 'react-redux';
import ContactList from './ContactList';
import { contactsActions, contactsSelectors } from '../../redux/contacts';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = {
  onDeleteContact: contactsActions.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
