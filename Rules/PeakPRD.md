PRD — “The Peak” (Cha Chaan Teng) Website
1) Product Overview

Name: The Peak — Cha Chaan Teng (Hong Kong–style café)

Goal: Create an aesthetic, minimalist, high-converting website that drives in-store visits, table enquiries, and phone calls, while telling the story of cha chaan teng culture.

Primary Actions (CTAs):

“Book / Enquire”

“Get Directions”

“Call Now” (mobile only sticky button)

2) Target Users & Jobs

Local diners & foodies — find hours, location, menu vibe, reviews, and make a quick decision.

Tourists — understand what a cha chaan teng is, browse photos, get directions.

Regulars — check specials/announcements and opening hours.

Press/Creators — grab brand story, contact details, and assets.

Key Jobs to be Done

“Is this place good and authentic?” → Hero + proof band + gallery + review highlights.

“How do I get there / book?” → Above-the-fold CTA + sticky mobile actions.

“What’s a cha chaan teng?” → About + mini cultural section with digestible history.

3) Brand & Visual Direction

Tone: Warm, understated Hong Kong nostalgia, modern minimalism.

Palette (neutral-first with subtle Canton red accent referencing the saucer stripe in the logo):

--ink: #161617 (text / headings)

--charcoal: #2A2A2A (UI strokes)

--porcelain: #F7F5F2 (page background)

--stone: #E7E3DD (cards / blocks)

--accent-red: #B23A3A (thin rules, small CTA underline, subtle dividers)

--accent-cream: #FFF6ED (hover/tags)

Typography:

Display & headings: Cormorant Garamond (or “Fraunces” if variable) for warmth.

UI & body: Inter (system-feel, crisp).

Optional bilingual support: Noto Sans HK for Chinese text snippets.

Imagery: Natural light, filmic, no heavy filters. Avoid overly saturated colors; keep it honest.

Logo: Use the attached cup-and-saucer mark. Export as public/logo.svg (vectorized) and public/logo.png fallback. Keep treatments monochrome or with a thin accent-red stripe only.

4) Information Architecture & Pages

/ (Home) — Hero, proof band (reviews), About card, Cha Chaan Teng mini-history, Gallery grid, Contact block with map, footer.

/about — Full story of The Peak + deeper cha chaan teng history.

/gallery — Lightbox gallery.

/contact — Hours, address map, phone/email, enquiry form.

