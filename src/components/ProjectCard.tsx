import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card overflow-hidden h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={`${project.title} project`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <a href="https://github.com/LuthfiNassir" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="#" className="p-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300" aria-label="Live demo">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;