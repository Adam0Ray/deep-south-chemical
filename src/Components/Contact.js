import { useCollection } from '../hooks/useCollection'
import {useState} from 'react'
import ContactList from "./ContactList"
import ContactFilter from './ContactFilter'

export default function Contact() {
const { documents, error } = useCollection('Contacts')
const [currentFilter, setCurrentFilter] = useState('all')

const changeFilter = (newFilter) => {
  setCurrentFilter(newFilter)
}
const contacts = documents ? documents.filter(document => {
    switch(currentFilter) {
      case 'all':
        return true
      case 'Corporate Office':
      case 'Louisiana Regional Office':
      case 'DSC Nigeria':
      case 'DSC Angola Africa':
      case 'DSC Middle East':
        return document.location === currentFilter
        default:
            return true
    }
  }) : null
  
  return (
    <div>
      <h1 className="page-title">Contact List</h1>
      {error && <p className="error">{error}</p>}
      {documents && (
        <ContactFilter currentFilter={currentFilter} changeFilter={changeFilter} />
      )}
      {contacts && <ContactList contacts={contacts} />}
    </div>
  )
}
