import './Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import { ContactLogic } from './ContactLogic';
import {
  faEnvelope,
  faMapMarkerAlt,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const {
    isFormOpen,
    sender,
    openSubmitForm,
    closeSubmitForm,
    pressEscape,
    inputChange,
    submitForm,
  } = ContactLogic();
  return (
    <section className='contact' id='contact'>
      <div className='contact__container'>
        <div className='contact__top'>
          <h2>Contact Me 📱</h2>
          <p>I'd love to hear your thoughts</p>

          <button onClick={openSubmitForm} className='button'>
            Send Me a Message
          </button>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Paete, Laguna
          </p>
          <p>
            <FontAwesomeIcon icon={faMobileAlt} /> +639770628347
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> caraanjohncarlo@gmail.com
          </p>
        </div>
        {isFormOpen && (
          <div className='contact__formContainer' onKeyUp={pressEscape}>
            <div className='form__overlay' onClick={closeSubmitForm}></div>
            <form className='contact__form' onSubmit={submitForm}>
              <button className='form__close' onClick={closeSubmitForm}>
                X
              </button>
              <h3 className='form__title'>Send Me a Message</h3>
              <p>
                <label htmlFor='senderName'>Name</label>
                <input
                  type='text'
                  name='name'
                  id='senderName'
                  autoFocus
                  required
                  value={sender.name}
                  onChange={inputChange}
                />
              </p>
              <p>
                <label htmlFor='senderEmail'>Email</label>
                <input
                  type='email'
                  name='email'
                  id='senderEmail'
                  required
                  value={sender.email}
                  onChange={inputChange}
                />
              </p>
              <p>
                <label htmlFor='senderMessage'>Message</label>
                <textarea
                  name='message'
                  id='senderMessage'
                  required
                  value={sender.message}
                  onChange={inputChange}
                />
              </p>
              <input
                type='submit'
                value='Send'
                className='button form__submit'
              />
            </form>
          </div>
        )}

        <div className='contact__socials'>
          <Link
            to={{ pathname: 'https://www.facebook.com/creation0000/' }}
            target='_blank'
            className='socials__link'
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link
            to={{ pathname: 'https://www.instagram.com/johncarlo1059/' }}
            target='_blank'
            className='socials__link'
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link
            to={{
              pathname:
                'https://www.linkedin.com/in/john-carlo-caraan-43b424122/',
            }}
            target='_blank'
            className='socials__link'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link
            to={{
              pathname: 'https://github.com/caraanJC',
            }}
            target='_blank'
            className='socials__link'
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
