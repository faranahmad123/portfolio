# DevNest — Official Agency Website

The official website for **DevNest** (Websites, Apps & Automation), built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## ✨ Features

- 🎬 Cinematic intro with typing animation (skippable, shown once per session)
- 🌙 Dark futuristic agency console aesthetic
- 📱 Fully responsive, mobile-first design with interactive phone mockup
- 🎯 Interactive tech stack inspector with proficiency bars
- 🛠️ Comprehensive service breakdown (Web, Mobile, Business Automation, Social Media)
- 📂 Two-column project showcase (desktop) / swipeable carousel (mobile)
- 🔄 4-step agency delivery process (Discovery, Design & Plan, Build & Test, Launch & Support)
- 💬 Real email backend powered by **Resend** (`/api/contact`) with anti-spam honeypot & rate-limiting
- 🟢 Direct WhatsApp quick-connect integration
- ✨ Cursor glow, scroll animations, glassmorphism cards
- 🔍 SEO-optimized: Open Graph, Twitter Cards, ProfessionalService JSON-LD, dynamic sitemap, robots.txt
- ♿ Accessible: semantic HTML, keyboard focus states, prefers-reduced-motion

## ⚙️ Central Brand Configuration

All brand details, contact endpoints, and social URLs are managed centrally in [`/src/data/site.ts`](src/data/site.ts):

- `brandName`: "DevNest"
- `tagline`: "Websites, Apps & Automation"
- `siteUrl`: "https://devnest.codes"
- `email`: "faranahmad@devnest.codes"
- `whatsappNumber`: "+1 709 5073546"
- `whatsappLink`: "https://wa.me/17095073546"
- `instagramHandle`: "@getdevnest"
- `instagramUrl`: "https://instagram.com/getdevnest"
- `founderName`: "Faran Ahmad"

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

The site includes a serverless API route at [`/src/app/api/contact/route.ts`](src/app/api/contact/route.ts) that sends client inquiries directly to `faranahmad@devnest.codes`.

### 1. Local Setup
1. Sign up for an account at [resend.com](https://resend.com).
2. Go to **API Keys** (`https://resend.com/api-keys`) and click **Create API Key**.
3. Create a `.env.local` file in the project root:
   ```env
   RESEND_API_KEY=re_123456789abcdef...
   ```
4. Start your development server (`npm run dev`). Submitting the message composer will send an email with the inquiry details.

### 2. Domain Verification
Once `devnest.codes` is verified in Resend, update the `from` address in `src/app/api/contact/route.ts` to `DevNest <hello@devnest.codes>`.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts     # Resend email API route (App Router POST)
│   ├── globals.css          # Design system & theme tokens
│   ├── layout.tsx           # Root layout with SEO metadata & JSON-LD
│   ├── page.tsx             # Main page
│   ├── sitemap.ts           # Dynamic sitemap (reads from site.ts)
│   └── robots.ts            # Robots.txt (reads from site.ts)
├── components/
│   ├── Intro.tsx            # Cinematic DevNest intro sequence
│   ├── Navbar.tsx           # Sticky glass navbar with dev/nest logo
│   ├── Hero.tsx             # Hero section with interactive phone mockup
│   ├── About.tsx            # Who We Are & Founder card
│   ├── SectionHeading.tsx   # Reusable section header
│   ├── SkillInspector.tsx   # Interactive tech stack inspector
│   ├── Services.tsx         # Expandable service offerings
│   ├── Projects.tsx         # Selected work showcase (desktop + mobile)
│   ├── HowWeWork.tsx        # 4-step delivery process timeline
│   ├── Contact.tsx          # Message composer + WhatsApp integration
│   ├── Footer.tsx           # Footer with copyright & social links
│   ├── CursorGlow.tsx       # Mouse-following glow effect
│   └── PortfolioClient.tsx  # Client-side shell
├── data/
│   ├── site.ts              # ← Central brand & contact config
│   ├── projects.ts          # ← Client projects & portfolio work
│   ├── skills.ts            # ← Tech stack & automation toolkit
│   ├── services.ts          # ← Agency offerings & capabilities
│   ├── process.ts           # ← How We Work 4-step delivery process
│   └── navigation.ts        # ← Nav links derived from site config
├── hooks/
│   ├── useIntroSeen.ts      # Session-based intro visibility
│   └── useCursorGlow.ts     # Cursor glow utility
└── lib/
    └── assets.ts            # Image asset paths
```

## 📄 License

MIT — DevNest.
