const filterList = ['All', 'Corporate Office', 'Louisiana Regional Office', 'DSC Nigeria', 'DSC Angola Africa', 'DSC Middle East']

export default function ContactFilter({ currentFilter, changeFilter }) {

  const handleClick = (newFilter) => {
    changeFilter(newFilter)
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