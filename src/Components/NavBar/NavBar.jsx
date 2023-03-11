import './NavBar.css'

import { Link } from "react-router-dom"

function NavBar() {
  return(
    <nav>
      <a href='#hero' id='wide'>Kevin Roost</a>
      <a href='#hero' id='narrow'>KR</a>
      <ul>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href="#contact-resume">Contact</a>
        </li>
        <li>
          <a href="#contact-resume">Resume</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar