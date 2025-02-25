import React from 'react';
import ContactList from './ContactList';
import { INITIAL_CONTACTS } from './data';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contacts: INITIAL_CONTACTS,
        }
    }

    deleteContact = (phone) => {
      const newList = this.state.contacts.filter(contact => contact.phone !== phone);
      this.setState({contacts: newList});
    }

    deleteAllContact = () => {
      this.setState({contacts: []});
    }

  render() {
    return (
      <div>
        <ContactList contacts={this.state.contacts} onDeleteContact={this.deleteContact} onDeleteAllContact={this.deleteAllContact}/>
      </div>
    );
  }
}

export default App;