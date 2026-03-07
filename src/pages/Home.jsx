import { Link } from 'react-router-dom'
import {
  Heart, Leaf, Flame, Droplets, Baby, Zap,
  Shield, Clock, Award, Users,
  ArrowRight, Star, Quote, CheckCircle,
  Phone, ChevronDown, Gift, BadgeCheck
} from 'lucide-react'
import { useIntersectionObserver, useStaggeredIntersection } from '../hooks/useIntersectionObserver'
import { BookingWidget, JobPortalWidget } from '../hooks/useWidgetfied'
import SocialProof from '../components/SocialProof'

const SERVICES = [
  {
    icon: Leaf,
    title: 'Swedish Massage',
    description: 'Gentle, flowing strokes to promote relaxation, improve circulation, and ease muscle tension throughout the body.',
    duration: '60 / 90 min',
    price: 'From $95',
  },
  {
    icon: Zap,
    title: 'Deep Tissue',
    description: 'Firm, targeted pressure to reach deeper muscle layers and release chronic tension, knots, and adhesions.',
    duration: '60 / 90 min',
    price: 'From $110',
  },
  {
    icon: Heart,
    title: 'Sports Massage',
    description: 'Performance-focused techniques to prevent injuries, accelerate recovery, and enhance athletic performance.',
    duration: '60 / 90 min',
    price: 'From $120',
  },
  {
    icon: Flame,
    title: 'Hot Stone Therapy',
    description: 'Heated basalt stones placed on key points and used with massage for deeply penetrating warmth and relaxation.',
    duration: '75 / 90 min',
    price: 'From $130',
  },
  {
    icon: Baby,
    title: 'Prenatal Massage',
    description: 'Safe, nurturing massage designed specifically for expectant mothers to relieve pregnancy-related discomfort.',
    duration: '60 min',
    price: 'From $105',
  },
  {
    icon: Droplets,
    title: 'Aromatherapy',
    description: 'Essential oil-enhanced massage combining therapeutic touch with the healing properties of botanical extracts.',
    duration: '60 / 90 min',
    price: 'From $115',
  },
]

const STATS = [
  { value: '2,000+', label: 'Sessions Completed' },
  { value: '10+', label: 'Years Experience' },
  { value: '98%', label: 'Client Retention' },
  { value: '5.0', label: 'Google Rating' },
]

const WHY_CHOOSE = [
  {
    icon: Award,
    title: 'Licensed & Certified',
    description: 'Fully licensed massage therapist with advanced certifications in multiple modalities.',
  },
  {
    icon: Shield,
    title: 'Personalized Care',
    description: 'Every session is customized to your unique needs, preferences, and wellness goals.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Convenient appointment times including evenings and weekends to fit your schedule.',
  },
  {
    icon: Users,
    title: 'Trusted by Hundreds',
    description: 'A loyal client base built on results, trust, and genuine therapeutic expertise.',
  },
]

