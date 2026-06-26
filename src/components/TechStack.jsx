import { motion } from 'framer-motion';
import {
  HiOutlineDesktopComputer,
  HiOutlineServer,
  HiOutlineDeviceMobile,
  HiOutlineCloud,
  HiOutlineCog,
  HiOutlineDatabase,
} from 'react-icons/hi';
import {
  SiReact, SiAngular, SiVuedotjs, SiJavascript, SiHtml5,
  SiDotnet, SiPython, SiNodedotjs, SiPhp,
  SiFlutter, SiAndroid, SiApple,
  SiPostgresql, SiMysql, SiMongodb,
  SiGooglecloud,
  SiDocker, SiKubernetes, SiJenkins, SiGithub, SiGitlab,
} from 'react-icons/si';
import { FaJava, FaMicrosoft, FaAws, FaDatabase, FaCss3Alt } from 'react-icons/fa';
import './TechStack.css';

const row1 = [
  { icon: <SiReact />, label: 'React', color: 'cyan' },
  { icon: <SiAngular />, label: 'Angular', color: 'red' },
  { icon: <SiVuedotjs />, label: 'Vue.js', color: 'green' },
  { icon: <SiJavascript />, label: 'JavaScript', color: 'yellow' },
  { icon: <SiHtml5 />, label: 'HTML5', color: 'orange' },
  { icon: <FaCss3Alt />, label: 'CSS3', color: 'blue' },
  { icon: <SiDotnet />, label: '.NET', color: 'purple' },
  { icon: <FaJava />, label: 'Java', color: 'red' },
  { icon: <SiPython />, label: 'Python', color: 'yellow' },
  { icon: <SiNodedotjs />, label: 'Node.js', color: 'green' },
  { icon: <SiPhp />, label: 'PHP', color: 'purple' },
  { icon: <SiFlutter />, label: 'Flutter', color: 'blue' },
];

const row2 = [
  { icon: <SiAndroid />, label: 'Android', color: 'green' },
  { icon: <SiApple />, label: 'iOS', color: 'blue' },
  { icon: <FaDatabase />, label: 'Oracle', color: 'red' },
  { icon: <SiPostgresql />, label: 'PostgreSQL', color: 'blue' },
  { icon: <FaMicrosoft />, label: 'SQL Server', color: 'blue' },
  { icon: <SiMysql />, label: 'MySQL', color: 'blue' },
  { icon: <SiMongodb />, label: 'MongoDB', color: 'green' },
  { icon: <FaAws />, label: 'AWS', color: 'orange' },
  { icon: <FaMicrosoft />, label: 'Azure', color: 'blue' },
  { icon: <SiGooglecloud />, label: 'Google Cloud', color: 'red' },
  { icon: <SiDocker />, label: 'Docker', color: 'blue' },
  { icon: <SiKubernetes />, label: 'Kubernetes', color: 'blue' },
  { icon: <SiJenkins />, label: 'Jenkins', color: 'red' },
  { icon: <SiGithub />, label: 'GitHub', color: 'blue' },
  { icon: <SiGitlab />, label: 'GitLab', color: 'orange' },
];

const categories = [
  {
    icon: <HiOutlineDesktopComputer />,
    title: 'Frontend & Backend',
    items: 'React • Angular • Vue.js • .NET • Java • Python • Node.js',
    color: 'blue',
  },
  {
    icon: <HiOutlineDeviceMobile />,
    title: 'Mobile & Database',
    items: 'Flutter • React Native • Oracle • PostgreSQL • MongoDB • MySQL',
    color: 'orange',
  },
  {
    icon: <HiOutlineCog />,
    title: 'Cloud & DevOps',
    items: 'AWS • Azure • Google Cloud • Docker • Kubernetes • CI/CD',
    color: 'green',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="tech__marquee-container">
      <div className={`tech__marquee ${reverse ? 'tech__marquee--reverse' : ''}`}>
        {doubled.map((item, i) => (
          <div key={`${item.label}-${i}`} className="tech__chip">
            <span className={`tech__chip-icon tech__chip-icon--${item.color}`}>{item.icon}</span>
            <span className="tech__chip-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="tech section" id="tech">
      <div className="container">
        <div className="tech__header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technology Stack
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Built With <span className="gradient-text">Modern Technologies</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            We leverage the latest technologies and frameworks to build robust, 
            scalable, and future-ready solutions.
          </motion.p>
        </div>

        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />

        <div className="tech__categories">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="glass-card tech__category"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
            >
              <div className={`tech__category-icon tech__category-icon--${cat.color}`}>
                {cat.icon}
              </div>
              <h3 className="tech__category-title">{cat.title}</h3>
              <p className="tech__category-items">{cat.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
