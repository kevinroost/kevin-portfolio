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
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar