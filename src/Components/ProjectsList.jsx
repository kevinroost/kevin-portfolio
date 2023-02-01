const ProjectsList = ({project}) => {
  return (
    <>
      <li>
        <h3>{project.title}</h3>
        <p>
          {project.description}
        </p>
      </li>
    </>
  )
}

export default ProjectsList