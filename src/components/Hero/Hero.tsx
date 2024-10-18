import './Hero.css'

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <div className="hero-left">
        <h1 className='heading'>
          Hi 👋, <br />
          My name is <br />
          John Carlo Caraan <br />I build things for web
        </h1>
      </div>
      <div className="hero-right">
        <img src="/images/profile.jpg" alt="profile picture" className="profile" />
      </div>
    </div>
  )
}

export default Hero
