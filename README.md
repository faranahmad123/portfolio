# Faran Ahmad — Developer Portfolio

A premium, single-page developer portfolio built with **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## ✨ Features

- 🎬 Cinematic intro with typing animation (skippable, shown once per session)
- 🌙 Dark futuristic "engineer's console" aesthetic
- 📱 Fully responsive, mobile-first design
- 🎯 Interactive skill inspector with proficiency bars
- 📂 Two-column project showcase (desktop) / carousel (mobile)
- 💬 Inline message composer with mailto integration
- ✨ Cursor glow, scroll animations, glassmorphism cards
- 🔍 SEO-optimized: Open Graph, Twitter Cards, JSON-LD, sitemap, robots.txt
- ♿ Accessible: semantic HTML, keyboard focus states, prefers-reduced-motion

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Design system & theme tokens
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Main page
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt
├── components/
│   ├── Intro.tsx            # Cinematic intro sequence
│   ├── Navbar.tsx           # Sticky glass navbar
│   ├── Hero.tsx             # Hero section with phone mockup
│   ├── About.tsx            # About with profile card & highlights
│   ├── SectionHeading.tsx   # Reusable section header
│   ├── SkillInspector.tsx   # Interactive tech stack inspector
│   ├── Services.tsx         # Expandable service cards
│   ├── Projects.tsx         # Project showcase (desktop + mobile)
│   ├── Experience.tsx       # Timeline cards
│   ├── Certs.tsx            # Certificate/award cards
│   ├── Contact.tsx          # Message composer & contact links
│   ├── Footer.tsx           # Footer
│   ├── CursorGlow.tsx       # Mouse-following glow effect
│   └── PortfolioClient.tsx  # Client-side shell
├── data/
│   ├── projects.ts          # ← Edit project content here
│   ├── skills.ts            # ← Edit tech stack here
│   ├── services.ts          # ← Edit service offerings here
│   ├── experience.ts        # ← Edit work experience here
│   ├── certificates.ts      # ← Edit certs/awards here
│   └── navigation.ts        # ← Edit links & social URLs here
├── hooks/
│   ├── useIntroSeen.ts      # Session-based intro visibility
│   └── useCursorGlow.ts     # Cursor glow utility
└── lib/
    └── assets.ts            # ← Replace image URLs here
```

## 🖼️ Adding Your Images

1. Open `src/lib/assets.ts` and replace the placeholder URLs:
   - `PROFILE_IMAGE` — Your headshot / profile photo
   - `OG_IMAGE` — Open Graph preview image (1200×630)

2. Open `src/data/projects.ts` and replace `image` URLs for each project.

3. Place your `resume.pdf` in the `/public` directory.

## 🔗 Updating Links

Edit `src/data/navigation.ts` to update:
- Email, phone, WhatsApp
- LinkedIn and GitHub URLs

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or deploy to production
vercel --prod
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

After deploying, update the domain in:
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/app/layout.tsx` (Open Graph URL)

## 📄 License

MIT — feel free to use and customize.
