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
          <a href='#about'>About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar