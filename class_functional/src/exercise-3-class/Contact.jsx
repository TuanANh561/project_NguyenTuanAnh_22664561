
import React from 'react';
import '../App.css';


class Contact extends React.Component {
    render(){
        const { firstName, lastName, phone, address, onDeleteContact } = this.props;

        return(
            <div className="card mb-3">
                <div className="firstName">{firstName}</div>
                <div className="lastName">{lastName}</div>
                <hr />
                <div className="phone">Phone: {phone}</div>
                <hr />
                <div className="address">Address: {address}</div>
                <hr />
                <li className="list-group-item text-end">
                    <button className="btn btn-danger" onClick={() => onDeleteContact(phone)}>Delete</button>
                </li>
            </div>
            
        )

    }
    
}

export default Contact;                