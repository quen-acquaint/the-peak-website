# Claude Code Prompt — The Peak Hero Section Redesign

Paste this into Claude Code:

---

Redesign my existing hero section to match this premium hospitality design. Do NOT touch anything outside the hero section and navbar. Keep all existing routes, links, and functionality intact — only restyle and restructure the hero.

## Reference file

Use `the-peak-hero-reference.html` in the project root as the definitive visual reference. Match it exactly in terms of layout, spacing, typography, colors, overlays, and animations.

## Design spec

### Color palette (use CSS variables)
```
--warm-black: #1a1410
--deep-brown: #2a2018
--amber: #c8956c
--gold: #d4a574
--cream: #f5efe6
--warm-white: #faf7f2
--coral-accent: #d4705a
```

### Typography — 3 font system
1. **Cormorant Garamond** (Google Fonts) — display/headline, weight 300, used for hero title and rating number
2. **Noto Serif TC** (Google Fonts) — Chinese characters only, weight 300
3. **Instrument Sans** (Google Fonts) — all UI text, nav links, buttons, body copy

### Hero layout
- Full viewport height (`100vh`, `min-height: 700px`), `position: relative`, `overflow: hidden`
- **Background**: `<video>` element (autoplay, muted, loop, playsinline) with `object-fit: cover`, absolutely positioned to fill the hero. The video file is the milk tea pour video already in the project assets
- **Overlay stack** (all absolutely positioned, layered on top of video):
  1. Gradient overlay: vertical gradient from `rgba(26,20,16,0.55)` at top → `0.30` at 35% → `0.35` at 65% → `0.85` at bottom. PLUS a horizontal gradient from `rgba(26,20,16,0.6)` on the left fading to transparent at 50%. This creates a left-darkened, bottom-darkened effect for text legibility
  2. Warm light leak: radial gradient (`rgba(200,149,108,0.12)`) positioned top-right, 70% wide, 80% tall, with a slow 8s pulsing opacity animation between 0.6 and 1
  3. Film grain: SVG noise texture at 3.5% opacity, tiled at 128px, pointer-events none

### Hero content — LEFT-ALIGNED, not centered
- `max-width: 800px`, padded `clamp(32px, 8vw, 140px)` from left, vertically centered with flexbox
- All children animate in with a staggered `fadeUp` (translate Y 30px → 0, opacity 0 → 1, 1s ease), each with increasing `animation-delay`:

  1. **Eyebrow** (delay 0.3s): "Est. 2024 · Sydney" — 12px Instrument Sans, weight 600, letter-spacing 4px, uppercase, gold color. Has a 40px horizontal gold line before the text using `::before`
  2. **Title** (delay 0.5s): "The Art of" on line 1, "Cha Chaan Teng" on line 2 in `<em>` — Cormorant Garamond, `clamp(52px, 7.5vw, 96px)`, weight 300, line-height 1.0. The `<em>` is italic gold
  3. **Chinese subtitle** (delay 0.65s): "茶餐廳" — Noto Serif TC, `clamp(20px, 2.5vw, 30px)`, weight 300, `rgba(212,165,116,0.6)`, letter-spacing 8px
  4. **Divider** (delay 0.75s): 60px × 1px line, gradient from gold to transparent
  5. **Description** (delay 0.85s): "A Hong Kong dining tradition, reimagined for Sydney. Classic recipes passed down through generations, served in a space that feels like home." — 16px Instrument Sans, line-height 1.75, `rgba(245,239,230,0.7)`, max-width 480px
  6. **Actions** (delay 1s): two items side by side with 24px gap:
     - Primary CTA "Explore Our Menu" — `linear-gradient(135deg, var(--amber), var(--coral-accent))` background, 13px uppercase, letter-spacing 2.5px, 16px 40px padding, with an inline arrow SVG. On hover: translateY(-2px) and warm box-shadow `0 12px 40px rgba(200,149,108,0.3)`. Has a `::before` pseudo with reversed gradient that fades in on hover
     - Secondary link "Find Us" — plain text, 13px uppercase, opacity 0.6, with a subtle 1px underline via `::after`. Hover to full opacity

### Right side floating elements
- Absolutely positioned, `right: clamp(24px, 4vw, 64px)`, `bottom: 100px`, flex column, align-end, 28px gap
- Animates in at delay 1.3s
- **Google rating badge**: flex row, 12px 20px padding, `rgba(26,20,16,0.6)` background with `backdrop-filter: blur(16px)`, 1px border `rgba(212,165,116,0.2)`. Contains:
  - "4.6" in Cormorant Garamond 28px gold
  - Stars "★★★★★" in gold 12px
  - "150+ Google Reviews" in 11px uppercase, opacity 0.6
- **Hours text**: "Open Daily / 11:30 am — 9:00 pm", right-aligned, 12px uppercase, opacity 0.5

### Decorative vertical Chinese text
- Left edge at `clamp(24px, 4vw, 64px)`, bottom 100px
- "香港茶餐廳" in Noto Serif TC 14px, `writing-mode: vertical-rl`, letter-spacing 8px, `rgba(212,165,116,0.15)`
- Animates in at delay 1.4s

### Scroll indicator
- Centered at bottom (36px from bottom), flex column, centered
- "Discover" in 10px uppercase, letter-spacing 3px, opacity 0.4
- Below it a 1px × 40px line with gradient from gold to transparent, pulsing animation (scaleY 0.6↔1, opacity 0.3↔0.8, 2s infinite)
- Animates in at delay 1.5s

### Navbar
- Fixed, full width, 72px tall, padding `0 clamp(24px, 4vw, 64px)`, transparent by default
- On scroll past 50px, add class "scrolled": `rgba(26,20,16,0.85)` background, `backdrop-filter: blur(20px) saturate(1.4)`, bottom border `rgba(200,149,108,0.15)`
- Left side: logo (38px circle with gradient amber→coral containing "峰" character + "THE PEAK" in Cormorant Garamond 22px, letter-spacing 3px) + nav links (Our Story, Heritage, Menu, Gallery — 13px uppercase, letter-spacing 1.5px, opacity 0.75 with gold underline on hover via `::after`)
- Right side: "Reserve a Table" ghost button — transparent bg, 1px border `rgba(212,165,116,0.5)`, gold text, fills solid gold with dark text on hover

### Responsive (max-width: 768px)
- Hide nav links, right side elements, and vertical Chinese text
- Hero content: left-align, 24px padding, justify-content flex-end with 120px bottom padding
- Title shrinks to 42px
- Action buttons stack vertically

### Animations summary
- `fadeUp`: `translateY(30px) → 0`, `opacity 0 → 1`, 1s ease forwards
- `lightPulse`: opacity 0.6 ↔ 1, 8s ease-in-out infinite alternate
- `scrollPulse`: scaleY(0.6) opacity(0.3) ↔ scaleY(1) opacity(0.8), 2s ease-in-out infinite

### Important
- Add scroll listener to toggle `.scrolled` class on navbar when `scrollY > 50`
- Keep `overflow-x: hidden` on body
- Use `-webkit-font-smoothing: antialiased`
- All overlays must be `pointer-events: none` where appropriate
- Video must have `playsinline` attribute for iOS
