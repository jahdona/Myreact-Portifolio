import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <header className="header">
    <div className="photo"></div>
    <div className="Wel"> JEAN DE DIEU HABIYAREMYE PORTIFOLIO</div>

</header>
<nav>
<Link key={1} className="nav-link text-light" to="/">
          About Me
        </Link>
   
    <Link key={2} className="nav-link text-light" to="/work">
          Work Experience
        </Link>

    <Link key={3} className="nav-link text-light" to="/education">
          Education Background
        </Link>
   
    <Link key={4} className="nav-link text-light" to="/contact">
         Contact Me
        </Link>
    <a href="/resume"> Resume</a>
</nav>
</>
  )
}

export default Header