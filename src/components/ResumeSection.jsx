import React from 'react';
import { Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './ResumeSection.css';

const ResumeSection = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="section-header">
        <h2 className="glow-text">RESUME</h2>
        <div className="title-underline"></div>
      </div>
      <div className="resume-card glass">
        <p>View my latest resume in PDF format.</p>
        <a
          href={portfolioData.personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-view-btn"
        >
          <Eye size={18} />
          <span>View Resume</span>
        </a>
      </div>
    </section>
  );
};

export default ResumeSection;
