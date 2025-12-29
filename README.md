# SAID Research - Static Website

This is a standalone static website for SAID Research, showcasing LAM (Linear Attention Memory), SCA (SAID Crystalline Attention), The SAID Standard, and The .said Protocol.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone this repository or navigate to this directory
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The site will automatically redirect to `/saidhome`.

### Build for Production

Build the static site:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Deploy

This Next.js app can be deployed to:
- **Vercel** (recommended) - Just connect your GitHub repo
- **Netlify** - Connect your GitHub repo
- **GitHub Pages** - Use `next export` (requires additional configuration)

## Project Structure

```
saidhome-standalone/
├── public/
│   └── images/          # All website images
├── src/
│   └── app/
│       ├── saidhome/    # Main website page
│       ├── layout.tsx   # Root layout
│       ├── page.tsx     # Redirects to /saidhome
│       └── globals.css  # Global styles
├── package.json
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## License

© 2026 SAID Research. All rights reserved.

