import './sections.css'

const guides = [
  {
    name: 'Koffi Mensah',
    specialty: 'Histoire & Culture',
    rating: 4.9,
    reviews: 127,
    languages: ['Français', 'Fon', 'Anglais'],
    available: true,
  },
  {
    name: 'Amina Dossou',
    specialty: 'Safari & Nature',
    rating: 5,
    reviews: 89,
    languages: ['Français', 'Anglais', 'Japonais'],
    available: true,
  },
  {
    name: 'Pascal Ahouandjinou',
    specialty: 'Vodoun & Spiritualité',
    rating: 4.8,
    reviews: 203,
    languages: ['Français', 'Fon', 'Yoruba'],
    available: false,
  },
]

export function GuidesSection() {
  return (
    <section id="guides" className="section">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">Guides Locaux</p>
          <h2 className="section__title">Réservez votre guide</h2>
          <p className="section__subtitle">
            Nos guides certifiés vous accompagnent pour une expérience authentique et enrichissante à
            travers le Bénin.
          </p>
        </header>
        <div className="cards cards--guides">
          {guides.map((guide) => (
            <article key={guide.name} className="card card--guide">
              <div className="card__header">
                <h3 className="card__title">{guide.name}</h3>
                <p className="card__tag">{guide.specialty}</p>
              </div>
              <p className="card__rating-line">
                <span className="card__rating-value">{guide.rating}</span>
                <span className="card__rating-reviews">({guide.reviews} avis)</span>
              </p>
              <p className="card__text card__text--languages">
                {guide.languages.join(' ')}
              </p>
              <p className={`availability availability--${guide.available ? 'available' : 'unavailable'}`}>
                {guide.available ? 'Disponible' : 'Non disponible'}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

