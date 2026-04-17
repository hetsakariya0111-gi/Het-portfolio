import React from 'react';
import { Award, Figma, Zap, Trophy, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './BentoInfo.css';

const BentoInfo = () => {
  const { certificates, hackathons, achievements } = portfolioData;

  return (
    <div className="extra-sections-container">
      {/* Certifications Section */}
      <section id="certificates" className="custom-section">
        <div className="section-header">
          <h2 className="glow-text">CERTIFICATIONS</h2>
          <div className="title-underline"></div>
        </div>
        <div className="certs-grid">
          {certificates.map(cert => (
            <a 
              key={cert.title} 
              href={cert.image} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cert-card glass"
            >
              <img src={cert.image} alt={cert.org} className="cert-full-img" loading="lazy" />
              <div className="cert-info-block">
                <h4>{cert.title}</h4>
                <p>{cert.org}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="custom-section">
        <div className="section-header">
          <h2 className="glow-text">HACKATHONS</h2>
          <div className="title-underline"></div>
        </div>
        <div className="hack-grid">
          {hackathons.map(hack => (
            <div key={hack.name} className="hack-card glass">
              <div className="hack-header">
                <Zap size={24} className="accent-icon" />
                <h4>{hack.name}</h4>
              </div>
              <p><strong>Problem:</strong> {hack.problem}</p>
              <p><strong>Solution:</strong> {hack.solution}</p>
              <div className="outcome-badge">{hack.outcome}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="custom-section">
        <div className="section-header">
          <h2 className="glow-text">ACHIEVEMENTS</h2>
          <div className="title-underline"></div>
        </div>
        <div className="achieve-grid">
          {achievements.map((ach, i) => (
            <div key={i} className="achieve-card glass">
              {ach.title.includes('DigitalOcean') ? "🦈" : <Trophy size={32} className="accent-icon" />}
              <div>
                <h4>{ach.title}</h4>
                <p>{ach.milestone}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BentoInfo;
