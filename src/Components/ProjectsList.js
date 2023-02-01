const ProjectsList = ({project}) => {
  return (
    <>
      <li>
        <h3>{project.title}</h3>
        <img src={project.image} alt={`Screenshot of ${project.title}`} />
      </li>
    </>
  )
}

export default ProjectsList