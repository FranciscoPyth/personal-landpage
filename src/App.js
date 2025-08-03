import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState('es');

  const handleLanguageChange = () => {
    setLanguage(prevLanguage => prevLanguage === 'es' ? 'en' : 'es');
  };

  // Función para manejar el scroll suave de los enlaces de anclaje
  useEffect(() => {
    // Arreglar el problema de scroll al recargar la página con un hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth"
        });
      }
    }
  }, []);

  return (
    <div className="App">
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <SkillsSection language={language} />
      <ExperienceSection language={language} />
      <ProjectsSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;