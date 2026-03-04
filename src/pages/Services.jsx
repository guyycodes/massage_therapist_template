import { Link } from 'react-router-dom'
import {
  Leaf, Zap, Heart, Flame, Baby, Droplets,
  ArrowRight, Clock, DollarSign, CheckCircle
} from 'lucide-react'
import { useIntersectionObserver, useStaggeredIntersection } from '../hooks/useIntersectionObserver'
import { BookingWidget } from '../hooks/useWidgetfied'

const SERVICES = [
  {
    id: 'swedish',
    icon: Leaf,
    title: 'Swedish Massage',
    tagline: 'Classic Relaxation',
    description: 'The quintessential massage experience. Long, flowing strokes combined with gentle kneading to promote deep relaxation, improve circulation, and ease overall muscle tension.',
    benefits: ['Stress & anxiety relief', 'Improved blood circulation', 'Better sleep quality', 'Overall relaxation'],
    durations: [
      { time: '60 min', price: '$95' },
      { time: '90 min', price: '$135' },
    ],
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'deep-tissue',
    icon: Zap,
    title: 'Deep Tissue Massage',
    tagline: 'Targeted Relief',
    description: 'Firm, focused pressure reaching the deeper layers of muscle and connective tissue. Ideal for chronic pain, muscle knots, and areas of persistent tension.',
    benefits: ['Chronic pain relief', 'Break down scar tissue', 'Release muscle knots', 'Improve range of motion'],
    durations: [
      { time: '60 min', price: '$110' },
      { time: '90 min', price: '$155' },
    ],
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sports',
    icon: Heart,
    title: 'Sports Massage',
    tagline: 'Performance & Recovery',
    description: 'Tailored for athletes and active individuals. A combination of techniques designed to prevent injuries, speed recovery, reduce muscle soreness, and enhance performance.',
    benefits: ['Faster recovery', 'Injury prevention', 'Reduced muscle soreness', 'Enhanced flexibility'],
    durations: [
      { time: '60 min', price: '$120' },
      { time: '90 min', price: '$165' },
    ],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hot-stone',
    icon: Flame,
    title: 'Hot Stone Therapy',
    tagline: 'Deep Warmth & Healing',
    description: 'Smooth, heated basalt stones placed on key points of the body while warm oil massage melts away tension. The penetrating heat allows for deeper muscle work with less pressure.',
    benefits: ['Deep muscle relaxation', 'Improved circulation', 'Stress reduction', 'Pain relief'],
    durations: [
      { time: '75 min', price: '$130' },
      { time: '90 min', price: '$160' },
    ],
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prenatal',
    icon: Baby,
    title: 'Prenatal Massage',
    tagline: 'Nurturing Care',
    description: 'Specially designed for expectant mothers using safe positioning and gentle techniques. Addresses pregnancy-specific concerns like lower back pain, swelling, and fatigue.',
    benefits: ['Lower back pain relief', 'Reduced swelling', 'Better sleep', 'Reduced anxiety'],
    durations: [
      { time: '60 min', price: '$105' },
    ],
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'aromatherapy',
    icon: Droplets,
    title: 'Aromatherapy Massage',
    tagline: 'Sensory Wellness',
    description: 'A Swedish-style massage enhanced with carefully selected essential oils. Each blend is chosen to complement your session goals — whether calming, energizing, or restorative.',
    benefits: ['Enhanced relaxation', 'Mood elevation', 'Respiratory support', 'Skin nourishment'],
    durations: [
      { time: '60 min', price: '$115' },
      { time: '90 min', price: '$155' },
    ],
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We discuss your health history, areas of concern, and session goals to create a personalized treatment plan.',
  },
  {
    step: '02',
    title: 'Treatment',
    description: 'Your customized massage session using the techniques best suited to your needs, in a peaceful private room.',
  },
  {
    step: '03',
    title: 'Aftercare',
    description: 'Post-session guidance including stretches, self-care tips, and a recommended treatment schedule.',
  },
]

export default function Services() {
  const heroObserver = useIntersectionObserver({ threshold: 0.1 })
  const processObserver = useIntersectionObserver({ threshold: 0.1 })
  const ctaObserver = useIntersectionObserver({ threshold: 0.1 })
  const { visibleItems: serviceVisible, setItemRef: setServiceRef } = useStaggeredIntersection(SERVICES.length)

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
            What We Offer
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-white mb-6">
            Our <span className="text-accent-gold">Services</span>
          </h1>
          <div className="h-px w-24 bg-accent-gold mx-auto my-8"></div>
          <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto">
            Therapeutic massage modalities tailored to your unique needs and wellness goals
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0
              return (
                <div
                  key={service.id}
                  id={service.id}
                  ref={(el) => setServiceRef(index, el)}
                  data-item-id={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-up ${serviceVisible[index] ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Image Side */}
                  <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 border border-accent-gold/30 rounded-full flex items-center justify-center">
                        <Icon className="w-4 h-4 text-accent-gold" />
                      </div>
                      <span className="text-xs text-accent-gold uppercase tracking-[0.2em]">{service.tagline}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-display font-light text-neutral-900 mb-4">
                      {service.title}
                    </h2>
                    <div className="h-px w-16 bg-accent-gold mb-6"></div>
                    <p className="text-neutral-600 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent-gold flex-shrink-0" />
                          <span className="text-sm text-neutral-600">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {service.durations.map((d, i) => (
                        <div key={i} className="flex items-center gap-3 px-4 py-2 bg-neutral-50 border border-neutral-200">
                          <Clock className="w-4 h-4 text-neutral-400" />
                          <span className="text-sm text-neutral-600">{d.time}</span>
                          <span className="text-sm font-medium text-accent-gold">{d.price}</span>
                        </div>
                      ))}
                    </div>

                    <BookingWidget id={`service-${service.id}-booking-widget`} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-neutral-50">
        <div className="container-custom">
          <div
            ref={processObserver.ref}
            className={`text-center mb-20 animate-fade-up ${processObserver.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
              Your Session Experience
            </h2>
            <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
            <p className="text-xl text-neutral-600 font-light max-w-2xl mx-auto">
              What to expect when you visit Serenity Touch
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {PROCESS.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-display font-light text-accent-gold/30 mb-4">{step.step}</div>
                <h3 className="text-xl font-medium mb-3 tracking-wide">{step.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
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
            Ready to Begin Your Journey?
          </h2>
          <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
          <p className="text-xl text-neutral-300 font-light mb-10 max-w-2xl mx-auto">
            Not sure which service is right for you? Contact us and we'll help you find the perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <BookingWidget id="services-cta-booking-widget" />
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center gap-3 text-accent-gold font-medium tracking-wider uppercase text-sm hover:text-white transition-colors"
            >
              Call: (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
