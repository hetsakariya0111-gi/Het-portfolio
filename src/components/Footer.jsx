import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container glass">
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {portfolioData.personal.fullName}. All rights reserved.</p>
          <div className="seo-badges">
            <span className="seo-badge">SEO Ready: sitemap.xml | robots.txt</span>
            <div className="gsc-badge">
              <img src="https://www.gstatic.com/images/branding/product/2x/search_console_64dp.png" alt="Google Search Console" />
              <span>Verified by Google Search Console</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
