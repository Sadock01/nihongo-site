import './sections.css'
import { FiGlobe, FiUsers, FiLayers, FiFeather } from 'react-icons/fi'
import img1 from '../assets/musée-marina.jpg';
import img2 from '../assets/vod-1.jpg';
import img3 from '../assets/ouadada-riviere-noire-1.jpg';
import img4 from '../assets/place-no.jpg';

export function AboutSection() {
  return (
    <section id="about" className="section section--alt">
      <div className="container about-layout">
        <div className="about-layout__left">
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
              <div className="stat-card__icon">
                <FiGlobe />
              </div>
              <div>
                <p className="stat-card__value">114,763</p>
                <p className="stat-card__label">km² de superficie</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon">
                <FiUsers />
              </div>
              <div>
                <p className="stat-card__value">12M+</p>
                <p className="stat-card__label">Habitants</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon">
                <FiLayers />
              </div>
              <div>
                <p className="stat-card__value">2</p>
                <p className="stat-card__label">Sites UNESCO</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon">
                <FiFeather />
              </div>
              <div>
                <p className="stat-card__value">3</p>
                <p className="stat-card__label">Parcs Nationaux</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-layout__right">
  <div className="about-photos">
    
    {/* COLONNE GAUCHE (Reçoit l'image 1 et 2) */}
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

    {/* COLONNE DROITE (Reçoit l'image 3 et 4) */}
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
</div>
      </div>
    </section>
  )
}

