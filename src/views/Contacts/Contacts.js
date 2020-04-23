import React from 'react';
import Spinner from '../../components/Loader/_Loader';
import ContactContainer from '../../components/Contacts/_ContactContainer';
import ContactHeader from '../../components/Contacts/_ContactHeader';
import ContactForm from '../../components/Contacts/_ContactFormContainer';
import ContactSection from '../../components/Contacts/_ContactSection';
import ContactFilter from '../../components/Contacts/_ContactFilterContainer';
import ContactList from '../../components/Contacts/_ContactListContainer';

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
