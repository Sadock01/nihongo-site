import { motion } from 'framer-motion'
import './nihongo-presentation.css'

const timelineEvents = [
  {
    id: 'founder',
    year: '2012',
    title: 'La vision du fondateur',
    side: 'left',
    description:
      "Un ancien étudiant béninois revenu du Japon décide de créer un pont durable entre les deux cultures. Il rêve d'une école où l'on apprend la langue mais aussi la manière de penser et de vivre japonaise.",
  },
  {
    id: 'gov-support',
    year: '2014',
    title: 'Soutien du gouvernement japonais',
    side: 'right',
    description:
      "Grâce aux premières promotions d'étudiants, le projet attire l'attention d'institutions japonaises. Des bénévoles et des associations offrent du matériel pédagogique, des livres et un premier partenariat officiel.",
  },
  {
    id: 'opening',
    year: '2016',
    title: "Ouverture de l'école",
    side: 'left',
    description:
      "Les portes de NIHONGO GAKKOU s’ouvrent dans un petit bâtiment lumineux au cœur de Cotonou. La première cohorte démarre avec quelques passionnés, des tables simples et un tableau blanc… mais beaucoup d’énergie.",
  },
  {
    id: 'first-jlpt',
    year: '2018',
    title: 'Premiers candidats au JLPT',
    side: 'right',
    description:
      "Les premiers étudiants se présentent au JLPT. Les réussites aux niveaux N5 et N4 confirment la qualité de l’enseignement et donnent confiance aux familles et aux partenaires.",
  },
  {
    id: 'community',
    year: '2021',
    title: 'Une communauté vivante',
    side: 'left',
    description:
      "Des clubs de conversation, des soirées culturelles et des ateliers d’écriture se mettent en place. L’école devient un lieu de rencontre pour les passionnés du Japon en Afrique de l’Ouest.",
  },
]

const professors = [
  {
    id: 'takeshi',
    name: 'Takeshi Ashita',
    years: '2012 – 2016',
    role: 'Premier professeur de l’école',
    description:
      "Arrivé au Bénin avec l’envie de partager sa langue, M. Ashita a été le premier professeur japonais de l’école. Il a posé les bases pédagogiques, accompagné les toutes premières promotions et tissé des liens profonds avec les familles et les enfants. Sa générosité et son exigence bienveillante continuent d’inspirer chaque cours.",
  },
  {
    id: 'suzuki',
    name: 'Mme Suzuki Aiko',
    years: '2016 – 2019',
    role: 'Spécialiste de la conversation',
    description:
      'Passionnée par la prononciation et la vie quotidienne au Japon, elle a fait découvrir aux apprenants l’art des salutations, des expressions naturelles et des petits gestes de politesse qui font la différence.',
  },
  {
    id: 'tanaka',
    name: 'M. Tanaka Hiro',
    years: '2019 – 2022',
    role: 'Préparation JLPT avancée',
    description:
      'Avec son approche structurée, il a accompagné de nombreux étudiants jusqu’aux niveaux supérieurs du JLPT, en les aidant à croire qu’un examen international est à leur portée.',
  },
  {
    id: 'sato',
    name: 'Mme Satō Emi',
    years: '2022 – aujourd’hui',
    role: 'Culture & projets',
    description:
      'Elle relie la langue aux arts, à la cuisine, aux festivals. Ateliers de calligraphie, cuisine japonaise, clubs manga : elle fait vivre le Japon au cœur de Cotonou.',
  },
]

export function NihongoGakkouPage() {
  return (
    <>
      {/* SECTION 1 : Présentation de l’école */}
      <section id="presentation" className="nihongo-intro">
        <div className="container nihongo-intro__inner">
          <motion.div
            className="nihongo-intro__text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="nihongo-story__eyebrow">Présentation de l&apos;école</p>
            <h1 className="nihongo-intro__title">Takeshi Nihongo Gakkou</h1>
            <p className="nihongo-intro__subtitle">
              La première et unique école de langue japonaise au Bénin et dans toute la
              sous-région.
            </p>
            <p className="nihongo-intro__paragraph">
              Fondée avec la vision de créer un pont culturel vivant entre le Japon et l&apos;Afrique
              de l&apos;Ouest, TAKESHI NIHONGO GAKKOU est née du rêve de rendre la langue japonaise
              accessible aux enfants, aux étudiants et aux professionnels du Bénin. Ici, on apprend
              bien sûr les kanas et les kanji, mais aussi la manière de saluer, de remercier, de
              respecter l&apos;autre.
            </p>
            <p className="nihongo-intro__paragraph">
              La fondation Ifè, maison-mère de l&apos;école, accompagne depuis des années les
              enfants défavorisés, soutient les orphelinats et porte assistance aux communautés
              rurales. En accueillant TAKESHI NIHONGO GAKKOU sous son aile, elle a offert un foyer
              chaleureux où la langue japonaise devient un outil d&apos;ouverture, de confiance et
              d&apos;espoir pour de nombreux jeunes.
            </p>
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

      {/* SECTION 2 : Chronologie de l’école */}
      <section className="nihongo-story">
        <div className="container nihongo-story__inner">
          <header className="nihongo-story__header">
            <p className="nihongo-story__eyebrow">Notre histoire</p>
            <h2 className="nihongo-story__title">Une école comme une œuvre d&apos;art</h2>
            <p className="nihongo-story__subtitle">
              En attendant de partager la véritable histoire de NIHONGO GAKKOU, voici le récit
              d&apos;une école imaginaire qui pourrait être la nôtre : une aventure faite de
              rencontres, de ponts culturels et de petits miracles quotidiens.
            </p>
          </header>

          <div className="nihongo-timeline">
            <div className="nihongo-timeline__line" />
            {timelineEvents.map((event) => (
              <motion.article
                key={event.id}
                className={`nihongo-timeline__item nihongo-timeline__item--${event.side}`}
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

      {/* SECTION 3 : Nos professeurs */}
      <section className="nihongo-professors">
        <div className="container nihongo-professors__inner">
          <header className="nihongo-story__header">
            <p className="nihongo-story__eyebrow">Nos professeurs</p>
            <h2 className="nihongo-story__title">Une toile de visages et d&apos;histoires</h2>
            <p className="nihongo-story__subtitle">
              Depuis la fondation, plusieurs professeurs japonais se sont succédé à TAKESHI NIHONGO
              GAKKOU. Chacun a laissé une couleur, une façon d&apos;expliquer, un rire, un souvenir.
              Cette section leur rend hommage.
            </p>
          </header>

          <div className="nihongo-professors__grid">
            {professors.map((prof, index) => (
              <motion.article
                key={prof.id}
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

