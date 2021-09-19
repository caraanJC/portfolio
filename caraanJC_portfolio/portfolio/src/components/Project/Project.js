import { Link } from 'react-router-dom';
import './Project.css';

const Project = (props) => {
  return (
    <Link to={{ pathname: props.link }} target='_blank'>
      <div className='project'>
        <h3>{props.title}</h3>
        <img src={props.image} alt={props.title} className='project__image' />
      </div>
    </Link>
  );
};

export default Project;
