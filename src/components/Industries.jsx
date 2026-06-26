import { motion } from 'framer-motion';
import {
  HiOutlineOfficeBuilding,
  HiOutlineCurrencyDollar,
  HiOutlineHeart,
  HiOutlineAcademicCap,
  HiOutlineStatusOnline,
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineHome,
  HiOutlineGlobe,
} from 'react-icons/hi';
import './Industries.css';

const industries = [
  { icon: <HiOutlineOfficeBuilding />, label: 'Government', color: 'blue' },
  { icon: <HiOutlineCurrencyDollar />, label: 'Banking & Finance', color: 'orange' },
  { icon: <HiOutlineHeart />, label: 'Healthcare', color: 'blue' },
  { icon: <HiOutlineAcademicCap />, label: 'Education', color: 'orange' },
  { icon: <HiOutlineStatusOnline />, label: 'Telecom', color: 'blue' },
  { icon: <HiOutlineCog />, label: 'Manufacturing', color: 'orange' },
  { icon: <HiOutlineCube />, label: 'Mining', color: 'blue' },
  { icon: <HiOutlineShoppingCart />, label: 'Retail', color: 'orange' },
  { icon: <HiOutlineHome />, label: 'Hospitality', color: 'blue' },
  { icon: <HiOutlineGlobe />, label: 'NGOs & Dev Orgs', color: 'orange' },
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

export default function Industries() {
  return (
    <section className="industries section" id="industries">
      <div className="grid-bg" />

      <div className="container">
        <div className="industries__header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Industries We Serve
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Empowering <span className="gradient-text">Every Sector</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            We bring digital transformation to organizations across diverse industries, 
            from government and banking to healthcare and mining.
          </motion.p>
        </div>

        <div className="industries__layout">
          <div className="industries__list">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.label}
                className="industries__item"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                custom={i}
              >
                <div className={`industries__icon industries__icon--${ind.color}`}>
                  {ind.icon}
                </div>
                <h3 className="industries__label">{ind.label}</h3>
              </motion.div>
            ))}
          </div>
          
          <div className="industries__visual">
            <motion.div 
              className="industries__visual-inner"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="industries__visual-graphics">
                <div className="industries__circle industries__circle--1" />
                <div className="industries__circle industries__circle--2" />
                <div className="industries__circle industries__circle--3" />
              </div>
              <div className="industries__visual-content">
                <h3>Cross-Sector Innovation</h3>
                <p>Delivering tailored digital transformation solutions that meet the unique regulatory, operational, and technological demands of every industry.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
