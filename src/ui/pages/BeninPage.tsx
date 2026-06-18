import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Sparkles,
  Landmark,
  Shirt,
  UtensilsCrossed,
  Users,
  ChevronRight,
} from 'lucide-react';
import { getDepartmentByName, type CommuneData } from '@/data/benin-data';
import BeninMapInteractive from '@/components/benin-map/BeninMapInteractive';
import { useI18n } from '../../i18n';
import './benin-session.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 + i * 0.05 },
  }),
  exit: { opacity: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

const panelVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 },
};

const panelVariantsRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
};

function BeninPage() {
  const { t } = useI18n();
  const page = t.beninPage;
  const [selectedDeptId, setSelectedDeptId] = useState<string | null>(null);
  const [selectedCommune, setSelectedCommune] = useState<CommuneData | null>(null);

  const department = useMemo(
    () => (selectedDeptId ? getDepartmentByName(selectedDeptId) : null),
    [selectedDeptId]
  );

  const displayCommune: CommuneData | null = selectedCommune ?? department?.communes[0] ?? null;

  const handleSelectDepartment = (name: string) => {
    setSelectedDeptId(name);
    setSelectedCommune(null);
  };

  return (
    <div className="benin-page">
      <section className="benin-session-header">
        <div className="page-container benin-session-header__inner">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="benin-session-header__eyebrow"
          >
            {page.eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="benin-session-header__title"
          >
            {page.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="benin-session-header__subtitle"
          >
            {page.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="benin-session benin-session--map">
        <div
          className={`benin-session__layout ${!department ? 'benin-session__layout--map-only' : ''}`}
        >
          {/* Panneau gauche: Spécialités + Lieux historiques */}
          <AnimatePresence mode="wait">
            {department && displayCommune && (
              <motion.aside
                key="left-panel"
                className="benin-session__panel benin-session__panel--left"
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'spring', damping: 24, stiffness: 200 }}
              >
                <motion.div
                  className="benin-card benin-card--group"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="benin-card__header">
                    <Sparkles className="benin-card__icon" />
                    <h3 className="benin-card__title">{page.labels.specialties}</h3>
                  </div>
                  <motion.ul className="benin-card__list" variants={containerVariants}>
                    {displayCommune.specialites.map((s, i) => (
                      <motion.li key={i} variants={itemVariants} className="benin-card__list-item">
                        {s}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>

                <motion.div
                  className="benin-card benin-card--group"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delayChildren: 0.08 }}
                >
                  <div className="benin-card__header">
                    <Landmark className="benin-card__icon" />
                    <h3 className="benin-card__title">{page.labels.historicalPlaces}</h3>
                  </div>
                  <motion.ul className="benin-card__list" variants={containerVariants}>
                    {displayCommune.lieuxHistoriques.map((l, i) => (
                      <motion.li key={i} variants={itemVariants} className="benin-card__list-item">
                        {l}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Carte au centre */}
          <div className="benin-session__map-wrap">
            <div className="benin-session__map-inner">
              <BeninMapInteractive
                selectedDepartment={selectedDeptId}
                onSelectDepartment={handleSelectDepartment}
              />
            </div>
            {!department && (
              <p className="benin-session__hint">{page.mapHint}</p>
            )}
          </div>

          {/* Panneau droit: Communes (haut) + Habillement + Gastronomie & Traditions (bas) */}
          <AnimatePresence mode="wait">
            {department && (
              <motion.aside
                key="right-panel"
                className="benin-session__panel benin-session__panel--right"
                variants={panelVariantsRight}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'spring', damping: 24, stiffness: 200 }}
              >
                {/* Communes — coin supérieur droit */}
                <motion.div
                  className="benin-card benin-card--communes"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="benin-card__header">
                    <MapPin className="benin-card__icon" />
                    <h3 className="benin-card__title">{page.labels.communes}</h3>
                  </div>
                  <motion.ul
                    className="benin-communes"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {department.communes.map((commune) => (
                      <motion.li
                        key={commune.id}
                        variants={itemVariants}
                        className={`benin-commune-item ${displayCommune?.id === commune.id ? 'benin-commune-item--active' : ''}`}
                        onClick={() => setSelectedCommune(commune)}
                      >
                        <span>{commune.name}</span>
                        <ChevronRight className="benin-commune-item__chevron" />
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>

                {/* Habillement */}
                {displayCommune && (
                  <motion.div
                    className="benin-card benin-card--text"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.35 }}
                  >
                    <div className="benin-card__header">
                      <Shirt className="benin-card__icon" />
                      <h3 className="benin-card__title">{page.labels.clothing}</h3>
                    </div>
                    <p className="benin-card__paragraph">{displayCommune.habillement}</p>
                  </motion.div>
                )}

                {/* Gastronomie & Traditions */}
                {displayCommune && (
                  <motion.div
                    className="benin-card benin-card--group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.35 }}
                  >
                    <div className="benin-card__header">
                      <UtensilsCrossed className="benin-card__icon" />
                      <h3 className="benin-card__title">{page.labels.gastronomy}</h3>
                    </div>
                    <ul className="benin-card__list">
                      {displayCommune.mets.map((m, i) => (
                        <li key={i} className="benin-card__list-item">
                          {m}
                        </li>
                      ))}
                    </ul>
                    <div className="benin-card__header benin-card__header--sub">
                      <Users className="benin-card__icon" />
                      <h3 className="benin-card__title">{page.labels.traditions}</h3>
                    </div>
                    <ul className="benin-card__list">
                      {displayCommune.traditions.map((t, i) => (
                        <li key={i} className="benin-card__list-item">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.aside>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="benin-session-stats">
        <div className="page-container">
          <div className="benin-stats">
            {[
              { label: page.stats.departments, value: '12' },
              { label: page.stats.communes, value: '77' },
              { label: page.stats.inhabitants, value: '14M+' },
              { label: page.stats.area, value: '114 763' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="benin-stat"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
              >
                <span className="benin-stat__value">{stat.value}</span>
                <span className="benin-stat__label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BeninPage;
