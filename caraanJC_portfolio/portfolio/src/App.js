import Hero from './pages/Hero/Hero';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
