const ProjectPreview = ({project}) => {
  return (
    <div>
      <img src={project.image} alt={project.name} />
      <h3>
        {project.title}
      </h3>
      <button>
        See More!
      </button>
    </div>
  )
}

export default ProjectPreview