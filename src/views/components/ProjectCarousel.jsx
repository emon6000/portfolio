import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCarousel.css';

const ProjectCarousel = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  // Auto-rotate every 2 seconds
  useEffect(() => {
    if (!projects || projects.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [projects]);

  if (!projects || projects.length === 0) return null;

  const nextProject = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="carousel-wrapper">
      <button className="nav-button prev-button" onClick={prevProject}>&#8249;</button>
      
      <div className="carousel-3d-scene">
        {projects.map((project, index) => {
          let offset = index - activeIndex;
          if (offset < -1) offset += projects.length;
          if (offset > 1) offset -= projects.length;

          let cardClass = 'carousel-card';
          if (offset === 0) cardClass += ' active';
          else if (offset === 1) cardClass += ' right';
          else if (offset === -1) cardClass += ' left';
          else cardClass += ' hidden';

          return (
            <div key={project.id} className={cardClass}>
              <div className="card-top-tag">{project.tech.split(',')[0]}</div>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.description}</p>
              
              <div className="card-footer" onClick={() => navigate(`/project/${project.id}`)}>
                <span className="explore-text">EXPLORE</span>
                <div className="explore-icon">&#8594;</div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="nav-button next-button" onClick={nextProject}>&#8250;</button>
    </div>
  );
};

export default ProjectCarousel;