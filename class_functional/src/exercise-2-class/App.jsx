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
  render() {
    return (
      <div>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;