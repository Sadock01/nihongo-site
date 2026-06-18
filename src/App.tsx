import './components/sections.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { I18nProvider, useI18n } from './i18n'
import { Layout } from './components/Layout'
import { HomePage } from './ui/pages/HomePage'
import BeninPage from './ui/pages/BeninPage'
import { NihongoGakkouPage } from './ui/pages/NihongoGakkouPage'
import { DestinationsPage } from './ui/pages/DestinationsPage'
import { ComingSoonPage } from './ui/pages/ComingSoonPage'

function PrimarySchoolPage() {
  const { t } = useI18n()
  return (
    <ComingSoonPage
      title={t.pages.primarySchool.title}
      description={t.pages.primarySchool.description}
    />
  )
}

function SocialWelfarePage() {
  const { t } = useI18n()
  return (
    <ComingSoonPage
      title={t.pages.socialWelfare.title}
      description={t.pages.socialWelfare.description}
    />
  )
}

function EnvironmentPage() {
  const { t } = useI18n()
  return (
    <ComingSoonPage
      title={t.pages.environment.title}
      description={t.pages.environment.description}
    />
  )
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="benin" element={<BeninPage />} />
          <Route path="nihongo-gakkou" element={<NihongoGakkouPage />} />
          <Route path="ecole-primaire" element={<PrimarySchoolPage />} />
          <Route path="destinations" element={<DestinationsPage />} />
          <Route path="social-welfare" element={<SocialWelfarePage />} />
          <Route path="environment-protection" element={<EnvironmentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <I18nProvider>
      <AppRoutes />
    </I18nProvider>
  )
}

export default App
