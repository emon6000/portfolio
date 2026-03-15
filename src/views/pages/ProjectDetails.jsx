import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePortfolio } from '../../controllers/usePortfolio';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProjectById } = usePortfolio();
  
  const project = getProjectById(id);

  if (!project) return <div className="loading">Loading project...</div>;

  return (
    <div className="project-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>&#8592; BACK TO PROJECTS</button>
      
      <div className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <span className="project-tech-tag">{project.tech}</span>
      </div>

      <div className="project-image-wrapper">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-info">
        <p className="project-full-desc">{project.details}</p>
        
        <div className="project-links">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-primary">VIEW ON GITHUB</a>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">LIVE DEMO</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;