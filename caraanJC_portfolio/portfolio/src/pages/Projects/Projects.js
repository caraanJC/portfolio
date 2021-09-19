import './Projects.css';

import { ProjectsData } from './ProjectsData';
import Project from '../../components/Project/Project';

const Projects = () => {
  return (
    <main className='projects' id='projects'>
      <div className='projects__container'>
        <h2 className='projects__title'>Projects 🚀</h2>
        <div className='projects__gallery'>
          {ProjectsData.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
