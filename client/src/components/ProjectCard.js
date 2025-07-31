import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img 
        src={project.image} 
        alt={project.title} 
        className="project-image"
      />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description.substring(0, 100)}...</p>
        
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        
        <div className="project-actions">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-btn demo-btn"
            >
              Live Demo
            </a>
          )}
          <Link 
            to={`/projects/${project.id}`}
            className="project-btn details-btn"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;