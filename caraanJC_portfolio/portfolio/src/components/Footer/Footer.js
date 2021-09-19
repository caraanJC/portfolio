import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <p>
        Hero Image by{' '}
        <Link target='_blank' to={{ pathname: 'https://unsplash.com/@emilep' }}>
          Emile Perron
        </Link>{' '}
        on{' '}
        <Link target='_blank' to={{ pathname: 'https://unsplash.com/' }}>
          Unsplash
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
