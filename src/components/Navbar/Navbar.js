import { Link } from 'react-router-dom';

import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBriefcase,
  faPhone,
  faUserTie,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import { scrollToElement } from '../../Helper';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__item'>
          <Link
            className='navbar__link'
            to='/'
            onClick={() => scrollToElement('hero')}
          >
            <FontAwesomeIcon className='navbar__linkIcon' icon={faHome} />
            <span className='navbar__linkText'>Home</span>
          </Link>
        </li>

        <li className='navbar__item'>
          <Link
            className='navbar__link'
            to='/'
            onClick={() => scrollToElement('projects')}
          >
            <FontAwesomeIcon className='navbar__linkIcon' icon={faBriefcase} />
            <span className='navbar__linkText'>Projects</span>
          </Link>
        </li>

        <li className='navbar__item'>
          <Link
            className='navbar__link'
            to='/'
            onClick={() => scrollToElement('about')}
          >
            <FontAwesomeIcon className='navbar__linkIcon' icon={faUserTie} />
            <span className='navbar__linkText'>About Me</span>
          </Link>
        </li>

        <li className='navbar__item'>
          <Link
            className='navbar__link'
            to='/'
            onClick={() => scrollToElement('contact')}
          >
            <FontAwesomeIcon className='navbar__linkIcon' icon={faPhone} />
            <span className='navbar__linkText'>Contact</span>
          </Link>
        </li>
        <li className='navbar__logo'>
          <Link
            to='/'
            onClick={() => scrollToElement('hero')}
            className='navbar__link'
          >
            <span className='navbar__linkText'>John Carlo</span>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className='navbar__linkIcon'
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
