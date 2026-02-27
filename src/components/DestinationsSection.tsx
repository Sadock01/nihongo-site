import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import { FiMapPin, FiStar, FiArrowRight } from 'react-icons/fi';
import ouidahImage from '../assets/place-no.jpg';
import abomeyImage from '../assets/palais-royal-sav.jpg';
import pendjariImage from '../assets/pendjari.jpg';

const destinations = [
  {
    id: 1,
    name: 'Ouidah',
    subtitle: 'Porte du Non-Retour',
    image: ouidahImage,
    specialty: 'Histoire & Spiritualité Vodoun',
    rating: 4.9,
    description: 'Ville historique et centre spirituel du Vodoun, avec sa célèbre Porte du Non-Retour.',
  },
  {
    id: 2,
    name: 'Abomey',
    subtitle: 'Palais Royaux',
    image: abomeyImage,
    specialty: 'Patrimoine UNESCO',
    rating: 4.8,
    description: 'Ancienne capitale du royaume du Dahomey, ses palais royaux sont classés au patrimoine mondial.',
  },
  {
    id: 3,
    name: 'Pendjari',
    subtitle: 'Parc National',
    image: pendjariImage,
    specialty: 'Safari & Faune Sauvage',
    rating: 4.9,
    description: "L'un des derniers refuges d'éléphants et de lions en Afrique de l'Ouest.",
  },
];

// Animation pour l'en-tête (apparaît du bas)
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

// Animation pour les cartes (effet de montée)
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export function DestinationsSection() {
  const scrollRef = useRef(null);
  // On déclenche l'animation quand la section est visible à 20%
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });

  return (
    <section id="destinations" className="section section--destinations" ref={scrollRef}>
      <div className="container">
        
        {/* En-tête de section animé */}
        <motion.header 
          className="section__header text-center"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="section__eyebrow">Destinations Populaires</span>
          <h2 className="section__title">Les incontournables du Bénin</h2>
          <p className="section__subtitle">
            Découvrez les sites les plus emblématiques du pays, entre histoire millénaire et nature préservée.
          </p>
        </motion.header>

        <div className="destinations-grid">
          {destinations.map((dest, index) => (
            <motion.article 
              key={dest.id} 
              className="dest-card group"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              // Délai progressif : 0.2s, 0.4s, 0.6s...
              transition={{ delay: index * 0.2 }} 
            >
              {/* Image Container */}
              <div className="dest-card__image-wrapper">
                <img src={dest.image} alt={dest.name} className="dest-card__img" />
                <div className="dest-card__overlay" />
                
                {/* Badge Note */}
                <div className="dest-card__rating">
                  <FiStar className="icon-star" />
                  <span>{dest.rating}</span>
                </div>

                {/* Infos sur l'image */}
                <div className="dest-card__image-content">
                  <div className="dest-card__location">
                    <FiMapPin className="icon-pin" />
                    <span>{dest.subtitle}</span>
                  </div>
                  <h3 className="dest-card__name">{dest.name}</h3>
                </div>
              </div>

              {/* Contenu Texte */}
              <div className="dest-card__body">
                <span className="dest-card__tag">{dest.specialty}</span>
                <p className="dest-card__description">{dest.description}</p>
                <button className="dest-card__btn">
                  Découvrir <FiArrowRight className="icon-arrow" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer de section (bouton du bas) */}
        <motion.div 
          className="section__footer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <button className="btn btn--accent">Voir toutes les destinations</button>
        </motion.div>
      </div>
    </section>
  );
}