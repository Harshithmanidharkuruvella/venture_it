import { motion } from 'framer-motion';
import { HiOutlineCheck } from 'react-icons/hi';
import './WhyUs.css';

const reasons = [
  { text: 'Experienced Leadership Team', color: 'blue' },
  { text: 'Enterprise-Grade Technology Solutions', color: 'orange' },
  { text: 'Government & Private Sector Expertise', color: 'blue' },
  { text: 'End-to-End Project Delivery', color: 'orange' },
  { text: 'Secure & Scalable Architectures', color: 'blue' },
  { text: 'Client-Centric Approach', color: 'orange' },
  { text: 'Innovation-Driven Development', color: 'blue' },
  { text: 'Local Presence with Global Expertise', color: 'orange' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function WhyUs() {
  return (
    <section className="whyus section" id="whyus">
      <div className="bg-glow bg-glow--blue" style={{ width: 400, height: 400, top: '20%', right: '-100px' }} />

      <div className="container">
        <div className="whyus__layout">
          {/* Left: checklist */}
          <div className="whyus__content">
            <motion.span
              className="section-label"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              className="section-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.1}
              viewport={{ once: true }}
            >
              Your Trusted <span className="gradient-text">Technology Partner</span>
            </motion.h2>

            <div className="whyus__list">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.text}
                  className="whyus__item"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={i * 0.12}
                  viewport={{ once: true }}
                >
                  <div className={`whyus__item-check whyus__item-check--${r.color}`}>
                    <HiOutlineCheck />
                  </div>
                  <span className="whyus__item-text">{r.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: visual card */}
          <motion.div
            className="whyus__visual"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <div className="glass-card whyus__visual-card">
              <h3 className="whyus__visual-title">
                Driving Digital Transformation <span className="gradient-text">Through Innovation</span>
              </h3>
              <p className="whyus__visual-text">
                With deep expertise across enterprise software, AI, cloud computing, and cybersecurity, 
                we deliver solutions that create measurable value for governments, enterprises, and communities 
                across Africa.
              </p>
              <div className="whyus__visual-stats">
                <div className="whyus__visual-stat">
                  <div className="whyus__visual-stat-number">50+</div>
                  <div className="whyus__visual-stat-label">Projects</div>
                </div>
                <div className="whyus__visual-stat">
                  <div className="whyus__visual-stat-number">10+</div>
                  <div className="whyus__visual-stat-label">Industries</div>
                </div>
                <div className="whyus__visual-stat">
                  <div className="whyus__visual-stat-number">30+</div>
                  <div className="whyus__visual-stat-label">Experts</div>
                </div>
                <div className="whyus__visual-stat">
                  <div className="whyus__visual-stat-number">99%</div>
                  <div className="whyus__visual-stat-label">Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
