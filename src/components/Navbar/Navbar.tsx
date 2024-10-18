import { FaGithub, FaLinkedin, FaSun } from 'react-icons/fa'
import './Navbar.css'
import { useEffect, useState } from 'react'
import { MdDarkMode } from 'react-icons/md'

const Navbar = () => {
  const [ isDark, setIsDark ] = useState(true)

  useEffect(()=> {
    document.documentElement.style.setProperty('--bg-color', isDark ? '#191919' : 'white');
    document.documentElement.style.setProperty('--primary', isDark ? '#a7a7a7' : '#666666');
    document.documentElement.style.setProperty('--heading', isDark ? '#d9d9d9' : '#42446E');
    document.documentElement.style.setProperty('--subheading', isDark ? '#cccccc' : '#42446E');
  }, [isDark])

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={isDark ? '/jc-icon-dark.png' : '/jc-icon-light.png'} alt="" />
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
            <a href="#projects">Projects</a>
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
          <li>
            <p className='darkButton' onClick={() => setIsDark(!isDark)}>{isDark ? <MdDarkMode /> : <FaSun />}</p>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
