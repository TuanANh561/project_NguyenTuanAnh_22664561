import React from 'react';
import Contact from './Contact';
import '../App.css';

const App = () => {
    const chidi = {
        firstName: "Chidi",
        lastName: "Anagonye",
        phone: "555-366-8987",
        address: "St. John's University, Sydney, Australia"
    }

    return(
        <div>
            <Contact {...chidi}></Contact>
        </div>
    )
}


export default App;