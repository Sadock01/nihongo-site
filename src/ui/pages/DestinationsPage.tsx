import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n'
import './destinations-page.css'
import mapImage from '../../assets/ganvie-1.jpg'
import abomeyImage from '../../assets/Abomey-royal.jpg'
import ouidahImage from '../../assets/vod-2.jpg'
import cotonouImage from '../../assets/amazone-place.jpg'
import portoNovoImage from '../../assets/porto-novo.jpg'
import grandPopoImage from '../../assets/grand-popo-beach-tranquility.jpg'
import natitingouImage from '../../assets/Benin-faire-du-tourisme-a-Natitingou.jpg'

const spotImages = [
  mapImage,
  abomeyImage,
  ouidahImage,
  cotonouImage,
  portoNovoImage,
  grandPopoImage,
  natitingouImage,
]

export function DestinationsPage() {
  const { t } = useI18n()
  const page = t.destinationsPage

  return (
    <div className="dest-page">
      <section className="dest-banner">
        <div className="page-container dest-banner__inner">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="dest-banner__eyebrow"
          >
            {page.eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="dest-banner__title"
          >
            {page.title}
            <br />
            <span>{page.titleHighlight}</span>
          </motion.h1>
        </div>
      </section>

      <section className="dest-intro">
        <div className="page-container dest-intro__inner">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="dest-intro__text"
          >
            <Link to="/benin" className="dest-intro__link">
              {page.introLink}
            </Link>{' '}
            {page.intro}
          </motion.p>
        </div>
      </section>

      {page.spots.map((spot, index) => (
        <section
          key={spot.eyebrow}
          className={`dest-section ${index % 2 === 0 ? 'dest-section--cream' : ''}`}
        >
          <div
            className={`page-container dest-section__inner ${index === 0 ? 'dest-section__inner--reverse' : ''}`}
          >
            <motion.div
              className="dest-section__text"
              initial={{ opacity: 0, x: index === 0 ? -30 : 0, y: index === 0 ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <p className="dest-section__eyebrow">{spot.eyebrow}</p>
              <h2 className="dest-section__title">{spot.title}</h2>
              {spot.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="dest-section__body">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              className="dest-section__image-wrap"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <img
                src={spotImages[index]}
                alt={spot.imageAlt}
                className="dest-section__image"
              />
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  )
}
