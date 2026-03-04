import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

let analyticsQueue = []
let isAnalyticsLoaded = false

export function GoogleAnalyticsProvider({ children }) {
  const location = useLocation()
  const hasInteracted = useRef(false)
  const loadTimeout = useRef(null)

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    const loadAnalytics = () => {
      if (isAnalyticsLoaded || window.gtag) return
      isAnalyticsLoaded = true

      const script = document.createElement('script')
      script.async = true
      script.defer = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
      document.head.appendChild(script)

      script.onload = () => {
        window.dataLayer = window.dataLayer || []
        window.gtag = function() {
          window.dataLayer.push(arguments)
        }
        window.gtag('js', new Date())
        window.gtag('config', GA_MEASUREMENT_ID, {
          send_page_view: false
        })

        analyticsQueue.forEach(args => {
          if (window.gtag) window.gtag(...args)
        })
        analyticsQueue = []
      }
    }

    const interactionEvents = ['scroll', 'click', 'touchstart', 'mousedown', 'keydown']

    const handleInteraction = () => {
      if (!hasInteracted.current) {
        hasInteracted.current = true
        interactionEvents.forEach(event => {
          window.removeEventListener(event, handleInteraction)
        })
        if (loadTimeout.current) clearTimeout(loadTimeout.current)
        setTimeout(loadAnalytics, 100)
      }
    }

    interactionEvents.forEach(event => {
      window.addEventListener(event, handleInteraction, { passive: true, once: true })
    })

    loadTimeout.current = setTimeout(() => {
      if (!hasInteracted.current) {
        hasInteracted.current = true
        loadAnalytics()
      }
    }, 10000)

    return () => {
      interactionEvents.forEach(event => {
        window.removeEventListener(event, handleInteraction)
      })
      if (loadTimeout.current) clearTimeout(loadTimeout.current)
    }
  }, [])

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    const trackPageView = () => {
      if (window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: location.pathname + location.search,
          page_title: document.title
        })
      } else {
        analyticsQueue.push(['config', GA_MEASUREMENT_ID, {
          page_path: location.pathname + location.search,
          page_title: document.title
        }])
      }
    }

    setTimeout(trackPageView, 0)
  }, [location])

  return children
}

const executeOrQueue = (args) => {
  if (window.gtag) {
    window.gtag(...args)
  } else {
    analyticsQueue.push(args)
  }
}

export const gaEvent = (action, category, label, value) => {
  if (!GA_MEASUREMENT_ID) return
  executeOrQueue(['event', action, {
    event_category: category,
    event_label: label,
    value: value
  }])
}

export const gaConversion = (conversionLabel, value) => {
  if (!GA_MEASUREMENT_ID) return
  executeOrQueue(['event', 'conversion', {
    send_to: `${GA_MEASUREMENT_ID}/${conversionLabel}`,
    value: value,
    currency: 'USD'
  }])
}

export const gaFormSubmit = (formName) => {
  if (!GA_MEASUREMENT_ID) return
  executeOrQueue(['event', 'form_submit', {
    event_category: 'engagement',
    event_label: formName
  }])
}

export const gaClick = (elementName, category = 'engagement') => {
  if (!GA_MEASUREMENT_ID) return
  executeOrQueue(['event', 'click', {
    event_category: category,
    event_label: elementName
  }])
}
