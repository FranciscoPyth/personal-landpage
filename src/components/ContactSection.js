import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactSection = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    // Resetear el formulario después del envío
    setFormData({ name: '', email: '', message: '' });
    // Mostrar un mensaje de éxito (puedes implementar esto con un estado)
    alert('¡Mensaje enviado con éxito!');
  };

  const content = {
    es: {
      title: 'Contacto',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu-email@ejemplo.com',
      messagePlaceholder: 'Escribe tu mensaje aquí...',
      sendButton: 'Enviar Mensaje',
      successMessage: '¡Mensaje enviado con éxito!'
    },
    en: {
      title: 'Contact',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your-email@example.com',
      messagePlaceholder: 'Write your message here...',
      sendButton: 'Send Message',
      successMessage: 'Message sent successfully!'
    }
  };

  const currentContent = content[language];

  const contactLinks = [
    {
      icon: <Mail className="mr-2 group-hover:text-gray-600" size={20} />,
      text: 'franciscosaggiorato0@gmail.com',
      href: 'mailto:franciscosaggiorato0@gmail.com'
    },
    {
      icon: <Github className="mr-2 group-hover:text-gray-600" size={20} />,
      text: 'GitHub',
      href: 'https://github.com/FranciscoPyth'
    },
    {
      icon: <Linkedin className="mr-2 group-hover:text-gray-600" size={20} />,
      text: 'LinkedIn',
      href: 'https://linkedin.com/in/francisco-saggiorato'
    }
  ];

  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 md:px-8 py-16 border-t border-gray-200">
      <h2 className="text-3xl font-bold mb-8">{currentContent.title}</h2>
      
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
        {contactLinks.map((link, index) => (
          <a 
            key={index}
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center group"
          >
            {link.icon}
            <span className="group-hover:underline">{link.text}</span>
          </a>
        ))}
      </div>
      
      {/* Contact Form */}
      <div className="mt-12">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{currentContent.name}</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                placeholder={currentContent.namePlaceholder}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{currentContent.email}</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                placeholder={currentContent.emailPlaceholder}
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{currentContent.message}</label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              placeholder={currentContent.messagePlaceholder}
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            {currentContent.sendButton}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;