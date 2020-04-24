import React from 'react';
import Spinner from '../../components/Loader/Loader';
import ContactContainer from '../../components/Contacts/ContactContainer';
import ContactHeader from '../../components/Contacts/ContactHeader';
import ContactForm from '../../components/Contacts/ContactFormContainer';
import ContactSection from '../../components/Contacts/ContactSection';
import ContactFilter from '../../components/Contacts/ContactFilterContainer';
import ContactList from '../../components/Contacts/ContactListContainer';

function ContactsUserView({ contacts, isloadingContact }) {
  return (
    <ContactContainer>
      {isloadingContact && <Spinner />}
      <ContactHeader />
      <ContactForm />
      {contacts.length > 0 && (
        <>
          <ContactSection title={'Contacts'} />
          <ContactFilter />
        </>
      )}
      <ContactList />
    </ContactContainer>
  );
}

export default ContactsUserView;
