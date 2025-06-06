
import React, { useEffect } from 'react';
import AOS from 'aos';
// Note: 'aos/dist/aos.css' is included via <link> in index.html
// import 'aos/dist/aos.css'; // This line is not needed if linked in HTML

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PROJECTS_DATA, NAV_LINKS } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100,
    });
    // Optional: Refresh AOS on certain events if content changes dynamically
    // window.addEventListener('load', AOS.refresh);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-gray-100 antialiased">
      <Header navLinks={NAV_LINKS} />
      <main className="flex-grow">
        <Hero id="hero" />
        <About id="about" />
        <Projects id="projects" projects={PROJECTS_DATA} />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default App;
