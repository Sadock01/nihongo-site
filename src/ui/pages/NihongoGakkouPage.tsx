import { motion } from 'framer-motion'
import { useI18n } from '../../i18n'
import './nihongo-presentation.css'

export function NihongoGakkouPage() {
  const { t } = useI18n()
  const { intro, history, professors } = t.nihongoPage

  return (
    <>
      <section id="presentation" className="nihongo-intro">
        <div className="container nihongo-intro__inner">
          <motion.div
            className="nihongo-intro__text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="nihongo-story__eyebrow">{intro.eyebrow}</p>
            <h1 className="nihongo-intro__title">{intro.title}</h1>
            <p className="nihongo-intro__subtitle">{intro.subtitle}</p>
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="nihongo-intro__paragraph">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="nihongo-intro__images"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="nihongo-intro__image nihongo-intro__image--1" />
            <div className="nihongo-intro__image nihongo-intro__image--2" />
            <div className="nihongo-intro__image nihongo-intro__image--3" />
            <div className="nihongo-intro__image nihongo-intro__image--4" />
          </motion.div>
        </div>
      </section>

      <section className="nihongo-story">
        <div className="container nihongo-story__inner">
          <header className="nihongo-story__header">
            <p className="nihongo-story__eyebrow">{history.eyebrow}</p>
            <h2 className="nihongo-story__title">{history.title}</h2>
            <p className="nihongo-story__subtitle">{history.subtitle}</p>
          </header>

          <div className="nihongo-timeline">
            <div className="nihongo-timeline__line" />
            {history.events.map((event, index) => (
              <motion.article
                key={event.year}
                className={`nihongo-timeline__item nihongo-timeline__item--${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="nihongo-timeline__card">
                  <div className="nihongo-timeline__badge">{event.year}</div>
                  <h3 className="nihongo-timeline__card-title">{event.title}</h3>
                  <p className="nihongo-timeline__card-text">{event.description}</p>
                </div>
                <div className="nihongo-timeline__image nihongo-timeline__image--placeholder" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="nihongo-professors">
        <div className="container nihongo-professors__inner">
          <header className="nihongo-story__header">
            <p className="nihongo-story__eyebrow">{professors.eyebrow}</p>
            <h2 className="nihongo-story__title">{professors.title}</h2>
            <p className="nihongo-story__subtitle">{professors.subtitle}</p>
          </header>

          <div className="nihongo-professors__grid">
            {professors.list.map((prof, index) => (
              <motion.article
                key={prof.name}
                className="nihongo-professor-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
              >
                <div className={`nihongo-professor-card__image nihongo-professor-card__image--${index + 1}`} />
                <div className="nihongo-professor-card__content">
                  <p className="nihongo-professor-card__years">{prof.years}</p>
                  <h3 className="nihongo-professor-card__name">{prof.name}</h3>
                  <p className="nihongo-professor-card__role">{prof.role}</p>
                  <p className="nihongo-professor-card__text">{prof.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
