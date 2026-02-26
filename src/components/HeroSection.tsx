import './sections.css'
import heroImage from '../assets/ganvié-23.jpg'

export function HeroSection() {
  return (
    <section id="hero" className="section hero">
      
      <div className="hero__background">
        <img src={heroImage} alt="Bénin paysage" />
      </div>

      <div className="container hero__content">
        <p className="badge">En partenariat avec NIHONGO GAKKOU</p>
        <h1 className="hero__title">
          Découvrez le
          <span className="hero__title-highlight"> Bénin</span>
        </h1>
        <p className="hero__subtitle">
          Explorez les trésors cachés de l&apos;Afrique de l&apos;Ouest et découvrez la seule école
          de langue japonaise de la sous-région.
        </p>
        <div className="hero__actions">
          <a href="#destinations" className="btn btn--primary">
            Explorer les destinations
          </a>
          <a href="#about" className="btn btn--ghost">
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  )
}