import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import MobileCTABar from './components/MobileCTABar.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Privacy = lazy(() => import('./pages/Privacy.jsx'))
const Terms = lazy(() => import('./pages/Terms.jsx'))
const AdminLogin = lazy(() => import('./pages/AdminLogin.jsx'))
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-neutral-950">
    <div className="w-10 h-10 border-3 border-accent-gold/20 border-t-accent-gold rounded-full animate-spin"></div>
  </div>
)

const ADMIN_ROUTES = ['/admin', '/dashboard']

export default function App() {
  const location = useLocation()
  const isAdminRoute = ADMIN_ROUTES.includes(location.pathname)

  return (
    <>
      <ScrollToTop />
      {!isAdminRoute && <Header />}
      <main className="min-h-screen">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <MobileCTABar />}
    </>
  )
}
