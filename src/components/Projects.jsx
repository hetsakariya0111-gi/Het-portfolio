import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileJson, Layout } from 'lucide-react';
import { GithubIcon, YoutubeIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'Games', 'Clones', 'Full Stack', 'Frontend'];

  const filteredProjects = activeTab === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="glow-text">FEATURED PROJECTS</h2>
        <div className="title-underline"></div>
      </div>

      <div className="tabs-container">
        {categories.map(cat => (
          <button
            key={cat}
            className={`tab-btn ${activeTab === cat ? 'active glass' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 && (
            <motion.div
              key={`${activeTab}-empty`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="projects-empty glass"
            >
              No {activeTab} projects added yet.
            </motion.div>
          )}
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="project-card glass"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" title="GitHub">
                        <GithubIcon size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" title="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.youtube && (
                      <a href={project.youtube} target="_blank" rel="noreferrer" title="YouTube">
                        <YoutubeIcon size={20} />
                      </a>
                    )}
                    {project.postman && (
                      <a href={project.postman} target="_blank" rel="noreferrer" title="Postman Docs">
                        <FileJson size={20} />
                      </a>
                    )}
                    {project.figma && (
                      <a href={project.figma} target="_blank" rel="noreferrer" title="Figma Design">
                        <Layout size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
