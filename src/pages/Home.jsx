

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

      <section id='about'>
        <h2>About</h2>
        <article id='about-text'>
          <p>
          My journey so far has been a wild ride. I’ve been a theater maker for most of my life. (Still am!) I started out as an actor, then eventually a teacher/choreographer, and recently a director/producer. This unique industry demands teamwork, cultivates camaraderie, and tests problem-solving on the fly. Theater has always been and always will be my biggest passion. 
          <br/>

          <br/>
          Simultaneously, I used to serve and bartend. While I was always ready to leave the service industry, I do appreciate that it shares much of the list of necessary skills with theater; namely dealing with people and quick problem solving.  
          </p>
          <p>
          Come 2020, I had an excuse to leave the service industry and find a different way to channel those skills. It took some time, but I finally discovered a way to do this AND lean into my strength in math and logic- coding! I took the dive and graduated from the immersive bootcamp with General Assembly, during which I got hands on experience with React, Express, JS, HTML, CSS, and more. My ongoing goal is to apply the seemingly unrelated strengths and skills I have cultivated throughout my life to my daily coding endeavors. I can finally say I’m thoroughly enjoying what I do everyday, whether it is in theater or tech!
          <br/>
            <div id='candid-container'>
              <img src="images/candid.jpeg" alt="candid" id='candid'/>
            </div>
          </p>
        </article>
      </section>


    </>
  )
}

export default Home