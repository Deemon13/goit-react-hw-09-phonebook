import React from "react";
import ThemeContext from "../context/ThemeContext";
import Layout from "./Layout/Layout";
import Spinner from "./Loader/Loader";
import AppHeader from "./AppHeader/AppHeader";
import ContactForm from "./ContactForm/ContactFormContainer";
import Section from "./Section/Section";
import Filter from "./Filter/FilterContainer";
import ContactList from "./ContactList/ContactListContainer";

export default function App({ contacts, isloadingContact }) {
  return (
    <ThemeContext>
      <Layout>
        {isloadingContact && <Spinner />}
        <AppHeader />
        <ContactForm />
        {contacts.length > 0 && (
          <>
            <Section title={"Contacts"} />
            <Filter />
          </>
        )}
        <ContactList />
      </Layout>
    </ThemeContext>
  );
}
