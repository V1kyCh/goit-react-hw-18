import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';

import { useContext } from "react";
import { ContactContext } from '../../context/ContactContext';

function ContactBook() {

const  { addContact, filteredContact, deleteContact, filteredContactsVariable } = useContext(ContactContext)

  return (
    <div className="ContactBook">
      <ContactForm addContact={addContact} />
      <h2 className="middle-title">Contacts</h2>
      <Filter filteredContact={filteredContact} />
      <ContactList contacts={filteredContactsVariable} deleteContact={deleteContact} />
    </div>
  );
}

export default ContactBook;