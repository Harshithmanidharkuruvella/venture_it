import { useState, useEffect } from 'react';
import logoImage from '../assets/Logo_venture_IT_Solutions_-removebg-preview.png';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlineArrowUp,
} from 'react-icons/hi';
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';
import './Footer.css';

const quickLinks = ['Home', 'About', 'Services', 'Technology', 'Team', 'Contact'];
const serviceLinks = [
  'Digital Transformation',
  'Software Development',
  'HRMS Solutions',
  'Cloud Services',
  'AI Solutions',
  'Cyber Security',
];
const contactLinks = [
  'Plot No. 1, East Court Road',
  'Belvedere, Harare, Zimbabwe',
  '+263 78 199 8888',
  'info@ventureitsol.com',
];

export default function Footer() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (label) => {
    const map = {
      Home: '#hero',
      About: '#about',
      Services: '#services',
      Technology: '#tech',
      Team: '#team',
      Contact: '#contact',
    };
    const target = map[label];
    if (target) {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <img src={logoImage} alt="Venture IT Solutions" />
            </a>
            <p className="footer__brand-text">
              Zimbabwe&apos;s leading technology solutions provider delivering innovative enterprise 
              software, AI, cloud computing, and cybersecurity solutions that drive digital transformation 
              across Africa.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" className="footer__social" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="footer__social" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="footer__social" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer__column-title">Quick Links</h4>
            <div className="footer__links">
              {quickLinks.map((link) => (
                <button
                  key={link}
                  className="footer__link"
                  onClick={() => handleNavClick(link)}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer__column-title">Services</h4>
            <div className="footer__links">
              {serviceLinks.map((link) => (
                <button
                  key={link}
                  className="footer__link"
                  onClick={() => handleNavClick('Services')}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer__column-title">Contact</h4>
            <div className="footer__links">
              {contactLinks.map((item) => (
                <span key={item} className="footer__link" style={{ cursor: 'default' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} <a href="#hero">Venture IT Solutions Pvt Ltd</a>. All rights reserved.
          </p>
          <p className="footer__tagline">
            A Unit of Venture Group &mdash; Empowering Business. Enabling Futures.
          </p>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showBackTop && (
          <motion.button
            className="footer__back-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ y: -4 }}
            aria-label="Back to top"
          >
            <HiOutlineArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
