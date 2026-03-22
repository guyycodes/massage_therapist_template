import { Link } from 'react-router-dom'
import {
  Phone, Mail, MapPin, Clock,
  ArrowRight, CheckCircle,
  Facebook, Instagram, Youtube, Calendar
} from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { JobPortalWidget, BookingWidget } from '../hooks/useWidgetfied'

const CONTACT_INFO = [
  {
    icon: Phone,
    title: 'Phone',
    details: '(303) 555-0172',
    link: 'tel:+13035550172',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'hello@serenitytouchmassage.com',
    link: 'mailto:hello@serenitytouchmassage.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    details: '1755 Blake Street, Suite 220\nDenver, CO 80202',
    link: 'https://www.google.com/maps/dir/?api=1&destination=1755+Blake+Street+Suite+220+Denver+CO+80202',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: 'Mon–Fri: 9AM–7PM\nSat: 10AM–5PM\nSun: Closed',
    link: null,
  },
]

const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://facebook.com/serenitytouchmassage', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/serenitytouchmassage', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@serenitytouchmassage', label: 'YouTube' },
]

export default function Contact() {
  const heroObserver = useIntersectionObserver({ threshold: 0.1 })
  const formObserver = useIntersectionObserver({ threshold: 0.1 })
  const mapObserver = useIntersectionObserver({ threshold: 0.1 })
  const ctaObserver = useIntersectionObserver({ threshold: 0.1 })

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(30deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37),
            linear-gradient(150deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37)`,
            backgroundSize: '80px 140px',
          }}></div>
        </div>
        <div
          ref={heroObserver.ref}
          className={`relative z-10 container-custom text-center animate-fade-up ${heroObserver.isVisible ? 'visible' : ''}`}
        >
          <span className="inline-block text-accent-gold text-sm tracking-[0.3em] uppercase font-light mb-6">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-white mb-6">
            Book Your <span className="text-accent-gold">Session</span>
          </h1>
          <div className="h-px w-24 bg-accent-gold mx-auto my-8"></div>
          <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto">
            Ready to start feeling better? Reach out to schedule your appointment or ask any questions.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div
            ref={formObserver.ref}
            className={`grid lg:grid-cols-5 gap-16 animate-fade-up ${formObserver.isVisible ? 'visible' : ''}`}
          >
            {/* Inline Booking Widget */}
            <div className="lg:col-span-3 min-w-0">
              <h2 className="text-3xl font-display font-light text-neutral-900 mb-2">
                Book Your Session
              </h2>
              <div className="h-px w-16 bg-accent-gold mb-4"></div>
              <p className="text-neutral-500 mb-8">
                Select a service, pick your preferred date and time, and book instantly.
              </p>

              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 sm:p-8 overflow-hidden max-w-full">
                <BookingWidget id="contact-inline-booking-widget" displayMode="inline" className="w-full max-w-full" />
              </div>

              <div className="mt-8 flex items-start gap-4 p-6 bg-neutral-900 text-white rounded-xl">
                <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Prefer to Book by Phone?</h4>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                    Call us directly and we'll help you find the perfect time for your session.
                  </p>
                  <a
                    href="tel:+13035550172"
                    className="inline-flex items-center gap-2 text-accent-gold text-sm hover:text-white transition-colors"
                  >
                    Call (303) 555-0172
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Details */}
              <div className="border border-neutral-200 p-8 text-center">
                <h3 className="text-2xl font-display font-light text-neutral-900 mb-2">Contact Details</h3>
                <div className="h-px w-16 bg-accent-gold mx-auto mb-6"></div>
                <div className="space-y-6 inline-block text-left">
                  {CONTACT_INFO.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-accent-gold" />
                        </div>
                        <div>
                          <h4 className="text-sm uppercase tracking-wider text-neutral-700 mb-1 font-light">{info.title}</h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-neutral-600 hover:text-accent-gold transition-colors whitespace-pre-line font-light"
                            >
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-neutral-600 whitespace-pre-line font-light">{info.details}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="border border-neutral-200 p-8 text-center">
                <h3 className="text-2xl font-display font-light text-neutral-900 mb-2">Connect</h3>
                <div className="h-px w-16 bg-accent-gold mx-auto mb-6"></div>
                <p className="text-neutral-600 mb-6 font-light">
                  Follow for wellness tips, special offers, and availability updates
                </p>
                <div className="flex gap-3 justify-center">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-12 h-12 border border-neutral-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Booking Policy */}
              <div className="bg-black text-white p-8 text-center">
                <h4 className="text-lg font-medium mb-3 tracking-wide">Booking Policy</h4>
                <p className="text-neutral-300 font-light text-sm leading-relaxed">
                  Appointments confirmed within 24 hours. 24-hour cancellation notice required. 
                  Late arrivals may result in shortened session time. First-time clients please 
                  arrive 10 minutes early.
                </p>
              </div>

              {/* Portal Widget */}
              <div className="border border-accent-gold/30 p-8 flex flex-col items-center text-center">
                <h4 className="text-lg font-medium mb-3 tracking-wide">Client Portal</h4>
                <p className="text-neutral-500 font-light text-sm mb-4">
                  Access your appointments, history, and account details.
                </p>
                <JobPortalWidget
                  id="contact-portal-widget"
                  displayMode="button"
                />
                <p className="text-neutral-400 text-xs mt-2 tracking-wider uppercase">Client Portal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative">
        <div
          ref={mapObserver.ref}
          className={`animate-fade-in ${mapObserver.isVisible ? 'visible' : ''}`}
        >
          <div className="h-[400px] bg-neutral-900 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.589!2d-105.0009!3d39.7530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78c3457a31c7%3A0x7db9c2079d413b5!2sLoDo%2C%20Denver%2C%20CO!5e0!3m2!1sen!2sus!4v1702830000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Serenity Touch Massage Location"
              className="w-full h-full"
            ></iframe>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
              <div className="container-custom flex items-center justify-between">
                <div className="text-white">
                  <h3 className="text-xl font-display font-light mb-1">Visit Our Studio</h3>
                  <p className="text-neutral-300 text-sm font-light">1755 Blake Street, Suite 220, Denver</p>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=1755+Blake+Street+Suite+220+Denver+CO+80202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 text-accent-gold text-sm uppercase tracking-wider hover:text-white transition-colors"
                >
                  Get Directions <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-neutral-900 to-black">
        <div
          ref={ctaObserver.ref}
          className={`container-custom text-center animate-fade-up ${ctaObserver.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-display font-light text-white mb-6">
            Your Wellness Journey Awaits
          </h2>
          <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
          <p className="text-xl text-neutral-300 font-light mb-10 max-w-2xl mx-auto">
            Experience the difference of truly personalized massage therapy.
          </p>
          <a
            href="tel:+13035550172"
            className="inline-flex items-center gap-3 text-accent-gold font-medium tracking-wider uppercase text-sm hover:text-white transition-colors"
          >
            Call Direct: (303) 555-0172
          </a>
        </div>
      </section>
    </>
  )
}
