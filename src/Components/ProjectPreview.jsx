import { Link } from "react-router-dom"
import hyphenate from "../utilities/hyphenateWords"
import '../App.css'

const ProjectPreview = ({project}) => {
  return (
    <a href={project.deploymentLink} className='overlap'>
      {/* <div className='unhovered'> */}
        <img className='proj-img' src={project.image} alt={project.title} />
        <p className='proj-description'>{project.description}</p>
      {/* </div> */}
      {/* <div className='hovered'> */}
      {/* </div> */}
    </a>
  )
}

export default ProjectPreview