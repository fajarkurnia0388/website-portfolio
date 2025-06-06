
import React from 'react';
import { GITHUB_ICON_SVG, LINKEDIN_ICON_SVG, EMAIL_ICON_SVG } from '../constants';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: GITHUB_ICON_SVG, url: 'https://github.com/fajarkurnia0388' },
    { name: 'LinkedIn', icon: LINKEDIN_ICON_SVG, url: 'https_//linkedin.com/in/yourusername' },
    { name: 'Email', icon: EMAIL_ICON_SVG, url: 'mailto:fajarkurnia2903@gmail.com' },
  ];

  return (
    <footer className="bg-gray-950 text-gray-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition-colors duration-300"
              aria-label={link.name}
              title={link.name}
            >
              <span dangerouslySetInnerHTML={{ __html: link.icon }} className="w-6 h-6"></span>
            </a>
          ))}
        </div>
        <p className="text-sm">
          &copy; {currentYear} Your Name. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Crafted with <span className="text-red-500">&hearts;</span> using React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
