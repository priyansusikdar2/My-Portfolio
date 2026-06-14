import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;