import React from "react";
import Spinner from "../components/libs-components/Loader";
import ContactsContainer from "../components/contacts-components/ContactsContainer";
import ContactsHeader from "../components/contacts-components/ContactsHeader";
import ContactForm from "../components/contacts-components/ContactFormContainer";
import Section from "../components/contacts-components/Section";
import Filter from "../components/contacts-components/FilterContainer";
import ContactList from "../components/contacts-components/ContactListContainer";

function ContactsUserView({ contacts, isloadingContact }) {
  return (
    <ContactsContainer>
      {isloadingContact && <Spinner />}
      <ContactsHeader />
      <ContactForm />
      {contacts.length > 0 && (
        <>
          <Section title={"Contacts"} />
          <Filter />
        </>
      )}
      <ContactList />
    </ContactsContainer>
  );
}

export default ContactsUserView;
