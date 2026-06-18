import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import { FiMapPin, FiStar, FiArrowRight } from 'react-icons/fi';
import { useI18n } from '../i18n';
import ouidahImage from '../assets/place-no.jpg';
import abomeyImage from '../assets/palais-royal-sav.jpg';
import pendjariImage from '../assets/pendjari.jpg';

const destinationImages = [ouidahImage, abomeyImage, pendjariImage]

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export function DestinationsSection() {
  const { t } = useI18n()
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });

  return (
    <section id="destinations" className="section section--destinations" ref={scrollRef}>
      <div className="container">
        
        <motion.header 
          className="section__header text-center"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="section__eyebrow">{t.destinations.eyebrow}</span>
          <h2 className="section__title">{t.destinations.title}</h2>
          <p className="section__subtitle">{t.destinations.subtitle}</p>
        </motion.header>

        <div className="destinations-grid">
          {t.destinations.items.map((dest, index) => (
            <motion.article 
              key={dest.name} 
              className="dest-card group"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }} 
            >
              <div className="dest-card__image-wrapper">
                <img src={destinationImages[index]} alt={dest.name} className="dest-card__img" />
                <div className="dest-card__overlay" />
                
                <div className="dest-card__rating">
                  <FiStar className="icon-star" />
                  <span>{4.9 - index * 0.1}</span>
                </div>

                <div className="dest-card__image-content">
                  <div className="dest-card__location">
                    <FiMapPin className="icon-pin" />
                    <span>{dest.subtitle}</span>
                  </div>
                  <h3 className="dest-card__name">{dest.name}</h3>
                </div>
              </div>

              <div className="dest-card__body">
                <span className="dest-card__tag">{dest.specialty}</span>
                <p className="dest-card__description">{dest.description}</p>
                <button className="dest-card__btn" type="button">
                  {t.destinations.discover} <FiArrowRight className="icon-arrow" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="section__footer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <button className="btn btn--accent" type="button">{t.destinations.viewAll}</button>
        </motion.div>
      </div>
    </section>
  );
}
