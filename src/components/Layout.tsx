import './sections.css'
import type { ReactNode } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

type LayoutProps = {
  children?: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container site-header__content">
          <div className="site-header__logo">
            <span className="site-header__brand-main">Découvrir</span>
            <span className="site-header__brand-accent"> Bénin</span>
          </div>
          <nav className="site-header__nav">
            <NavLink to="/" end>
              Accueil
            </NavLink>
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
      <main className="site-main">
        {children}
        {!children && <Outlet />}
      </main>
      <footer className="site-footer">
        <div className="container site-footer__content">
          <div className="site-footer__top">
            <div className="footer-column footer-column--brand">
              <div className="site-footer__logo">
                <span className="site-header__brand-main">Découvrir</span>
                <span className="site-header__brand-accent"> Bénin</span>
              </div>
              <p className="site-footer__text">
                Votre portail vers les merveilles du Bénin, en partenariat avec NIHONGO GAKKOU, la
                seule école de langue japonaise de la sous-région.
              </p>
              <div className="site-footer__socials">
                <span className="social-dot">in</span>
                <span className="social-dot">fb</span>
                <span className="social-dot">ig</span>
              </div>
            </div>
            <div className="footer-column">
              <h3 className="footer-column__title">Navigation</h3>
              <ul className="footer-links">
                <li>
                  <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                  <NavLink to="/benin">Bénin</NavLink>
                </li>
                <li>
                  <NavLink to="/nihongo-gakkou">NIHONGO GAKKOU</NavLink>
                </li>
                <li>
                  <NavLink to="/destinations">Destinations</NavLink>
                </li>
                <li>
                  <NavLink to="/guides">Guides</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-column__title">Destinations</h3>
              <ul className="footer-links">
                <li>Ouidah</li>
                <li>Abomey</li>
                <li>Pendjari</li>
                <li>Ganvié</li>
                <li>Porto-Novo</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-column__title">Contact</h3>
              <ul className="footer-links footer-links--contact">
                <li>Cotonou, Bénin</li>
                <li>Quartier Sainte-Rita</li>
                <li>+229 97 00 00 00</li>
                <li>contact@decouvrir-benin.com</li>
              </ul>
            </div>
          </div>
          <div className="site-footer__bottom">
            <span>© {new Date().getFullYear()} Découvrir Bénin. Tous droits réservés.</span>
            <span className="site-footer__bottom-links">
              <a href="#">Politique de confidentialité</a>
              <a href="#">Conditions d&apos;utilisation</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

