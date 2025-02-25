import React from 'react';
import Contact from './Contact';

class ContactList extends React.Component {
    render(){
        return(
            <div>
                <div className="contact-list">
                    {this.props.contacts.map((contact) => {
                        return <Contact key={contact.phone} {...contact} onDeleteContact={this.props.onDeleteContact}/>
                    })}
                </div>
                <div className="row mb-3">
                        <div className="col text-end">
                            <button className="btn btn-danger btn-lg" onClick={this.props.onDeleteAllContact}>Delete All</button>
                        </div>
                    </div>
            </div>
            
        )
    }
}

export default ContactList;