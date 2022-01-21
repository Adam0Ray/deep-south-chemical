
import { Link } from "react-router-dom"
// const filterList = ['all', 'Corporate Office', 'Louisiana Regional Office', 'DSC Nigeria', 'DSC Angola Africa', 'DSC Middle East']

export default function ContactList({contacts}) {

    
    return (
        <div className="contact-list">
            {contacts.length === 0 && <p>No Contacts</p>}
            {contacts.map(contact => (
            <div className="project-card">
                <h3>{contact.name}</h3>
                <p>{contact.title}</p>
                <p>{contact.location}</p>
                <p>{contact.email}</p>
            </div>
            ))}
        </div>
    )   
}