/legal/* — Privacy, terms (simple static pages).

Navigation

Left: logo → home.

Right: About, Gallery, Contact. Primary CTA button: “Book / Enquire”.

5) Sections (Home)
5.1 Hero (conversion-first)

Layout: Full-bleed image/video (slow pan of milk tea being poured, buttered pineapple bun, cha chaan teng booth).

Copy (example):

H1: “Hong Kong comfort, served warm.”

Sub: “A neighborhood cha chaan teng in the heart of [Suburb]. Breakfast sets, milk tea, and the classics.”

CTAs: “Book / Enquire” (primary), “Get Directions” (secondary).

Trust micro-signals: small line below CTAs showing opening hours today and distance (when geolocation granted).

Animation: 200–300ms fade-up; parallax of image at 5–8% on scroll.

5.2 “Proof band” (subtle, not tacky)

Thin, understated strip just below hero, inside a soft card.

Content: Aggregate score (e.g., ★ 4.8/5), number of reviews, small grayscale platform logos (Google, Yelp) in low opacity.

Interaction: Hover reveals 2–3 rotating one-line reviews. “Read more” anchor scrolls to Reviews block near Contact.

Visual restraint: Monochrome stars (no bright yellow), tight tracking, plenty of whitespace.

5.3 About The Peak

Card layout: Left image (interior or dish), right text.

Copy blocks:

“Our story” (150–200 words)

“Our kitchen” (80–120 words) with small icon list (milk tea, pineapple bun, satay beef noodle).

5.4 What is a “Cha Chaan Teng”?

Two-column: Short history timeline (1950s post-war Western-meets-Canton) + a single archival-style image.

Micro-facts: 3 chips (e.g., “Hong Kong milk tea,” “HK-French toast,” “Set menus”).

5.5 Gallery

3×N masonry grid with soft rounded corners. Click → Lightbox.

Captions: off by default, appear on hover.

5.6 Reviews (de-tacky pattern)

Placement: After Gallery, before Contact (users convinced by visuals, then validated by social proof).

Design:

3 editorial-style testimonial cards, serif quote marks, no emoji, small star glyphs in monochrome.

Each card shows 1–2 sentence highlight, reviewer first name + platform icon (grayscale).

“See all on Google” link in small text.

Rotation: Auto-rotate every 8s; pause on hover.

5.7 Contact

Block: Hours (today highlighted), address, click-to-call, email.

Map: Embedded map (lite style) with custom pin.

Form: Name, email, phone (optional), message; success toast; rate-limited and spam-protected.

Mobile Sticky CTA: “Call Now” appears after 40% scroll.

Footer

Minimal: logo mark, address line, hours, social icons, copyright.

6) Functional Requirements
6.1 Performance & SEO

Lighthouse ≥ 90 on Performance/SEO/Best Practices/Accessibility.

OG/Twitter cards with hero image.

schema.org/Restaurant + aggregateRating + openingHours markup.

Image optimization via next/image.

Lazy load gallery below fold.

6.2 Accessibility

Semantic HTML, keyboard navigable components, focus rings, alt text for all images.

Color contrast AA minimum (body text 4.5:1).

Reduced-motion preference respected (disable parallax/complex animations).

6.3 Content Management

MVP: JSON/MDX content stored in /content for copy, reviews, and gallery.

Optional (swap later): Sanity or Contentful for non-technical updates.

6.4 Forms & Reviews

Contact form posts to API route → email via Resend/SendGrid + optional DB (Prisma + SQLite/Neon).

Reviews sourced by either:

Static curated JSON (high control, non-tacky), or

Google Places API fetch (server-side) with daily cache.

Strict moderation list to avoid spam and over-enthusiastic emojis.

7) Tech Stack
Core

Framework: Next.js (App Router) + TypeScript

Styling: Tailwind CSS + CSS variables for design tokens

UI Kit: shadcn/ui + Radix Primitives (accessible components)

Animation: Framer Motion (respect prefers-reduced-motion)

Forms/Validation: react-hook-form + Zod

Images: next/image + blur placeholders

Map: Google Maps JS API (lite style) or Leaflet + Maptiler

Email: Resend (or SendGrid)

Analytics: Vercel Analytics + optional GA4

SEO: next-seo

Data: Static JSON/MDX; optional Prisma + SQLite/Neon for leads

Deployment: Vercel

Dev Quality

ESLint + Prettier + TypeScript strict

Playwright (smoke tests for nav, forms, Lighthouse budget)

Husky + lint-staged on commit

8) Site Structure & Files (App Router)
/app
  /globals.css
  /layout.tsx
  /page.tsx                         // Home
  /about/page.tsx
  /gallery/page.tsx
  /contact/page.tsx
  /api/contact/route.ts             // POST email + optional DB write
/components
  Header.tsx
  Footer.tsx
  Container.tsx
  Button.tsx
  Hero.tsx
  ProofBand.tsx                     // subtle review strip
  AboutCard.tsx
  HistoryChaChaanTeng.tsx
  GalleryGrid.tsx
  Lightbox.tsx
  ReviewsEditorial.tsx              // non-tacky testimonials
  ContactBlock.tsx
  MapEmbed.tsx
  Hours.tsx
  MobileStickyCTA.tsx
  SectionHeading.tsx
/lib
  reviews.ts                        // curated list + fetch util if using API
  seo.ts
  validators.ts
/content
  about.mdx
  history.mdx
  gallery.json                      // image paths + captions
  reviews.json                      // curated highlights
  hours.json
/public
  logo.svg | logo.png               // from attached logo
  og.jpg

9) Component Notes (key ones)

Hero.tsx

Props: heading, subheading, primaryCta, secondaryCta, bgMedia (image or mp4).

Behavior: Framer fade-up, parallax on scroll (disabled with reduced motion).

ProofBand.tsx

Props: rating, count, platforms[], snippets[].

Style: slim muted card with grayscale logos; star glyph monochrome.

ReviewsEditorial.tsx

Props: reviews[] (quote, name, platform, url).

Animation: auto-rotate carousel, pause on hover; 3 cards shown on desktop, 1 on mobile.

ContactBlock.tsx

Includes Hours, address, call/email links, small contact form, and MapEmbed.

MobileStickyCTA.tsx

Appears after threshold scroll; shows “Call Now” and “Get Directions”.

10) Copy & Microcopy (starter)

Hero H1: “Hong Kong comfort, served warm.”

Hero Sub: “A neighborhood cha chaan teng in [Suburb]. Milk tea, pineapple buns, and the classics.”

Primary CTA: “Book / Enquire”

Proof band: “Rated 4.8/5 by 1,200+ diners”

About: “We opened The Peak to bring the everyday comfort of Hong Kong’s cha chaan teng to [City]—where milk tea meets toast, and the griddle never sleeps.”

History: “Cha chaan teng began as post-war diners, blending Western café staples with Cantonese cooking…”

11) Accessibility & UX Details

Button hit-areas ≥ 44px.

Motion reduced on prefers-reduced-motion.

Focus outlines visible and tasteful.

Forms with inline error states; success confirmation with ARIA live region.

Map has “Open in Google Maps” accessible link.

12) Analytics & Measurement

Track: hero CTA clicks, proof band “Read more”, gallery lightbox opens, contact form submissions, call link taps, directions clicks.

Create conversion events: book_enquiry, call, directions.

13) Acceptance Criteria (MVP)

Page loads under 2.5s on 4G mid-tier mobile.

All core CTAs visible above the fold on mobile and desktop.

Reviews section looks editorial (no yellow stars, no badges, no marquees).

Lighthouse scores ≥ 90.

Contact form validated and sends email; spam protection active.

Map renders and pin matches address.

Site responsive at 360, 768, 1024, 1440 widths.

14) Build Tasks (for Claude in VS Code)

Scaffold: npx create-next-app@latest the-peak --ts --eslint --tailwind --app

Install deps:

pnpm add framer-motion @radix-ui/react-dialog @radix-ui/react-slot lucide-react
pnpm add react-hook-form zod next-seo
pnpm add -D @types/node @types/react @types/react-dom


Add Google Fonts (Inter, Cormorant Garamond, optional Noto Sans HK) in layout.tsx with next/font.

Add design tokens to globals.css using CSS variables (see palette).

Create components listed in section 9 with Tailwind utility classes; ensure SSR friendly.

Implement hero with responsive image/video via next/image / <video muted playsInline autoPlay loop> (with static poster).

Build ProofBand using curated content/reviews.json.

Add About + History using .mdx loaded via next/dynamic or Contentlayer (optional).

Implement Gallery with lightbox (headless Dialog from Radix + next/image).

Contact form: create /api/contact/route.ts → send via Resend; add hCaptcha/turnstile if available; throttle by IP.

Map: simple <iframe> or lightweight map component; ensure lazy loading.

SEO: configure next-seo default in seo.ts; add Restaurant schema in <Script type="application/ld+json">.

Add sticky mobile CTA component and show after scroll threshold.

Import attached logo as public/logo.png (and logo.svg if vectorized).

Test across breakpoints; run Lighthouse; fix regressions.

Deploy to Vercel; set env vars for email and API keys.

15) Content Stubs (examples)

/content/reviews.json

[
  {
    "quote": "Milk tea like home. Simple, perfect.",
    "name": "Alex L.",
    "platform": "Google",
    "url": "https://maps.google.com/..."
  },
  {
    "quote": "The pineapple bun is unreal—crispy top, soft inside.",
    "name": "Mina T.",
    "platform": "Google",
    "url": "https://maps.google.com/..."
  },
  {
    "quote": "Proper cha chaan teng vibes. Quick, friendly, delicious.",
    "name": "Sam K.",
    "platform": "Yelp",
    "url": "https://yelp.com/..."
  }
]


/content/hours.json

{
  "mon": "8:00–20:00",
  "tue": "8:00–20:00",
  "wed": "8:00–20:00",
  "thu": "8:00–21:00",
  "fri": "8:00–21:00",
  "sat": "9:00–21:00",
  "sun": "9:00–18:00"
}


/content/gallery.json

[
  { "src": "/images/milk-tea.jpg", "alt": "Hong Kong milk tea" },
  { "src": "/images/pineapple-bun.jpg", "alt": "Pineapple bun" },
  { "src": "/images/interior-booths.jpg", "alt": "Booth seating" }
]

16) Future Enhancements (post-MVP)

Menu page with pricing and “today’s set” banner.

Online ordering link integration.

Multi-language toggle (EN / 繁體中文).

Specials banner controlled via CMS.

Newsletter capture (footer).

Notes for builders: Keep the reviews tasteful and restrained. Avoid badges, ribbons, animated stars, or bright yellows. Use the accent red sparingly—thin rules, underline on hover, and tiny CTA indicators only. Maintain whitespace to let the photography and story carry the persuasion.