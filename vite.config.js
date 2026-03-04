import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  ],
  esbuild: {
    drop: ['debugger'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor'
            }
            if (id.includes('lucide-react') || id.includes('react-icons')) {
              return 'ui-vendor'
            }
            if (id.includes('posthog')) {
              return 'analytics-vendor'
            }
            return 'vendor'
          }
          if (id.includes('GoogleAnalytics') || id.includes('PostHog')) {
            return 'analytics'
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    target: 'es2020',
    cssCodeSplit: true,
    cssMinify: true,
    assetsInlineLimit: 4096,
  },
  server: {
    proxy: {
      // Widgetfied widget API proxies — the CDN widget script routes API calls
      // through /api when running on localhost, so these must forward to widgetfied.com
      '/api/tenant-config': {
        target: 'https://widgetfied.com',
        changeOrigin: true,
        secure: true,
      },
      '/api/calendar': {
        target: 'https://widgetfied.com',
        changeOrigin: true,
        secure: true,
      },
      '/api/payments': {
        target: 'https://widgetfied.com',
        changeOrigin: true,
        secure: true,
      },
      '/api/portal': {
        target: 'https://widgetfied.com',
        changeOrigin: true,
        secure: true,
      },
      '/api/email': {
        target: 'https://widgetfied.com',
        changeOrigin: true,
        secure: true,
      },
      '/api/tenants': {
        target: 'https://widgetfied.com',
        changeOrigin: true,
        secure: true,
      },
    },
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.widgetfied.com https://*.widgetfied.com https://www.googletagmanager.com https://www.google-analytics.com https://us.i.posthog.com https://us-assets.i.posthog.com https://app.posthog.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' ws: wss: http: https: https://widgetfied.com https://*.widgetfied.com; frame-src 'self' https://www.google.com https://maps.google.com https://www.google.com/maps;"
    }
  }
})
