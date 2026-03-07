import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <>
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />
        <div className="relative z-10 container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-display font-light text-white mb-6">
            Privacy <span className="text-accent-gold">Policy</span>
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
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Information We Collect</h2>
              <p className="text-neutral-600 font-light leading-relaxed">
                When you book an appointment or contact us, we collect your name, email address, phone number,
                and any health information you voluntarily provide for treatment purposes. We also collect
                standard website usage data through cookies and analytics.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">How We Use Your Information</h2>
              <p className="text-neutral-600 font-light leading-relaxed">
                Your personal information is used solely to schedule appointments, provide massage therapy
                services, process payments, and communicate with you about your care. Health information
                is kept strictly confidential and used only for treatment planning.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Data Protection</h2>
              <p className="text-neutral-600 font-light leading-relaxed">
                We implement industry-standard security measures to protect your personal and health
                information. Client records are stored securely and access is limited to authorized
                personnel only. We never sell, trade, or share your personal information with third
                parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Your Rights</h2>
              <p className="text-neutral-600 font-light leading-relaxed">
                You have the right to access, update, or request deletion of your personal information
                at any time. To exercise these rights, please contact us directly by phone or email.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-light text-neutral-900 mb-4">Contact</h2>
              <p className="text-neutral-600 font-light leading-relaxed">
                If you have questions about this privacy policy, please contact us at{' '}
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
