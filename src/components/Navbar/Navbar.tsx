import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src="/jc-icon-dark.png" alt="" />
      </a>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#techStack">Tech Stack</a>
          </li>
          <li>
            <a href="https://github.com/caraanJC" target="_blank">
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/caraanjc/" target="_blank">
              <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
