import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code, Database, BarChart } from 'lucide-react';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-gray-200 py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">FS.</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-800 hover:text-gray-600">Sobre mí</a>
            <a href="#skills" className="text-gray-800 hover:text-gray-600">Habilidades</a>
            <a href="#experience" className="text-gray-800 hover:text-gray-600">Experiencia</a>
            <a href="#projects" className="text-gray-800 hover:text-gray-600">Proyectos</a>
            <a href="#contact" className="text-gray-800 hover:text-gray-600">Contacto</a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-800" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-2 space-y-4 flex flex-col items-center">
            <a href="#about" className="text-gray-800 hover:text-gray-600" onClick={toggleMobileMenu}>Sobre mí</a>
            <a href="#skills" className="text-gray-800 hover:text-gray-600" onClick={toggleMobileMenu}>Habilidades</a>
            <a href="#experience" className="text-gray-800 hover:text-gray-600" onClick={toggleMobileMenu}>Experiencia</a>
            <a href="#projects" className="text-gray-800 hover:text-gray-600" onClick={toggleMobileMenu}>Proyectos</a>
            <a href="#contact" className="text-gray-800 hover:text-gray-600" onClick={toggleMobileMenu}>Contacto</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Francisco Nicolas Saggiorato</h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8">Desarrollador & Data Scientist</h2>
        <div className="flex space-x-4">
          <a href="#contact" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">Contacto</a>
          <a href="#projects" className="border border-black px-6 py-3 rounded hover:bg-gray-100 transition">Proyectos</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-4 md:px-8 py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-8">Sobre mí</h2>
        <p className="text-lg text-gray-700 mb-6">
          {/* Este espacio está reservado para tu resumen personal */}
          Apasionado por la tecnología y el análisis de datos. Busco constantemente desafíos que me permitan aplicar mis conocimientos en desarrollo y ciencia de datos para crear soluciones eficientes e innovadoras.
        </p>
        <p className="text-lg text-gray-700">
          Actualmente me desempeño como Desarrollador y Analista de Datos en IThreec Global, donde combino mis habilidades técnicas para transformar datos en soluciones de valor.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto px-4 md:px-8 py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-8">Habilidades Técnicas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 p-6 rounded">
            <div className="flex items-center mb-4">
              <Code className="mr-3 text-black" size={24} />
              <h3 className="text-xl font-semibold">Desarrollo</h3>
            </div>
            <ul className="space-y-2">
              <li>Python</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Bootstrap</li>
              <li>HTML/CSS/JavaScript</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 p-6 rounded">
            <div className="flex items-center mb-4">
              <Database className="mr-3 text-black" size={24} />
              <h3 className="text-xl font-semibold">Datos</h3>
            </div>
            <ul className="space-y-2">
              <li>SQL</li>
              <li>ETL (NIFI)</li>
              <li>Power BI</li>
              <li>Pandas</li>
              <li>NumPy</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 p-6 rounded">
            <div className="flex items-center mb-4">
              <BarChart className="mr-3 text-black" size={24} />
              <h3 className="text-xl font-semibold">Data Science</h3>
            </div>
            <ul className="space-y-2">
              <li>Scikit-learn</li>
              <li>Análisis estadístico</li>
              <li>Visualización de datos</li>
              <li>Machine Learning</li>
              <li>Procesamiento de datos</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-4xl mx-auto px-4 md:px-8 py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-8">Experiencia Profesional</h2>
        
        <div className="mb-8 border-l-4 border-black pl-6 py-2">
          <h3 className="text-xl font-bold">Desarrollador y Analista de Datos</h3>
          <p className="text-gray-600 mb-2">IThreec Global · Actualidad</p>
          <p className="text-gray-700">
            Desarrollo de soluciones tecnológicas y análisis de datos. Implementación de procesos ETL con NIFI, creación de dashboards con Power BI y desarrollo de aplicaciones web con React y Node.js.
          </p>
        </div>
        
        {/* Puedes agregar más experiencias aquí */}
        <div className="border-l-4 border-gray-300 pl-6 py-2">
          <p className="text-gray-500 italic">Agregar experiencia previa aquí...</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-4 md:px-8 py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-8">Proyectos Destacados</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card Template */}
          <div className="border border-gray-200 rounded overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <p className="text-gray-400">Imagen del proyecto</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Nombre del Proyecto</h3>
              <p className="text-gray-700 mb-4">
                Descripción breve del proyecto y tecnologías utilizadas.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-sm font-medium hover:underline">Ver Demo</a>
                <a href="#" className="text-sm font-medium hover:underline">Repositorio</a>
              </div>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <p className="text-gray-400">Imagen del proyecto</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Nombre del Proyecto</h3>
              <p className="text-gray-700 mb-4">
                Descripción breve del proyecto y tecnologías utilizadas.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-sm font-medium hover:underline">Ver Demo</a>
                <a href="#" className="text-sm font-medium hover:underline">Repositorio</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 md:px-8 py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-8">Contacto</h2>
        
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
          <a href="mailto:tu-email@ejemplo.com" className="flex items-center group">
            <Mail className="mr-2 group-hover:text-gray-600" size={20} />
            <span className="group-hover:underline">tu-email@ejemplo.com</span>
          </a>
          
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="flex items-center group">
            <Github className="mr-2 group-hover:text-gray-600" size={20} />
            <span className="group-hover:underline">GitHub</span>
          </a>
          
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="flex items-center group">
            <Linkedin className="mr-2 group-hover:text-gray-600" size={20} />
            <span className="group-hover:underline">LinkedIn</span>
          </a>
        </div>
        
        {/* Contact Form */}
        <div className="mt-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="tu-email@ejemplo.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 text-center text-gray-500">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <p>© {new Date().getFullYear()} Francisco Nicolas Saggiorato. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;