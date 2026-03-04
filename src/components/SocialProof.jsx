import { useState, useEffect } from 'react'
import { Star, MessageSquare, ExternalLink } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { BookingWidget } from '../hooks/useWidgetfied'

const FALLBACK_REVIEWS = [
  {
    author: 'Sarah M.',
    rating: 5,
    text: 'Absolutely wonderful experience. The deep tissue work completely relieved my chronic shoulder tension. Professional, attentive, and truly skilled.',
    time: 'a month ago',
    profilePhoto: null,
  },
]

const SKELETON_COUNT = 2

const GOOGLE_BUSINESS_URL = 'https://www.google.com/maps/place/YOUR_BUSINESS'

const GoogleLogo = () => (
  <svg className="w-10 h-10" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
  </svg>
)

const ReviewCard = ({ review }) => (
  <div className="bg-white p-6 border border-neutral-200 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center justify-between mb-3">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < review.rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-neutral-200 text-neutral-200'
            }`}
          />
        ))}
      </div>
      {review.time && (
        <span className="text-xs text-neutral-400">{review.time}</span>
      )}
    </div>

    <p className="text-neutral-600 font-light italic leading-relaxed mb-4">
      "{review.text}"
    </p>

    <div className="flex items-center gap-3">
      {review.profilePhoto ? (
        <img
          src={review.profilePhoto}
          alt={review.author}
          className="w-8 h-8 rounded-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold text-sm font-medium">
          {review.author?.charAt(0) || '?'}
        </div>
      )}
      <span className="text-sm font-medium text-neutral-900">{review.author}</span>
    </div>
  </div>
)

const SkeletonCard = () => (
  <div className="bg-white p-6 border border-neutral-200 animate-pulse">
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-4 h-4 bg-neutral-200 rounded" />
      ))}
    </div>
    <div className="space-y-2 mb-4">
      <div className="h-3 bg-neutral-200 rounded w-full" />
      <div className="h-3 bg-neutral-200 rounded w-full" />
      <div className="h-3 bg-neutral-200 rounded w-4/5" />
    </div>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-neutral-200 rounded-full" />
      <div className="h-4 bg-neutral-200 rounded w-24" />
    </div>
  </div>
)

export default function SocialProof() {
  const [reviewData, setReviewData] = useState(null)
  const [loading, setLoading] = useState(true)
  const sectionObserver = useIntersectionObserver({ threshold: 0.1 })

  useEffect(() => {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5000)

    const fetchReviews = async () => {
      try {
        const res = await fetch('/api/google-reviews', { signal: controller.signal })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()

        if (data.reviews && data.reviews.length > 0) {
          setReviewData(data)
        } else {
          setReviewData({
            reviews: FALLBACK_REVIEWS,
            rating: 5.0,
            totalReviews: FALLBACK_REVIEWS.length,
            configured: data.configured || false
          })
        }
      } catch {
        setReviewData({
          reviews: FALLBACK_REVIEWS,
          rating: 5.0,
          totalReviews: FALLBACK_REVIEWS.length,
          configured: false
        })
      } finally {
        clearTimeout(timeout)
        setLoading(false)
      }
    }

    fetchReviews()
    return () => { clearTimeout(timeout); controller.abort() }
  }, [])

  const reviews = reviewData?.reviews || FALLBACK_REVIEWS
  const skeletonsToShow = loading ? 3 : Math.max(0, 3 - reviews.length)

  return (
    <section className="py-32 bg-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <div
          ref={sectionObserver.ref}
          className={`text-center mb-16 animate-fade-up ${sectionObserver.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-light text-neutral-900 mb-4">
            What Our <span className="text-accent-gold">Clients Say</span>
          </h2>
          <div className="h-px w-32 bg-accent-gold mx-auto my-8"></div>

          {/* Google Reviews Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3">
                <GoogleLogo />
                <span className="text-xl font-semibold text-neutral-700">Google Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                {reviewData && (
                  <span className="text-sm text-neutral-500">
                    {reviewData.rating} ({reviewData.totalReviews} reviews)
                  </span>
                )}
              </div>
            </div>

            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-medium text-sm tracking-wider uppercase hover:bg-accent-gold hover:text-black transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4" />
              View on Google
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
          {Array.from({ length: skeletonsToShow }).map((_, index) => (
            <SkeletonCard key={`skeleton-${index}`} />
          ))}
        </div>

        {/* Loading indicator when skeletons are showing */}
        {skeletonsToShow > 0 && (
          <div className="text-center py-4">
            <div className="inline-flex items-center gap-2 text-neutral-400">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-gold"></div>
              <span className="text-sm">Loading more reviews...</span>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <BookingWidget
            id="social-proof-booking-widget"
          />
        </div>
      </div>
    </section>
  )
}
