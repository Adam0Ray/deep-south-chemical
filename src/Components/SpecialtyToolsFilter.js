const filterList = ['All', 'DSC Gold Combo Scraper Brush', 'DSC Crossover Sub', 'DSC Casing Scraper Tool', 'DSC Jetting Tool', 'Casing Magnet','DSC Riser Brushing Tool','DSC "V" Brushing Tool']

export default function SpecialtyToolsFilter({ currentFilter, changeFilter }) {

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