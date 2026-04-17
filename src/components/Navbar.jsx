import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];



  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled glass' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo glow-text">
          {portfolioData.personal.name}
        </div>

        <div className="navbar-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}

        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="navbar-mobile-backdrop" onClick={() => setIsOpen(false)}>
          <div className="navbar-mobile" onClick={(e) => e.stopPropagation()}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
