# Deployment Guide

## Cloudflare Pages Deployment

This project is configured for Cloudflare Pages deployment with static export.

### Prerequisites

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```bash
   wrangler login
   ```

### Deploy to Cloudflare Pages

#### Option 1: Using Wrangler CLI

```bash
npm run deploy
```

This will:
1. Build the static site (`npm run build`)
2. Deploy the `out` directory to Cloudflare Pages

#### Option 2: Using wrangler.jsonc (as suggested by error)

The project includes a `wrangler.jsonc` file configured with:
```json
{
  "name": "saidresearch",
  "compatibility_date": "2025-12-29",
  "assets": {
    "directory": "./out"
  }
}
```

You can deploy using:
```bash
npm run build
wrangler pages deploy ./out
```

Or specify the config file:
```bash
wrangler pages deploy --config wrangler.jsonc
```

### Build Output

After running `npm run build`, the static files are exported to the `out/` directory:
- `out/index.html` - Root page (redirects to /saidhome)
- `out/saidhome.html` - Main website
- `out/images/` - All images
- `out/_next/` - Next.js static assets

### Alternative: GitHub Integration

You can also connect your GitHub repository to Cloudflare Pages:
1. Go to Cloudflare Dashboard → Pages
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set build output directory: `out`
5. Deploy automatically on every push

