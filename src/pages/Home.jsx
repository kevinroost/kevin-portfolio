

import { projects } from "../data/projects"
import ProjectsList from "../Components/ProjectsList"


function Home () {
  return(
    <>
      <section id='hero'>
        <h1>Kevin Roost</h1>
        <h3>Software Engineer</h3>
        <div>
          <p>Hi! I'm a full-stack developer with special interest in JavaScript and database management. </p>
          <p>image</p>
        </div>
        <div id='tech'>
          <img src="/Tech/js.png" alt="" />
          <img src="/Tech/react.png" alt="" />
          <img src="/Tech/mongo.png" alt="" />
          <img src="/Tech/mongoose.png" alt="" />
          <img src="/Tech/sql.png" alt="" />
          <img src="/Tech/postresql.png" alt="" />
          <img src="/Tech/node.png" alt="" />
          <img src="/Tech/ts.png" alt="" />
          <img src="/Tech/express.png" alt="" />
        </div>
      
      </section>


      <section id='projects'>
        <h2>Projects</h2>
        <ul>
          {projects.map(proj => (
            <ProjectsList project={proj} key={proj.title} />
          ))}
        </ul>
      </section>


    </>
  )
}

export default Home