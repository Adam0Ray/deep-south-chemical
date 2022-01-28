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
      case 'All':
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
      <h1 className="page-title">Contact Information</h1>
        <div className='contact-address'>
          <div>
            <h3>Deep South Chemical, Inc.</h3>
              <p>P.O. Box 80657</p> 
              <p>Lafayette, LA 70598-0657</p>
              <p>Phone: (337) 837-9931</p>
              <p>1-800-737-3546</p>
              <p>Fax: (337) 837-9565</p>
          </div>
          <div>
            <h3>	DSC Specialty Cleaning Tools Deep South Chemical, Inc.</h3>
              <p>229 Millstone Road</p> 
              <p>Broussard, Louisiana 70518 USA</p>
              <p>Phone: (337) 837-9931</p>
              <p>1-800-737-3546</p>
              <p>Fax: (337) 837-9565</p>
            </div>
          </div>
      <h2 >Contact List</h2>
      {error && <p className="error">{error}</p>}
      {documents && (
        <ContactFilter currentFilter={currentFilter} changeFilter={changeFilter} />
      )}
      {contacts && <ContactList contacts={contacts} />}
    </div>
  )
}
