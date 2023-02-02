import { Link } from "react-router-dom"
import hyphenate from "../utilities/hyphenateWords"

const ProjectPreview = ({project}) => {
  return (
    <div>
      <img src={project.image} alt={project.title} />
      <h3>
        {project.title}
      </h3>
      <Link to={`/projects/${hyphenate(project.title)}`}>
        <button>
          See More!
        </button>
      </Link>
    </div>
  )
}

export default ProjectPreview