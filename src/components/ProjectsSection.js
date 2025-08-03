import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="border border-gray-200 rounded overflow-hidden">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="h-full w-full object-cover"
          />
        ) : (
          <p className="text-gray-400">Imagen del proyecto</p>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex space-x-4">
          {project.demoLink && (
            <button 
              onClick={() => window.open(project.demoLink, '_blank')}
              className="text-sm font-medium hover:underline"
            >
              Ver Demo
            </button>
          )}
          {project.repoLink && (
            <button 
              onClick={() => window.open(project.repoLink, '_blank')}
              className="text-sm font-medium hover:underline"
            >
              Repositorio
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = ({ language }) => {
  const content = {
    es: {
      title: 'Proyectos Destacados',
      controlaloTitle: 'Controlalo - App de Gastos',
      controlaloDesc: 'Sistema completo de control de gastos con backend RESTful API en Node.js/Express y frontend en React. Permite registrar ingresos y gastos con visualización del balance financiero.',
      demo: 'Ver Demo',
      repo: 'Repositorio'
    },
    en: {
      title: 'Featured Projects',
      controlaloTitle: 'Controlalo - Expense App',
      controlaloDesc: 'Complete expense control system with RESTful API backend in Node.js/Express and React frontend. Allows recording income and expenses with financial balance visualization.',
      demo: 'View Demo',
      repo: 'Repository'
    }
  };

  const currentContent = content[language];

  // Solo el proyecto de Controlalo con imagen
  const projects = [
    {
      title: currentContent.controlaloTitle,
      description: currentContent.controlaloDesc,
      image: '/controlalo-logo.png',
      demoLink: 'https://controlalo.com.ar',
      repoLink: 'https://github.com/FranciscoPyth/app-gastos-fe'
    }
  ];

  return (
    <section id="projects" className="max-w-4xl mx-auto px-4 md:px-8 py-16 border-t border-gray-200">
      <h2 className="text-3xl font-bold mb-8">{currentContent.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;