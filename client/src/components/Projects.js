import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data';
import '../styles/project.css';

const techFilters = [
  { key: 'all', label: 'All' },
  { key: 'react', label: 'React' },
  { key: 'node', label: 'Node' },
  { key: 'express', label: 'Express' },
  { key: 'django', label: 'Django' },
  { key: 'php', label: 'PHP' },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="projects-section py-20">
      <div className="container mx-auto px-4">
        <h2 className="projects-title text-4xl font-bold mb-12 text-center">My Projects</h2>
        
        <div className="filter-buttons flex flex-wrap justify-center gap-4 mb-12">
          {techFilters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`filter-btn rounded-full capitalize${filter === key ? ' active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-card">
                <ProjectCard project={project} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;