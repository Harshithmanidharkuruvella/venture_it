import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineEye, HiOutlineShieldCheck, HiOutlineGlobe, HiOutlineCube, HiOutlineLightningBolt } from 'react-icons/hi';
import './About.css';

const features = [
  { icon: <HiOutlineShieldCheck />, title: 'Enterprise-Grade Security', desc: 'Robust cybersecurity frameworks protecting your digital assets.' },
  { icon: <HiOutlineGlobe />, title: 'Global Expertise', desc: 'International standards with deep local market understanding.' },
  { icon: <HiOutlineCube />, title: 'Scalable Architecture', desc: 'Solutions designed to grow with your business needs.' },
  { icon: <HiOutlineLightningBolt />, title: 'Innovation-Driven', desc: 'Leveraging cutting-edge AI, cloud, and automation technologies.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="grid-bg" />
      <div className="bg-glow bg-glow--blue about__decoration" />

      <div className="container">
        <div className="about__grid">
          {/* Left Content */}
          <div className="about__content">
            <motion.span
              className="section-label"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              About Us
            </motion.span>

            <motion.h2
              className="section-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.1}
              viewport={{ once: true }}
            >
              Pioneering <span className="gradient-text">Digital Excellence</span> in Africa
            </motion.h2>

            <motion.p
              className="about__text"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              viewport={{ once: true }}
            >
              <strong>Venture IT Solutions Pvt Ltd</strong> is a leading technology solutions provider 
              specializing in enterprise software development, digital transformation, cloud computing, 
              database management, HRMS, artificial intelligence, cybersecurity, and government technology 
              solutions. With a team of highly experienced technology professionals, we deliver innovative 
              solutions that help organizations modernize operations, improve efficiency, and accelerate growth.
            </motion.p>

            <div className="about__cards">
              <motion.div
                className="glass-card about__card about__card--mission"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0.3}
                viewport={{ once: true }}
              >
                <div className="about__card-icon">
                  <HiOutlineLightBulb />
                </div>
                <h3 className="about__card-title">Our Mission</h3>
                <p className="about__card-text">
                  To empower organizations through innovative, secure, and scalable technology solutions 
                  that drive digital transformation, operational excellence, and sustainable growth.
                </p>
              </motion.div>

              <motion.div
                className="glass-card about__card about__card--vision"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0.4}
                viewport={{ once: true }}
              >
                <div className="about__card-icon">
                  <HiOutlineEye />
                </div>
                <h3 className="about__card-title">Our Vision</h3>
                <p className="about__card-text">
                  To become Zimbabwe&apos;s most trusted technology partner and a leading digital 
                  transformation company across Africa, delivering world-class solutions.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Content - 2x2 Grid */}
          <div className="about__visual">
            <div className="about__feature-list">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="about__feature"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={i * 0.15}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <div className="about__feature-icon">
                    {feature.icon}
                  </div>
                  <div className="about__feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
