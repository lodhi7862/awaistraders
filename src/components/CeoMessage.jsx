import { motion } from 'framer-motion';
import ceoImg from '../assets/ceo-ali-awais-chaudry.jpg';
import './CeoMessage.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function CeoMessage() {
  return (
    <section className="ceo section" id="ceo" aria-label="CEO Message">
      <div className="container">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <h2>
            A Message from <span className="gold-text">Our CEO</span>
          </h2>
          <hr className="gold-divider" />
        </motion.div>

        <div className="ceo-grid">
          {/* Photo */}
          <motion.div
            className="ceo-photo-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="ceo-photo-frame">
              <img
                src={ceoImg}
                alt="Ali Awais Chaudry — CEO of Awais Traders"
                loading="lazy"
              />
              <div className="ceo-photo-accent" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="ceo-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.div className="ceo-quote-mark" variants={fadeUp} aria-hidden="true">
              &ldquo;
            </motion.div>

            <motion.p className="ceo-message" variants={fadeUp}>
              At Awais Traders, we believe that every garment tells a story — a
              story of meticulous craftsmanship, unwavering quality, and a deep
              respect for the people who wear our products. Since our inception,
              our mission has been clear: to deliver men's garments that embody
              elegance, durability, and affordability in equal measure.
              <br /><br />
              Over the years, we have built lasting partnerships with retailers
              and distributors who trust us not just for our products, but for
              the integrity and reliability that define every transaction. As we
              grow, our commitment remains the same — to innovate with purpose,
              lead with quality, and serve our partners as an extension of their
              own business. I personally invite you to experience the Awais
              Traders difference.
            </motion.p>

            <motion.div className="ceo-signature" variants={fadeUp}>
              <span className="ceo-name">Ali Awais Chaudry</span>
              <span className="ceo-title">Chief Executive Officer, Awais Traders</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
