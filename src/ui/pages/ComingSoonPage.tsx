import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n'
import '../../components/sections.css'

type ComingSoonPageProps = {
  title: string
  description: string
}

export function ComingSoonPage({ title, description }: ComingSoonPageProps) {
  const { t } = useI18n()

  return (
    <section className="section coming-soon">
      <div className="container coming-soon__inner">
        <span className="coming-soon__badge">{t.common.comingSoon}</span>
        <h1 className="coming-soon__title">{title}</h1>
        <p className="coming-soon__text">{description}</p>
        <Link to="/" className="btn btn--primary">
          {t.common.backHome}
        </Link>
      </div>
    </section>
  )
}
