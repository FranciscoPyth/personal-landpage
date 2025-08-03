import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ language, onLanguageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset para compensar la altura del navbar
        behavior: 'smooth'
      });
    }
    
    // Cierra el menú móvil si está abierto
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  const content = {
    es: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    en: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    }
  };

  const currentContent = content[language];

  const navLinks = [
    { name: currentContent.about, href: '#about' },
    { name: currentContent.skills, href: '#skills' },
    { name: currentContent.experience, href: '#experience' },
    { name: currentContent.projects, href: '#projects' },
    { name: currentContent.contact, href: '#contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">FS.</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-gray-800 hover:text-gray-600"
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Toggle Button */}
          <button
            onClick={onLanguageChange}
            className="bg-black text-white px-3 py-1 rounded text-sm hover:bg-gray-800 transition font-medium"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Language Toggle Button for Mobile */}
          <button
            onClick={onLanguageChange}
            className="bg-black text-white px-3 py-1 rounded text-sm hover:bg-gray-800 transition font-medium"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          
          <button 
            className="text-gray-800" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 py-2 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-gray-800 hover:text-gray-600" 
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;