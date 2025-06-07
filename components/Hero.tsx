import React from 'react';
import Section from './Section';

interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <Section
      id={id}
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/hero-bg/1920/1080')"}} // Original background URL
    >
      <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
      <div className="relative text-center z-10 p-4">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
          data-aos="fade-up"
        >
          <span className="block">Innovate. Create.</span>
          <span className="block text-sky-400">Inspire.</span>
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          As a Software Developer, Problem Solver, and Digital Enthusiast, I transform complex ideas into functional and intuitive programs, leveraging my expertise in Python, JavaScript, and Laravel.
        </p>
        <div
          className="space-x-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="#projects"
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/50"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent hover:bg-gray-700 text-sky-400 font-semibold py-3 px-8 rounded-lg text-lg border-2 border-sky-400 hover:border-sky-500 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
