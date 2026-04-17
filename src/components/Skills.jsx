import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';

const deviconMap = {
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  "Netlify": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
  "Render": "https://cdn.simpleicons.org/render/ffffff",
};

const getSkillAnimation = (skillName) => {
  switch (skillName) {
    case 'React.js':
      return { animate: { rotate: 360 }, transition: { repeat: Infinity, duration: 15, ease: "linear" } };
    case 'Node.js':
      return { animate: { scale: [1, 1.1, 1] }, transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } };
    case 'Tailwind CSS':
      return { animate: { x: [-4, 4, -4] }, transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } };
    case 'MongoDB':
      return { animate: { rotate: [-8, 8, -8] }, transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } };
    case 'Vercel':
      return { animate: { y: [0, -6, 0] }, transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" } };
    case 'Netlify':
      return { animate: { x: [-3, 3, -3] }, transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } };
    case 'Render':
      return { animate: { scale: [1, 1.05, 1] }, transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" } };
    case 'Figma':
      return { animate: { rotate: [0, -10, 10, -10, 10, 0] }, transition: { repeat: Infinity, duration: 2, ease: "easeInOut", repeatDelay: 3 } };
    default:
      return { animate: { y: [-2, 2, -2] }, transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } };
  }
};

const SkillCard = ({ skill }) => {
  const iconUrl = deviconMap[skill.name] || `https://ui-avatars.com/api/?name=${skill.name}&background=random`;
  const { animate, transition } = getSkillAnimation(skill.name);

  return (
    <motion.div 
      className="skill-item glass"
      whileHover={{ y: -10, scale: 1.05, rotateX: 10, rotateY: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{ perspective: 1000 }}
    >
      <motion.img 
        src={iconUrl} 
        alt={skill.name} 
        className="skill-logo" 
        animate={animate}
        transition={transition}
      />
      <span className="skill-name">{skill.name}</span>
    </motion.div>
  );
};

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="glow-text">TECHNICAL SKILLS</h2>
        <div className="title-underline"></div>
      </div>

      <div className="skills-bento-grid">
        <div className="skill-category glass frontend">
          <h3>Frontend Development</h3>
          <div className="skills-list">
            {skills.frontend.map(skill => <SkillCard key={skill.name} skill={skill} />)}
          </div>
        </div>

        <div className="skill-category glass backend">
          <h3>Backend & Database</h3>
          <div className="skills-list">
            {skills.backend.map(skill => <SkillCard key={skill.name} skill={skill} />)}
          </div>
        </div>

        <div className="skill-category glass tools">
          <h3>Tools & Dev Ops</h3>
          <div className="skills-list">
            {skills.tools.map(skill => <SkillCard key={skill.name} skill={skill} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
