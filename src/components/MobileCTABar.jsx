import { Phone } from 'lucide-react'
import { BookingWidget } from '../hooks/useWidgetfied'

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-neutral-900 border-t border-neutral-800 safe-area-bottom">
      <div className="grid grid-cols-2">
        <a
          href="tel:+13035550172"
          className="flex items-center justify-center gap-2 py-4 text-white font-medium text-sm tracking-wider uppercase active:bg-neutral-800 transition-colors border-r border-neutral-700"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <BookingWidget
          id="mobile-cta-bar-booking"
          className="mobile-cta-booking"
        />
      </div>
    </div>
  )
}
