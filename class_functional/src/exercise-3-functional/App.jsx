import React, {useState} from 'react';
import ContactList from './ContactList';
import { INITIAL_CONTACTS } from './data';

const App = () => {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);

    const deleteContact = (phone) => {
      const newList = contacts.filter(contact => contact.phone !== phone);
      setContacts(newList);
    }

    const deleteAllContact = () => {
      setContacts([]);
    }

    return (
      <div>
        <ContactList contacts={contacts} onDeleteContact={deleteContact} onDeleteAllContact={deleteAllContact}/>
      </div>
    );
}

export default App;