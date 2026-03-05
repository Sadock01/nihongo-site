import './components/sections.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './ui/pages/HomePage'
import BeninPage from './ui/pages/BeninPage'
import { NihongoGakkouPage } from './ui/pages/NihongoGakkouPage'
import { DestinationsPage } from './ui/pages/DestinationsPage'
import { GuidesPage } from './ui/pages/GuidesPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="benin" element={<BeninPage />} />
          <Route path="nihongo-gakkou" element={<NihongoGakkouPage />} />
          <Route path="destinations" element={<DestinationsPage />} />
          <Route path="guides" element={<GuidesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
