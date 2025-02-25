import React from 'react';
import Contact from './Contact';

const ContactList = ({contacts}) => {
    return(
        <div className="contact-list">
            {contacts.map((contact) => {
                return <Contact key={contact.phone} {...contact}/>
            })}
        </div>
    )
}

export default ContactList;