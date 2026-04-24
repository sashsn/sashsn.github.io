import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import { SiteHeader } from './components/SiteHeader'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'

export type HomeState = {
  scrollTo?: string
}

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [location.pathname])

  const handleSectionNav = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } satisfies HomeState })
      return
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />
      <div className="scanline-grid" aria-hidden="true" />

      <SiteHeader onSectionNav={handleSectionNav} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage onSectionNav={handleSectionNav} />} />
          <Route
            path="/projects/orl-face-recognition"
            element={<Navigate to="/projects/biometric-face-recognition" replace />}
          />
          <Route
            path="/projects/:slug"
            element={<ProjectPage onSectionNav={handleSectionNav} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
