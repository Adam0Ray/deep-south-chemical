import { useState, useEffect, useCallback } from "react"
import { useFetch } from "../hooks/useFetch"

export default function ContactList() {
    const [url, setUrl] = useState('http://localhost:8000/contact')
    const{data:contacts, isPending} = useFetch(url, {type:'GET'})
    
    
    return (
        <div className="contact-list">

            <h2>Contact List</h2>
            {isPending && <div>Loading Contacts...</div>}

            <div className="contact-filter">
                <button onClick= {() => setUrl('http://localhost:8000/contact')}>All Contacts</button>
                <button onClick= {() => setUrl('http://localhost:8000/contact?location=Corporate Office')}>Corporate Office</button>
                <button onClick={() => setUrl('http://localhost:8000/contact?location=Louisiana Regional Office')}>Louisiana Regional Office</button>
                <button onClick={() => setUrl('http://localhost:8000/contact?location=DSC Nigeria')}>DSC Nigeria</button>
                <button onClick={() => setUrl('http://localhost:8000/contact?location=DSC Angola Africa')}>DSC Angola Africa</button>
                <button onClick={() => setUrl('http://localhost:8000/contact?location=DSC Middle East')}>DSC Middle East</button>
            </div>
            <ul>
                {contacts && contacts.map( contact => (
                    <li key ={contact.id }>
                        <h3>{contact.name}</h3>
                        <p>{contact.title}</p>
                        <p>{contact.location}</p>
                        <p>{contact.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
