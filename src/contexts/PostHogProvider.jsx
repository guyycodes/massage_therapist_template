import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import posthog from 'posthog-js'

if (typeof window !== 'undefined' && import.meta.env.VITE_POSTHOG_API_KEY) {
  posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
    debug: false,
    silence_errors: true,
    capture_pageview: false,
    autocapture: true,
    session_recording: {
      enabled: false,
      maskAllInputs: true,
      maskTextContent: true
    },
    disable_session_recording: true,
    persistence: 'localStorage',
    capture_utm: true,
    advanced_disable_feature_flags: true,
    disable_compression: true,
    sanitize_properties: function(properties) {
      if (!properties) return properties
      const cleaned = {}
      for (let key in properties) {
        const value = properties[key]
        if (value !== undefined && value !== null) {
          if (typeof value === 'string') {
            cleaned[key] = value.replace(/[^\x20-\x7E]/g, '')
          } else {
            cleaned[key] = value
          }
        }
      }
      return cleaned
    }
  })
}

export function PostHogProvider({ children }) {
  const location = useLocation()

  useEffect(() => {
    if (!posthog) return
    posthog.capture('$pageview', {
      path: location.pathname,
      title: document.title,
      referrer: document.referrer
    })
  }, [location])

  useEffect(() => {
    if (!posthog) return
    posthog.setPersonProperties({
      user_type: 'anonymous',
      first_seen: new Date().toISOString()
    })
  }, [])

  return children
}

export { posthog }
