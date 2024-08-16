import React from 'react';
import Particles from "react-tsparticles";
import './index.css';
import './App.css';
import { loadFull } from "tsparticles";
import Navbar from './components/navbar/Navbar';
import { Routes, Route , useLocation } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Projects from './containers/projects';
import particlesOptions from './utills/particles';
import Resume from './containers/resume';

function App() {
  const location = useLocation();
  const renderParticle = location.pathname === '/';

  const handleInit = async(main) => {
    await loadFull(main);
  };

  return (
    <div className='h-screen'>
      {renderParticle && (
        <Particles id='particles' init={handleInit} options={particlesOptions} />
      )}
      <Navbar />
      <div className='App_page h-full'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
