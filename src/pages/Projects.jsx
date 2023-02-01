import { projects } from "../data/projects"

function Projects () {
  return(
    <>
      <h1>Projects</h1>
      <ul>
        {projects.map(proj => (
          <li key={proj.title}><img src={proj.image} alt={`Screenshot of ${proj.title}`} /></li>
        ))}
      </ul>
    </>
  )
}

export default Projects