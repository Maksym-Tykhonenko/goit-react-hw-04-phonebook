import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';

import { Section } from "./Section/Section";
import { Form } from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

import {Block } from "./App.styled";

export function App() {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(window.localStorage.getItem('contacts') ?? ""));
  
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log('вызвался useEffect' + Date.now())
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts]);
  
  const checkContact = name => {
    return contacts.map(contact => contact.name).includes(name);
  };

  const hendleFormSubmit = ({name, number}) => {
    //console.log(name);
    //console.log(number);
    if (checkContact(name)) {
        alert(`${name} IS ALREADY IN CONTACT!!!`);
        return;
      };
      const newContacts = {
        name,
        number,
        id: nanoid(),
      };
      setContacts(contacts => [...contacts, newContacts]);
      //console.log(newContacts);
  };
  //console.log(contacts);

  const delContact = contId => {
    //console.log(contId);
    
    setContacts(contacts => contacts.filter(contact => contact.id !== contId));
    //console.log(contacts);
  };

  const handleFilterCont = (e) => {
   // console.log(e.target.value);
    setFilter(e.target.value)
   // console.log(filter)

  };

  const renderContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };

    return (
      <Block>
        <Section title='Форма'>
            <Form onSubmit={hendleFormSubmit} />
        </Section>

        <Section title='Список контактов'>
            <Filter filtet={filter }
              handleFilterCont={handleFilterCont } />

            <ContactList
              contact={renderContact()}
              deliteContact={delContact}
            />
          </Section>
      </Block>
    );

};
