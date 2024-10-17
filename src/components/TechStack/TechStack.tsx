import { FaGithub } from 'react-icons/fa'
import './TechStack.css'

const TechStack = () => {
  return (
    <div id="techStack" className="techStack">
      <h1 className="techStack-heading">My Tech Stack</h1>
      <div className="techStack-gallery">
        <div>
          <img className="techStack-gallery-img" src="/images/html5.svg" loading="lazy" />
          <img className="techStack-gallery-img" src="/images/css3.svg" loading="lazy" />
          <img className="techStack-gallery-img" src="/images/js.svg" loading="lazy" />
          <img className="techStack-gallery-img" src="/images/react.svg" loading="lazy" />
        </div>
        <div>
          <img className="techStack-gallery-img" src="/images/git.svg" loading="lazy" />
          <img className="techStack-gallery-img" src="/images/vscode.svg" loading="lazy" />
          <FaGithub className="techStack-gallery-img" />
          <img className="techStack-gallery-img" src="/images/mongodb.svg" loading="lazy" />
        </div>
      </div>
    </div>
  )
}

export default TechStack
