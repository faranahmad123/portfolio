# Faran Ahmad — Developer Portfolio

A premium, single-page developer portfolio built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## ✨ Features

- 🎬 Cinematic intro with typing animation (skippable, shown once per session)
- 🌙 Dark futuristic "engineer's console" aesthetic
- 📱 Fully responsive, mobile-first design
- 🎯 Interactive skill inspector with proficiency bars
- 📂 Two-column project showcase (desktop) / swipeable carousel (mobile)
- 💬 Real email backend powered by **Resend** (`/api/contact`) with anti-spam honeypot & rate-limiting
- ✨ Cursor glow, scroll animations, glassmorphism cards
- 🔍 SEO-optimized: Open Graph, Twitter Cards, JSON-LD, dynamic sitemap, robots.txt
- ♿ Accessible: semantic HTML, keyboard focus states, prefers-reduced-motion

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Then edit .env.local and add your RESEND_API_KEY

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 📧 Contact Form Setup (Resend)

The portfolio includes a serverless API route at [`/src/app/api/contact/route.ts`](src/app/api/contact/route.ts) that sends inquiries directly to `contactfaranahmad@gmail.com`.

### 1. Local Setup
1. Sign up for a free account at [resend.com](https://resend.com).
2. Go to **API Keys** (`https://resend.com/api-keys`) and click **Create API Key**.
3. Create a `.env.local` file in the project root:
   ```env
   RESEND_API_KEY=re_123456789abcdef...
   ```
4. Restart your development server (`npm run dev`). When visitors submit the message composer, an email will be delivered to your inbox with the sender's details and message.

### 2. Production Deployment (Vercel)
1. In your [Vercel Dashboard](https://vercel.com), navigate to your project.
2. Go to **Settings** → **Environment Variables**.
3. Add a new variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (`re_...`)
   - **Environments**: Check `Production`, `Preview`, and `Development`.
4. Trigger a new deployment or push to GitHub.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts     # Resend email API route (App Router POST)
│   ├── globals.css          # Design system & theme tokens
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Main page
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt
├── components/
│   ├── Intro.tsx            # Cinematic intro sequence
│   ├── Navbar.tsx           # Sticky glass navbar
│   ├── Hero.tsx             # Hero section with phone mockup
│   ├── About.tsx            # About with profile card, resume & highlights
│   ├── SectionHeading.tsx   # Reusable section header
│   ├── SkillInspector.tsx   # Interactive tech stack inspector
│   ├── Services.tsx         # Expandable service cards
│   ├── Projects.tsx         # Project showcase (desktop + mobile)
│   ├── Experience.tsx       # Timeline cards
│   ├── Certs.tsx            # Certificate/award cards
│   ├── Contact.tsx          # Message composer with Resend API integration
│   ├── Footer.tsx           # Footer
│   ├── CursorGlow.tsx       # Mouse-following glow effect
│   └── PortfolioClient.tsx  # Client-side shell
├── data/
│   ├── projects.ts          # ← Edit project content & links here
│   ├── skills.ts            # ← Edit tech stack here
│   ├── services.ts          # ← Edit service offerings here
│   ├── experience.ts        # ← Edit work experience here
│   ├── certificates.ts      # ← Edit certs/awards here
│   └── navigation.ts        # ← Edit links & social URLs here
├── hooks/
│   ├── useIntroSeen.ts      # Session-based intro visibility
│   └── useCursorGlow.ts     # Cursor glow utility
└── lib/
    └── assets.ts            # ← Profile image, OG image & resume paths
```

## 🖼️ Adding Your Images & Resume

1. **Profile Photo**:
   Place your photo at `/public/images/profile.jpeg`.

2. **Project Screenshots**:
   Place screenshots (16:9 ratio, ~1200×675 px recommended) in `/public/images/projects/`:
   - `product-matching.png`
   - `lifely.png`
   - `crm-dashboard.png`
   - `study-planner.png`
   - `qr-attendance.png`

3. **Resume PDF**:
   Place your resume at `/public/resume.pdf`.

## 🔗 Updating Links

Edit `src/data/navigation.ts` to update:
- Email, phone, WhatsApp
- LinkedIn and GitHub URLs

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repository to [vercel.com](https://vercel.com) for automatic CI/CD deployments.

After deploying, update your production URL in:
- `src/app/layout.tsx` (`metadataBase`)
- `src/app/sitemap.ts`
- `src/app/robots.ts`

## 📄 License

MIT — feel free to use and customize.
