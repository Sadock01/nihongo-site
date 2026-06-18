import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import { useI18n } from '../i18n';
import './sections.css';
import schoolImage from '../assets/nihongo-gakkou.jpeg';
import { FiUsers, FiClock, FiGlobe } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 1, ease: "easeOut" } 
  }
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      staggerChildren: 0.15 
    } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const featureIcons = [
  <FaGraduationCap key="grad" />,
  <FiUsers key="users" />,
  <FiClock key="clock" />,
  <FiGlobe key="globe" />,
]

export function PartnerSchoolSection() {
  const { t } = useI18n()
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="school" className="section section--school" ref={ref}>
      <div className="container school-layout">
        
        <motion.div 
          className="school-layout__left"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="school-media">
            <div className="school-media__image" style={{ overflow: 'hidden', borderRadius: '1.5rem' }}>
              <motion.img 
                src={schoolImage} 
                alt={t.school.imageAlt}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <motion.div 
              className="school-media__badge"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              style={{ zIndex: 3 }}
            >
              <p className="school-media__badge-value">{t.school.badgeYears}</p>
              <p className="school-media__badge-label">{t.school.badgeLabel}</p>
            </motion.div>
            
            <span className="school-media__decor school-media__decor--top-left" style={{ pointerEvents: 'none' }} />
            <span className="school-media__decor school-media__decor--bottom-left" style={{ pointerEvents: 'none' }} />
          </div>
        </motion.div>

        <motion.div 
          className="school-layout__right"
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.header className="school-header" variants={itemVariants}>
            <p className="section__eyebrow">{t.school.eyebrow}</p>
            <h2 className="school-header__title">{t.school.title}</h2>
            <p className="school-header__subtitle-jp">{t.school.subtitleJp}</p>
          </motion.header>

          <motion.p className="section__text" variants={itemVariants}>
            {t.school.text1}
          </motion.p>

          <motion.p className="section__text" variants={itemVariants}>
            {t.school.text2}
          </motion.p>

          <div className="school-feature-grid">
            {t.school.features.map((feature, i) => (
              <motion.div 
                key={feature.title} 
                className="school-feature-card" 
                variants={itemVariants}
                whileHover={{ y: -5, backgroundColor: '#fffaf0' }}
              >
                <div className="school-feature-card__icon">{featureIcons[i]}</div>
                <div className="school-feature-card__content">
                  <p className="school-feature-card__title">{feature.title}</p>
                  <p className="school-feature-card__text">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="school-actions" variants={itemVariants}>
            <a href="#booking" className="btn btn--primary">
              {t.school.ctaEnroll}
            </a>
            <button type="button" className="btn btn--ghost school-actions__secondary">
              {t.school.ctaPrograms}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
