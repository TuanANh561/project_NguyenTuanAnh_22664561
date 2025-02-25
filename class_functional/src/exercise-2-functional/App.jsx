import React, {useState} from 'react';
import ContactList from './ContactList';
import { INITIAL_CONTACTS } from './data';

const App = () => {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);

  return (
    <div>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;