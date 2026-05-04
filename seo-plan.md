# The Peak Hong Kong Cafe — SEO Plan

## Context

The Peak is a single-location cha chaan teng at 25A Glebe Point Rd, Glebe, owner-run by Quentin Dai. The website (`thepeakhkcafe.com.au`, GitHub Pages) already has a stronger content foundation than 90% of Sydney HK-cafe competitors — five real content pages, JSON-LD on most of them, geo metadata, and high-quality bilingual alt text. The cafe also already has **three DA-90+ press wins** — a 2022 SMH Good Food roundup mention, a March 2025 SBS Food owner-quoted feature on HK macaroni soup, and an October 2025 SMH Traveller owner-quoted feature on the British colonial roots of HK macaroni soup. None of these are currently surfaced on the site as social proof, none is confirmed dofollow-linked, and the topic-authority pattern they create (Quentin = Sydney's go-to media voice for HK food, especially macaroni soup) is not yet exploited for SEO. The Peak is being beaten in Google's Map Pack by competitors with far weaker websites (Kowloon Cafe, HK Cafe 港夠味, Old Town, HK Bing Sutt, Sun Ming) because those competitors win on **review volume and citation breadth**, not on-site SEO or media authority.

The category is unusually winnable because it is GMB-dominated — almost no Sydney HK cafe has dish-level pages, suburb pages, or proper Restaurant + Menu + FAQ schema. The Peak can dominate the long tail (dish-specific and near-me searches) within one quarter while playing a longer game (3–6 months) on review volume and editorial coverage to break into the Map Pack for head terms.

**Goal:** Drive discoverability → menu views → walk-in conversions, organically.

**Deliverable:** Final plan written to `/Users/quentindai/The Peak /seo-plan.md` (in addition to this plan file). All recommendations are organic-only (no paid creator/influencer spend).

**Confirmed decisions:**
- Canonical menu URL: `https://thepeakhkcafe.com.au/menu.html` — `the-peak-menu-april26.html` will be deleted/redirected.

---

## Master Checklist

Tick items as you complete them. Numbered references (e.g. *W1.2*) point to the detailed workstream tables further down for the full notes/files/why.

### Week 1 — Stop the bleeding (do these first)

- [x] **W1.1a — Install Google Search Console** *(done)*
- [x] **W1.1b — Install GA4** *(done — measurement ID `G-RQZVJZ2L6E`, gtag installed on all 6 HTML pages 30 Apr 2026)*
- [ ] **W1.1c — Connect GA4 ↔ GSC; submit `sitemap.xml` in GSC**
- [x] **W1.2 — Un-obfuscate phone number for click-to-call** *(done 1 May 2026 — replaced `data-p1/p2/p3` spans with `<a href="tel:+61402421162">` on `index.html` + `hong-kong-cafe-glebe.html`. Also fixed the `Call Now` button which had `href="#"`. Removed the JS reassembly block from `script.js`. Added `data-track="click_to_call"` attrs for W6.2 GA4 event wiring. Spam mitigation moved to: DNC Register registration + carrier-level filters.)*
- [x] **W1.3 — Tombstone-redirect `the-peak-menu-april26.html` → `/menu.html`** *(done 30 Apr 2026 — file replaced with meta-refresh + canonical + noindex + JS fallback + GA4. Sitemap unchanged. Hard-delete after 90 days of zero traffic.)*
- [ ] **W2.1 — Fix TripAdvisor "Bondi Junction → Glebe" listing**
- [ ] **W2.2 — Fix DoorDash "Bondi Junction → Glebe" tag**
- [ ] **W2.3 — Claim/optimise sydney.com (Destination NSW) listing**
- [ ] **W6.2 — Configure GA4 conversions** (`view_menu`, `click_to_call`, `directions_click`, `order_online_click`)
- [ ] **W1.10 — Submit sitemap to Bing Webmaster Tools** (5 min, free traffic)

### Week 2 — Surface the press wins, build the founder authority

- [ ] **W1.6 — Create custom OG share image** (`assets/og-share.webp`, 1200×630) and wire into all pages
- [ ] **W1.11 — Add "As featured in" press strip on `index.html`** with 3 logos linking to SBS Food + SMH Good Food + SMH Traveller
- [ ] **W1.11 — Add 3 article URLs to Restaurant JSON-LD `sameAs`** on `index.html` and `hong-kong-cafe-glebe.html`
- [ ] **W1.12 — Build `/about/quentin-dai.html`** (founder author page with `Person` JSON-LD, `knowsAbout`, `sameAs`)
- [ ] **W5a.1 — Build `/press.html`** (pull-quotes, 3 logos, press kit download)
- [ ] **W5a.2 — Build `press-kit.pdf`** (bio, headshot, 3–5 hi-res dish photos, 200-word story, 3 article URLs)
- [ ] **W5a.3 — Email SBS Food editor** to request website hyperlink on existing article
- [ ] **W5a.3 — Email SMH Good Food editor** to request website hyperlink on existing article
- [ ] **W5a.3 — Email SMH Traveller editor** to request website hyperlink on existing article
- [ ] **W3a.P0 — Ship `hong-kong-macaroni-soup-sydney.html`** citing both 2025 articles (the topic-authority page)
- [ ] **W3a.P1 — Ship `silk-stocking-milk-tea-sydney.html`**
- [ ] **W3a.P1 — Ship `pineapple-bun-sydney.html`**
- [ ] **W3b.P1 — Ship `hong-kong-cafe-near-university-of-sydney.html`**
- [ ] **W4.1 — Print + place tabletop QR review card**
- [ ] **W5a.4 — Print "As featured in SBS Food + SMH" tabletop card or window decal**

### Week 2–4 — Local SEO build-out

- [ ] **W2.4 — Complete Google Business Profile** (100+ photos, primary category set to "Hong Kong Restaurant"/"Cha Chaan Teng" if available, all secondary categories, populate Q&A)
- [ ] **W2.4 — Start posting weekly GBP Updates**
- [ ] **W2.5 — Enrich AGFG profile** with photos, full menu, story copy
- [ ] **W2.6 — Claim/build TrueLocal profile**
- [ ] **W2.6 — Claim/build Yellow Pages AU profile**
- [ ] **W2.6 — Claim/build Hotfrog AU profile**
- [ ] **W2.6 — Claim/build Restaurant Guru profile**
- [ ] **W2.6 — Claim/build Zomato AU profile**
- [ ] **W2.6 — Claim/build Foursquare profile**
- [ ] **W2.6 — Claim/build Wanderlog profile**
- [ ] **W2.6 — Claim/build Sluurpy profile**
- [ ] **W2.6 — Claim/build Quandoo profile**
- [ ] **W2.6 — Claim/build Sydney Localista profile**
- [ ] **W2.7 — Add `LocalBusiness` `sameAs` array** linking to GMB, Facebook, Instagram, TripAdvisor, AGFG, sydney.com, Uber Eats, DoorDash
- [ ] **W2.8 — Apple Maps Connect listing**

### Week 1–4 — Schema & on-page polish

- [x] **W1.4 — Add Menu + MenuItem JSON-LD** to `menu.html` *(done 2 May 2026 — full Menu schema with 12 sections × 87 items, Hot/Iced offers arrays for HK drinks, Small/Large for Italian coffees, allergen notes for nut items, images on 5 dishes. Updated `index.html` Restaurant.hasMenu to reference by @id.)*
- [ ] **W1.5 — Add FAQPage JSON-LD** to `cha-chaan-teng-sydney.html` + new section on `index.html`
- [ ] **W1.7 — Hero video LCP optimisation** (`preload="metadata"`, or swap to webp poster + click-to-play)
- [ ] **W1.8 — Self-canonical on every page** (one page is missing it)
- [ ] **W1.9 — Add `LocalBusiness` ReserveAction / OrderAction / CallAction** to Restaurant JSON-LD
- [ ] **W1.13 — Add `<author>` byline + `Person` schema** to all content pages

### Month 2

- [ ] **W3a.P2 — Ship `hong-kong-french-toast-sydney.html`**
- [ ] **W3a.P2 — Ship `baked-pork-chop-rice-sydney.html`**
- [ ] **W3b.P1 — Ship `hong-kong-cafe-broadway-sydney.html`**
- [ ] **W3c — Update `cha-chaan-teng-sydney.html`** with "Signature dishes" + "Visiting from elsewhere in Sydney" sections linking to dish + suburb pages
- [ ] **W3c — Update `index.html` menu cards** to deep-link to dish pages where they exist
- [ ] **W5 — Pitch Broadsheet Sydney "Local Knowledge"** (Glebe-comeback angle)
- [ ] **W5 — Pitch Concrete Playground Sydney** (six dishes to order angle)
- [ ] **W4.4 — Review-reply discipline live** (every Google review replied within 48h, mention Glebe + cha chaan teng + signature dish)

### Month 3

- [ ] **W3a.P3 — Ship `satay-beef-noodles-sydney.html`**
- [ ] **W3a.P3 — Ship `yuenyeung-sydney.html`**
- [ ] **W3b.P2 — Ship `hong-kong-cafe-pyrmont.html`**
- [ ] **W3b.P2 — Ship `cha-chaan-teng-inner-west-sydney.html`**
- [ ] **W3 — Ship `faq.html`** with FAQPage schema
- [ ] **W6.4 — First Looker Studio review** (build dashboard + run monthly review)
- [ ] **W4.5 — Embed 3 best Google reviews on `index.html`** with `Review` schema

### Month 4–6

- [ ] **W4.6 — Reach 250+ Google reviews** (+30/month from W4.1–W4.4 system)
- [ ] **W5 — Pitch SCMP Post Magazine** (founder-story angle)
- [ ] **W5 — Pitch Time Out Sydney** (HK milk tea / pineapple bun roundup)
- [ ] **W5 — Pitch Urban List + Sitchu** (roundup inclusions)
- [ ] **W5 — Re-pitch SBS Food** (different dish — pineapple bun, French toast, or milk tea)
- [ ] **W5 — Re-pitch SMH Good Food** ("three years on" Sydney HK cafe scene refresh)
- [ ] **W2.6+ — Add 4 more directory listings** (sweep up the long tail)
- [ ] **W3 — Audit + refresh dish pages** with real photography if any are using stock

---

## Strategic Pillars

1. **Fix what's leaking traffic and conversions today.** Click-to-call obfuscation, duplicate menu page, missing GA4/GSC, NAP errors on TripAdvisor/DoorDash — these are bleeding events right now.
2. **Own the long tail before head terms.** The category's white space is dish-level + geo-modifier searches ("pineapple bun Sydney", "HK cafe near University of Sydney"). The Peak can rank #1 for many of these in 30–90 days.
3. **Build review and citation moats.** The Peak's 150 Google reviews vs Kowloon Cafe's ~830 is the single biggest gap. Combined with sydney.com (Destination NSW) and AGFG profile improvements, this is the foundation for breaking into the Map Pack.
4. **Surface existing press wins, build the founder-authority page, then earn more.** Three DA-90+ press hits and zero of them surfaced on-site is the biggest unforced error in current marketing. Fix that, build a `/quentin-dai` author page so Google associates the *person* with HK-food expertise (not just the business), then pitch the next tier of outlets that haven't covered yet: Broadsheet, Concrete Playground, SCMP, Time Out.
5. **Measure everything from day one.** GA4 + Search Console + Looker Studio dashboard so every change is verifiable.

---

## Workstream 1 — Technical & On-Page Fixes (Week 1, do first)

These are blockers for everything downstream. None take more than a day.

| # | Fix | File(s) | Notes |
|---|---|---|---|
| 1.1 | Install GA4 + Google Search Console | `index.html` (and template snippet for all pages) | **GSC done.** GA4 in progress — once live, connect GA4 ↔ GSC and submit `sitemap.xml` in GSC. |
| 1.2 | Un-obfuscate phone number for click-to-call | `index.html` footer + `script.js` | Phone is currently split across `data-p1`/`p2`/`p3` attrs and reassembled by JS — robots/some users can't click it. Use a plain `<a href="tel:+61402421162">` and accept the (negligible) scrape risk. |
| 1.3 | Resolve duplicate menu pages | `menu.html`, `the-peak-menu-april26.html` | Pick one canonical (`menu.html`). 301-equivalent the other (GitHub Pages: meta refresh + `rel=canonical` to the live one) OR delete and redirect. Update sitemap. |
| 1.4 | Add Menu + MenuItem JSON-LD to canonical menu page | `menu.html` | Use `Restaurant.hasMenu` linking to a `Menu` with `hasMenuSection` → `MenuItem` for each dish. Include name, EN/zh-Hant translations, description, price (AUD), `image`, `nutrition` if known. |
| 1.5 | Add FAQPage JSON-LD | `cha-chaan-teng-sydney.html`, plus a new section on `index.html` | Q&A like "What is a cha chaan teng?", "Do you take walk-ins?", "Do you serve Hong Kong milk tea?", "What time is breakfast served?" — mirror queries you want rich-result eligibility on. |
| 1.6 | Create custom OG share image (1200×630) | new `assets/og-share.webp` | Wire into `og:image` and `twitter:image` on all pages. Brand it: logo + "Glebe's Cha Chaan Teng" + a hero dish. |
| 1.7 | Hero video LCP optimisation | `index.html`, `styles.css` | Either swap hero video for a webp poster + click-to-play, or add `preload="metadata"` instead of `preload="auto"`, plus `playsinline muted` autoplay. Target LCP < 2.5s on mobile 4G. |
| 1.8 | Self-canonical on every page; ensure `menu.html` declares one | all HTML files | One page is missing `rel="canonical"`. |
| 1.9 | Add `LocalBusiness` actions: ReserveAction (if applicable), OrderAction (DoorDash/UberEats), CallAction | `index.html` Restaurant JSON-LD | Eligible for richer SERP buttons. |
| 1.10 | Submit verified sitemap to Bing Webmaster Tools | external | Free traffic; takes 5 minutes. |
| 1.11 | Add "As featured in" press strip on `index.html` linking to all three articles (SBS Food + SMH Good Food + SMH Traveller); add all three URLs to Restaurant JSON-LD `sameAs` | `index.html`, `hong-kong-cafe-glebe.html` | Surfaces three DA-90+ press hits as conversion-stage trust signal AND builds Google's entity association with three high-authority articles. |
| 1.12 | Build `/about/quentin-dai.html` author page with `Person` JSON-LD (name, jobTitle, worksFor → Restaurant, sameAs to all 3 articles + LinkedIn + Instagram if applicable, knowsAbout: HK cuisine / cha chaan teng / macaroni soup) | new file | Two journalists in 2025 used Quentin as the source on HK macaroni soup. Build the author entity Google now expects to find. Future food journalists will land here when researching HK quotes. |
| 1.13 | Add `<author>` byline + `Person` schema reference to every content page (cha-chaan-teng-sydney, hong-kong-food-sydney, all new dish + suburb pages) pointing to the Quentin Dai author page | all content HTML files | E-E-A-T uplift: Google's algorithm increasingly weights bylined content from named experts over anonymous brand pages. |

**Verification:** Run `index.html` and `menu.html` through [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema Markup Validator](https://validator.schema.org/). Lighthouse mobile score > 90 (performance + SEO). GSC Coverage report shows 0 errors after 7 days.

---

## Workstream 2 — Local SEO & Citations (Week 1–2)

| # | Action | Why |
|---|---|---|
| 2.1 | **Fix TripAdvisor "Bondi Junction" → "Glebe" listing.** Claim the [TripAdvisor business page](https://www.tripadvisor.com/Restaurant_Review-g15105229-d25526272-Reviews-The_Peak_Hong_Kong_Cafe-Bondi_Junction_Greater_Sydney_New_South_Wales.html) and submit a correction. | Wrong-suburb tags break NAP consistency, which Google uses as a Map Pack signal. |
| 2.2 | **Fix DoorDash "Bondi Junction" tag** on The Peak's listing. Contact DoorDash partner support. | Same NAP signal; also confuses real customers. |
| 2.3 | **Claim/optimise sydney.com (Destination NSW) listing.** | Free .com.au tourism backlink; Kowloon Cafe and Sun Ming both rank for it. High-trust referral source. |
| 2.4 | Fully complete Google Business Profile: 100+ photos (food + interior + exterior), set primary category "Hong Kong Restaurant" or "Cha Chaan Teng" if available, add all secondary categories ("Cafe", "Asian Restaurant", "Restaurant"), populate Q&A section, post weekly Updates. | GBP completeness is the #1 Map Pack ranking factor. |
| 2.5 | Enrich AGFG profile (already exists) with photos, full menu, story copy. | Already an indexed citation; make it a richer entity. |
| 2.6 | Claim/build profiles on: TrueLocal, Yellow Pages AU, Hotfrog AU, Restaurant Guru, Zomato AU, Foursquare, Wanderlog, Sluurpy, Quandoo, Sydney Localista. Use **identical NAP** everywhere. | Citation breadth + consistency. Each is a backlink. |
| 2.7 | Add a `LocalBusiness` JSON-LD `sameAs` array linking to GMB, Facebook, Instagram, TripAdvisor, AGFG, sydney.com, Uber Eats, DoorDash. | Helps Google build the entity graph. |
| 2.8 | Apple Maps Connect listing (separate from Google). | iPhone Maps users; massively under-claimed. |

**Verification:** After two weeks, Google "The Peak Hong Kong Cafe" — first 20 results should all be on-brand and tagged Glebe (not Bondi Junction).

---

## Workstream 3 — Content (Month 1–3, the dominant moat)

User selected **dish-level pages + suburb / near-me pages** as priority. This is also where the competitive white space is largest.

### 3a. Dish-level pages (target: 6 launched in 90 days)

Template: `~/the peak/<dish-slug>.html` — `~700 words`, JSON-LD `MenuItem` + `FAQPage`, gallery of 3–5 photos, "Order now" + "Visit us" CTAs, internal links to suburb pages and the canonical menu.

Sections per page:
- H1 with dish name (EN + Chinese)
- "What is [dish]?" — origin + cha chaan teng context (50–100 words)
- "How we make it at The Peak" — process notes (100–150 words)
- "When to order it" — pairing recommendations (50 words)
- Price, dietary notes, photo gallery
- FAQ (3–5 questions, schema-marked)
- Internal links: menu, story, nearest suburb page

| Priority | Slug | Primary keyword | Why first |
|---|---|---|---|
| **P0** | `hong-kong-macaroni-soup-sydney.html` | "Hong Kong macaroni soup Sydney", "HK breakfast macaroni Sydney" | **Two journalists used Quentin as the source on this dish** (SBS 2025, SMH Traveller 2025). The Peak owns the topic in Google's eyes already; build the page that captures the search demand those articles are seeding. Cite both articles. |
| P1 | `silk-stocking-milk-tea-sydney.html` | "silk stocking milk tea Sydney" | Signature dish; near-zero Sydney venue competition |
| P1 | `pineapple-bun-sydney.html` | "pineapple bun Sydney", "bo lo bao Sydney" | Indulgent Eats notes few Sydney venues sell daily — direct hook |
| P2 | `hong-kong-french-toast-sydney.html` | "Hong Kong French toast Sydney" | All ranking content is HK-based, not Sydney — pure white space |
| P2 | `baked-pork-chop-rice-sydney.html` | "baked pork chop rice Sydney" | Top results are recipes; no Sydney venue ranks |
| P3 | `satay-beef-noodles-sydney.html` | "satay beef noodles Sydney" | The Peak already markets this as a signature |
| P3 | `yuenyeung-sydney.html` | "yuenyeung Sydney", "Hong Kong coffee tea Sydney" | Wikipedia + recipe sites only; no venue page exists |

### 3b. Suburb / near-me landing pages (target: 4 launched in 90 days)

The Peak sits geographically between USyd, Broadway, Pyrmont, and the CBD — which means it can plausibly serve queries from all of those locations. No competitor owns these.

Template: `~600 words`, embed Google Map, walking-time-from-X to "25A Glebe Point Rd" notes, top dish recommendations linking to dish pages, FAQ ("Is The Peak walking distance from [X]?"), `LocalBusiness` JSON-LD.

| Priority | Slug | Primary keyword |
|---|---|---|
| P1 | `hong-kong-cafe-near-university-of-sydney.html` | "Hong Kong cafe near University of Sydney", "cha chaan teng near USyd" |
| P1 | `hong-kong-cafe-broadway-sydney.html` | "Hong Kong cafe Broadway", "HK breakfast Broadway" |
| P2 | `hong-kong-cafe-pyrmont.html` | "Hong Kong cafe Pyrmont" |
| P2 | `cha-chaan-teng-inner-west-sydney.html` | "cha chaan teng inner west Sydney" — broad inner-west catch |

(Optional P3 for later: Camperdown, Forest Lodge, Annandale, Newtown.)

### 3c. Internal linking + topic cluster

Hub page: `cha-chaan-teng-sydney.html` (already exists). Treat as the topical authority page. Every dish page and every suburb page links back here; the hub links out to all of them. Update `cha-chaan-teng-sydney.html` to include a "Signature dishes" section (linking to dish pages) and a "Visiting from elsewhere in Sydney" section (linking to suburb pages).

Update `index.html` so the menu section card grid links to dish pages where they exist.

**Verification:** GSC Performance report shows impressions on dish + suburb keywords within 2–4 weeks of indexing. Track average position weekly. Target: top 10 within 60 days for at least 4 of the 6 dish keywords.

---

## Workstream 4 — Reviews & Social Proof (continuous)

The 680-review gap vs Kowloon Cafe is the single biggest Map Pack obstacle. Closing this is more about ops than SEO, but the SEO impact is decisive.

| # | Action |
|---|---|
| 4.1 | Print-and-frame a tabletop QR card: "Loved it? A 30-second Google review keeps small Glebe cafes alive." QR → direct GMB review link (use `https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID`). |
| 4.2 | Train staff: ask happy diners on bill-drop ("If you had a great time, a quick Google review really helps us"). Soft, non-pushy. |
| 4.3 | Post-DoorDash / Uber Eats: enable platform-side review prompts. |
| 4.4 | Reply to every Google review within 48 hours. Mention "Glebe", "cha chaan teng", and one signature dish in each reply (helps GBP keyword relevance). |
| 4.5 | Once a quarter: pull 3 best Google reviews, embed as testimonials on `index.html` with `Review` schema (review-snippet eligibility). |
| 4.6 | Target: +30 reviews/month for the next 6 months → ~330 total by month 6. |

---

## Workstream 5 — Editorial & Backlinks (Month 1–6, organic only)

No paid creator outreach per user direction. Pitch on merit.

### Existing earned coverage (don't re-pitch — leverage)

The Peak has three confirmed DA-90+ press hits, two of them owner-quoted features. None were surfaced by the competitor-research agent (because no competitor links to them); they are significant standing assets.

| Outlet | Date | Coverage | Backlink? | Action |
|---|---|---|---|---|
| **SBS Food** ([article](https://www.sbs.com.au/food/article/pasta-in-other-cuisines/dt2rmbnfk)) | 5 Mar 2025 | Owner Quentin Dai directly quoted with a detailed breakdown of HK macaroni soup (12-hr chicken stock + evaporated milk). Named feature. | Facebook link only — no website link | Email SBS Food editor to request the article be updated to link `thepeakhkcafe.com.au`. High-DA dofollow win if added. |
| **SMH Good Food** ([article](https://www.smh.com.au/goodfood/eating-out/hong-kongstyle-cafes-with-spam-french-toast-and-tea-grow-rapidly-in-sydney-as-expats-seek-a-taste-of-home-20220825-h25xzx.html)) | 25 Aug 2022 | Article on Sydney's HK-style cafes; two competitors are the main subject, The Peak is listed in the "where to find HK cafes" section at the bottom. | Verify hyperlink status (paywalled — couldn't WebFetch) | Email Good Food to request a website hyperlink on the listing entry + updated photo. |
| **SMH Traveller** ([article](https://www.smh.com.au/traveller/inspiration/the-hong-kong-dish-the-british-left-behind-20251010-p5n1ns.html)) | 10 Oct 2025 | Owner-quoted feature on HK macaroni soup (the British colonial culinary legacy). Second 2025 macaroni-soup-as-Quentin-quoted-source piece. | Verify hyperlink status (paywalled) | Email SMH Traveller editor to request website link. |

**Pattern signal:** Two journalists at two outlets used Quentin as the macaroni-soup source within 7 months. This is no longer "press coverage" — it's emerging *topic authority*. The plan now treats Quentin Dai as a media-recognised expert, with content (`/about/quentin-dai.html`, bylines, `Person` schema) and a P0 dish page (`hong-kong-macaroni-soup-sydney.html`) built to convert that authority into search traffic.

**Surface this on the site as social proof:**
- Add a "Press" / "As featured in" strip on `index.html` (above the fold or near the story section) — three logos (SBS Food, SMH Good Food, SMH Traveller), each linking to the live article. High-converting trust signal AND three outbound links to DA-90+ articles that mention the brand entity.
- Add all three URLs to the `sameAs` array in the Restaurant JSON-LD on `index.html` and `hong-kong-cafe-glebe.html`.
- Build a dedicated `/press.html` (or `/in-the-media.html`) page: pull-quotes from each article, the three logos linked to source, plus the press kit download. Indexable — becomes a strong entity-signal page.
- Capture the Quentin macaroni-soup quote(s) and embed as testimonials with `Review` / `Quotation` schema on the macaroni soup dish page.

### Founder-as-media-authority (new, driven by 3-article pattern)

| # | Action |
|---|---|
| 5a.1 | Build `/about/quentin-dai.html` with bio, headshot, "topics I can speak on" list, contact email, links to all three articles, `Person` JSON-LD with `knowsAbout` + `sameAs`. |
| 5a.2 | Build `/press-kit.pdf` — one-page, downloadable: bio, headshot, hi-res hero dish photos (3–5), 200-word founding story, hours/address, the three article URLs. |
| 5a.3 | Email outreach to the SBS Food + SMH editors (separate emails) — polite request to add `thepeakhkcafe.com.au` link to existing articles. |
| 5a.4 | Print "As featured in SBS Food + Sydney Morning Herald" tabletop card or window decal. Offline-online flywheel — increases review-leaving rate from walk-ins. |

### Pitch list (cold — outlets that have covered direct competitors but not The Peak)

| Outlet | Angle | Why this works |
|---|---|---|
| Broadsheet Sydney "Local Knowledge" | "Glebe Point Road's HK cafe — the cha chaan teng anchoring Glebe's 2026 dining comeback" | Broadsheet published a Glebe-comeback piece in 2026. The Peak fits the brief; competitors (Sun Ming, HK Cafe Wolli Creek, Old Town) all have Local Knowledge features. |
| Concrete Playground Sydney | "Six dishes to order at a cha chaan teng — and the Glebe spot doing them properly" | Covered Old Town and Chan Kun Kee. |
| Time Out Sydney | "Where to get HK milk tea and pineapple buns in Sydney" — The Peak as anchor venue | Covered Kowloon Cafe and Old Town. |
| SCMP Post Magazine | "Why Glebe? A Sydney cha chaan teng owner's story" — long-form heritage feature | Wrote two Sydney HK-cafe features recently (HK Bing Sutt, broader scene). Highest unclaimed DA win. The Quentin-Dai-as-second-gen-owner story is a fresh angle. |
| Urban List Sydney | Inclusion in "Best Cantonese / HK cafes" roundup | Aim for inclusion not standalone feature. |
| Sitchu Sydney | Inclusion in Best Asian Restaurants list | As above. |
| Hospitality Magazine | Trade-side feature on cha chaan teng category in AU | Covered the category before. |
| **SBS Food (re-pitch a different angle)** | Standalone "How a Glebe cha chaan teng makes Hong Kong macaroni soup" recipe-led piece, building on the existing Annie Hariharan article | Author already trusts the source. Easy second hit at the same outlet — but not on macaroni soup again (SMH already did). Pitch a *different* dish: pineapple bun, French toast, or HK milk tea craft. |
| **SMH Good Food (refresh pitch)** | "Three years on: Sydney's HK cafe scene now" — angle Good Food back to the venues they listed in 2022 with current updates. The Peak as one of the visit-now picks. | Outlet already listed The Peak; a refresh is editorially natural. |

**SMH masthead pacing note:** Two SMH pieces (Good Food + Traveller) within a 3-year window is healthy. A third in 2026 is fine if the angle is genuinely fresh; a fourth in the same year would start looking like planted PR. Diversify before stacking.

**Pitch hygiene:**
- Have a press kit ready: 6 high-res photos (dishes + interior + owner portrait), 200-word bio, founding-story paragraph, hours/address.
- One pitch per outlet, personalised. Reference a specific past piece.
- Follow up once after 7 days.

### Link bait content (for Workstream 3 to seed Workstream 5)

These editorial-style pieces are *not* in the 90-day priority but are the natural backlink magnets to commission once dish + suburb pages are shipped:
- "How to order at a cha chaan teng — a Sydney guide for first-timers" (with bilingual menu cheatsheet)
- "Cha chaan teng vs bing sutt vs dai pai dong — explained for Sydneysiders"
- "Sydney's HK cafe scene 2026 — every cha chaan teng worth knowing" (mention competitors generously; this is how you get cited)

### Reddit / forum footprint (organic)

- Set a calendar reminder to scan r/sydney every two weeks for "best Hong Kong cafe Sydney" / "cha chaan teng Sydney" / "best HK milk tea" threads.
- Reply as a person ("I work at The Peak in Glebe — happy to answer questions"), not as the brand. Disclose the affiliation. Be useful first.
- Threads linger in Google for years.

**Verification:** Track referring-domain count monthly via free tools (Ahrefs free trial, Ubersuggest, GSC Links report). Target: +6 high-DA referring domains by month 6.

---

## Workstream 6 — Analytics & Measurement (Week 1, then continuous)

| # | Action |
|---|---|
| 6.1 | Install GA4 (already in W1.1). |
| 6.2 | Configure GA4 conversions: `view_menu` (menu.html visit), `click_to_call` (tel: link click), `directions_click`, `order_online_click` (DoorDash/UberEats). |
| 6.3 | Connect GA4 ↔ Search Console. |
| 6.4 | Build a simple Looker Studio dashboard (free): top landing pages, top queries, conversion rate per page, GBP "calls"/"directions" trend (manual monthly entry from GBP Insights). |
| 6.5 | Monthly review: top 10 organic keywords, top 10 landing pages, conversion rate per landing page, +/- in GBP actions. |

**KPIs (12-month targets):**
- Organic sessions: +200% vs baseline at month 12
- "Click to call" + "directions" GBP actions: +150%
- Google review count: 150 → 350+
- Top-3 ranking on at least 8 dish/suburb keywords
- Map Pack appearance for "Hong Kong cafe Glebe" + "cha chaan teng Glebe" (likely now), and break into top 5 for "cha chaan teng inner west Sydney" / "Hong Kong cafe Sydney CBD"
- 3+ new editorial backlinks from DA-70+ outlets

---

## Roadmap

_(See the **Master Checklist** at the top of this document — granular, week-by-week, tickable. The summary below is a high-level view.)_

### Week 1 (do first, blocks everything else)
- [ ] All of Workstream 1 (technical/on-page fixes)
- [x] GSC live; [ ] GA4 in progress (W6.1)
- [ ] Fix TripAdvisor + DoorDash NAP (W2.1, W2.2)
- [ ] Submit sydney.com listing (W2.3)

### Weeks 2–4
- [ ] Complete GBP optimisation (W2.4)
- [ ] Build out 4 directory profiles (W2.6)
- [ ] **Ship `hong-kong-macaroni-soup-sydney.html` (P0) — citing both 2025 articles**
- [ ] Ship `/about/quentin-dai.html` author page + `Person` schema (W1.12)
- [ ] Ship `/press.html` (3 articles surfaced)
- [ ] Press kit PDF live
- [ ] Email SBS + SMH editors to request website hyperlinks on existing articles
- [ ] Ship dish pages P1: Silk Stocking Milk Tea + Pineapple Bun
- [ ] Ship suburb page P1: Near University of Sydney
- [ ] Tabletop QR review card + "As featured in" decal live (W4.1, W5a.4)

### Month 2
- [ ] Ship dish pages P2 (HK French Toast, Baked Pork Chop Rice)
- [ ] Ship suburb page P1: Broadway
- [ ] First 2 editorial pitches sent (Broadsheet Local Knowledge, Concrete Playground) — diversify away from SMH

### Month 3
- [ ] Ship dish pages P3 (Satay Beef Noodles, Yuenyeung)
- [ ] Ship suburb pages P2 (Pyrmont, Inner West)
- [ ] First Looker Studio review
- [ ] FAQ page (with FAQPage schema) live

### Month 4–6
- [ ] Reach 250+ Google reviews
- [ ] Pitch SCMP, Good Food, Time Out, Urban List
- [ ] Add 4 more directory listings
- [ ] Audit + refresh dish pages with real photography if any are using stock

---

## Critical Files To Be Modified / Created

**Modify:**
- `/Users/quentindai/The Peak /index.html` — GA4, FAQ schema, OG image, click-to-call fix, hero LCP, sameAs in JSON-LD
- `/Users/quentindai/The Peak /menu.html` — canonical, Menu + MenuItem JSON-LD, GA4
- `/Users/quentindai/The Peak /the-peak-menu-april26.html` — redirect/canonical to `menu.html` or delete
- `/Users/quentindai/The Peak /cha-chaan-teng-sydney.html` — FAQ schema, internal links to new dish + suburb pages
- `/Users/quentindai/The Peak /script.js` — un-obfuscate phone (or delete the obfuscation logic entirely)
- `/Users/quentindai/The Peak /sitemap.xml` — add new dish + suburb pages
- `/Users/quentindai/The Peak /styles.css` — minor: hero performance tweak

**Create:**
- `/Users/quentindai/The Peak /seo-plan.md` — the deliverable (this plan, project-localised)
- `/Users/quentindai/The Peak /assets/og-share.webp` — 1200×630 branded share image
- `/Users/quentindai/The Peak /hong-kong-macaroni-soup-sydney.html` (**P0** — owns the topic SBS + SMH already attribute to Quentin)
- `/Users/quentindai/The Peak /silk-stocking-milk-tea-sydney.html` (P1)
- `/Users/quentindai/The Peak /pineapple-bun-sydney.html` (P1)
- `/Users/quentindai/The Peak /hong-kong-french-toast-sydney.html` (P2)
- `/Users/quentindai/The Peak /baked-pork-chop-rice-sydney.html` (P2)
- `/Users/quentindai/The Peak /satay-beef-noodles-sydney.html` (P3)
- `/Users/quentindai/The Peak /yuenyeung-sydney.html` (P3)
- `/Users/quentindai/The Peak /hong-kong-cafe-near-university-of-sydney.html` (P1)
- `/Users/quentindai/The Peak /hong-kong-cafe-broadway-sydney.html` (P1)
- `/Users/quentindai/The Peak /hong-kong-cafe-pyrmont.html` (P2)
- `/Users/quentindai/The Peak /cha-chaan-teng-inner-west-sydney.html` (P2)
- `/Users/quentindai/The Peak /about/quentin-dai.html` (Week 2 — founder author page)
- `/Users/quentindai/The Peak /press.html` (Week 2 — press / "in the media" page)
- `/Users/quentindai/The Peak /press-kit.pdf` (Week 2)
- `/Users/quentindai/The Peak /faq.html` (Month 3)

**Reuse (don't duplicate):**
- The existing Restaurant + Article + BreadcrumbList JSON-LD blocks on `index.html`, `cha-chaan-teng-sydney.html`, `hong-kong-cafe-glebe.html`, `hong-kong-food-sydney.html` are well-formed — copy the pattern into new pages.
- The existing alt-text style ("EN dish name (中文) — short description at The Peak Hong Kong Cafe, Glebe") is excellent — keep using this.
- The existing geo metadata block (`geo.region`, `geo.placename`, ICBM) — copy into all new pages.
- Existing CSS variables and brand palette (`--primary-color: #E85D55` etc.) — re-use, do not introduce new colours.

---

## Verification Plan

**Per-page verification (every new/modified page):**
1. [Google Rich Results Test](https://search.google.com/test/rich-results) — must pass for declared schema
2. [Schema Markup Validator](https://validator.schema.org/) — must show no errors
3. Lighthouse mobile run — Performance ≥ 90, SEO = 100, Accessibility ≥ 95
4. View page in mobile Safari + Chrome DevTools mobile emulation — verify CTAs, click-to-call, menu link work

**Site-wide verification (week 2 and monthly thereafter):**
1. GSC Coverage report — 0 errors, all pages indexed
2. GSC Performance — track impressions, CTR, average position for: head terms (cha chaan teng sydney, hong kong cafe sydney), dish keywords, suburb keywords
3. GBP Insights — calls, directions, photo views, search-discovery counts
4. `site:thepeakhkcafe.com.au` Google search — all expected pages indexed, none missing
5. Manual SERP check (incognito, Sydney location): top 3 for "Hong Kong cafe Glebe", "cha chaan teng Glebe"; trending up for "Hong Kong cafe Sydney"

**End-to-end conversion test (monthly):**
1. Open site on a 4G-throttled mobile (Chrome DevTools)
2. Click click-to-call CTA — confirm dial intent fires
3. Click "Get directions" — confirm Google Maps opens with the correct (Glebe) destination
4. Click "Menu" — confirm canonical `menu.html` loads in < 3s
5. Click "Order online" — confirm DoorDash/UberEats listing is The Peak Glebe (not the Bondi Junction error)

**Off-site verification (monthly):**
- Search "The Peak Hong Kong Cafe" — first 30 results all show Glebe (no Bondi Junction)
- TripAdvisor + DoorDash listings show Glebe
- sydney.com listing live
- Review count tracking toward target

---

## Out of Scope (per user direction)

- Paid creator/influencer partnerships (TikTok, Instagram). Mentioned only as future option.
- Paid SEO tools (Ahrefs/SEMrush subscription) — plan uses free tools (GSC, GA4, Lighthouse, Looker Studio).
- Site rebuild (e.g. moving off GitHub Pages) — current static stack is sufficient; no migration needed.
- Multilingual / Chinese-language version — noted as future opportunity but not in this plan.
