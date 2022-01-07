import {useState} from 'react'
import ContactList from "./ContactList"

const Contact = () => {
const [showContacts, setShowContacts] = useState(true)

    return (  
        <div className="contact-container">
            <>{showContacts && <ContactList/>}</>
            
        </div>
    );
}
 
export default Contact;