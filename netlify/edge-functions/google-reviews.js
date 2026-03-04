export default async (request, context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders })
  }

  if (request.method !== 'GET') {
    return new Response(JSON.stringify({
      error: 'Method not allowed'
    }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_PLACES_API_KEY')
    const placeId = Deno.env.get('GOOGLE_PLACE_ID')

    if (!apiKey || !placeId) {
      return new Response(JSON.stringify({
        error: 'Google Places API not configured',
        reviews: [],
        rating: 0,
        totalReviews: 0,
        configured: false
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&reviews_sort=newest&key=${apiKey}`

    const response = await fetch(url)
    const data = await response.json()

    if (data.status !== 'OK') {
      console.error('Google Places API error:', data.status, data.error_message)
      return new Response(JSON.stringify({
        error: data.error_message || `Google Places API error: ${data.status}`,
        reviews: [],
        rating: 0,
        totalReviews: 0,
        configured: true
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const place = data.result
    const reviews = (place.reviews || []).map((review) => ({
      author: review.author_name,
      rating: review.rating,
      text: review.text,
      time: review.relative_time_description,
      profilePhoto: review.profile_photo_url,
    }))

    return new Response(JSON.stringify({
      name: place.name,
      rating: place.rating || 0,
      totalReviews: place.user_ratings_total || 0,
      reviews,
      configured: true
    }), {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600'
      }
    })

  } catch (error) {
    console.error('Google Reviews Error:', error)
    return new Response(JSON.stringify({
      error: error.message || 'Internal server error',
      reviews: [],
      rating: 0,
      totalReviews: 0,
      configured: true
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
}
