import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, MapPin, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, TwitterIcon, YoutubeIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  code: LeetcodeIcon,
  twitter: TwitterIcon,
  youtube: YoutubeIcon,
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    setSending(true);
    setErrorMsg('');

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Email service is not configured.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: portfolioData.personal.fullName,
        },
        publicKey
      );

      setSent(true);
      setTimeout(() => setSent(false), 3500);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setErrorMsg('Message sending failed. Please try again in a moment.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="glow-text">GET IN TOUCH</h2>
        <div className="title-underline"></div>
      </div>

      <div className="contact-container">
        <form className="contact-form glass" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              placeholder="Your Message..."
              rows="5"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button type="submit" className="send-btn" disabled={sending}>
            <Send size={18} />
            {sending ? 'Sending...' : sent ? 'Message Sent! ✓' : 'Send Message'}
          </button>
          {errorMsg && <p className="form-status-error">{errorMsg}</p>}
          {(!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) && (
            <p className="form-status-hint">
              Configure EmailJS keys in `.env` using `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.
            </p>
          )}
        </form>

        <div className="contact-info-dock">
          <div className="info-card glass">
            <div className="info-item">
              <MapPin size={20} className="info-icon" />
              <span>{portfolioData.personal.location}</span>
            </div>
            <div className="info-item">
              <Mail size={20} className="info-icon" />
              <a href={`mailto:${portfolioData.personal.email}`}>{portfolioData.personal.email}</a>
            </div>
          </div>

          <div className="social-dock glass">
            <h3>Find Me Online</h3>
            <div className="social-icons">
              {portfolioData.socials.map(social => {
                const IconComp = iconMap[social.icon] || GithubIcon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="dock-icon-btn"
                    style={{ '--brand-color': social.color }}
                    title={social.name}
                  >
                    <IconComp size={22} />
                    <span className="dock-label">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
