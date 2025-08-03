import React from 'react';

const ExperienceSection = ({ language }) => {
  const content = {
    es: {
      title: 'Experiencia Profesional',
      aiDeveloper: 'AI Developer',
      dataScientist: 'Data Scientist',
      dataAnalyst: 'Data Analyst',
      company: 'IThreex Global',
      current: 'Agosto 2023 - Presente',
      period1: 'Julio 2023 - Agosto 2024',
      period2: 'Septiembre 2022 - Junio 2023',
      aiDeveloperDesc: 'Enfoque en desarrollo backend, ingeniería de datos e integración de modelos de lenguaje grandes (LLMs) en plataformas conversacionales con IA. Colaboración con equipos frontend, integradores de plataformas y servicios en la nube para entregar soluciones de IA escalables y eficientes.',
      dataScientistDesc: 'Transición desde el rol de Data Analyst. Enfoque en preparar y transformar datos sin procesar en conjuntos de datos limpios y estructurados adecuados para análisis avanzados y aplicaciones de machine learning.',
      dataAnalystDesc: 'Responsable de transformar conjuntos de datos complejos en insights claros y accionables a través de dashboards interactivos y reportes visuales. Trabajo cercano con el equipo de Data Science para comunicar resultados efectivamente a las partes interesadas del negocio.'
    },
    en: {
      title: 'Professional Experience',
      aiDeveloper: 'AI Developer',
      dataScientist: 'Data Scientist',
      dataAnalyst: 'Data Analyst',
      company: 'IThreex Global',
      current: 'August 2023 - Present',
      period1: 'July 2023 - August 2024',
      period2: 'September 2022 - June 2023',
      aiDeveloperDesc: 'Focus on backend development, data engineering, and integration of Large Language Models (LLMs) in AI-powered conversational platforms. Collaboration with frontend teams, platform integrators, and cloud services to deliver scalable and efficient AI solutions.',
      dataScientistDesc: 'Transition from Data Analyst role. Focus on preparing and transforming raw data into clean, structured datasets suitable for advanced analytics and machine learning applications.',
      dataAnalystDesc: 'Responsible for transforming complex datasets into clear, actionable insights through interactive dashboards and visual reports. Close work with the Data Science team to effectively communicate results to business stakeholders.'
    }
  };

  const currentContent = content[language];

  const experiences = [
    {
      title: currentContent.aiDeveloper,
      company: currentContent.company,
      period: currentContent.current,
      description: currentContent.aiDeveloperDesc,
      active: true
    },
    {
      title: currentContent.dataScientist,
      company: currentContent.company,
      period: currentContent.period1,
      description: currentContent.dataScientistDesc,
      active: false
    },
    {
      title: currentContent.dataAnalyst,
      company: currentContent.company,
      period: currentContent.period2,
      description: currentContent.dataAnalystDesc,
      active: false
    }
  ];

  return (
    <section id="experience" className="max-w-4xl mx-auto px-4 md:px-8 py-16 border-t border-gray-200">
      <h2 className="text-3xl font-bold mb-8">{currentContent.title}</h2>
      
      {experiences.map((experience, index) => (
        <div 
          key={index} 
          className={`mb-8 border-l-4 ${experience.active ? 'border-black' : 'border-gray-300'} pl-6 py-2`}
        >
          <h3 className="text-xl font-bold">{experience.title}</h3>
          <p className="text-gray-600 mb-2">{experience.company} · {experience.period}</p>
          <p className="text-gray-700">{experience.description}</p>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;