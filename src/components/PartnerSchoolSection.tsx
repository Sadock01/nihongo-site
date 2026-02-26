import './sections.css'
import schoolImage from '../assets/nihongo-gakkou.jpeg'
import { FiUsers, FiClock, FiGlobe } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'

export function PartnerSchoolSection() {
  return (
    <section id="school" className="section section--school">
      <div className="container school-layout">
        <div className="school-layout__left">
          <div className="school-media">
          <div className="school-media__image">
  <img src={schoolImage} alt="École Nihongo Gakkou" />
</div>
            <div className="school-media__badge">
              <p className="school-media__badge-value">10+</p>
              <p className="school-media__badge-label">Années d&apos;excellence</p>
            </div>
            <span className="school-media__decor school-media__decor--top-left" />
            <span className="school-media__decor school-media__decor--bottom-left" />
          </div>
        </div>
        <div className="school-layout__right">
          <header className="school-header">
            <p className="section__eyebrow">École Partenaire</p>
            <h2 className="school-header__title">NIHONGO GAKKOU</h2>
            <p className="school-header__subtitle-jp">日本語学校</p>
          </header>
          <p className="section__text">
            Fondée avec la vision de créer un pont culturel entre le Japon et l&apos;Afrique de
            l&apos;Ouest, NIHONGO GAKKOU est la première et unique école de langue japonaise au Bénin
            et dans toute la sous-région.
          </p>
          <p className="section__text">
            Notre établissement offre des programmes complets pour tous les niveaux, des débutants
            aux candidats au JLPT. Avec des professeurs natifs et une méthodologie immersive, nous
            préparons nos étudiants à exceller dans la maîtrise du japonais.
          </p>

          <div className="school-feature-grid">
            <div className="school-feature-card">
              <div className="school-feature-card__icon">
                <FaGraduationCap />
              </div>
              <div className="school-feature-card__content">
                <p className="school-feature-card__title">Formation Certifiée</p>
                <p className="school-feature-card__text">
                  Préparation au JLPT du N1 au N5
                </p>
              </div>
            </div>
            <div className="school-feature-card">
              <div className="school-feature-card__icon">
                <FiUsers />
              </div>
              <div className="school-feature-card__content">
                <p className="school-feature-card__title">Professeurs Natifs</p>
                <p className="school-feature-card__text">Enseignants japonais expérimentés</p>
              </div>
            </div>
            <div className="school-feature-card">
              <div className="school-feature-card__icon">
                <FiClock />
              </div>
              <div className="school-feature-card__content">
                <p className="school-feature-card__title">Cours Intensifs</p>
                <p className="school-feature-card__text">Formules adaptées à tous les niveaux</p>
              </div>
            </div>
            <div className="school-feature-card">
              <div className="school-feature-card__icon">
                <FiGlobe />
              </div>
              <div className="school-feature-card__content">
                <p className="school-feature-card__title">Unique en Afrique</p>
                <p className="school-feature-card__text">Seule école de la sous-région</p>
              </div>
            </div>
          </div>

          <div className="school-actions">
            <a href="#booking" className="btn btn--primary">
              S&apos;inscrire aux cours
            </a>
            <button type="button" className="btn btn--ghost school-actions__secondary">
              Voir les programmes
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

