import React from 'react';
import { MapPin, Mail, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './About.css';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="glow-text">ABOUT ME</h2>
        <div className="title-underline"></div>
      </div>

      <div className="about-card glass">
        <p className="about-tagline">{personal.tagline}</p>
        <p className="about-bio">{personal.bio}</p>
        <p className="about-details">
          I enjoy building user-friendly web applications with clean UI, scalable architecture,
          and smooth user experience. I am currently focused on strengthening my skills in
          full-stack development, problem solving, and real-world project deployment.
        </p>
        <p className="about-university">
          <strong>University:</strong> Swaminarayan University
        </p>

        <div className="about-meta">
          <div className="about-meta-item">
            <MapPin size={18} />
            <span>{personal.location}</span>
          </div>
          <div className="about-meta-item">
            <Mail size={18} />
            <a href={`mailto:${personal.email}`}>{personal.email}</a>
          </div>
        </div>

        <a
          className="about-resume-btn"
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download size={18} />
          <span>View Resume</span>
        </a>
      </div>
    </section>
  );
};

export default About;
