import React from 'react';
import { Code, Database, BarChart } from 'lucide-react';

const SkillsSection = ({ language }) => {
  const content = {
    es: {
      title: 'Habilidades Técnicas',
      backendDev: 'AI Developer',
      dataEng: 'Data Engineering',
      aiDataScience: 'AI & Data Science'
    },
    en: {
      title: 'Technical Skills',
      backendDev: 'AI Developer',
      dataEng: 'Data Engineering',
      aiDataScience: 'AI & Data Science'
    }
  };

  const currentContent = content[language];

  const skillCategories = [
    {
      title: currentContent.backendDev,
      icon: <Code className="mr-3 text-black" size={24} />,
      skills: ['Python (FastAPI)', 'RESTful APIs', 'Service-Oriented Architecture', 'Node.js', 'React']
    },
    {
      title: currentContent.dataEng,
      icon: <Database className="mr-3 text-black" size={24} />,
      skills: ['Apache NiFi', 'ETL Pipelines', 'MySQL', 'PostgreSQL', 'AWS S3', 'Data Integration']
    },
    {
      title: currentContent.aiDataScience,
      icon: <BarChart className="mr-3 text-black" size={24} />,
      skills: ['Large Language Models (LLMs)', 'RAG (Retrieval-Augmented Generation)', 'OpenAI', 'Gemini', 'Machine Learning', 'Data Analysis']
    }
  ];

  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 md:px-8 py-16 border-t border-gray-200">
      <h2 className="text-3xl font-bold mb-8">{currentContent.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="border border-gray-200 p-6 rounded">
            <div className="flex items-center mb-4">
              {category.icon}
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;