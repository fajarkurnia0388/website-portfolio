
import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  aos?: string; // AOS animation type e.g. "fade-up"
  aosDelay?: string; // AOS delay e.g. "100"
  style?: React.CSSProperties; // Added style prop
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', aos, aosDelay, style }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
      data-aos={aos}
      data-aos-delay={aosDelay}
      style={style} // Apply the style prop here
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
