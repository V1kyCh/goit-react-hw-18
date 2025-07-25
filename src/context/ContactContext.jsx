import { createContext, useState, useEffect } from "react";

import { customAlphabet } from 'nanoid';
const hexId = customAlphabet('0123456789abcdef', 6);

export const ContactContext = createContext(null);

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const contacts = localStorage.getItem('contacts')
    if (contacts) {
      setContacts(JSON.parse(contacts))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])

  const addContact = (name, num) => {
    if (contacts.some(contact => contact.name === name)) {
      alert('Це імʼя вже додано')
      return
    }
    const newContact = {
      name: name,
      number: num,
      id: hexId()
    }
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts)
  }

  const filteredContact = (contact) => {
    setFilter(contact)
  }

  const filteredContacts = () => {
    if (!filter.toLowerCase()) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const deleteContact = (contactId) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId))
  }

  const filteredContactsVariable = filteredContacts();


  return <ContactContext.Provider value={{ contacts, filter, addContact, filteredContact, filteredContacts, deleteContact, filteredContactsVariable }}>
    {children}
  </ContactContext.Provider>
}
