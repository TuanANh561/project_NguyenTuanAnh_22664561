import React from 'react';
import '../App.css';

const Contact = (props) => {
    const { firstName, lastName, phone, address } = props;

    return(
        <div class="card">
            <div className="firstName">{firstName}</div>
            <div className="lastName">{lastName}</div>
            <hr />
            <div className="phone">Phone: {phone}</div>
            <hr />
            <div className="address">Address: {address}</div>
        </div>
    )

} 

export default Contact;
                