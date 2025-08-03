import React from 'react';

const Footer = ({ language }) => {
  const content = {
    es: {
      copyright: `© ${new Date().getFullYear()} Francisco Saggiorato. Todos los derechos reservados.`
    },
    en: {
      copyright: `© ${new Date().getFullYear()} Francisco Saggiorato. All rights reserved.`
    }
  };

  const currentContent = content[language];

  return (
    <footer className="border-t border-gray-200 py-8 text-center text-gray-500">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <p>{currentContent.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;