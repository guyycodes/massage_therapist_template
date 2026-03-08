import {
  Award, Heart, Shield, BookOpen, Clock,
  CheckCircle, Users
} from 'lucide-react'
import { useIntersectionObserver, useStaggeredIntersection } from '../hooks/useIntersectionObserver'
import { BookingWidget, JobPortalWidget } from '../hooks/useWidgetfied'

const CREDENTIALS = [
  {
    icon: Award,
    title: 'Licensed Massage Therapist',
    description: 'State-licensed LMT with nationally recognized certification from an accredited massage therapy program.',
  },
  {
    icon: BookOpen,
    title: 'Advanced Training',
    description: 'Specialized certifications in deep tissue, sports massage, myofascial release, and prenatal massage.',
  },
  {
    icon: Heart,
    title: '10+ Years Experience',
    description: 'Over a decade of hands-on experience helping thousands of clients find relief and wellness.',
  },
  {
    icon: Shield,
    title: 'Continuing Education',
    description: 'Committed to ongoing learning with annual advanced coursework in emerging therapeutic techniques.',
  },
]

const VALUES = [
  {
    title: 'Client-Centered Care',
    description: 'Your goals, your comfort, your results. Every session begins with listening and ends with a plan for your continued wellness.',
  },
  {
    title: 'Evidence-Based Practice',
    description: 'Techniques grounded in anatomy, physiology, and the latest research in massage therapy and pain science.',
  },
  {
    title: 'Safe & Inclusive Space',
    description: 'A welcoming environment for all bodies and all people. Your privacy and comfort are always the top priority.',
  },
  {
    title: 'Holistic Approach',
    description: 'Addressing not just symptoms but root causes — integrating bodywork with self-care guidance for lasting results.',
  },
]

const TIMELINE = [
  { year: '2014', event: 'Graduated from accredited massage therapy program' },
  { year: '2015', event: 'Obtained state licensure and began private practice' },
  { year: '2017', event: 'Advanced certification in deep tissue and sports massage' },
  { year: '2019', event: 'Prenatal massage specialty certification' },
  { year: '2021', event: 'Expanded to dedicated studio space' },
  { year: '2023', event: 'Surpassed 2,000 client sessions' },
]

export default function About() {
  const heroObserver = useIntersectionObserver({ threshold: 0.1 })
  const storyObserver = useIntersectionObserver({ threshold: 0.1 })
  const credObserver = useIntersectionObserver({ threshold: 0.1 })
  const valuesObserver = useIntersectionObserver({ threshold: 0.1 })
  const timelineObserver = useIntersectionObserver({ threshold: 0.1 })
  const ctaObserver = useIntersectionObserver({ threshold: 0.1 })
  const { visibleItems: credVisible, setItemRef: setCredRef } = useStaggeredIntersection(CREDENTIALS.length)
  const { visibleItems: valuesVisible, setItemRef: setValuesRef } = useStaggeredIntersection(VALUES.length)

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
            Our Story
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-white mb-6">
            About <span className="text-accent-gold">Us</span>
          </h1>
          <div className="h-px w-24 bg-accent-gold mx-auto my-8"></div>
          <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto">
            Dedicated to the art and science of therapeutic massage
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div
            ref={storyObserver.ref}
            className={`grid lg:grid-cols-2 gap-16 items-center animate-fade-up ${storyObserver.isVisible ? 'visible' : ''}`}
          >
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 border border-accent-gold/20"></div>
              {/* PLACEHOLDER: Replace with therapist portrait */}
              <div className="relative bg-gradient-to-br from-neutral-100 to-neutral-200 aspect-[4/5] flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="w-16 h-16 text-accent-gold/30 mx-auto mb-4" />
                  <p className="text-neutral-500 text-sm uppercase tracking-wider">Therapist Portrait</p>
                  <p className="text-neutral-400 text-xs mt-2">Replace with your photo</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
                A Journey of Healing
              </h2>
              <div className="h-px w-24 bg-accent-gold my-8"></div>
              <div className="space-y-6 text-neutral-600 font-light leading-relaxed">
                <p>
                  My path to massage therapy began with a simple belief: the human body has an 
                  remarkable capacity to heal when given the right support. After experiencing the 
                  transformative power of therapeutic touch firsthand, I knew I had found my calling.
                </p>
                <p>
                  After graduating from an accredited massage therapy program and obtaining my state 
                  license, I dedicated myself to mastering multiple modalities — from the gentle flow 
                  of Swedish massage to the precision of deep tissue work and the specialized care 
                  of prenatal massage.
                </p>
                <p>
                  Today, with over 2,000 sessions completed and a 98% client retention rate, 
                  Serenity Touch has become a trusted name in therapeutic massage. But the mission 
                  remains the same: to help every client feel better, move better, and live better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-32 bg-neutral-50">
        <div className="container-custom">
          <div
            ref={credObserver.ref}
            className={`text-center mb-20 animate-fade-up ${credObserver.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
              Credentials & Expertise
            </h2>
            <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CREDENTIALS.map((cred, index) => {
              const Icon = cred.icon
              return (
                <div
                  key={index}
                  ref={(el) => setCredRef(index, el)}
                  data-item-id={index}
                  className={`text-center p-8 bg-white border border-neutral-200 animate-fade-up ${credVisible[index] ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 border border-accent-gold/20 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent-gold" />
                  </div>
                  <h3 className="text-lg font-medium mb-3 tracking-wide">{cred.title}</h3>
                  <p className="text-neutral-500 font-light text-sm leading-relaxed">{cred.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-black text-white">
        <div className="container-custom">
          <div
            ref={valuesObserver.ref}
            className={`text-center mb-20 animate-fade-up ${valuesObserver.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light mb-4">
              Our Philosophy
            </h2>
            <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {VALUES.map((value, index) => (
              <div
                key={index}
                ref={(el) => setValuesRef(index, el)}
                data-item-id={index}
                className={`p-8 border border-neutral-800 hover:border-accent-gold/30 transition-colors duration-300 animate-fade-up ${valuesVisible[index] ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-medium mb-3 text-accent-gold tracking-wide">{value.title}</h3>
                <p className="text-neutral-400 font-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div
            ref={timelineObserver.ref}
            className={`text-center mb-20 animate-fade-up ${timelineObserver.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
              Our Journey
            </h2>
            <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            {TIMELINE.map((item, index) => (
              <div key={index} className="flex gap-8 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent-gold"></div>
                  {index < TIMELINE.length - 1 && (
                    <div className="w-px flex-1 bg-accent-gold/20 mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-accent-gold font-medium text-sm uppercase tracking-wider">{item.year}</span>
                  <p className="text-neutral-600 font-light mt-1">{item.event}</p>
                </div>
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
            Experience the Serenity Touch Difference
          </h2>
          <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>
          <p className="text-xl text-neutral-300 font-light mb-10 max-w-2xl mx-auto">
            Ready to start your wellness journey? Book your first session and discover what 
            truly personalized massage therapy feels like.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <BookingWidget id="about-cta-booking-widget" />
            <div className="text-center">
              <JobPortalWidget id="about-cta-portal-widget" displayMode="button" />
              <p className="text-neutral-500 text-xs mt-2 tracking-wider uppercase">Client Portal</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 text-neutral-400 mt-8">
            <span className="text-sm uppercase tracking-wider">or call directly</span>
            <a href="tel:+13035550172" className="text-accent-gold text-lg font-light hover:text-white transition-colors">
              (303) 555-0172
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
