import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // Splits "React, Firebase, Tailwind" into an array of individual tags
  const techList = project.tech.split(',').map(t => t.trim());

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose}>✕</button>
        
        {/* Screenshot / Image Section */}
        <div className="modal-image-container">
          <img src={project.image} alt={project.title} className="modal-image" />
          <div className="modal-image-overlay"></div>
        </div>

        {/* Content Section */}
        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-oneliner">{project.description}</p>
          
          {/* Languages & Frameworks Used */}
          <div className="modal-tech-stack">
            {techList.map((tech, index) => (
              <span key={index} className="tech-pill">{tech}</span>
            ))}
          </div>

          <div className="modal-details">
            <h3>// SYSTEM LOG & DETAILS</h3>
            <p>{project.details}</p>
          </div>

          <div className="modal-actions">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="action-btn outline-btn">
              GITHUB REPO
            </a>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="action-btn solid-btn">
              LIVE DEPLOYMENT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;