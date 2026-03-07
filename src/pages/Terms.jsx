import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <>
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />
        <div className="relative z-10 container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-display font-light text-white mb-6">
            Terms of <span className="text-accent-gold">Service</span>
          </h1>
          <div className="h-px w-24 bg-accent-gold mx-auto my-8" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-neutral prose-lg font-light leading-relaxed space-y-8">
            <p className="text-neutral-500 text-sm uppercase tracking-wider">
              Last updated: January 1, 2026
            </p>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Appointments & Scheduling</h2>
              <p className="text-neutral-600 font-light leading-relaxed">
                Appointments can be booked online, by phone, or through our booking portal. All appointments
                are confirmed via email or text message. Please arrive 10 minutes early for your first visit
                to complete intake paperwork.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Cancellation Policy</h2>
              <p className="text-neutral-600 font-light leading-relaxed">
                We require at least 24 hours' notice for cancellations or rescheduling. Late cancellations
                (less than 24 hours) may be subject to a fee of 50% of the scheduled service price.
                No-shows will be charged the full session price. We understand emergencies happen and
                will work with you on a case-by-case basis.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Late Arrivals</h2>
              <p className="text-neutral-600 font-light leading-relaxed">
                If you arrive late, your session may be shortened to avoid impacting the next client's
                appointment. The full session price will still apply. We recommend arriving 5–10 minutes
                before your scheduled time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Payment</h2>
              <p className="text-neutral-600 font-light leading-relaxed">
                Payment is due at the time of service. We accept all major credit cards, debit cards,
                HSA/FSA cards, and cash. Gratuity is appreciated but never expected.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Health & Safety</h2>
              <p className="text-neutral-600 font-light leading-relaxed">
                For your safety, please inform your therapist of any medical conditions, injuries, allergies,
                or areas of concern before your session. Massage therapy is not a substitute for medical
                treatment. We reserve the right to decline service if we believe it may not be safe or
                appropriate for your condition.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Gift Certificates</h2>
              <p className="text-neutral-600 font-light leading-relaxed">
                Gift certificates are available for purchase online or in-studio. They are non-refundable
                and valid for 12 months from the date of purchase. Lost certificates can be reissued with
                proof of purchase.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Contact</h2>
              <p className="text-neutral-600 font-light leading-relaxed">
                Questions about these terms? Contact us at{' '}
                <a href="mailto:hello@serenitytouchmassage.com" className="text-accent-gold hover:underline">
                  hello@serenitytouchmassage.com
                </a>{' '}
                or call{' '}
                <a href="tel:+13035550172" className="text-accent-gold hover:underline">(303) 555-0172</a>.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/"
              className="text-accent-gold text-sm uppercase tracking-wider hover:text-neutral-900 transition-colors"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
