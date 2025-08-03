import React from 'react';

const AboutSection = ({ language }) => {
  const content = {
    es: {
      title: 'Sobre mí',
      paragraph1: 'Apasionado por los datos, la IA y el desarrollo de software, tengo experiencia práctica en todo el ciclo de vida de los datos: desde el análisis de datos y la ingeniería de características hasta los servicios backend y la integración de modelos de IA.',
      paragraph2: 'Me especializo en transformar datos sin procesar en valor a través de dashboards perspicaces, conjuntos de características limpias y APIs robustas. Mi trabajo actual involucra la integración de modelos de lenguaje grandes (LLMs) como OpenAI y Gemini en asistentes conversacionales, el desarrollo de pipelines de Generación Aumentada por Recuperación (RAG) y la construcción de arquitecturas orientadas a servicios usando Python (FastAPI), Apache NiFi y plataformas en la nube.',
      paragraph3: 'He colaborado con equipos multifuncionales para entregar soluciones integrales para aplicaciones en tiempo real, conectando servicios como WhatsApp, Jira y ServiceNow. Mi experiencia con bases de datos como MySQL, PostgreSQL y AWS S3 me permite trabajar cómodamente tanto con datos estructurados como no estructurados.',
      education: 'Actualmente cursando el 4to año de Ingeniería en Sistemas de Información en la UTN FRC (Universidad Tecnológica Nacional - Facultad Regional Córdoba).'
    },
    en: {
      title: 'About Me',
      paragraph1: 'Passionate about data, AI, and software development, I have hands-on experience across the entire data lifecycle: from data analysis and feature engineering to backend services and AI model integration.',
      paragraph2: 'I specialize in transforming raw data into value through insightful dashboards, clean feature sets, and robust APIs. My current work involves integrating Large Language Models (LLMs) like OpenAI and Gemini into conversational assistants, developing Retrieval-Augmented Generation (RAG) pipelines, and building service-oriented architectures using Python (FastAPI), Apache NiFi, and cloud platforms.',
      paragraph3: 'I have collaborated with cross-functional teams to deliver comprehensive solutions for real-time applications, connecting services like WhatsApp, Jira, and ServiceNow. My experience with databases like MySQL, PostgreSQL, and AWS S3 allows me to work comfortably with both structured and unstructured data.',
      education: 'Currently pursuing my 4th year of Information Systems Engineering at UTN FRC (National Technological University - Córdoba Regional Faculty).'
    }
  };

  const currentContent = content[language];

  return (
    <section id="about" className="max-w-4xl mx-auto px-4 md:px-8 py-16 border-t border-gray-200">
      <h2 className="text-3xl font-bold mb-8">{currentContent.title}</h2>
      <p className="text-lg text-gray-700 mb-6">
        {currentContent.paragraph1}
      </p>
      <p className="text-lg text-gray-700 mb-6">
        {currentContent.paragraph2}
      </p>
      <p className="text-lg text-gray-700 mb-6">
        {currentContent.paragraph3}
      </p>
      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
        <p className="text-lg text-gray-700 font-medium">
          {currentContent.education}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;