export default function Home() {
  const heroObserver = useIntersectionObserver({ threshold: 0.05 })
  const servicesObserver = useIntersectionObserver({ threshold: 0.1 })
  const whyObserver = useIntersectionObserver({ threshold: 0.1 })
  const aboutObserver = useIntersectionObserver({ threshold: 0.1 })
  const ctaObserver = useIntersectionObserver({ threshold: 0.1 })
  const { visibleItems: serviceVisible, setItemRef: setServiceRef } = useStaggeredIntersection(SERVICES.length)
  const { visibleItems: whyVisible, setItemRef: setWhyRef } = useStaggeredIntersection(WHY_CHOOSE.length)

  return (
    <>
      {/* ==================== HERO SECTION ====================
          Jakob's Law: Users expect wellness/spa sites to have a full-screen 
          atmospheric hero with centered text overlay, calming imagery, 
          and a prominent booking CTA. This mirrors the dominant pattern 
          across massage therapy, spa, and wellness websites.
      ========================================================= */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Background Image — PLACEHOLDER: Replace with a calming spa/massage hero image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            }}
          />
          {/* Dark overlay gradient — keeps text readable over any image */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          {/* Bottom fade to content */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* Subtle geometric accent (very low opacity, texture only) */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(30deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37),
            linear-gradient(150deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37)`,
            backgroundSize: '80px 140px',
          }}></div>
        </div>

        {/* Hero Content — Centered, the dominant UX pattern for wellness */}
        <div
          ref={heroObserver.ref}
          className={`relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 animate-fade-up ${heroObserver.isVisible ? 'visible' : ''}`}
        >
          <div className="max-w-4xl mx-auto">
            {/* Eyebrow */}
            <span className="inline-block text-accent-gold/90 text-sm tracking-[0.3em] uppercase font-light mb-6">
              Professional Massage Therapy
            </span>

            {/* Primary Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-light text-white mb-2 leading-[1.1]">
              Serenity
              <span className="block font-normal bg-gradient-to-r from-accent-gold via-yellow-300 to-accent-gold bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            {/* Gold divider */}
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto my-8"></div>

            {/* Subheadline — benefit-focused, not feature-focused */}
            <p className="text-xl md:text-2xl text-white/80 font-light mb-3 tracking-wide">
              Healing Hands, Lasting Relief
            </p>
            <p className="text-base md:text-lg text-white/50 font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Experience therapeutic massage tailored to your body — melt away stress,
              relieve chronic pain, and restore your natural balance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
              <BookingWidget
                id="hero-booking-widget"
              />
              <Link
                to="/services"
                className="px-10 py-4 border border-white/30 text-white font-medium tracking-wider uppercase text-sm hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-3xl mx-auto">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-light text-accent-gold mb-1">{stat.value}</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/40 animate-bounce">
            <span className="text-[10px] uppercase tracking-[0.2em] mb-2">Discover</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* ==================== PROMO BANNER ==================== */}
      <section className="bg-accent-gold">
        <div className="container-custom py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-black" />
              <span className="text-black font-semibold text-lg tracking-wide">New Client Special</span>
            </div>
            <span className="text-black/80 font-light">
              $20 off your first massage session — use code <strong className="font-semibold">WELCOME20</strong>
            </span>
            <BookingWidget id="promo-booking-widget" />
          </div>
        </div>
      </section>

      {/* ==================== TRUST BADGES ==================== */}
      <section className="py-10 bg-neutral-100 border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            <div className="flex items-center gap-2 text-neutral-400">
              <BadgeCheck className="w-6 h-6" />
              <span className="text-xs uppercase tracking-[0.15em] font-medium">Licensed LMT</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <Shield className="w-6 h-6" />
              <span className="text-xs uppercase tracking-[0.15em] font-medium">AMTA Member</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <Award className="w-6 h-6" />
              <span className="text-xs uppercase tracking-[0.15em] font-medium">NCBTMB Certified</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <CheckCircle className="w-6 h-6" />
              <span className="text-xs uppercase tracking-[0.15em] font-medium">Colorado Licensed</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <Star className="w-6 h-6" />
              <span className="text-xs uppercase tracking-[0.15em] font-medium">5.0 Google Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE SECTION ==================== */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2000&q=80')`,
            filter: 'blur(6px) brightness(0.95)',
            transform: 'scale(1.05)',
          }}
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        <div className="relative z-10 container-custom">
          <div
            ref={whyObserver.ref}
            className={`text-center mb-20 animate-fade-up ${whyObserver.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
              Why Choose Serenity Touch
            </h2>
            <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
            <p className="text-xl text-neutral-600 font-light max-w-2xl mx-auto">
              Dedicated to your wellness with expertise, compassion, and results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  ref={(el) => setWhyRef(index, el)}
                  data-item-id={index}
                  className={`text-center p-8 group bg-white/60 backdrop-blur-md border border-white/50 shadow-sm hover:shadow-lg hover:bg-white/80 transition-all duration-300 animate-fade-up ${whyVisible[index] ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 border border-neutral-200/60 rounded-full flex items-center justify-center bg-white/50 group-hover:border-accent-gold group-hover:bg-accent-gold/10 transition-all duration-300">
                    <Icon className="w-6 h-6 text-neutral-400 group-hover:text-accent-gold transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-medium mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-neutral-500 font-light leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=2000&q=80')`,
            filter: 'blur(8px) brightness(0.9)',
            transform: 'scale(1.05)',
          }}
        />
        <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm" />
        <div className="relative z-10 container-custom">
          <div
            ref={servicesObserver.ref}
            className={`text-center mb-20 animate-fade-up ${servicesObserver.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-4">
              Our Services
            </h2>
            <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
            <p className="text-xl text-neutral-300 font-light max-w-2xl mx-auto">
              Therapeutic massage modalities to address your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  ref={(el) => setServiceRef(index, el)}
                  data-item-id={index}
                  className={`group bg-white/10 backdrop-blur-lg p-8 border border-white/15 hover:border-accent-gold/30 hover:bg-white/15 transition-all duration-300 hover:shadow-xl animate-fade-up ${serviceVisible[index] ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-accent-gold group-hover:bg-accent-gold/10 transition-all duration-300">
                      <Icon className="w-5 h-5 text-white/60 group-hover:text-accent-gold transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium tracking-wide text-white">{service.title}</h3>
                      <span className="text-xs text-white/40 uppercase tracking-wider">{service.duration}</span>
                    </div>
                  </div>
                  <p className="text-white/60 font-light leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent-gold font-medium">{service.price}</span>
                    <BookingWidget id={`home-service-${index}-booking-widget`} />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-white font-medium tracking-wider uppercase text-sm hover:text-accent-gold transition-colors group"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT / STORY SECTION ==================== */}
      <section className="py-32 bg-black text-white">
        <div className="container-custom">
          <div
            ref={aboutObserver.ref}
            className={`grid lg:grid-cols-2 gap-16 items-center animate-fade-up ${aboutObserver.isVisible ? 'visible' : ''}`}
          >
            {/* Left Image */}
            <div className="relative h-[600px] order-2 lg:order-1">
              {/* PLACEHOLDER: Replace with studio/treatment room image */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <Heart className="w-12 h-12 text-accent-gold/30 mx-auto mb-4" />
                  <p className="text-neutral-500 text-sm uppercase tracking-wider">Treatment Room Image</p>
                  <p className="text-neutral-600 text-xs mt-2">Replace with your studio photo</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-display font-light mb-8">
                A Passion for Healing
              </h2>
              <div className="h-px w-24 bg-accent-gold mb-8"></div>
              <p className="text-xl text-neutral-300 font-light mb-12 leading-relaxed">
                With over a decade of dedicated practice, I believe massage therapy is more than relaxation — 
                it's a pathway to whole-body wellness. Every session is a partnership between therapist 
                and client, working together toward your health goals.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  'Licensed & insured with 10+ years experience',
                  'Advanced certifications in multiple modalities',
                  'Customized treatment plans for every client',
                  'Clean, tranquil private treatment rooms',
                  'Flexible scheduling including evenings & weekends'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-px h-4 bg-accent-gold"></div>
                    <span className="text-neutral-300 font-light">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-accent-gold font-medium tracking-wider uppercase text-sm hover:text-white transition-colors group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== GOOGLE REVIEWS / SOCIAL PROOF ==================== */}
      <SocialProof />

      {/* ==================== BOOKING CTA SECTION ==================== */}
      <section className="py-32 bg-gradient-to-b from-neutral-900 to-black text-white">
        <div className="container-custom">
          <div
            ref={ctaObserver.ref}
            className={`text-center animate-fade-up ${ctaObserver.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-8">
              Ready to Feel Your Best?
            </h2>
            <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
            <p className="text-xl text-neutral-300 font-light mb-12 max-w-2xl mx-auto">
              Your journey to relaxation and relief starts with a single step. 
              Book your session today and experience the Serenity Touch difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-start mb-12">
              <BookingWidget
                id="cta-booking-widget"
              />
              <div className="text-center">
                <JobPortalWidget
                  id="cta-portal-widget"
                  displayMode="button"
                />
                <p className="text-neutral-500 text-xs mt-2 tracking-wider uppercase">Appointment Lookup</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 text-neutral-400">
              <span className="text-sm uppercase tracking-wider">or call directly</span>
              <a href="tel:+13035550172" className="text-accent-gold text-xl font-light hover:text-white transition-colors">
                (303) 555-0172
              </a>
            </div>

            <p className="text-neutral-600 text-sm mt-8">
              Secure online booking &amp; payments. Cancel or reschedule up to 24 hours before your appointment.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
