
import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import Section from './Section';

interface ProjectsProps {
  id: string;
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ id, projects }) => {
  return (
    <Section id={id} className="bg-gray-850"> {/* A slightly different shade for contrast */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-sky-400 mb-4">My Projects</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          A selection of my recent work. Each project showcases my dedication to quality, innovation, and user-centric design.
        </p>
        <div className="w-20 h-1 bg-sky-500 mx-auto mt-4"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-12">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            aosDelay={`${index * 100}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
