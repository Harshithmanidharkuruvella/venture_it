import { useState, useEffect } from 'react';
import logoImage from '../assets/venture_logo_new.png';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Tech', href: '#tech' },
  { label: 'Team', href: '#team' },
  { label: 'Industries', href: '#industries' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section (including videoscroll which is not in NAV_ITEMS)
      const TRACKED_SECTIONS = ['hero', 'videoscroll', ...NAV_ITEMS.map(item => item.href.slice(1))];
      
      for (let i = TRACKED_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(TRACKED_SECTIONS[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(TRACKED_SECTIONS[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keep transparent at top, OR when over the scrollytelling section ('videoscroll')
  const isSolid = scrolled && activeSection !== 'videoscroll';

  return (
    <>
      <motion.nav
        className={`navbar ${isSolid ? 'navbar--solid' : 'navbar--transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className="navbar__inner">
          <a href="#hero" className="navbar__logo" onClick={() => handleNavClick('#hero')}>
            <img src={logoImage} alt="Venture IT Solutions Logo" />
            <span className="navbar__logo-text">Venture IT Solutions</span>
          </a>

          <div className="navbar__links">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                className={`navbar__link ${activeSection === item.href.slice(1) ? 'navbar__link--active' : ''}`}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </button>
            ))}
            <button
              className="btn btn-primary navbar__cta"
              onClick={() => handleNavClick('#contact')}
            >
              Contact Us
            </button>
          </div>

          <button
            className={`navbar__toggle ${mobileOpen ? 'navbar__toggle--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__drawer navbar__drawer--open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.href}
                className="navbar__link"
                onClick={() => handleNavClick(item.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              className="btn btn-primary"
              onClick={() => handleNavClick('#contact')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_ITEMS.length * 0.1 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
