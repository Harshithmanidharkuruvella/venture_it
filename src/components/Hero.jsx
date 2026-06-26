import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Magnetic from './Magnetic';
import Grainient from './Grainient';
import './Hero.css';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Create a parallax effect for the glass panel as we scroll down
  const yGlass = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacityGlass = useTransform(scrollY, [0, 400], [1, 0]);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', damping: 20, stiffness: 100 } 
    },
  };

  return (
    <section className="hero-balanced" id="hero" ref={containerRef}>
      
      <Grainient
        color1="#0088CC"
        color2="#F47920"
        color3="#001133"
        timeSpeed={0.15}
        warpSpeed={1.5}
        warpAmplitude={60.0}
        grainAmount={0.08}
        zoom={0.8}
      />

      <div className="container hero-balanced__container">
        {/* Content Floating over Iridescence */}
        <motion.div 
          className="hero-balanced__content"
          style={{ y: yGlass, opacity: opacityGlass }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Elegant Subtitle Pill */}
          <motion.div className="hero-balanced__pill" variants={itemVariants}>
            <span className="pill-dot" />
            <span className="pill-text">Venture IT Solutions</span>
          </motion.div>

          {/* Massive Proper Typography */}
          <motion.h1 className="hero-balanced__title" variants={itemVariants}>
            Transforming Business
            <br />
            <span className="text-gradient-shine">Through Technology.</span>
          </motion.h1>

          <motion.p className="hero-balanced__description" variants={itemVariants}>
            We architect the digital foundation of tomorrow. Elevating global enterprises 
            with state-of-the-art AI, robust cloud infrastructure, and ironclad security.
          </motion.p>

          {/* Proper Magnetic Actions */}
          <motion.div className="hero-balanced__actions" variants={itemVariants}>
            <Magnetic>
              <button className="btn hero-btn-primary" onClick={() => handleScroll('services')}>
                <span>Deploy Solutions</span>
                <HiOutlineArrowRight className="btn-icon" />
              </button>
            </Magnetic>
            <Magnetic>
              <button className="btn hero-btn-outline" onClick={() => handleScroll('about')}>
                <span>Our Vision</span>
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
