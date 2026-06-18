import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import { FiGlobe, FiUsers, FiLayers, FiFeather } from 'react-icons/fi';
import { useI18n } from '../i18n';
import './sections.css';

import img1 from '../assets/musée-marina.jpg';
import img2 from '../assets/vod-1.jpg';
import img3 from '../assets/ouadada-riviere-noire-1.jpg';
import img4 from '../assets/place-no.jpg';

const leftContentVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const rightPhotoVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } 
  }
};

export function AboutSection() {
  const { t } = useI18n()
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section section--alt" ref={sectionRef}>
      <div className="container about-layout">
        
        <motion.div 
          className="about-layout__left"
          variants={leftContentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <header className="section__header">
            <p className="section__eyebrow">{t.about.eyebrow}</p>
            <h2 className="section__title">{t.about.title}</h2>
          </header>
          
          <p className="section__text">{t.about.text1}</p>
          <p className="section__text">{t.about.text2}</p>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-card__icon"><FiGlobe /></div>
              <div>
                <p className="stat-card__value">114,763</p>
                <p className="stat-card__label">{t.about.stats.area}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon"><FiUsers /></div>
              <div>
                <p className="stat-card__value">12M+</p>
                <p className="stat-card__label">{t.about.stats.population}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon"><FiLayers /></div>
              <div>
                <p className="stat-card__value">2</p>
                <p className="stat-card__label">{t.about.stats.unesco}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon"><FiFeather /></div>
              <div>
                <p className="stat-card__value">3</p>
                <p className="stat-card__label">{t.about.stats.parks}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="about-layout__right"
          variants={rightPhotoVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="about-photos">
            <div className="about-photos__col-1">
              <div 
                className="about-photo about-photo--1" 
                style={{ backgroundImage: `url(${img1})` }} 
              />
              <div 
                className="about-photo about-photo--2" 
                style={{ backgroundImage: `url(${img2})` }} 
              />
            </div>

            <div className="about-photos__col-2">
              <div 
                className="about-photo about-photo--3" 
                style={{ backgroundImage: `url(${img3})` }} 
              />
              <div 
                className="about-photo about-photo--4" 
                style={{ backgroundImage: `url(${img4})` }} 
              />
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
