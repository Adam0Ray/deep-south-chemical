import { useState } from 'react'

const filterList = ['all', 'Corporate Office', 'Louisiana Regional Office', 'DSC Nigeria', 'DSC Angola Africa', 'DSC Middle East']

export default function ProjectFilter() {
  const [currentFilter, setCurrentFilter] = useState('all')

  const handleClick = (newFilter) => {
    setCurrentFilter(newFilter)
  }
  console.log(currentFilter)

  return (
    <div className="project-filter">
      <nav>
        <p>Filter by: </p>
        {filterList.map((f) => (
          <button key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? 'active' : ''}
          >{f}</button>
        ))}
      </nav>
    </div>
  )
}