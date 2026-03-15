import React from 'react';
import { usePortfolio } from '../../controllers/usePortfolio';
import FlipCard from '../components/FlipCard';
import './Archives.css';

const Archives = () => {
  const { getAllArchives } = usePortfolio();
  const archiveSections = getAllArchives();

  return (
    <div className="archives-container">
      <h1>My Personal Archives</h1>
      <p className="archives-subtitle">A collection of places, media, and people that shape my perspective.</p>

      {archiveSections.map((section) => (
        <section key={section.id} className="archive-section">
          <h2>{section.title}</h2>
          
          {/* Check if the section should be compact (no photos) */}
          {section.displayStyle === 'compact' ? (
            <div className="compact-grid">
              {section.items.map((item) => (
                <div key={item.id} className="compact-card">
                  <span className="compact-title">{item.title}</span>
                  <span className="compact-subtitle">{item.genre}</span>
                </div>
              ))}
            </div>
          ) : (
            /* Otherwise, render the standard photo flip cards */
            <div className="card-grid">
              {section.items.map((item) => (
                <FlipCard 
                  key={item.id}
                  frontTitle={item.frontTitle}
                  image={item.image}
                  backSubtitle={item.backSubtitle}
                  backDescription={item.backDescription}
                />
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default Archives;