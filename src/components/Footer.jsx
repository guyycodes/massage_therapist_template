import { Link } from 'react-router-dom'
import {
  Phone, Mail, MapPin, Clock,
  Facebook, Instagram, Youtube,
  Heart
} from 'lucide-react'
import { BookingWidget } from '../hooks/useWidgetfied'

const CONTENT = {
  brand: {
    name: 'Serenity Touch',
    tagline: 'Massage Therapy',
    description: 'Professional massage therapy dedicated to your relaxation, recovery, and overall wellness. Licensed therapist with over 10 years of experience.',
  },
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Swedish Massage', href: '/services#swedish' },
    { name: 'Deep Tissue', href: '/services#deep-tissue' },
    { name: 'Sports Massage', href: '/services#sports' },
    { name: 'Hot Stone Therapy', href: '/services#hot-stone' },
    { name: 'Prenatal Massage', href: '/services#prenatal' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', color: 'hover:text-red-500' },
  ],
  contact: {
    phone: { label: 'Phone', value: '(555) 123-4567', href: 'tel:+15551234567' },
    email: { label: 'Email', value: 'hello@serenitytouchmassage.com', href: 'mailto:hello@serenitytouchmassage.com' },
    hours: { label: 'Hours', value: 'Mon–Fri: 9AM–7PM\nSat: 10AM–5PM' },
    address: { label: 'Location', value: '123 Wellness Way, Suite 200\nYour City, ST 00000' },
  },
  map: {
    title: 'Find Us',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d-122.4194154846816!3d37.77492927975945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e2b9c7cd%3A0x79144f7b2ece5b88!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1702830000000!5m2!1sen!2sus',
    directionsUrl: 'https://maps.google.com',
    address: '123 Wellness Way, Your City',
    serviceCoverage: {
      title: 'Service Area',
      areas: ['Downtown', 'Midtown', 'Uptown', 'Westside', 'Eastside'],
    },
  },
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-accent-gold/90">
        <div className="container-custom py-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-display font-semibold text-black mb-2">Stay Updated</h3>
              <p className="text-black/70">Wellness tips, special offers, and availability updates</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg text-neutral-900 flex-1 lg:w-80 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button type="submit" className="btn-dark">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info + Map */}
          <div className="space-y-4">
            <div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-white">{CONTENT.brand.name}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-accent-gold font-semibold">{CONTENT.brand.tagline}</span>
              </div>
              <p className="text-gray-400 text-sm mt-3">{CONTENT.brand.description}</p>
              <div className="flex gap-3 mt-4">
                {CONTENT.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`p-2 rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="mt-6">
              <h3 className="font-semibold text-sm mb-2">{CONTENT.map.title}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_.75fr] gap-3">
                <div>
                  <div className="rounded-lg overflow-hidden shadow-lg bg-gray-800 border border-gray-700">
                    <iframe
                      src={CONTENT.map.embedUrl}
                      width="100%"
                      height="120"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Serenity Touch Massage Location"
                      className="w-full"
                    ></iframe>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    <a
                      href={CONTENT.map.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-gold transition-colors"
                    >
                      {CONTENT.map.address}
                    </a>
                  </p>
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-gray-300 mb-1">{CONTENT.map.serviceCoverage.title}</p>
                  <div className="space-y-0.5">
                    {CONTENT.map.serviceCoverage.areas.map((area) => (
                      <div key={area} className="flex items-center gap-1">
                        <span className="text-accent-gold">✓</span>
                        <span className="text-gray-400">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {CONTENT.services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-accent-gold transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {CONTENT.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-accent-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {CONTENT.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-accent-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 text-accent-gold mt-0.5" />
                <div>
                  <p className="text-gray-400">{CONTENT.contact.phone.label}</p>
                  <a href={CONTENT.contact.phone.href} className="text-white hover:text-accent-gold transition-colors">
                    {CONTENT.contact.phone.value}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 text-accent-gold mt-0.5" />
                <div>
                  <p className="text-gray-400">{CONTENT.contact.email.label}</p>
                  <a href={CONTENT.contact.email.href} className="text-white hover:text-accent-gold transition-colors">
                    {CONTENT.contact.email.value}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="w-4 h-4 text-accent-gold mt-0.5" />
                <div>
                  <p className="text-gray-400">{CONTENT.contact.hours.label}</p>
                  <p className="text-white whitespace-pre-line">{CONTENT.contact.hours.value}</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent-gold mt-0.5" />
                <div>
                  <p className="text-gray-400">{CONTENT.contact.address.label}</p>
                  <p className="text-white whitespace-pre-line">{CONTENT.contact.address.value}</p>
                </div>
              </li>
            </ul>

            {/* Booking Widget */}
            <div className="mt-6">
              <BookingWidget
                id="footer-booking-widget"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Serenity Touch Massage. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-accent-gold" /> by{' '}
              <span className="text-accent-gold">Serenity Touch</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
