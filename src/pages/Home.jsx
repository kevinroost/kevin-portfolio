import { projects } from "../data/projects";
import ProjectPreview from "../Components/ProjectPreview";

function Home() {
  return (
    <>
      <section class="hero" id="hero">
        <article class="header">
          <h1>Kevin Roost</h1>
          <h3>Software Engineer</h3>
        </article>

        <div class="intro">
          <p>
            Hi! I'm a Atlanta-based full-stack developer with special interest
            in JavaScript and database management.{" "}
          </p>

          <img src="/images/headshot.jpg" alt="headshot" class="headshot" />
        </div>
        <div class="tech">
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

      <section class="projects" id="projects">
        <h2>Projects</h2>
        <article class="project-list">
          {projects.map((proj) => (
            <div className="proj-card">
              <h3>{proj.title}</h3>
              <ProjectPreview project={proj} key={proj.title} />
            </div>
          ))}
        </article>
      </section>

      <section class="contact-resume" id="contact-resume">
        <article class="contact">
          <h2>Reach Out</h2>
          <a className="link" href="mailto:kroost92@gmail.com">
            E-Mail
          </a>
          <a className="link" href="https://www.linkedin.com/in/kevinroost/">
            Linked-In
          </a>
        </article>
        <article class="resume">
          <h2>Grab My Resume</h2>
          <a
            className="link"
            href="images/KevinRoostResumePDF.pdf"
            target="_blank"
          >
            Preview in Browser
          </a>
          <a
            className="link"
            href="images/KevinRoostResumePDF.pdf"
            download="images/KevinRoostResumePDF.pdf"
          >
            Download PDF
          </a>
        </article>
      </section>

      <section class="about" id="about">
        <h2>About</h2>
        <article class="about-text">
          <p>
            My journey so far has been a wild ride. I’ve been a theater maker
            for most of my life. (Still am!) I started out as an actor, then
            eventually a teacher/choreographer, and recently a
            director/producer. This unique industry demands teamwork, cultivates
            camaraderie, and tests problem-solving on the fly. Theater has
            always been and always will be my biggest passion.
            <br />
            <br />
            Simultaneously, I used to serve and bartend. While I was always
            ready to leave the service industry, I do appreciate that it shares
            much of the list of necessary skills with theater; namely dealing
            with people and quick problem solving.
          </p>
          <p>
            Come 2020, I had an excuse to leave the service industry and find a
            different way to channel those skills. It took some time, but I
            finally discovered a way to do this AND lean into my strength in
            math and logic- coding! I took the dive and graduated from the
            immersive bootcamp with General Assembly, during which I got hands
            on experience with React, Express, JS, HTML, CSS, and more. My
            ongoing goal is to apply the seemingly unrelated strengths and
            skills I have cultivated throughout my life to my daily coding
            endeavors. I can finally say I’m thoroughly enjoying what I do
            everyday, whether it is in theater or tech!
            <br />
            <div class="candid-container">
              <img src="images/candid.jpeg" alt="candid" class="candid" />
            </div>
          </p>
        </article>
      </section>

      <footer>
        <article>
          <a href="mailto:kroost92@gmail.com">
            <img className="logo" src="icons/Email.png" alt="email-icon" />
          </a>
          <a
            href="https://github.com/kevinroost"
            target="_blank"
            rel="noreferrer"
          >
            <img className="logo" src="icons/GitHub.png" alt="github-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/kevinroost/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="logo"
              src="icons/LinkedIn.png"
              alt="linkedin-icon"
            />
          </a>
          <a
            href="http://instagram.com/_u/kevinroost/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="logo" src="icons/Instagram.png" alt="ig-icon" />
          </a>
        </article>
        <a className="link" href="#hero">
          Back to Top
        </a>
      </footer>
    </>
  );
}

export default Home;
