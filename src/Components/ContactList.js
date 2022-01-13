import { useState, useEffect, useCallback } from "react"
import { useFetch } from "../hooks/useFetch"
import { useCollection } from "../hooks/useCollection"

const filterList = ['all', 'Corporate Office', 'Louisiana Regional Office', 'DSC Nigeria', 'DSC Angola Africa', 'DSC Middle East']

export default function ContactList() {
    const { isPending, error, documents } = useCollection('Contacts')
    

    
    return (
        <div className="contact-list">

            <h2>Contact List</h2>
            {isPending && <div>Loading Contacts...</div>}
            {error && <div>{error}</div>}
            <div className="contact-filter">
                {/* <button onClick= {() => useCollection.get()}>All Contacts</button> */}
                {/* <button onClick= {() => useCollection.get(('Corporate Office'))}>Corporate Office</button> */}
                {/* <button onClick={() => setUrl('http://localhost:8000/contact?location=Louisiana Regional Office')}>Louisiana Regional Office</button>
                <button onClick={() => setUrl('http://localhost:8000/contact?location=DSC Nigeria')}>DSC Nigeria</button>
                <button onClick={() => setUrl('http://localhost:8000/contact?location=DSC Angola Africa')}>DSC Angola Africa</button>
                <button onClick={() => setUrl('http://localhost:8000/contact?location=DSC Middle East')}>DSC Middle East</button> */}
            </div>
            <ul>
                {documents && documents.map( document => (
                    <li key ={document.id}>
                        <h3>{document.name}</h3>
                        <p>{document.title}</p>
                        <p>{document.location}</p>
                        <p>{document.email}</p>
                    </li>
                ))}
            </ul>
        </div>

    )
    
}
