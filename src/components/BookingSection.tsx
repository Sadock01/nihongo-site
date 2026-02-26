import './sections.css'

export function BookingSection() {
  return (
    <section id="booking" className="section booking-section">
      <div className="container booking-section__container">
        <div className="booking-card">
          <header className="booking-card__header">
            <h2 className="booking-card__title">Planifiez votre visite</h2>
          </header>
          <form
            className="booking-form"
            onSubmit={(event) => {
              event.preventDefault()
              alert("Réservation simulée. Ici, vous pourrez connecter un vrai backend plus tard.")
            }}
          >
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="departure-date">Date de départ</label>
                <input id="departure-date" name="departureDate" type="date" required />
              </div>
              <div className="form-field">
                <label htmlFor="destination">Destination</label>
                <select id="destination" name="destination" defaultValue="" required>
                  <option value="" disabled>
                    Sélectionner une destination
                  </option>
                  <option value="Ouidah">Ouidah</option>
                  <option value="Abomey">Abomey</option>
                  <option value="Pendjari">Pendjari</option>
                  <option value="Ganvié">Ganvié</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="people-count">Nombre de personnes</label>
                <input
                  id="people-count"
                  name="peopleCount"
                  type="number"
                  min={1}
                  max={50}
                  defaultValue={1}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn--primary booking-form__submit">
              Réserver maintenant
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

