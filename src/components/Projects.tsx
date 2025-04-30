import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from './animations/MotionComponents';
import { Project } from '../types';
import gfgImage from './assets/cryptopulse.png';
import stream from './assets/streamplex.png';
import play from './assets/playstore.png';
const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Playstore App Analysis ",
      description: "Integrated data visualization tools and dashboards to analyze app categories, user ratings, installs, and pricing trends from large Kaggle datasets, providing actionable insights and supporting strategic decisions for app developers and marketers",
      technologies: ["Tableau Prep", "Tableau"],
      image: play
    },
    {
      title: "CryptoPulse, Bitcoin Dashboard",
      description: "Implementation of a backtracking algorithm to solve Sudoku puzzles with 100% accuracy on 500+ test cases and optimized runtime performance.",
      technologies: ["Python", "Streamlit", "Pandas"],
      image: gfgImage
    },
    {
      title: "StreamPlex, Content Analytics Dashboard",
      description: "Developed an interactive dashboard in R and Excel to visualize Netflix content trends, delivering actionable insights on performance, genre popularity, and viewership to support data-driven decisions.",
      technologies: ["R", "Excel"],
      image: stream
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;