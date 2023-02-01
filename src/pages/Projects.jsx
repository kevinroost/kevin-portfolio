import { projects } from "../data/projects"
import ProjectsList from "../Components/ProjectsList"

function Projects () {
  return(
    <>
      <h1>Projects</h1>
      <ul>
        {projects.map(proj => (
          <ProjectsList project={proj} key={proj.title} />
        ))}
      </ul>
    </>
  )
}

export default Projects