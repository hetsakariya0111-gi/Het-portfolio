import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BentoInfo from './components/BentoInfo';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/Global.css';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <BentoInfo />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
