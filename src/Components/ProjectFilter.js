const filterList = ['all', 'mine', 'development', 'operations', 'sales', 'marketing', 'finance', 'lab']

//Filter Projects based on which filter the user clicks, all will be default, change class to active based on what filter is clicked
export default function ProjectFilter({ currentFilter, changeFilter }) {

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
