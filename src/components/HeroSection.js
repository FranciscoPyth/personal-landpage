import React from 'react';

const HeroSection = ({ language }) => {
  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const content = {
    es: {
      title: 'Francisco Saggiorato',
      subtitle: 'AI Developer | Data Engineer | Data Science',
      contact: 'Contacto',
      projects: 'Proyectos'
    },
    en: {
      title: 'Francisco Saggiorato',
      subtitle: 'AI Developer | Data Engineer | Data Science',
      contact: 'Contact',
      projects: 'Projects'
    }
  };

  const currentContent = content[language];

  return (
    <header className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">{currentContent.title}</h1>
      <h2 className="text-xl md:text-2xl text-gray-600 mb-8">{currentContent.subtitle}</h2>
      <div className="flex space-x-4">
        <a 
          href="#contact" 
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          onClick={handleLinkClick}
        >
          {currentContent.contact}
        </a>
        <a 
          href="#projects" 
          className="border border-black px-6 py-3 rounded hover:bg-gray-100 transition"
          onClick={handleLinkClick}
        >
          {currentContent.projects}
        </a>
      </div>
    </header>
  );
};

export default HeroSection;