// Cloudflare Worker for SharpSend Waitlist
// Deploy this to: https://sharpsend-waitlist.davemaxwellmaxwell.workers.dev/

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    })
  }

  // Only allow POST requests
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  try {
    const data = await request.json()
    
    // Validate required fields
    if (!data.email || !data.company || !data.subscriberCount || !data.emailPlatform) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Missing required fields' 
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      })
    }

    // Send email notification using Cloudflare Email Workers
    // You'll need to set up email routing in Cloudflare dashboard
    const emailContent = `
New SharpSend Waitlist Signup!

Email: ${data.email}
Company: ${data.company}
Subscriber Count: ${data.subscriberCount}
Email Platform: ${data.emailPlatform}
Timestamp: ${new Date().toISOString()}

---
Login to view all signups or configure automated processing.
    `.trim()

    // Send email (requires Cloudflare Email Workers setup)
    // await sendEmail({
    //   to: 'your-email@example.com',
    //   from: 'waitlist@sharpsend.io',
    //   subject: `New Waitlist Signup: ${data.company}`,
    //   body: emailContent
    // })

    // For now, just log to console (visible in Cloudflare dashboard logs)
    console.log('Waitlist Signup:', JSON.stringify(data, null, 2))

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Successfully joined waitlist'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })

  } catch (error) {
    console.error('Error processing waitlist signup:', error)
    
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Internal server error' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
  }
}

// Optional: Helper function for email sending (requires Email Workers)
async function sendEmail({ to, from, subject, body }) {
  // Implement Cloudflare Email Workers API call here
  // https://developers.cloudflare.com/email-routing/email-workers/
  
  // Example (you'll need to configure this in your Cloudflare dashboard):
  // const response = await fetch('https://api.mailchannels.net/tx/v1/send', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     personalizations: [{ to: [{ email: to }] }],
  //     from: { email: from },
  //     subject: subject,
  //     content: [{ type: 'text/plain', value: body }]
  //   })
  // })
  // 
  // return response
}
