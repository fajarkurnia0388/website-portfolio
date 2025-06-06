
import React from 'react';
import Section from './Section';
import { GITHUB_ICON_SVG, LINKEDIN_ICON_SVG, EMAIL_ICON_SVG } from '../constants';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: GITHUB_ICON_SVG, 
      url: 'https://github.com/yourusername', 
      aos: 'fade-right',
      delay: '100'
    },
    { 
      name: 'LinkedIn', 
      icon: LINKEDIN_ICON_SVG, 
      url: 'https://linkedin.com/in/yourusername', 
      aos: 'fade-up',
      delay: '200'
    },
    { 
      name: 'Email', 
      icon: EMAIL_ICON_SVG, 
      url: 'mailto:youremail@example.com', 
      aos: 'fade-left',
      delay: '300'
    },
  ];

  return (
    <Section id={id} className="bg-gray-900">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-sky-400 mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate.
        </p>
        <div className="w-20 h-1 bg-sky-500 mx-auto mt-4"></div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-sky-500/30 transition-all duration-300 transform hover:-translate-y-1"
              data-aos={link.aos}
              data-aos-delay={link.delay}
            >
              <div 
                dangerouslySetInnerHTML={{ __html: link.icon }} 
                className="w-10 h-10 mx-auto mb-4 text-sky-400 group-hover:text-sky-300 transition-colors duration-300"
              ></div>
              <h3 className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">{link.name}</h3>
            </a>
          ))}
        </div>
        <p className="text-center text-gray-500 mt-12" data-aos="fade-up" data-aos-delay="400">
          Feel free to reach out. I look forward to hearing from you!
        </p>
      </div>
    </Section>
  );
};

export default Contact;
