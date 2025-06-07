import React from 'react';
import Section from './Section';
import photo from './photo.jpeg';

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
            src={photo}
            alt="Profile of Fajar Kurnia"
            className="rounded-lg shadow-2xl mx-auto md:mx-0 w-full max-w-md object-cover aspect-square border-4 border-sky-500/50"
          />
        </div>
        <div className="text-lg text-gray-300 space-y-6" data-aos="fade-left" data-aos-delay="400">
          <p>
            Hello! I'm **Fajar Kurnia**, a **Software Developer** with a deep passion for being a **Problem Solver and Digital Enthusiast**. My focus is on **Fullstack development**, and I possess expertise in **Python, JavaScript, and frameworks like Laravel**.
          </p>
          <p>
            I'm deeply fascinated by digital technology and truly enjoy the process of **creating programs** that are both efficient and intuitive. My goal is to transform complex challenges into user-friendly solutions, continuously adding value through innovation.
          </p>
          <p>
            When I'm not immersed in coding, you can find me enjoying my hobbies like **reading comics, cycling, playing chess, and swimming**. These activities help me keep my mind fresh and maintain a healthy balance.
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a href="https://github.com/fajarkurnia0388" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors duration-300 text-sm font-medium py-2 px-4 border border-sky-400 rounded-md hover:bg-sky-400 hover:text-gray-900">
              View My GitHub
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
