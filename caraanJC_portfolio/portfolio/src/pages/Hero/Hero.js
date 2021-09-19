import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { scrollToElement } from '../../Helper';
import './Hero.css';

const Hero = () => {
  return (
    <header className='hero' id='hero'>
      <div className='hero__container'>
        <p>Hello, my name is</p>
        <h1 className='hero__mainText'>John Carlo Caraan</h1>
        <h2>Making websites that make sense</h2>
        <p>
          I'm a programmer geared towards sensible and usable web applications.
          Currently, I'm a junior web developer based in the Philippines.
        </p>
        <button
          className='hero__button'
          onClick={() => scrollToElement('projects')}
        >
          view my work <FontAwesomeIcon icon={faEye} />
        </button>
      </div>
    </header>
  );
};

export default Hero;
