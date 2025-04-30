import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Achievements />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;