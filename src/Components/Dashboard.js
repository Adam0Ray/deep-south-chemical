import { useCollection } from '../hooks/useCollection'
import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import ProjectList from './ProjectList'
import ProjectFilter from './ProjectFilter'

export default function Dashboard() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('projects')
  const [currentFilter, setCurrentFilter] = useState('all')

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter)
  }
  
  const projects = documents ? documents.filter(document => {
    switch(currentFilter) {
      case 'all':
        return true
      case 'mine':
        let assignedToMe = false
        document.assignedUsersList.forEach(u => {
          if(u.id === user.uid) {
            assignedToMe = true
          }
        })
        return assignedToMe
      case 'development':
      case 'operations':
      case 'sales':
      case 'marketing':
      case 'finance':
      case 'lab':  
        return document.category === currentFilter
      default:
        return true
    }
  }) : null
  
  return (
    <div>
      <h1 className="page-title">Dashboard</h1>
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFilter currentFilter={currentFilter} changeFilter={changeFilter} />
      )}
      {projects && <ProjectList projects={projects} />}
    </div>
  )
}
