# Massage Therapist Template

Vite + React single-page app designed for massage therapy businesses. Deploys to Netlify.

## Quick Start

```bash
npm install
npm run dev          # Vite dev server (localhost:5173)
# or
netlify dev          # Full stack with edge functions (localhost:8888)
```

## Build & Deploy

```bash
npm run build        # Outputs to dist/
```

Connect the repo to Netlify — it reads `netlify.toml` automatically. Build command and publish directory are already configured.

## Environment Variables

Set these in the **Netlify dashboard** under Site Settings → Environment Variables.

| Variable | Required | Description |
|---|---|---|
| `VITE_POSTHOG_API_KEY` | No | PostHog project API key for product analytics |
| `VITE_POSTHOG_HOST` | No | PostHog ingest host (defaults to `https://us.i.posthog.com`) |
| `VITE_GA_MEASUREMENT_ID` | No | Google Analytics 4 measurement ID (e.g. `G-XXXXXXXXXX`) |
| `VITE_WIDGETFIED_TENANT_ID` | No | Your Widgetfied tenant ID for booking, payment, and portal widgets (e.g. `MY_BUSINESS_ABC123`) |
| `GOOGLE_PLACES_API_KEY` | No | Google Cloud API key with Places API enabled — used by the edge function to pull live Google reviews |
| `GOOGLE_PLACE_ID` | No | Your business Google Place ID — find it at [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id) |

All variables are optional. The site runs fully without them — analytics simply won't fire and the reviews section falls back to placeholder content.

## Google Reviews Setup

Step-by-step to pull live reviews from your Google Business Profile into the site.

### 1. Get your Google Place ID

1. Go to [Google's Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for your business by name and address
3. Click the marker on the map — your Place ID appears in the info card (looks like `ChIJN1t_tDeuEmsRUsoyG83frY4`)
4. Copy it — this is your `GOOGLE_PLACE_ID`

### 2. Create a Google Cloud API key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project (or select an existing one)
3. Navigate to **APIs & Services → Library**
4. Search for **Places API** and click **Enable**
5. Navigate to **APIs & Services → Credentials**
6. Click **Create Credentials → API Key**
7. Copy the key — this is your `GOOGLE_PLACES_API_KEY`

**Recommended: Restrict the key** to prevent abuse:
- Click the key → **Edit** → under **API restrictions**, select **Restrict key** → check only **Places API**
- Under **Application restrictions**, select **IP addresses** and add your Netlify edge function IPs, or leave unrestricted if you prefer (the key is only used server-side in the edge function, never exposed to the browser)

### 3. Set environment variables in Netlify

1. Go to your site in the [Netlify dashboard](https://app.netlify.com/)
2. Navigate to **Site configuration → Environment variables**
3. Add two variables:
   - `GOOGLE_PLACES_API_KEY` = your API key from step 2
   - `GOOGLE_PLACE_ID` = your Place ID from step 1
4. Redeploy the site (or trigger a new deploy)

### 4. Update the "View on Google" link

In `src/components/SocialProof.jsx`, update the `GOOGLE_BUSINESS_URL` constant with your actual Google Maps business URL:

```js
const GOOGLE_BUSINESS_URL = 'https://www.google.com/maps/place/YOUR+BUSINESS+NAME/...'
```

You can get this URL by searching for your business on Google Maps and copying the URL from the address bar.

### How it works

1. The `SocialProof` component fetches `/api/google-reviews` on page load
2. The Netlify edge function (`netlify/edge-functions/google-reviews.js`) calls the Google Places API server-side — your API key never reaches the browser
3. Google returns up to 5 of the most recent reviews, the overall rating, and total review count
4. The component renders real reviews alongside pulsing skeleton placeholders for empty slots
5. Responses are cached for 1 hour (`Cache-Control: max-age=3600`) to stay within API quotas
6. If the API is unconfigured or fails, the component gracefully falls back to hardcoded placeholder reviews — the site never crashes

### Costs

The Places API (Details request) costs $17 per 1,000 calls. With the 1-hour cache, a site with 1,000 daily visitors makes ~24 API calls/day (~720/month), well within the $200/month free tier Google provides.

## Project Structure

```
├── index.html                  # Entry HTML with SEO meta, structured data, JSON-LD
├── netlify.toml                # Netlify build, edge functions, headers, redirects
├── vite.config.js
├── tailwind.config.js
├── netlify/edge-functions/
│   └── google-reviews.js       # Serverless: fetches Google Places reviews
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.json
│   └── logo.svg
└── src/
    ├── main.jsx                # App entry with PostHog + GA providers
    ├── App.jsx                 # React Router setup
    ├── index.css               # Tailwind + intersection observer animations
    ├── contexts/
    │   ├── PostHogProvider.jsx
    │   └── GoogleAnalyticsProvider.jsx
    ├── hooks/
    │   └── useIntersectionObserver.js
    ├── components/
    │   ├── Header.jsx          # Top bar + sticky nav + mobile menu
    │   ├── Footer.jsx          # Map embed, contact info, links
    │   ├── SocialProof.jsx     # Google reviews with pulsing skeleton loading
    │   └── ScrollToTop.jsx
    └── pages/
        ├── Home.jsx            # Hero, Why Choose, Services, About, Reviews, CTA
        ├── About.jsx
        ├── Services.jsx
        ├── Contact.jsx         # Booking form + Pay Now placeholder
        └── NotFound.jsx
```

## Customization Checklist

- [ ] Replace placeholder images (hero background, therapist portrait, treatment room)
- [ ] Update business name, phone, email, address in `Header.jsx`, `Footer.jsx`, `Contact.jsx`
- [ ] Update `index.html` meta tags, canonical URL, and JSON-LD structured data
- [ ] Update `public/sitemap.xml` and `public/robots.txt` with your domain
- [ ] Update `GOOGLE_BUSINESS_URL` in `src/components/SocialProof.jsx`
- [ ] Update Google Maps embed URL in `Footer.jsx` and `Contact.jsx`
- [ ] Set environment variables in Netlify dashboard
- [ ] Connect payment processor for Pay Now / Gift Card buttons
- [ ] Connect form handler (Netlify Forms, EmailJS, etc.) for the contact form
