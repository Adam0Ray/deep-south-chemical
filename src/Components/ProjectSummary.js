import Avatar from "./Avatar"
import { useFirestore } from "../hooks/useFirestore"
import { useHistory } from 'react-router-dom'
import { useAuthContext } from "../hooks/useAuthContext"

//Project Summary Componenent used to display a specific Project ID when selected and a user is logged in
export default function ProjectSummary({ project }) {
    const { deleteDocument } = useFirestore('projects')
    const { user } = useAuthContext()
    const history = useHistory()
  
    const handleClick = () => {
      deleteDocument(project.id)
      history.push('/Dashboard')
    }
  
    return (
      <div>
        <div className="project-summary">
          <h2 >{project.name}</h2>
          <p className="due-date">
            Project due by {project.dueDate.toDate().toDateString()}
          </p>
          <p className="details">
            {project.details}
          </p>
          <h4>Project assigned to:</h4>
          <div className="assigned-users">
            {project.assignedUsersList.map(user => (
              <div key={user.id}>
                <Avatar src={user.photoURL} />
              </div>
            ))}
          </div>
        </div>
        {user.uid === project.createdBy.id && (
          <button className="btn" onClick={handleClick}>Delete</button>
        )}
      </div>
    )
  }