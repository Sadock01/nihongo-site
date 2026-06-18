import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { FiInstagram, FiFacebook, FiTwitter, FiMapPin, FiPhone, FiMail, FiChevronRight } from 'react-icons/fi'
import { useI18n } from '../i18n'
import { LanguageSwitcher } from './LanguageSwitcher'
import './sections.css'

type LayoutProps = {
  children?: ReactNode
}

type MegaMenuId = 'education' | 'aafa'

export function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const { t } = useI18n()
  const [megaMenu, setMegaMenu] = useState<MegaMenuId | null>(null)

  const closeMegaMenu = () => setMegaMenu(null)

  useEffect(() => {
    closeMegaMenu()
  }, [location.pathname])

  const isEducationActive =
    location.pathname.startsWith('/nihongo-gakkou') ||
    location.pathname.startsWith('/ecole-primaire')

  const isAafaActive =
    location.pathname.startsWith('/benin') || location.pathname.startsWith('/destinations')

  const megaItems =
    megaMenu === 'education'
      ? [
          {
            to: '/nihongo-gakkou',
            label: t.nav.sub.japaneseSchool,
            active: location.pathname.startsWith('/nihongo-gakkou'),
          },
          {
            to: '/ecole-primaire',
            label: t.nav.sub.primarySchool,
            active: location.pathname.startsWith('/ecole-primaire'),
          },
        ]
      : megaMenu === 'aafa'
        ? [
            {
              to: '/benin',
              label: t.nav.sub.beninPresentation,
              active: location.pathname.startsWith('/benin'),
            },
            {
              to: '/destinations',
              label: t.nav.sub.tourism,
              active: location.pathname.startsWith('/destinations'),
            },
          ]
        : []

  return (
    <div className="page">
      <header className="site-header">
        <div className="site-header__top">
          <div className="site-header__top-curve" aria-hidden />
          <div className="container site-header__top-inner">
            <Link to="/" className="site-header__brand">
              <span className="site-header__emblem" aria-hidden>
                <span className="site-header__emblem-inner">B</span>
              </span>
              <div className="site-header__brand-text">
                <div className="site-header__logo">
                  <span className="site-header__brand-main">{t.brand.main}</span>
                  <span className="site-header__brand-accent">{t.brand.accent}</span>
                </div>
                <p className="site-header__tagline">{t.header.tagline}</p>
              </div>
            </Link>

            <div className="site-header__utilities">
              <span className="site-header__utility-divider" aria-hidden />
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="site-header__mega-zone" onMouseLeave={closeMegaMenu}>
          <div className="site-header__nav-bar">
            <div className="container site-header__nav-bar-inner">
              <nav className="site-header__nav" aria-label="Main">
                <NavLink
                  to="/"
                  end
                  className="site-header__nav-link"
                  onMouseEnter={closeMegaMenu}
                >
                  {t.nav.home}
                </NavLink>

                <button
                  type="button"
                  className={`site-header__nav-link site-header__nav-link--mega ${isEducationActive || megaMenu === 'education' ? 'is-active' : ''}`}
                  onMouseEnter={() => setMegaMenu('education')}
                  onFocus={() => setMegaMenu('education')}
                  aria-expanded={megaMenu === 'education'}
                  aria-haspopup="true"
                >
                  {t.nav.education}
                </button>

                <button
                  type="button"
                  className={`site-header__nav-link site-header__nav-link--mega ${isAafaActive || megaMenu === 'aafa' ? 'is-active' : ''}`}
                  onMouseEnter={() => setMegaMenu('aafa')}
                  onFocus={() => setMegaMenu('aafa')}
                  aria-expanded={megaMenu === 'aafa'}
                  aria-haspopup="true"
                >
                  {t.nav.aafa}
                </button>

                <NavLink
                  to="/social-welfare"
                  className="site-header__nav-link"
                  onMouseEnter={closeMegaMenu}
                >
                  {t.nav.socialWelfare}
                </NavLink>

                <NavLink
                  to="/environment-protection"
                  className="site-header__nav-link site-header__nav-link--last"
                  onMouseEnter={closeMegaMenu}
                >
                  {t.nav.environment}
                </NavLink>
              </nav>
            </div>
          </div>

          {megaMenu && (
            <div className="mega-menu">
              <div className="mega-menu__grid">
                {megaItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`mega-menu__card ${item.active ? 'mega-menu__card--active' : ''}`}
                    onClick={closeMegaMenu}
                  >
                    <span className="mega-menu__card-label">{item.label}</span>
                    <FiChevronRight className="mega-menu__card-arrow" aria-hidden />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="site-main">
        {children || <Outlet />}
      </main>

      <footer className="site-footer">
        <div className="container site-footer__content">
          <div className="site-footer__top">
            <div className="footer-column footer-column--brand">
              <div className="site-footer__logo">
                <span className="site-header__brand-main">{t.brand.main}</span>
                <span className="site-header__brand-accent">{t.brand.accent}</span>
              </div>
              <p className="site-footer__text">{t.footer.tagline}</p>
              <div className="site-footer__socials">
                <a href="#" className="social-dot" aria-label="Facebook">
                  <FiFacebook />
                </a>
                <a href="#" className="social-dot" aria-label="Instagram">
                  <FiInstagram />
                </a>
                <a href="#" className="social-dot" aria-label="Twitter">
                  <FiTwitter />
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-column__title">{t.footer.navigation}</h3>
              <ul className="footer-links">
                <li>
                  <NavLink to="/">{t.nav.home}</NavLink>
                </li>
                <li>
                  <NavLink to="/nihongo-gakkou">{t.nav.education}</NavLink>
                </li>
                <li>
                  <NavLink to="/benin">{t.nav.aafa}</NavLink>
                </li>
                <li>
                  <NavLink to="/social-welfare">{t.nav.socialWelfare}</NavLink>
                </li>
                <li>
                  <NavLink to="/environment-protection">{t.nav.environment}</NavLink>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column__title">{t.footer.destinations}</h3>
              <ul className="footer-links">
                <li>Ouidah</li>
                <li>Abomey</li>
                <li>Pendjari</li>
                <li>Ganvié</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column__title">{t.footer.contact}</h3>
              <ul className="footer-links footer-links--contact">
                <li>
                  <FiMapPin className="footer-icon" />
                  <span>
                    {t.footer.address.split('\n').map((line, i) => (
                      <span key={line}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </span>
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
            <span>
              © {new Date().getFullYear()} {t.footer.copyright}
            </span>
            <div className="site-footer__bottom-links">
              <a href="#">{t.footer.privacy}</a>
              <a href="#">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
