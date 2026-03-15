import React from 'react';
import './FlipCard.css';

const FlipCard = ({ frontTitle, image, backSubtitle, backDescription }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front of the Card */}
        <div className="flip-card-front" style={{ backgroundImage: `url(${image})` }}>
          <div className="front-gradient-overlay"></div>
          <h3 className="front-title">{frontTitle}</h3>
        </div>
        
        {/* Back of the Card */}
        <div className="flip-card-back">
          <h4>{backSubtitle}</h4>
          <p>{backDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;