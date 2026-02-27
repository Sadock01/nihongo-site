import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion'; // Ajoute Variants ici
import './sections.css';
import heroImage from '../assets/ganvié-23.jpg';

// Définir les variantes EN DEHORS du composant pour un code plus propre
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" // Maintenant TypeScript sait que c'est une valeur valide
    } 
  },
};

export function HeroSection() {
  return (
    <section id="hero" className="section hero">
      <motion.div 
        className="hero__background"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img src={heroImage} alt="Bénin paysage" />
      </motion.div>

      <motion.div 
        className="container hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="badge" variants={itemVariants}>
          En partenariat avec NIHONGO GAKKOU
        </motion.p>

        <motion.h1 className="hero__title" variants={itemVariants}>
          Découvrez le
          <span className="hero__title-highlight"> Bénin</span>
        </motion.h1>

        <motion.p className="hero__subtitle" variants={itemVariants}>
          Explorez les trésors cachés de l&apos;Afrique de l&apos;Ouest et découvrez la seule école
          de langue japonaise de la sous-région.
        </motion.p>

        <motion.div className="hero__actions" variants={itemVariants}>
          <a href="#destinations" className="btn btn--primary">
            Explorer les destinations
          </a>
          <a href="#about" className="btn btn--ghost">
            En savoir plus
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}