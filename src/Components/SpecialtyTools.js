import { useCollection } from "../hooks/useCollection"
import {useState} from 'react'
import SpecialtyToolsFilter from "./SpecialtyToolsFilter";
import SpecialtyToolsList from "./SpecialtyToolsList";


export default function SpecialtyTools() {
    const {documents, error } = useCollection('tools')
    const [currentFilter, setCurrentFilter] = useState('all')
    
    const changeFilter = (newFilter) => {
        setCurrentFilter(newFilter)
      }

      const tools = documents ? documents.filter(document => {
        switch(currentFilter) {
          case 'All':
            return true
          case 'DSC Gold Combo Scraper Brush':
          case 'DSC Crossover Sub':
          case 'DSC Casing Scraper Tool':
          case 'DSC Jetting Tool':
          case 'Casing Magnet':
          case 'DSC Riser Brushing Tool':
          case 'DSC "V" Brushing Tool':
            return document.name === currentFilter
            default:
                return true
        }
      }) : null

    return (  
        <div className="speciality-tools-container">
            <h1>Specialty Tools</h1>
            {error && <div>{error}</div>}
            <h4>Technical References</h4>
                <a target= "_blank" href="https://firebasestorage.googleapis.com/v0/b/deep-south-chemical.appspot.com/o/Technical%20Briefs%2FBenefits%20of%20BOP%20Stack%20Cleaning.pdf?alt=media&token=f269987e-021f-4e4a-b2b3-a5e0f45091a5">Benefits of BOP Stack Cleaning</a>
                <a target= "_blank" href="https://firebasestorage.googleapis.com/v0/b/deep-south-chemical.appspot.com/o/Technical%20Briefs%2FPrinciples%20of%20Mechanical%20Cleaning%20Tools.pdf?alt=media&token=5825190e-8c55-40c6-8527-b9e9cde3ab9a">Principles of Mechanical Cleaning Tools</a>
                <a target= "_blank" href="https://firebasestorage.googleapis.com/v0/b/deep-south-chemical.appspot.com/o/Technical%20Briefs%2FUtilization%20of%20Mechanical%20Cleaning%20Tools.pdf?alt=media&token=ebc82193-d2b3-46e3-93fd-8499ff30e7a8">Utilization of Mechanical Cleaning Tools</a>
            <h2>Products</h2>    
        <div>
            {error && <p className="error">{error}</p>}
            {documents && (
                <SpecialtyToolsFilter currentFilter={currentFilter} changeFilter={changeFilter} />
            )}
            {tools && <SpecialtyToolsList tools={tools} />}
        </div>
        </div>
    );
}
 
