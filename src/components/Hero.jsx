import { motion } from 'framer-motion';
import heroBg from '../assets/hero-fabric-bg.jpg';
import './Hero.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home" aria-label="Hero section">
      {/* Background Image */}
      <div className="hero-bg">
        <img
          src={heroBg}
          alt="Premium dark fabric texture background"
          loading="eager"
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-glow" />

      {/* Content */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={fadeUp}>
          Awais Traders
        </motion.h1>

        <motion.div variants={fadeUp}>
          <span className="hero-tagline">
            Men's Garments Manufacturer &amp; Wholesaler
          </span>
        </motion.div>

        <motion.p className="hero-subtitle" variants={fadeUp}>
          Crafting quality menswear with trust, precision, and decades of
          textile expertise.
        </motion.p>

        <motion.div className="hero-ctas" variants={fadeUp}>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => handleScroll(e, '#contact')}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212,175,55,0.4)' }}
            whileTap={{ scale: 0.97 }}
            aria-label="Scroll to contact section"
          >
            Contact Us
          </motion.a>
          <motion.a
            href="tel:03315758051"
            className="btn btn-outline"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(212,175,55,0.25)' }}
            whileTap={{ scale: 0.97 }}
            aria-label="Call Awais Traders"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            Call Now
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={(e) => handleScroll(e, '#about')}
        aria-hidden="true"
      >
        <motion.div
          className="scroll-line"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className="scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
}
