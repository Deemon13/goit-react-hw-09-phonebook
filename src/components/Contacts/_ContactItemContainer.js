import { connect } from 'react-redux';
import ContactItem from './_ContactItem';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);
  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteContact: () =>
      dispatch(contactsOperations.deleteContact(ownProps.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
