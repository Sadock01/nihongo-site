import { FiMapPin, FiStar, FiArrowRight } from 'react-icons/fi';
import ouidahImage from '../assets/place-no.jpg'; // Adapte tes imports
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

export function DestinationsSection() {
  return (
    <section id="destinations" className="section section--destinations">
      <div className="container">
        <header className="section__header text-center">
          <span className="section__eyebrow">Destinations Populaires</span>
          <h2 className="section__title">Les incontournables du Bénin</h2>
          <p className="section__subtitle">
            Découvrez les sites les plus emblématiques du pays, entre histoire millénaire et nature préservée.
          </p>
        </header>

        <div className="destinations-grid">
          {destinations.map((dest) => (
            <article key={dest.id} className="dest-card group">
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
            </article>
          ))}
        </div>

        <div className="section__footer">
          <button className="btn btn--accent">Voir toutes les destinations</button>
        </div>
      </div>
    </section>
  );
}