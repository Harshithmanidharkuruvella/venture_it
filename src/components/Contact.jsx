import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineArrowRight,
} from 'react-icons/hi';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission placeholder
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
  };

  return (
    <section className="contact section" id="contact">
      <div className="grid-bg" />
      <div className="bg-glow bg-glow--blue" style={{ width: 400, height: 400, top: '10%', left: '-100px' }} />
      <div className="bg-glow bg-glow--orange" style={{ width: 350, height: 350, bottom: '10%', right: '-80px' }} />

      <div className="container">
        <div className="contact__header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let&apos;s Build <span className="gradient-text">Something Great</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to transform your business with technology? Reach out and let&apos;s discuss 
            how we can help you achieve your goals.
          </motion.p>
        </div>

        <div className="contact__layout">
          {/* Form */}
          <motion.div
            className="glass-card contact__form-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__input-row">
                <div className="contact__input-group">
                  <input
                    type="text"
                    name="name"
                    className="contact__input"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__input-group">
                  <input
                    type="email"
                    name="email"
                    className="contact__input"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="contact__input-row">
                <div className="contact__input-group">
                  <input
                    type="text"
                    name="subject"
                    className="contact__input"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__input-group">
                  <input
                    type="tel"
                    name="phone"
                    className="contact__input"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="contact__input-group">
                <textarea
                  name="message"
                  className="contact__textarea"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="contact__submit">
                <span>Send Message</span>
                <HiOutlineArrowRight className="text-xl" />
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <div className="contact__info">
            <motion.div
              className="glass-card contact__info-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              viewport={{ once: true }}
            >
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <HiOutlineLocationMarker />
                </div>
                <div>
                  <p className="contact__info-label">Head Office</p>
                  <p className="contact__info-value">
                    Plot No. 1, East Court Road,<br />
                    Belvedere, Harare, Zimbabwe
                  </p>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <HiOutlinePhone />
                </div>
                <div>
                  <p className="contact__info-label">Phone</p>
                  <p className="contact__info-value">
                    <a href="tel:+263781998888">+263 78 199 8888</a>
                  </p>
                </div>
              </div>
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <HiOutlineMail />
                </div>
                <div>
                  <p className="contact__info-label">Email</p>
                  <p className="contact__info-value">
                    <a href="mailto:info@ventureitsol.com">info@ventureitsol.com</a>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-card contact__cta-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.4}
              viewport={{ once: true }}
            >
              <p className="contact__cta-text">
                &ldquo;Driving <span>Digital Transformation</span><br />Through Innovation&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
