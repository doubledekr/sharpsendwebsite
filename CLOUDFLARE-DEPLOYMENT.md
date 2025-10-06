# Cloudflare Deployment Guide

## Setup Steps

### 1. Deploy the Cloudflare Worker

The Worker code is in `cloudflare-worker.js`. Deploy it to your Worker:

```bash
# Copy cloudflare-worker.js content
# Go to Cloudflare Dashboard > Workers & Pages > Create Worker
# Paste the code and deploy to: sharpsend-waitlist.davemaxwellmaxwell.workers.dev
```

### 2. Set Up Email Notifications (Optional)

To receive email notifications for each signup:

**Option A: Cloudflare Email Workers**
1. Go to Cloudflare Dashboard > Email Routing
2. Set up Email Workers
3. Uncomment the email sending code in the Worker
4. Configure your notification email address

**Option B: External Email Service (e.g., Resend, SendGrid)**
1. Sign up for an email service
2. Add API key as Worker environment variable
3. Update the `sendEmail` function to use the service's API

### 3. View Signups

**Real-time logs:**
- Go to Cloudflare Dashboard > Workers > sharpsend-waitlist
- Click "Logs" tab
- See all signups in real-time

**Export to CSV:**
- Copy signup data from logs
- Paste into spreadsheet
- Export as CSV

### 4. Deploy Frontend to Cloudflare Pages

```bash
# Push to GitHub
git add .
git commit -m "Update waitlist integration"
git push

# Cloudflare Pages will auto-deploy from GitHub
# Build settings:
#   Build command: npm run build
#   Build output directory: dist/public
```

## Environment Variables

No environment variables needed! The Worker runs standalone and logs all data.

## Accessing Signup Data

1. **Cloudflare Dashboard Logs** (Real-time)
   - Workers & Pages > sharpsend-waitlist > Logs
   - See JSON data for each signup

2. **Manual Export**
   - Copy log data
   - Import to Google Sheets
   - Format as needed

3. **Automated Processing** (Advanced)
   - Set up Cloudflare D1 database
   - Store signups in database
   - Query via SQL or export

## Testing

Test the Worker locally:
```bash
curl -X POST https://sharpsend-waitlist.davemaxwellmaxwell.workers.dev/ \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "company": "Test Co",
    "subscriberCount": "5,000 - 25,000",
    "emailPlatform": "Mailchimp"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Successfully joined waitlist"
}
```
