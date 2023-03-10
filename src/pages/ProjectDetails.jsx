import findProject from '../utilities/findProject.js'
import { useParams } from 'react-router-dom'

const ProjectDetails = () => {
  let { projectTitle } = useParams()
  const proj = findProject(projectTitle)

  return (
    <>
      <h1>{proj.title}</h1>
      <p>{proj.description}</p>
      <img src={proj.image} alt={proj.title} />
    </>
  )
}

export default ProjectDetails