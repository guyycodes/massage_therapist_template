import { Phone } from 'lucide-react'
import { BookingWidget } from '../hooks/useWidgetfied'

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-neutral-900/95 backdrop-blur-md border-t border-neutral-800 safe-area-bottom">
      <div className="flex items-stretch">
        <a
          href="tel:+13035550172"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white font-medium text-sm tracking-wider uppercase active:bg-neutral-800 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <div className="w-px bg-neutral-700" />
        <div className="flex-1 flex items-center justify-center">
          <BookingWidget
            id="mobile-cta-bar-booking"
            className="w-full h-full rounded-none py-3.5 text-sm"
          />
        </div>
      </div>
    </div>
  )
}
