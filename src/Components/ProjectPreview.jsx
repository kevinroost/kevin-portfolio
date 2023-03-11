import '../App.css'

const ProjectPreview = ({project}) => {
  return (
    <>
      <div className='overlap'>
          <img className='proj-img' src={project.image} alt={project.title} />
          <p className='proj-description'>{project.description}</p>
      </div>
      <div className='links'>
        <a target='_blank' rel="noreferrer" className='link' href={project.repositoryLink}>GitHub</a>
        <a target='_blank' rel="noreferrer" className='link' href={project.deploymentLink}>Launch</a>
      </div>
    </>
  )
}

export default ProjectPreview