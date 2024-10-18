import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/Navbar/Navbar'
import Projects from '@/components/Projects/Projects'
import TechStack from '@/components/TechStack/TechStack'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
    </div>
  )
}

export default App
