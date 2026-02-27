import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import { FiGlobe, FiUsers, FiLayers, FiFeather } from 'react-icons/fi';
import './sections.css';

import img1 from '../assets/musée-marina.jpg';
import img2 from '../assets/vod-1.jpg';
import img3 from '../assets/ouadada-riviere-noire-1.jpg';
import img4 from '../assets/place-no.jpg';

// Animation pour le contenu textuel (Entrée par la gauche)
const leftContentVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

// Animation pour le bloc photo (Entrée par la droite)
const rightPhotoVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } 
  }
};

export function AboutSection() {
  const sectionRef = useRef(null);
  // L'animation se déclenche quand 20% de la section est visible
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section section--alt" ref={sectionRef}>
      <div className="container about-layout">
        
        {/* CÔTÉ GAUCHE : TEXTE ET STATS */}
        <motion.div 
          className="about-layout__left"
          variants={leftContentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <header className="section__header">
            <p className="section__eyebrow">À Propos</p>
            <h2 className="section__title">Le Bénin, berceau du Vodoun</h2>
          </header>
          
          <p className="section__text">
            Situé en Afrique de l&apos;Ouest, le Bénin est une terre de contrastes où l&apos;histoire
            millénaire côtoie une nature préservée. Des plages dorées de la côte atlantique aux
            savanes du Parc de la Pendjari, en passant par les villages lacustres de Ganvié, chaque
            coin du pays raconte une histoire unique.
          </p>
          
          <p className="section__text">
            Ancien royaume du Dahomey, le Bénin est le berceau du Vodoun, une religion traditionnelle
            reconnue officiellement depuis 1996. C&apos;est aussi une destination prisée pour son
            patrimoine historique, sa gastronomie riche et l&apos;hospitalité légendaire de ses
            habitants.
          </p>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-card__icon"><FiGlobe /></div>
              <div>
                <p className="stat-card__value">114,763</p>
                <p className="stat-card__label">km² de superficie</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon"><FiUsers /></div>
              <div>
                <p className="stat-card__value">12M+</p>
                <p className="stat-card__label">Habitants</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon"><FiLayers /></div>
              <div>
                <p className="stat-card__value">2</p>
                <p className="stat-card__label">Sites UNESCO</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon"><FiFeather /></div>
              <div>
                <p className="stat-card__value">3</p>
                <p className="stat-card__label">Parcs Nationaux</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CÔTÉ DROIT : GRILLE DE PHOTOS ASYMÉTRIQUE */}
        <motion.div 
          className="about-layout__right"
          variants={rightPhotoVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="about-photos">
            {/* COLONNE GAUCHE */}
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

            {/* COLONNE DROITE (Décalée vers le bas via CSS) */}
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