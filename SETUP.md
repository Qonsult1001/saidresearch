# Quick Setup Guide

## To push to GitHub:

1. Navigate to the `saidhome-standalone` folder:
   ```bash
   cd saidhome-standalone
   ```

2. Initialize git (if not already):
   ```bash
   git init
   ```

3. Add the remote repository:
   ```bash
   git remote add origin https://github.com/Qonsult1001/saidresearch.git
   ```

4. Add all files:
   ```bash
   git add .
   ```

5. Commit:
   ```bash
   git commit -m "Initial commit: SAID Research static website"
   ```

6. Push to GitHub:
   ```bash
   git push -u origin main
   ```
   (or `master` if that's your default branch)

## To run locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:3000 in your browser

## To deploy:

- **Vercel**: Connect your GitHub repo to Vercel - it will auto-detect Next.js
- **Netlify**: Connect your GitHub repo to Netlify - it will auto-detect Next.js
- **GitHub Pages**: Requires additional configuration for static export

