
import React from 'react';
import { Project } from '../types';
import { GITHUB_ICON_SVG, EXTERNAL_LINK_ICON_SVG } from '../constants';

interface ProjectCardProps {
  project: Project;
  aosDelay?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, aosDelay }) => {
  return (
    <div 
      className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-sky-500/30 hover:transform hover:-translate-y-2 flex flex-col h-full"
      data-aos={project.aosAnimation || "fade-up"}
      data-aos-delay={aosDelay}
    >
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-56 object-cover" 
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-sky-400 mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
        
        {project.longDescription && (
           <p className="text-gray-500 text-xs mb-4 italic hidden md:block">{project.longDescription.substring(0,100)}...</p>
        )}

        <div className="mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-block bg-gray-700 text-sky-300 text-xs font-semibold mr-2 mb-2 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-auto flex items-center space-x-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-sky-400 transition-colors duration-300"
            title="View on GitHub"
          >
            <span dangerouslySetInnerHTML={{ __html: GITHUB_ICON_SVG }} className="w-5 h-5 mr-2"></span>
            GitHub
          </a>
          {project.liveLink && project.liveLink !== '#' && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-sky-400 transition-colors duration-300"
              title="View Live Demo"
            >
              <span dangerouslySetInnerHTML={{ __html: EXTERNAL_LINK_ICON_SVG }} className="w-4 h-4 mr-2"></span>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
