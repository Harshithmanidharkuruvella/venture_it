import { motion } from 'framer-motion';
import './Leadership.css';

const leaders = [
  {
    name: 'Venkatesh Vandanapu',
    role: 'Chairman',
    initials: 'VV',
    bio: 'Provides strategic leadership and governance oversight, driving the company\'s vision, growth strategy, and long-term business development initiatives.',
  },
  {
    name: 'Surender Reddy',
    role: 'Vice Chairman',
    initials: 'SR',
    bio: 'Oversees corporate operations, strategic partnerships, and business expansion initiatives while supporting organizational growth and innovation.',
  },
  {
    name: 'Bharath Kumar Kakkireni',
    role: 'CEO',
    initials: 'BK',
    bio: 'Accomplished technology entrepreneur with extensive experience in digital transformation, enterprise software, healthcare, education, and government solutions.',
  },
  {
    name: 'Bharath Dandu',
    role: 'CTO',
    initials: 'BD',
    bio: 'Leads technology strategy, solution architecture, innovation, R&D, ensuring delivery of robust, scalable, and future-ready technology platforms.',
  },
  {
    name: 'Nithin Jonnakanti',
    role: 'Project Manager',
    initials: 'NJ',
    bio: 'Manages project execution, client delivery, resource planning, stakeholder communication, and successful implementation of technology initiatives.',
  },
  {
    name: 'Arun Kumar',
    role: 'Lead Developer',
    initials: 'AK',
    bio: 'Leads software development teams, application architecture implementation, code quality management, and technical solution delivery.',
  },
  {
    name: 'Rajesh Achary',
    role: 'Solution Architect',
    initials: 'RA',
    bio: 'Designs enterprise-grade technology architectures, integration frameworks, cloud strategies, and scalable digital platforms.',
  },
  {
    name: 'Rajshekar Palle',
    role: 'Technical Manager',
    initials: 'RP',
    bio: 'Oversees technical operations, infrastructure management, implementation support, quality assurance, and technology service delivery.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function Leadership() {
  return (
    <section className="leadership section" id="team">
      <div className="container">
        <div className="leadership__header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Leadership Team
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Meet the <span className="gradient-text">Visionaries</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our experienced leadership team brings together decades of expertise in 
            technology, business strategy, and innovation.
          </motion.p>
        </div>

        {/* Top Leadership Row */}
        <div className="leadership__grid leadership__grid--top">
          {leaders.slice(0, 4).map((leader, i) => (
            <motion.div
              key={leader.name}
              className="glass-card leadership__card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
            >
              <div className="leadership__avatar">
                {leader.initials}
              </div>
              <h3 className="leadership__name">{leader.name}</h3>
              <p className="leadership__role">{leader.role}</p>
              <p className="leadership__bio">{leader.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Team Row */}
        <div className="leadership__grid leadership__grid--bottom">
          {leaders.slice(4).map((leader, i) => (
            <motion.div
              key={leader.name}
              className="glass-card leadership__card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i + 4}
            >
              <div className="leadership__avatar">
                {leader.initials}
              </div>
              <h3 className="leadership__name">{leader.name}</h3>
              <p className="leadership__role">{leader.role}</p>
              <p className="leadership__bio">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
