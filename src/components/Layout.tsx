import type { ReactNode } from 'react' // Correction du type-only import
import { NavLink, Outlet } from 'react-router-dom'
import { FiInstagram, FiFacebook, FiTwitter, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import './sections.css'

type LayoutProps = {
  children?: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="page">
      {/* --- BARRE DE NAVIGATION (AppBar) --- */}
      <header className="site-header">
        <div className="container site-header__content">
          <div className="site-header__logo">
            <span className="site-header__brand-main">Découvrir</span>
            <span className="site-header__brand-accent"> Bénin</span>
          </div>
          <nav className="site-header__nav">
            <NavLink to="/" end>Accueil</NavLink>
            <NavLink to="/benin">Bénin</NavLink>
            <NavLink to="/nihongo-gakkou">NIHONGO GAKKOU</NavLink>
            <NavLink to="/destinations">Destinations</NavLink>
            <NavLink to="/guides">Guides</NavLink>
          </nav>
          <NavLink to="/guides" className="site-header__cta">
            Réserver un guide
          </NavLink>
        </div>
      </header>

      {/* --- CONTENU DES PAGES --- */}
      <main className="site-main">
        {children || <Outlet />}
      </main>

      {/* --- FOOTER (Version Premium Corrigée) --- */}
      <footer className="site-footer">
        <div className="container site-footer__content">
          <div className="site-footer__top">
            
            {/* Colonne Marque */}
            <div className="footer-column footer-column--brand">
              <div className="site-footer__logo">
                <span className="site-header__brand-main">Découvrir</span>
                <span className="site-header__brand-accent"> Bénin</span>
              </div>
              <p className="site-footer__text">
                Votre portail vers les merveilles du Bénin, en partenariat avec NIHONGO GAKKOU.
              </p>
              <div className="site-footer__socials">
                <a href="#" className="social-dot"><FiFacebook /></a>
                <a href="#" className="social-dot"><FiInstagram /></a>
                <a href="#" className="social-dot"><FiTwitter /></a>
              </div>
            </div>

            {/* Colonne Navigation */}
            <div className="footer-column">
              <h3 className="footer-column__title">Navigation</h3>
              <ul className="footer-links">
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/benin">Bénin</NavLink></li>
                <li><NavLink to="/destinations">Destinations</NavLink></li>
                <li><NavLink to="/guides">Guides</NavLink></li>
              </ul>
            </div>

            {/* Colonne Destinations */}
            <div className="footer-column">
              <h3 className="footer-column__title">Destinations</h3>
              <ul className="footer-links">
                <li>Ouidah</li>
                <li>Abomey</li>
                <li>Pendjari</li>
                <li>Ganvié</li>
              </ul>
            </div>

            {/* Colonne Contact */}
            <div className="footer-column">
              <h3 className="footer-column__title">Contact</h3>
              <ul className="footer-links footer-links--contact">
                <li>
                  <FiMapPin className="footer-icon" />
                  <span>Cotonou, Bénin<br/>Quartier Sainte-Rita</span>
                </li>
                <li>
                  <FiPhone className="footer-icon" />
                  <a href="tel:+22997000000">+229 97 00 00 00</a>
                </li>
                <li>
                  <FiMail className="footer-icon" />
                  <a href="mailto:contact@decouvrir-benin.com">contact@decouvrir-benin.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="site-footer__bottom">
            <span>© {new Date().getFullYear()} Découvrir Bénin. Tous droits réservés.</span>
            <div className="site-footer__bottom-links">
              <a href="#">Confidentialité</a>
              <a href="#">Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}