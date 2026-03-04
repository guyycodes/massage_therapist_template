import { Link } from 'react-router-dom'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center">
      <div className="container-custom text-center">
        <div className="text-8xl font-display font-light text-accent-gold/30 mb-4">404</div>
        <h1 className="text-4xl md:text-5xl font-display font-light text-white mb-6">
          Page Not Found
        </h1>
        <div className="h-px w-24 bg-accent-gold mx-auto my-8"></div>
        <p className="text-xl text-neutral-400 font-light mb-12 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="group relative px-8 py-4 bg-accent-gold text-black font-medium tracking-wider uppercase text-sm overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </span>
            <div className="absolute inset-0 bg-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium tracking-wider uppercase text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
