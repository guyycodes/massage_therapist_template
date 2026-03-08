import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Mail, Menu, X, Clock } from 'lucide-react'
import { BookingWidget, JobPortalWidget } from '../hooks/useWidgetfied'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const CONTACT = {
  phone: '(303) 555-0172',
  phoneHref: 'tel:+13035550172',
  email: 'hello@serenitytouchmassage.com',
  hours: 'Mon–Sat: 9AM–7PM',
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-neutral-900 text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-accent-gold transition-colors">
              <Phone size={12} />
              <span>{CONTACT.phone}</span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="hidden sm:flex items-center gap-2 hover:text-accent-gold transition-colors">
              <Mail size={12} />
              <span>{CONTACT.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <Clock size={12} />
            <span className="hidden md:block">{CONTACT.hours}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-neutral-900">Serenity Touch</span>
                <span className="text-xs uppercase tracking-[0.2em] text-accent-gold font-semibold">Massage Therapy</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium transition-colors relative group ${
                    location.pathname === link.href
                      ? 'text-accent-gold'
                      : 'text-neutral-700 hover:text-accent-gold'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-gold transition-all ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
              <div className="flex items-start gap-3 ml-4">
                <BookingWidget
                  id="header-booking-widget"
                />
                <div className="text-center">
                  <JobPortalWidget
                    id="header-portal-widget"
                  />
                  <p className="text-neutral-400 text-[10px] tracking-wider uppercase mt-1">Client Portal</p>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-neutral-700 hover:text-accent-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white border-t`}>
          <div className="container-custom py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block py-2 font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-accent-gold'
                    : 'text-neutral-700 hover:text-accent-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <BookingWidget
              id="header-mobile-booking-widget"
              className="w-full mt-4"
            />
            <div className="text-center mt-2">
              <JobPortalWidget
                id="header-mobile-portal-widget"
                className="w-full"
              />
              <p className="text-neutral-400 text-xs mt-1 tracking-wider uppercase">Client Portal</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
