import { useEffect, useRef, useState } from 'react'
import { FiGlobe, FiChevronDown } from 'react-icons/fi'
import { useI18n, type Language } from '../i18n'
import './sections.css'

const languageCodes: Language[] = ['fr', 'en', 'ja']

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentLabel = t.language[language]

  return (
    <div className="lang-dropdown" ref={rootRef}>
      <button
        type="button"
        className="lang-dropdown__trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t.language.choose}
      >
        <FiGlobe className="lang-dropdown__icon" aria-hidden />
        <span className="lang-dropdown__label">{currentLabel}</span>
        <FiChevronDown
          className={`lang-dropdown__chevron ${open ? 'lang-dropdown__chevron--open' : ''}`}
          aria-hidden
        />
      </button>

      {open && (
        <ul className="lang-dropdown__menu" role="listbox" aria-label={t.language.choose}>
          {languageCodes.map((code) => (
            <li key={code} role="option" aria-selected={language === code}>
              <button
                type="button"
                className={`lang-dropdown__option ${language === code ? 'lang-dropdown__option--active' : ''}`}
                onClick={() => {
                  setLanguage(code)
                  setOpen(false)
                }}
              >
                {t.language[code]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
