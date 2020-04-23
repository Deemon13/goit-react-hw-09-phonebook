import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactFilter from './_ContactFilter';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import withThemeContext from '../../hoc/withThemeContext';

class ContactFilterContainer extends Component {
  state = {
    appear: false,
  };

  componentDidMount() {
    const { contacts } = this.props;
    if (contacts.length <= 1) {
      return;
    }
    this.setState({
      appear: true,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contacts.length !== this.props.contacts.length) {
      const { contacts } = this.props;
      if (contacts.length > 0) {
        return this.toAppear();
      }
      if (contacts.length <= 1) {
        return this.toUnAppear();
      }
    }
  }

  toAppear = () => {
    this.setState({
      appear: true,
    });
  };

  toUnAppear = () => {
    this.setState({
      appear: false,
    });
  };
  render() {
    const { appear } = this.state;
    return <ContactFilter {...this.props} appear={appear} />;
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withThemeContext(ContactFilterContainer));
