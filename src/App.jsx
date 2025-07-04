import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Resume from "./components/Resume";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
  const [darkMode, setDarkMode] = useState(false);
<div className={darkMode ? "dark" : ""}>
  <button onClick={() => setDarkMode(!darkMode)}>Toggle</button>
  <YourApp />
</div>

}

export default App;
