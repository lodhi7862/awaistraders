import { motion } from 'framer-motion';
import aboutImg from '../assets/about-workshop.jpg';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const features = [
  {
    title: 'Quality Fabric',
    desc: 'Hand-selected premium fabrics for lasting comfort and style.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46L16 2 12 3.46 8 2 3.62 3.46a2 2 0 00-1.34 1.93l.38 12.46A2 2 0 004.62 19.7L8 21l4-1.46L16 21l3.38-1.3a2 2 0 001.96-1.85l.38-12.46a2 2 0 00-1.34-1.93z"/>
        <path d="M12 7v14"/>
      </svg>
    ),
  },
  {
    title: 'Bulk Wholesale Supply',
    desc: 'Large-scale orders fulfilled with consistency and efficiency.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 4v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    title: 'Trusted Manufacturing',
    desc: 'Decades of expertise backed by a reputation for reliability.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: 'On-Time Delivery',
    desc: 'Punctual dispatches that keep your business moving forward.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section className="about section" id="about" aria-label="About Awais Traders">
      <div className="container">
        {/* Two-column: text + image */}
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp}>
              About <span className="gold-text">Awais Traders</span>
            </motion.h2>
            <motion.div variants={fadeUp}>
              <hr className="gold-divider-left" />
            </motion.div>
            <motion.p variants={fadeUp}>
              Founded on a legacy of craftsmanship and trust, Awais Traders has
              established itself as a premier name in men's garment
              manufacturing and wholesale supply. With decades of hands-on
              experience in the textile industry, we understand the nuances of
              quality fabric selection, precision tailoring, and the demands of
              a fast-moving market.
            </motion.p>
            <motion.p variants={fadeUp}>
              Our state-of-the-art manufacturing facilities are equipped to
              handle bulk orders without compromising on the fine details that
              distinguish exceptional menswear. From formal shalwar kameez to
              contemporary styles, every piece that leaves our workshop reflects
              our commitment to superior stitching, durable construction, and
              on-trend design.
            </motion.p>
            <motion.p variants={fadeUp}>
              Trusted by retailers and distributors across the region, we take
              pride in building long-term partnerships rooted in reliability,
              competitive pricing, and consistently timely delivery. At Awais
              Traders, your business growth is our mission.
            </motion.p>
          </motion.div>

          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <img
              src={aboutImg}
              alt="Garment manufacturing workshop with neatly organized fabric and workstations"
              loading="lazy"
            />
            <div className="about-image-corner" aria-hidden="true" />
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          className="about-features"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              variants={fadeUp}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 25px rgba(212,175,55,0.2)',
              }}
            >
              <div className="feature-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
