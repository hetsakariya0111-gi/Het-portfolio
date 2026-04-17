import React from 'react';
import { ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './FigmaDesigns.css';

const FigmaDesigns = () => {
  const designs = portfolioData.figmaDesigns || [];

  return (
    <section id="figma-designs" className="figma-section">
      <div className="section-header">
        <h2 className="glow-text">FIGMA DESIGNS</h2>
        <div className="title-underline"></div>
      </div>

      {designs.length === 0 ? (
        <div className="figma-empty glass">
          Add your Figma file links and previews here to complete this section.
        </div>
      ) : (
        <div className="figma-grid">
          {designs.map((design) => (
            <article key={design.title} className="figma-card glass">
              <img src={design.image} alt={design.title} loading="lazy" />
              <div className="figma-card-content">
                <h3>{design.title}</h3>
                <p>{design.description}</p>
                <a href={design.link} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} />
                  <span>Open in Figma</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default FigmaDesigns;
