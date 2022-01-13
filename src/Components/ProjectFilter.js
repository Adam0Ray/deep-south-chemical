import { useState } from 'react'

const filterList = ['all', 'mine', 'development', 'operations', 'sales', 'marketing', 'finance', 'lab']
//Filter Projects based on which filter the user clicks, all will be default
export default function ProjectFilter() {
  const [currentFilter, setCurrentFilter] = useState('all')

  const handleClick = (newFilter) => {
    setCurrentFilter(newFilter)
  }
  
  return (
    <div className="project-filter">
      <nav>
        <p>Filter by: </p>
        {filterList.map((filter) => (
          <button 
            key={filter}
            onClick={() => handleClick(filter)}
            className={currentFilter === filter ? 'active' : ''}
          >
            {filter}
          </button>
        ))}
      </nav>
    </div>
  )
}
