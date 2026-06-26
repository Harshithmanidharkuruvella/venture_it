import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  HiOutlineLightningBolt,
  HiOutlineCode,
  HiOutlineUserGroup,
  HiOutlineDatabase,
  HiOutlineOfficeBuilding,
  HiOutlineChip,
  HiOutlineLocationMarker,
  HiOutlineCloud,
  HiOutlineShieldCheck,
} from 'react-icons/hi';
import './Services.css';

const services = [
  {
    icon: <HiOutlineLightningBolt />,
    title: 'Digital Transformation',
    desc: 'Helping organizations modernize business processes, automate workflows, and embrace emerging technologies for the future.',
    tags: ['Automation', 'Strategy'],
    className: 'bento-span-2 bento-row-2 bento-feature',
    color: 'blue'
  },
  {
    icon: <HiOutlineCode />,
    title: 'Software Development',
    desc: 'Custom software tailored to unique requirements.',
    tags: ['Web', 'Mobile'],
    className: 'bento-span-1',
    color: 'orange'
  },
  {
    icon: <HiOutlineCloud />,
    title: 'Cloud Computing',
    desc: 'Scalable cloud infrastructure and seamless migrations.',
    tags: ['AWS', 'Azure'],
    className: 'bento-span-1',
    color: 'blue'
  },
  {
    icon: <HiOutlineDatabase />,
    title: 'Database Management',
    desc: 'Enterprise-grade database solutions and analytics.',
    tags: ['Data Migration', 'Analytics'],
    className: 'bento-span-2',
    color: 'orange'
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: 'Cybersecurity',
    desc: 'Comprehensive security assessments, threat detection, and compliance.',
    tags: ['Pen Testing', 'Compliance'],
    className: 'bento-span-1 bento-row-2',
    color: 'blue'
  },
  {
    icon: <HiOutlineOfficeBuilding />,
    title: 'Government Solutions',
    desc: 'Platforms for public sector transformation.',
    tags: ['e-Gov'],
    className: 'bento-span-1',
    color: 'blue'
  },
  {
    icon: <HiOutlineChip />,
    title: 'AI Solutions',
    desc: 'Intelligent decision-making through ML.',
    tags: ['ML', 'Chatbots'],
    className: 'bento-span-1',
    color: 'orange'
  },
  {
    icon: <HiOutlineLocationMarker />,
    title: 'GIS Solutions',
    desc: 'Geographic information systems and mapping.',
    tags: ['Mapping'],
    className: 'bento-span-1',
    color: 'blue'
  },
  {
    icon: <HiOutlineUserGroup />,
    title: 'HRMS Solutions',
    desc: 'Comprehensive workforce management.',
    tags: ['Payroll'],
    className: 'bento-span-2',
    color: 'orange'
  },
];

function BentoCard({ service, index }) {
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`bento-card ${service.className || ''}`}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className={`bento-card__glow bento-card__glow--${service.color}`} />
      <div className="bento-card__border" />
      <div className="bento-card__content">
        <div className={`bento-card__icon bento-card__icon--${service.color}`}>
          {service.icon}
        </div>
        <h3 className="bento-card__title">{service.title}</h3>
        <p className="bento-card__desc">{service.desc}</p>
        
        <div className="bento-card__tags">
          {service.tags.map(tag => (
            <span key={tag} className="bento-card__tag">{tag}</span>
          ))}
        </div>
      </div>
      
      {/* Animated Entity for HRMS Solutions */}
      {service.title === 'HRMS Solutions' && (
        <div className="bento-card__entity">
          <motion.div 
            className="entity-node entity-node--1"
            animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="entity-node entity-node--2"
            animate={{ y: [0, 10, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className="entity-node entity-node--3"
            animate={{ x: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <svg className="entity-connections" viewBox="0 0 100 100">
            <motion.path 
              d="M20,50 Q50,20 80,50 T50,80" 
              fill="none" 
              stroke="rgba(244, 121, 32, 0.4)" 
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: "linear" }}
            />
          </svg>
        </div>
      )}
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Capabilities & <span className="text-gradient">Solutions</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Enterprise-grade technology services designed for scale, security, and performance.
          </motion.p>
        </div>

        <div className="services__bento">
          {services.map((service, idx) => (
            <BentoCard key={idx} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
