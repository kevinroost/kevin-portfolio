

import { projects } from "../data/projects"
import ProjectPreview from "../Components/ProjectPreview"


function Home () {
  return(
    <>
      <section id='hero'>
        <article id='header'>
          <h1>Kevin Roost</h1>
          <h3>Software Engineer</h3>
        </article>

        <div>
          <p>Hi! I'm a Atlanta-based full-stack developer with special interest in JavaScript and database management. </p>
          <p></p>
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
        <section id='project-list'>

          {projects.map(proj => (
            <div className='proj-card'>
              <h3>{proj.title}</h3>
              <ProjectPreview project={proj} key={proj.title} />
            </div>
          ))}
        </section>
      </section>


    </>
  )
}

export default Home