import React from 'react';
import Section from './Section';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <Section id={id} className="bg-gray-800">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-sky-400 mb-4">About Me</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-right" data-aos-delay="200">
          <img 
            src="photo.jpeg" 
            alt="Profile" 
            className="rounded-lg shadow-2xl mx-auto md:mx-0 w-full max-w-md object-cover aspect-square border-4 border-sky-500/50"
          />
        </div>
        <div className="text-lg text-gray-300 space-y-6" data-aos="fade-left" data-aos-delay="400">
          <p>
            Hello! I'm a dedicated Frontend Engineer with a keen eye for design and a passion for building intuitive, high-performance web applications. My expertise lies in React, TypeScript, and modern JavaScript frameworks, coupled with a strong understanding of UI/UX principles.
          </p>
          <p>
            I thrive on transforming complex problems into elegant solutions and continuously explore new technologies to enhance user experiences. My goal is to create web applications that are not only functional but also aesthetically pleasing and delightful to use.
          </p>
          <p>
            When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or hiking in nature.
          </p>
           <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a href="https_//github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors duration-300 text-sm font-medium py-2 px-4 border border-sky-400 rounded-md hover:bg-sky-400 hover:text-gray-900">
              View GitHub
            </a>
            <a href="#contact" className="text-gray-900 bg-sky-400 hover:bg-sky-500 transition-colors duration-300 text-sm font-medium py-2 px-4 rounded-md">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
