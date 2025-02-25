import React from 'react';
import Contact from './Contact';

const ContactList = ({contacts, onDeleteContact, onDeleteAllContact}) => {

    return(
        <div>
             <div className="contact-list">
                {contacts.map((contact) => {
                    return <Contact key={contact.phone} {...contact} onDeleteContact={onDeleteContact}/>
                })}
            </div>
            <div className="row mb-3">
                <div className="col text-end">
                    <button className="btn btn-danger btn-lg" onClick={onDeleteAllContact}>Delete All</button>
                </div>
            </div>
        </div>  
    )
}

export default ContactList;