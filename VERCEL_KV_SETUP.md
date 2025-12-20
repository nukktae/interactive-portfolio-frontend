# Upstash Redis Setup for Analytics

Your analytics system uses **Upstash Redis** for persistent storage in production. This ensures your analytics data persists across deployments.

> **Note:** Vercel KV has been deprecated. We're using Upstash Redis instead, which is available through Vercel's Marketplace.

## Setup Instructions

### 1. Create Upstash Redis Database

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Storage** tab (or **Marketplace**)
4. Click **Create Database** or **Browse Marketplace**
5. Search for **Upstash Redis**
6. Click **Add Integration**
7. Choose a name (e.g., `portfolio-analytics`)
8. Select a region close to your users
9. Click **Create**

### 2. Environment Variables

After creating the database, Vercel will automatically add these environment variables to your project:
- `UPSTASH_REDIS_REST_URL` - Your Redis REST API URL
- `UPSTASH_REDIS_REST_TOKEN` - Your Redis REST API token

These are automatically available in your Vercel deployments.

**For local development**, add these to your `.env.local` file:
```env
UPSTASH_REDIS_REST_URL=your-rest-url-here
UPSTASH_REDIS_REST_TOKEN=your-token-here
```

You can find these values in:
- Vercel Dashboard → Your Project → Storage → Your Redis Database → Settings
- Or in the Upstash Console

### 3. Deploy

After setting up Redis, redeploy your project:
```bash
git push
```

Or trigger a redeploy from the Vercel dashboard.

## How It Works

- **Production (Vercel)**: Uses Upstash Redis for persistent storage
- **Local Development**: 
  - Uses Upstash Redis if environment variables are set
  - Falls back to file-based storage in `/data` directory if not configured

## Verification

After deployment, visit your analytics page:
```
https://www.anubilegdemberel.com/analytics?key=anuteneg
```

Your analytics data will now persist! 🎉

## Free Tier Limits

Upstash Redis free tier includes:
- 256 MB storage
- 10,000 commands/day
- Global replication

This is more than enough for portfolio analytics.

## Alternative: Manual Upstash Setup

If you prefer to set up Upstash directly:

1. Go to [Upstash Console](https://console.upstash.com/)
2. Create a new Redis database
3. Copy the REST URL and token
4. Add them to your Vercel environment variables manually
