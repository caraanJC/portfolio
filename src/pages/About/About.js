import { Link } from 'react-router-dom';
import './About.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import resume from '../../assets/resume/resume.pdf';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='about__container'>
        <h2>About Me ✌️</h2>
        <p>
          Hello! My name is JC and I enjoy creating helpful websites. My
          interest in web development started during the pandemic. During that
          time, I realized that businesses need to incorporate digital stores to
          survive.
        </p>
        <p>
          Right now, my passion grew from making stores to actually everyday
          problems. Which is why I enrolled at{' '}
          <Link
            to={{ pathname: 'https://www.upliftcodecamp.com/' }}
            target='_blank'
            className='about__link'
          >
            Uplift Code Camp
          </Link>{' '}
          to equip myself with the skills I will need.
        </p>
        <p>
          I'm always excited to learn more about the realm of web development.
        </p>
        <p>Here are a few technologies I've been working on recently:</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faChevronRight} /> HTML5
          </li>
          <li>
            <FontAwesomeIcon icon={faChevronRight} /> CSS3
          </li>
          <li>
            <FontAwesomeIcon icon={faChevronRight} /> Javascript ES6
          </li>
          <li>
            <FontAwesomeIcon icon={faChevronRight} /> MERN Stack
          </li>
        </ul>
        <div className='resume__container'>
          <Link
            to={resume}
            download
            target='_blank'
            className='about__resume button'
          >
            Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
