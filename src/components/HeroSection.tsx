import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useI18n } from '../i18n';
import './sections.css';
import heroImage from '../assets/ganvié-23.jpg';

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
      ease: "easeOut"
    } 
  },
};

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section id="hero" className="section hero">
      <motion.div 
        className="hero__background"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img src={heroImage} alt={t.hero.imageAlt} />
      </motion.div>

      <motion.div 
        className="container hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="badge" variants={itemVariants}>
          {t.hero.badge}
        </motion.p>

        <motion.h1 className="hero__title" variants={itemVariants}>
          {t.hero.title}
          <span className="hero__title-highlight">{t.hero.titleHighlight}</span>
        </motion.h1>

        <motion.p className="hero__subtitle" variants={itemVariants}>
          {t.hero.subtitle}
        </motion.p>

        <motion.div className="hero__actions" variants={itemVariants}>
          <a href="#destinations" className="btn btn--primary">
            {t.hero.ctaExplore}
          </a>
          <a href="#about" className="btn btn--ghost">
            {t.hero.ctaLearnMore}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
