import './sections.css'

const destinations = [
  {
    name: 'Porte du Non-Retour',
    city: 'Ouidah',
    rating: 4.9,
    tag: 'Histoire & Spiritualité Vodoun',
    description:
      'Ville historique et centre spirituel du Vodoun, avec sa célèbre Porte du Non-Retour.',
  },
  {
    name: 'Palais Royaux',
    city: 'Abomey',
    rating: 4.8,
    tag: 'Patrimoine UNESCO',
    description:
      'Ancienne capitale du royaume du Dahomey, ses palais royaux sont classés au patrimoine mondial.',
  },
  {
    name: 'Parc National',
    city: 'Pendjari',
    rating: 4.9,
    tag: 'Safari & Faune Sauvage',
    description:
      "L'un des derniers refuges d'éléphants et de lions en Afrique de l'Ouest.",
  },
]

export function DestinationsSection() {
  return (
    <section id="destinations" className="section section--alt">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">Destinations Populaires</p>
          <h2 className="section__title">Les incontournables du Bénin</h2>
          <p className="section__subtitle">
            Découvrez les sites les plus emblématiques du pays, entre histoire millénaire, spiritualité
            ancestrale et nature préservée.
          </p>
        </header>
        <div className="cards">
          {destinations.map((destination) => (
            <article key={destination.name} className="card">
              <div className="card__rating">
                <span className="card__rating-value">{destination.rating}</span>
              </div>
              <h3 className="card__title">{destination.name}</h3>
              <p className="card__city">{destination.city}</p>
              <p className="card__tag">{destination.tag}</p>
              <p className="card__text">{destination.description}</p>
              <button type="button" className="btn btn--ghost card__action">
                Découvrir
              </button>
            </article>
          ))}
        </div>
        <div className="section__footer">
          <button type="button" className="btn btn--text">
            Voir toutes les destinations
          </button>
        </div>
      </div>
    </section>
  )
}

