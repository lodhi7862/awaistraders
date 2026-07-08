import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const galleryImages = [
  {
    src: '/Images/Image1.jpeg',
    alt: 'Garment production floor — workers carefully sorting and quality-checking menswear',
    caption: 'Production Floor',
  },
  {
    src: '/Images/Image2.jpeg',
    alt: 'Fabric inspection and handling at the manufacturing facility',
    caption: 'Fabric Handling',
  },
  {
    src: '/Images/Image3.jpeg',
    alt: 'Organized wholesale garment warehouse stocked with colorful apparel',
    caption: 'Wholesale Warehouse',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const goNext = (e) => {
    e.stopPropagation();
    setLightbox((prev) => (prev + 1) % galleryImages.length);
  };
  const goPrev = (e) => {
    e.stopPropagation();
    setLightbox((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="gallery section" id="gallery" aria-label="Gallery">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp}>
            Our <span className="gold-text">Gallery</span>
          </motion.h2>
          <motion.div variants={fadeUp}>
            <hr className="gold-divider" />
          </motion.div>
          <motion.p variants={fadeUp}>
            A glimpse into our manufacturing excellence and wholesale operations.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="gallery-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              className="gallery-card"
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${image.caption} in full size`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
            >
              <div className="gallery-card-image">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
                <div className="gallery-card-overlay">
                  <div className="gallery-card-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                      <path d="M11 8v6" />
                      <path d="M8 11h6" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="gallery-card-caption">
                <span className="gallery-card-number">0{index + 1}</span>
                <h3>{image.caption}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>

            <button
              className="lightbox-nav lightbox-prev"
              onClick={goPrev}
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <motion.div
              className="lightbox-content"
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightbox].src}
                alt={galleryImages[lightbox].alt}
              />
              <p className="lightbox-caption">{galleryImages[lightbox].caption}</p>
            </motion.div>

            <button
              className="lightbox-nav lightbox-next"
              onClick={goNext}
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
