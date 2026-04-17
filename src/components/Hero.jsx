import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, TwitterIcon, YoutubeIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

const socialComponents = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  code: LeetcodeIcon,
  twitter: TwitterIcon,
  youtube: YoutubeIcon,
};

const rotatingRoles = [
  'Full Stack Developer',
  'Frontend Developer',
  'Backend Developer',
  'Software Developer',
];

const Hero = () => {
  const { personal, socials } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = rotatingRoles[roleIndex];
    let timerDelay = isDeleting ? 90 : 155;

    if (!isDeleting && displayText === currentRole) {
      timerDelay = 1800;
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
      return;
    }

    const timer = setTimeout(() => {
      const updatedText = isDeleting
        ? currentRole.slice(0, displayText.length - 1)
        : currentRole.slice(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setIsDeleting(true);
      }
    }, timerDelay);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-glow"></div>
          <img src={personal.photo} alt={personal.name} className="profile-img" />
        </motion.div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title">
            HI, I AM <span className="glow-text">{personal.name}</span>
          </h1>
          <p className="hero-intro">
            I build modern, scalable web experiences with strong focus on UI quality and real-world problem solving.
          </p>
          <p className="hero-bio hero-rotating-role">
            <span className="role-chip">
              {displayText}
              <span className="typing-cursor">|</span>
            </span>
          </p>

          <div className="hero-socials">
            {socials.map((social) => {
              const IconComp = socialComponents[social.icon] || GithubIcon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn glass"
                  style={{ '--hover-color': social.color }}
                  title={social.name}
                >
                  <IconComp size={20} />
                </a>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
