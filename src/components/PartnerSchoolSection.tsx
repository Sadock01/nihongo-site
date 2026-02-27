import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import './sections.css';
import schoolImage from '../assets/nihongo-gakkou.jpeg';
import { FiUsers, FiClock, FiGlobe } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

// Animation pour l'image (Zoom doux à l'entrée)
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

export function PartnerSchoolSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="school" className="section section--school" ref={ref}>
      <div className="container school-layout">
        
        {/* PARTIE GAUCHE : IMAGE AVEC HOVER ANIMÉ */}
        <motion.div 
          className="school-layout__left"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="school-media">
            <div className="school-media__image" style={{ overflow: 'hidden', borderRadius: '1.5rem' }}>
              {/* Utilisation de motion.img pour le hover parfait */}
              <motion.img 
                src={schoolImage} 
                alt="École Nihongo Gakkou" 
                whileHover={{ scale: 1.08 }} // L'effet de zoom au survol
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <motion.div 
              className="school-media__badge"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              style={{ zIndex: 3 }} // S'assure qu'il reste au dessus
            >
              <p className="school-media__badge-value">10+</p>
              <p className="school-media__badge-label">Années d&apos;excellence</p>
            </motion.div>
            
            {/* On ajoute pointer-events: none sur les décors pour ne pas bloquer le hover de la souris */}
            <span className="school-media__decor school-media__decor--top-left" style={{ pointerEvents: 'none' }} />
            <span className="school-media__decor school-media__decor--bottom-left" style={{ pointerEvents: 'none' }} />
          </div>
        </motion.div>

        {/* PARTIE DROITE : CONTENU TEXTE EN CASCADE */}
        <motion.div 
          className="school-layout__right"
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.header className="school-header" variants={itemVariants}>
            <p className="section__eyebrow">École Partenaire</p>
            <h2 className="school-header__title">NIHONGO GAKKOU</h2>
            <p className="school-header__subtitle-jp">日本語学校</p>
          </motion.header>

          <motion.p className="section__text" variants={itemVariants}>
            Fondée avec la vision de créer un pont culturel entre le Japon et l&apos;Afrique de
            l&apos;Ouest, NIHONGO GAKKOU est la première et unique école de langue japonaise au Bénin
            et dans toute la sous-région.
          </motion.p>

          <motion.p className="section__text" variants={itemVariants}>
            Notre établissement offre des programmes complets pour tous les niveaux, des débutants
            aux candidats au JLPT. Avec des professeurs natifs et une méthodologie immersive, nous
            préparons nos étudiants à exceller dans la maîtrise du japonais.
          </motion.p>

          <div className="school-feature-grid">
            {[
              { icon: <FaGraduationCap />, title: "Formation Certifiée", text: "Préparation au JLPT" },
              { icon: <FiUsers />, title: "Professeurs Natifs", text: "Enseignants japonais" },
              { icon: <FiClock />, title: "Cours Intensifs", text: "Tous les niveaux" },
              { icon: <FiGlobe />, title: "Unique en Afrique", text: "Seule école de la région" }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                className="school-feature-card" 
                variants={itemVariants}
                whileHover={{ y: -5, backgroundColor: '#fffaf0' }} // Petit bonus au survol des cartes
              >
                <div className="school-feature-card__icon">{feature.icon}</div>
                <div className="school-feature-card__content">
                  <p className="school-feature-card__title">{feature.title}</p>
                  <p className="school-feature-card__text">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="school-actions" variants={itemVariants}>
            <a href="#booking" className="btn btn--primary">
              S&apos;inscrire aux cours
            </a>
            <button type="button" className="btn btn--ghost school-actions__secondary">
              Voir les programmes
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}