# Page Blueprint: Confetti.io Home

> Source: `https://www.confetti.io/`
> Captured: 2026-02-19
> Screenshots: 18 viewport + 1 full-page | Sections: 12 | Animations: 8

This blueprint is a **self-contained recreation spec**. Use it to rebuild this page's exact look, feel, and motion in any tech stack.

---

## 1. Page Summary

**What this page is:** A marketing/brand landing page for Confetti.io — a live corporate events platform that captures and amplifies audience moments via SMS.

**Visual impression:** Predominantly dark (near-black) background with stark white oversized display text. The palette shifts dramatically section by section: black → white → black → lime green → olive/green gradient. Motion is minimal and architectural — large text simply exists at full weight, no decorative micro-animations on most sections. The final CTA section uses a subtle multi-color radial gradient background that shifts from deep black-purple on the left to sage green/olive on the right. Feels premium, modern, and bold — fashion-forward rather than SaaS-typical.

**Page height:** ~18 viewports tall (~15,381px on a 900px viewport, 1440px wide)

---

## 2. Section-by-Section Breakdown

### Section 1: Navigation / Header

**Screenshot reference:** Screenshot #0

**What you see:**
- Sticky dark nav bar at top of page
- Logo "confetti" in white lowercase on the far left
- Right side: text links "About", "Case Studies", "Pricing" + a pill-shaped "Get in Touch" button in lime green (#CAFF00 or similar)
- Nav background is fully transparent over the dark hero, appears as dark bar

**Layout:**
- Type: fixed nav header
- Container: full-width
- Columns: 2 (logo left, links + CTA right)
- Alignment: space-between
- Spacing: ~20px vertical padding

**Content:**
- Logo: "confetti" wordmark (lowercase)
- Links: About, Case Studies, Pricing
- CTA button: "Get in Touch" — lime green pill

**Styling:**
- Background: transparent / dark (inherits hero)
- Text color: white
- Button: lime green (#CAFF00) background, dark text, ~24px border-radius (pill)

**Animation on this section:**
- Sticky — persists across all screenshots throughout the scroll
- Trigger: always present (position: fixed or sticky)
- No entrance animation detected

**How to build it:**
```
position: fixed; top: 0; width: 100%; z-index: 100;
display: flex; justify-content: space-between; align-items: center;
padding: 16px 48px;
Background: transparent (overlays hero dark bg)
CTA: border-radius: 9999px; background: #CAFF00; color: #000; padding: 10px 24px;
```

---

### Section 2: Hero

**Screenshot reference:** Screenshots #0, #1

**What you see:**
- Full-viewport-height dark section (near-black, #0A0A0A or #111)
- Centered massive display text: "CONFETTI" in white, extremely large (fills most of viewport width)
- Below that: a subtitle/tagline in smaller white text
- A lime green pill CTA button centered below the tagline
- Small line-art style icons/arrows scattered decoratively around (barely visible)

**Layout:**
- Type: hero — full-viewport centered
- Container: full-width
- Columns: 1 (all centered)
- Alignment: centered
- Spacing: ~100px top padding (below fixed nav), ~40px between elements

**Content:**
- Heading: "CONFETTI" (or brand wordmark as display text, all caps)
- Subheading: tagline about live events / SMS capture
- CTA: "Get in Touch" — lime green pill button

**Styling:**
- Background: very dark near-black (#0A0A0A)
- Text color: white
- Heading font: very heavy / black weight, wide tracking, possibly custom or system display font

**Animation on this section:**
- Page load: heading appears at full opacity — no fade-in transition observed
- The hero appears immediately rendered on load

**How to build it:**
```
min-height: 100vh; display: flex; flex-direction: column;
align-items: center; justify-content: center;
background: #0A0A0A; color: #fff;
h1: font-size: clamp(80px, 12vw, 180px); font-weight: 900; letter-spacing: -2px;
```

---

### Section 3: Marquee / Ticker Strip

**Screenshot reference:** Screenshots #1, #2

**What you see:**
- A horizontal scrolling ticker/marquee band
- Alternating text items and small circular icons/logos in white on dark background
- Items scroll continuously left
- Examples: "REAL-TIME CONTENT", "LIVE EVENTS", brand/client logos

**Layout:**
- Type: full-width marquee strip
- Container: full-width (overflow hidden)
- Height: ~60-80px
- No padding — bleeds edge to edge

**Content:**
- Text phrases + small circular icon elements repeating infinitely

**Styling:**
- Background: matches dark section or slight variation
- Text: white, uppercase, medium weight

**Animation on this section:**
- Continuous left-scroll animation — always playing
- CSS: `@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`
- Duration: ~20-30s linear infinite
- No scroll trigger — plays regardless of scroll position

**How to build it:**
```
.marquee-track { display: flex; width: 200%; animation: marquee 25s linear infinite; }
.marquee-track:hover { animation-play-state: paused; } /* optional */
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
Duplicate content once so it loops seamlessly.
```

---

### Section 4: "How It Works" / Feature Explanation

**Screenshot reference:** Screenshots #2, #3, #4

**What you see:**
- White background section — sharp contrast from the dark hero
- Large black display text heading (e.g., "HOW IT WORKS" or feature title)
- Below: 2–3 column layout with feature steps or description items
- Each item has a number or icon, a short heading, and 1–2 lines of body text
- Clean, editorial feel with generous whitespace

**Layout:**
- Type: feature explanation / numbered steps
- Container: max-width ~1200px, centered
- Columns: 2–3 items side by side
- Alignment: top-aligned columns
- Spacing: ~80px vertical padding, ~40px gap between columns

**Content:**
- Section label: small uppercase category text
- Main heading: large display text
- Items: numbered or icon-prefixed feature descriptions

**Styling:**
- Background: white (#FFFFFF)
- Text color: black (#000 or #111)
- No cards — items are just type on white

**Animation on this section:**
- No scroll-reveal animation detected (elements appear at full opacity)
- Clean, static layout

**How to build it:**
```
background: #fff; color: #000;
padding: 80px 48px;
.features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
h2: font-size: clamp(48px, 6vw, 96px); font-weight: 900;
```

---

### Section 5: Event Photography / Visual Showcase

**Screenshot reference:** Screenshots #4, #5, #6

**What you see:**
- Dark background returns
- Full-width or near-full-width image(s) showing event photography — crowds, confetti, live events
- Images load with a **blur-to-sharp effect** (visible blur on load, then sharpens)
- Text overlay or adjacent heading in white
- Possible image carousel or grid of multiple photos

**Layout:**
- Type: media/visual showcase
- Container: full-width or 90% width
- Images: large, possibly 16:9 or panoramic ratio

**Content:**
- Event photography images
- Short caption or heading text

**Styling:**
- Background: dark (#0A0A0A)
- Images: rounded corners (~12px) or full-bleed

**Animation on this section:**
- **Blur-to-sharp image load**: Images start blurred (CSS `filter: blur(30px) saturate(0)`) then transition to sharp (`filter: none`) over ~800ms ease-in
- Trigger: on image load / src swap
- CSS:
```css
img[data-animate-blur] {
  filter: blur(30px) saturate(0);
  transition: filter 0.8s ease-in;
}
img[data-animate-blur].loaded {
  filter: none;
}
```
- JS: add `.loaded` class when image loads

**How to build it:**
```
Start all images blurred via CSS filter.
On image load event: img.classList.add('loaded') to trigger transition.
Layout: CSS grid or flex with gap, object-fit: cover on images.
```

---

### Section 6: Stats / Social Proof Numbers

**Screenshot reference:** Screenshot #6, #7

**What you see:**
- Dark background
- Very large white numerals (stat numbers) — e.g., "10,000+" events, "2M+" photos, etc.
- Each stat has a small label below in smaller text
- Stats arranged in a row (3–4 across)
- Clean, impactful layout — numbers are the visual anchor

**Layout:**
- Type: stats/numbers row
- Container: max-width ~1200px, centered
- Columns: 3–4 equal columns
- Alignment: centered

**Content:**
- Stat number (very large, bold)
- Stat label (small, muted white)

**Styling:**
- Background: dark (#111)
- Number text: white, very large (~80–120px), heavy weight
- Label text: white/gray, ~16–18px

**Animation on this section:**
- Numbers appear at full opacity — no count-up animation detected

**How to build it:**
```
display: flex; justify-content: space-around; padding: 80px 48px;
.stat-number { font-size: clamp(64px, 8vw, 120px); font-weight: 900; }
.stat-label  { font-size: 16px; color: rgba(255,255,255,0.6); margin-top: 8px; }
```

---

### Section 7: Testimonials / Case Studies

**Screenshot reference:** Screenshots #7, #8, #9

**What you see:**
- White background section
- Large pull-quote style testimonials — oversized quotation mark or bold quote text
- Company name / logo attribution below each quote
- Either single quote at a time (carousel) or 2-up layout
- Very typographic — the quote text IS the design element

**Layout:**
- Type: testimonials / social proof
- Container: max-width ~900–1100px, centered
- Columns: 1 or 2
- Spacing: generous (~100px vertical)

**Content:**
- Quote text in large display size
- Attribution: person name, title, company

**Styling:**
- Background: white
- Quote text: black, large (~32–48px), serif or heavy sans
- Attribution: gray/muted, smaller

**Animation on this section:**
- Possible horizontal slide carousel (left/right arrows)
- Individual quotes may fade in — no strong scroll-reveal detected

**How to build it:**
```
background: #fff; padding: 100px 48px;
.quote { font-size: clamp(28px, 4vw, 48px); font-weight: 700; line-height: 1.2; }
.attribution { font-size: 16px; color: #666; margin-top: 24px; }
Carousel: overflow: hidden on container, translateX on track for slides.
```

---

### Section 8: Lime Green CTA Section

**Screenshot reference:** Screenshots #9, #10

**What you see:**
- Full section with a vivid lime green / yellow-green background (#CAFF00 or similar)
- Black display text (large heading) centered
- Black pill CTA button
- Very bold, high-contrast — one of the most visually striking sections

**Layout:**
- Type: CTA banner / conversion section
- Container: full-width or max-width centered
- Columns: 1 (all centered)
- Spacing: ~100px vertical padding

**Content:**
- Heading: bold CTA text (e.g., "READY TO CAPTURE THE MOMENT?")
- CTA button: black pill with white text

**Styling:**
- Background: lime green (#CAFF00 or #C8FF00)
- Text color: black (#000)
- Button: black pill, white text, border-radius: 9999px

**Animation on this section:**
- No scroll animation detected — full opacity on entry

**How to build it:**
```
background: #CAFF00; color: #000; text-align: center;
padding: 100px 48px;
h2: font-size: clamp(48px, 7vw, 100px); font-weight: 900;
.cta-btn { background: #000; color: #fff; border-radius: 9999px; padding: 16px 40px; }
```

---

### Section 9: Partner / Client Logos

**Screenshot reference:** Screenshots #10, #11

**What you see:**
- Dark background
- Grid or row of client/partner logos — white/monochrome versions on dark bg
- Possibly 2 rows of logos, ~4–6 per row
- Section heading: "TRUSTED BY" or similar in white

**Layout:**
- Type: logo grid / social proof
- Container: max-width ~1200px
- Columns: 4–6 logos per row
- Alignment: centered, equal spacing

**Content:**
- Company logos (monochrome white)
- Section label above

**Styling:**
- Background: dark
- Logos: white, ~120–160px wide, opacity ~0.7–1.0

**Animation on this section:**
- No animation detected

**How to build it:**
```
display: grid; grid-template-columns: repeat(5, 1fr); gap: 40px;
align-items: center; padding: 80px 48px;
img { filter: brightness(0) invert(1); opacity: 0.8; }
```

---

### Section 10: "The Experience" Feature Detail

**Screenshot reference:** Screenshots #11, #12, #13, #14

**What you see:**
- Alternating dark/light sections describing product features
- Left: large text description; Right: product screenshot or mockup image
- Or: full-width bold text sections with no imagery
- Text sizes are very large — this page uses display text for body copy
- Background shifts: dark → slightly lighter dark → back to dark

**Layout:**
- Type: alternating feature rows
- Container: max-width ~1200px
- Columns: 2 (text + image) or 1 (full-width text)
- Alignment: left text, right image (alternates)

**Content:**
- Feature headings (large, bold)
- Short descriptive paragraphs
- Possible product UI screenshots

**Styling:**
- Background: dark variations (#111, #1A1A1A)
- Text: white
- Images: rounded corners, possible subtle shadow

**Animation on this section:**
- No strong scroll-reveal detected in screenshots (elements appear at full opacity)

**How to build it:**
```
.feature-row { display: flex; align-items: center; gap: 80px; padding: 80px 48px; }
.feature-row:nth-child(even) { flex-direction: row-reverse; }
h3: font-size: clamp(36px, 5vw, 72px); font-weight: 900;
```

---

### Section 11: "LET'S CREATE MEMORIES TOGETHER" CTA + Contact Form

**Screenshot reference:** Screenshots #15, #16

**What you see:**
- Dark background (transitions to gradient toward bottom)
- Massive oversized display text: "LET'S CREATE MEMORIES TOGETHER" — white, fills nearly the entire viewport width
- Background has a subtle purple/violet glow on the right side
- Below: a light gray rounded card containing a contact form
- Form fields: Full Name, Email, Company Name, Position — all with dark (#000) input backgrounds
- Submit button: lime green pill ("Submit")
- Form card: light gray (#E8E8E8 or similar), ~12–16px border-radius

**Layout:**
- Type: CTA + contact form
- Container: centered, form card ~600px wide
- Columns: 1 (stacked)
- Spacing: ~60px between heading and form

**Content:**
- Heading: "LET'S CREATE MEMORIES TOGETHER"
- Subheading: "Come on tour with us"
- Form: Full Name, Email, Company Name, Position
- Submit CTA: "Submit"

**Styling:**
- Background: dark with purple radial gradient glow
- Heading: white, display size (~120px), extremely bold
- Form card: light gray background, dark input fields
- Submit button: lime green (#CAFF00), pill shape

**Animation on this section:**
- No entrance animation detected

**How to build it:**
```
section { background: #0A0A0A; position: relative; overflow: hidden; }
/* Gradient glow */
section::before {
  content: ''; position: absolute; right: 0; top: 50%;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(120,80,200,0.4), transparent 70%);
}
h2 { font-size: clamp(60px, 10vw, 140px); font-weight: 900; color: #fff; }
.form-card { background: #E4E4E4; border-radius: 16px; padding: 40px; width: 600px; }
input { background: #000; color: #fff; border: none; padding: 14px 16px; border-radius: 8px; width: 100%; }
.submit { background: #CAFF00; border-radius: 9999px; padding: 14px 32px; border: none; cursor: pointer; }
```

---

### Section 12: Footer

**Screenshot reference:** Screenshot #16, #17

**What you see:**
- Very minimal footer
- Background: multi-color gradient (gray-purple on left, olive-green on right) — radial gradient
- Centered text: address "2554 LINCOLN BLVD, VENICE, CA 90291" and "CONFETTI.IO" in monospace/code-style font
- Bottom row: "PRIVACY POLICY | TERMS | © 2025 CONFETTI INC."
- No elaborate footer columns — extremely minimal

**Layout:**
- Type: minimal footer
- Container: full-width, centered text
- Spacing: ~60px vertical padding

**Content:**
- Address: "2554 LINCOLN BLVD, VENICE, CA 90291"
- Domain: "CONFETTI.IO"
- Legal links: Privacy Policy, Terms, Copyright

**Styling:**
- Background: radial/multi-stop gradient from gray-purple (left) to olive-green (right)
  - Approximate: `background: radial-gradient(ellipse at left, #7B6B8A 0%, #4A4A5A 30%, #6B7A4A 70%, #8B9A5A 100%)`
- Text: white/light, monospace font
- Links: light gray, small

**Animation on this section:**
- None

**How to build it:**
```
footer {
  background: radial-gradient(ellipse at 20% 50%, #6B5B7A 0%, #3A3A4A 40%, #5A6A3A 70%, #7A8A4A 100%);
  text-align: center; padding: 60px 48px;
  font-family: monospace; color: rgba(255,255,255,0.7);
}
.footer-address { font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; }
.footer-legal { font-size: 12px; margin-top: 32px; }
.footer-legal a { color: rgba(255,255,255,0.5); }
```

---

## 3. Animations & Motion Catalog

### Animation Library Detected

| Library | Evidence |
|---------|----------|
| None — CSS only | No GSAP, AOS, Framer Motion, ScrollReveal, or Lottie script tags found. All motion via native CSS transitions and @keyframes. |
| CSS View Transitions API | `::view-transition-*` pseudo-elements and named transition groups in CSS |

### Every Animation on the Page

#### Animation 1: Marquee Ticker (Section 3)
- **What:** Horizontal text/logo ticker strip
- **Trigger:** Always-playing (page load, no scroll trigger)
- **Start state:** `transform: translateX(0)`
- **End state:** `transform: translateX(-50%)`
- **Duration:** ~25s
- **Easing:** `linear`
- **Delay:** 0ms
- **Reverse on scroll-up:** N/A (continuous)
- **CSS to recreate:**
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.marquee-track {
  display: flex;
  width: 200%;
  animation: marquee 25s linear infinite;
}
```
- **JS needed:** Duplicate the content once inside the track so it loops seamlessly

#### Animation 2: Image Blur-to-Sharp (Section 5)
- **What:** Event photography images load blurred then sharpen
- **Trigger:** On image load / src resolve
- **Start state:** `filter: blur(30px) saturate(0)`
- **End state:** `filter: none` (or `blur(0) saturate(1)`)
- **Duration:** 800ms
- **Easing:** `ease-in`
- **Delay:** 0ms
- **Reverse on scroll-up:** No
- **CSS to recreate:**
```css
img[data-animate-blur] {
  filter: blur(30px) saturate(0);
  transition: filter 0.8s ease-in;
}
img[data-animate-blur].loaded {
  filter: blur(0) saturate(1);
}
```
- **JS needed:** `img.addEventListener('load', () => img.classList.add('loaded'))`

#### Animation 3: Page Transition — Horizontal Slide
- **What:** Between-page navigation transition (slide left/right)
- **Trigger:** Navigation click (View Transitions API)
- **Start state (old):** `transform: translateX(0)`
- **End state (old):** `transform: translateX(-100%)`
- **Start state (new):** `transform: translateX(100%)`
- **End state (new):** `transform: translateX(0)`
- **Duration:** 600ms
- **Easing:** `cubic-bezier(.83, 0, .17, 1)` (aggressive ease-in-out)
- **CSS to recreate:**
```css
@keyframes slide-out-left {
  from { transform: translateX(0); }
  to   { transform: translateX(-100%); }
}
@keyframes slide-in-right {
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
}
::view-transition-old(root) {
  animation: slide-out-left 0.6s cubic-bezier(.83,0,.17,1);
}
::view-transition-new(root) {
  animation: slide-in-right 0.6s cubic-bezier(.83,0,.17,1);
}
```
- **JS needed:** `document.startViewTransition(() => { /* navigate */ })`

#### Animation 4: Page Transition — Vertical Slide
- **What:** Alternate page transition (slide up/down)
- **Trigger:** Navigation click (View Transitions API, specific routes)
- **Duration:** 600ms
- **Easing:** `cubic-bezier(.83, 0, .17, 1)`
- **CSS to recreate:**
```css
@keyframes slide-out-up {
  from { transform: translateY(0); }
  to   { transform: translateY(-100%); }
}
@keyframes slide-in-down {
  from { transform: translateY(100%); }
  to   { transform: translateY(0); }
}
```

#### Animation 5: Page Transition — Cross-Fade
- **What:** Fade between pages
- **Trigger:** Navigation click (View Transitions API)
- **Duration:** 350ms
- **Easing:** `ease`
- **CSS to recreate:**
```css
@keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }
@keyframes fade-in  { from { opacity: 0; } to { opacity: 1; } }
::view-transition-old(root) { animation: fade-out 0.35s ease; }
::view-transition-new(root) { animation: fade-in 0.35s ease; }
```

#### Animation 6: Background Section Color Shift
- **What:** Dramatic background color changes between sections (black → white → black → lime → black → gradient)
- **Trigger:** Scroll position (hard cuts between sections, not animated transitions)
- **Motion:** Not animated — abrupt section-to-section background change
- **Recreation:** Just alternate section background colors:
```css
section:nth-child(even) { background: #fff; color: #000; }
section:nth-child(odd)  { background: #0A0A0A; color: #fff; }
.section-lime    { background: #CAFF00; color: #000; }
.section-gradient { background: radial-gradient(ellipse at 20% 50%, #6B5B7A, #5A6A3A); }
```

#### Animation 7: Scroll Blocker (Modal/Menu)
- **What:** When nav menu or modal opens, page scroll is blocked
- **Trigger:** Click on hamburger menu
- **CSS to recreate:**
```css
body.menu-open { overflow: hidden; }
```
- **JS needed:** Toggle `menu-open` class on `body`

#### Animation 8: Button Hover
- **What:** CTA buttons darken/shift on hover
- **Trigger:** Mouse hover
- **Duration:** 200ms
- **Easing:** `ease`
- **CSS to recreate:**
```css
.btn-lime {
  background: #CAFF00;
  transition: background 0.2s ease, transform 0.2s ease;
}
.btn-lime:hover {
  background: #B8F000;
  transform: scale(1.02);
}
.btn-dark {
  background: #000;
  transition: background 0.2s ease;
}
.btn-dark:hover {
  background: #222;
}
```

### Hover Effects

| Element | Property Changes | Transition |
|---------|-----------------|------------|
| Lime green buttons | background darkens (~10%), scale 1.02 | all 200ms ease |
| Dark/black buttons | background lightens to #222 | background 200ms ease |
| Nav links | color shift to muted gray | color 150ms ease |
| Logo/wordmark | opacity 0.8 | opacity 200ms ease |

### Page Load Sequence

| Order | Element | Animation | Delay |
|-------|---------|-----------|-------|
| 1 | Nav header | Appears immediately | 0ms |
| 2 | Hero heading "CONFETTI" | Appears at full opacity | 0ms |
| 3 | Hero subtext | Appears at full opacity | 0ms |
| 4 | Hero CTA button | Appears at full opacity | 0ms |

> Note: No staggered load sequence detected — content renders at full opacity without entrance animations.

### Background / Parallax Effects

| Effect | Location | Description | Recreation |
|--------|----------|-------------|------------|
| Hard section cuts | All sections | Background switches abruptly (no transition) between black, white, lime green, gradient | CSS background on each `<section>` |
| Radial gradient glow | Section 11 (contact CTA) | Purple/violet radial glow on right side of dark background | `background: radial-gradient(circle at 80% 50%, rgba(120,80,200,0.4), transparent)` |
| Multi-color radial gradient | Footer | Gray-purple on left, olive-green on right | `background: radial-gradient(ellipse at 20% 50%, #6B5B7A, #3A3A4A, #5A6A3A)` |
| No parallax | All | No parallax scrolling detected | N/A |

### Sticky / Pinned Elements

| Element | Sticks at | Unsticks at | Notes |
|---------|-----------|-------------|-------|
| Nav header | Top of page | Never | position: fixed; z-index: 100 |

---

## 4. Design Tokens

### Colors
| Role | Value | Used On |
|------|-------|---------|
| Primary accent | `#CAFF00` (lime green) | CTA buttons, submit button, nav CTA |
| Background dark | `#0A0A0A` or `#111111` | Hero, most sections |
| Background light | `#FFFFFF` | Feature sections, testimonials |
| Background lime | `#CAFF00` | Full CTA section |
| Background gradient | `radial-gradient(ellipse at 20% 50%, #6B5B7A, #3A3A4A, #5A6A3A)` | Footer |
| Text on dark | `#FFFFFF` | All dark section text |
| Text on light | `#000000` | All light section text |
| Form card bg | `#E4E4E4` | Contact form container |
| Input bg | `#000000` | Form inputs |
| Muted text | `rgba(255,255,255,0.6)` | Stat labels, footer links |

### Typography
| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| H1 (Hero display) | System sans-serif (Arial/Helvetica or custom) | clamp(80px, 12vw, 180px) | 900 | 0.9 | -2px to -4px |
| H2 (Section heading) | Same | clamp(48px, 7vw, 120px) | 900 | 0.95 | -1px to -2px |
| H3 (Subsection) | Same | clamp(32px, 5vw, 72px) | 900 | 1.1 | -0.5px |
| Body | Arial, Helvetica, sans-serif | 16–18px | 400 | 1.6 | 0 |
| Caption / label | Same | 12–14px | 400 | 1.4 | 0.05–0.1em |
| Nav link | Same | 14–16px | 400–500 | 1 | 0 |
| Button | Same | 14–16px | 600–700 | 1 | 0 |
| Footer (address) | Monospace (Courier, system) | 13–14px | 400 | 1.5 | 0.1em |

### Spacing System
- Section vertical padding: ~80–100px top and bottom
- Container max-width: ~1200–1280px
- Container side padding: ~48px on desktop
- Column gap: ~40–80px
- Text stack gap: ~16–24px between heading and body
- Button padding: ~12px vertical, ~24–40px horizontal

### Border Radius
| Element | Radius |
|---------|--------|
| CTA buttons | 9999px (pill) |
| Form inputs | 8px |
| Form card | 16px |
| Images | 12px |
| Logo circles (marquee) | 50% |

### Shadows
| Element | Shadow |
|---------|--------|
| Sticky nav (scrolled) | `0 1px 4px rgba(0,0,0,0.6)` |
| Form card | Subtle — none detected or `0 4px 20px rgba(0,0,0,0.1)` |
| Buttons | No shadow — color contrast only |

---

## 5. Responsive Behavior

**Breakpoints detected:**
- Desktop: > 1024px (designed at 1440px)
- Tablet: 768px–1024px
- Mobile: < 768px

**Key responsive changes:**
- Display headings scale down significantly (use `clamp()` for fluid sizing)
- 3-column layouts collapse to 1-column stack on mobile
- Nav collapses to hamburger menu (hamburger icons detected in source)
- Hero display text reduces from ~180px to ~48–64px
- Side padding reduces from 48px to 16–24px
- Marquee persists across all breakpoints
- Form card goes full-width on mobile

---

## 6. Assets Needed

### Images
| Description | Dimensions | Notes |
|-------------|-----------|-------|
| Event photography (crowd shots, confetti, live events) | 1600×900px+ | Use blur-to-sharp load animation |
| Client/partner logos | ~160×80px | Monochrome white versions for dark bg |
| Product screenshots/mockups | 800×600px | Rounded corners |

### Icons
- System: Minimal — small circular decorative elements, possibly custom SVG
- Count: ~5–10 total
- Style: Line art, white, small (~24–32px)

### Fonts to Load
| Font | Source | Weights |
|------|--------|---------|
| Primary sans-serif | System (Arial/Helvetica) or custom loaded via Wix | 400, 700, 900 |
| Monospace (footer) | System (Courier New, monospace) | 400 |

> Note: The site uses Wix's proprietary font system (`--font_X` CSS variables). The actual brand font may be a custom typeface heavier than standard Arial. When recreating, try a heavy display font like **Suisse Int'l**, **Neue Haas Grotesk**, **Inter** (weight 900), or **Aktiv Grotesk**. The key characteristic is: maximum weight (900/black), tight tracking, condensed feel.

---

## 7. Recreation Checklist

Build in this order:

- [ ] **Global setup** — CSS variables for colors, font-size clamp values, box-sizing: border-box, scroll-behavior: smooth
- [ ] **Nav/Header** — `position: fixed`, flexbox, lime green pill CTA, hamburger for mobile
- [ ] **Section 1: Hero** — full-viewport dark, centered display text, lime green pill button
- [ ] **Section 2: Marquee ticker** — CSS `@keyframes marquee` with duplicated content, `overflow: hidden`
- [ ] **Section 3: How It Works** — white bg, 3-column grid, large black display headings
- [ ] **Section 4: Event Photography** — dark bg, image grid with blur-to-sharp load animation
- [ ] **Section 5: Stats** — dark bg, flex row of large bold numbers + labels
- [ ] **Section 6: Testimonials** — white bg, large pull-quote typography, optional carousel
- [ ] **Section 7: Lime CTA** — `background: #CAFF00`, full-width, centered black display text + dark pill button
- [ ] **Section 8: Client Logos** — dark bg, grid of white monochrome logos
- [ ] **Section 9: Feature Details** — alternating dark rows, text + image, large display headings
- [ ] **Section 10: LET'S CREATE MEMORIES CTA** — dark bg with radial purple glow, massive display text, light gray form card
- [ ] **Footer** — multi-color radial gradient bg, centered monospace address text, minimal legal links
- [ ] **Scroll animations** — image blur-to-sharp (Intersection Observer + load event), marquee (CSS only)
- [ ] **Hover interactions** — button scale + background darken (200ms ease)
- [ ] **Page transitions** — CSS View Transitions API for between-page navigation (optional — only affects multi-page navigation)
- [ ] **Responsive** — test at 375px, 768px, 1440px; use `clamp()` for all display text
- [ ] **Performance** — lazy-load images with `loading="lazy"`, preload fonts, `will-change: transform` on marquee track

---

## 8. Open Questions

- **Exact font**: The brand uses a very heavy display typeface. The exact font loaded by Wix could not be determined from the page source (Wix obfuscates font loading). The closest free alternatives: **Plus Jakarta Sans** weight 800, **Figtree** weight 900, or **Space Grotesk** weight 700.
- **Marquee exact speed**: The scroll rate is estimated at ~25s per loop. Adjust based on content length.
- **Image sources**: Event photography is original — you'll need your own event/party photography with similar energy (large crowds, confetti, live performances).
- **Mobile layout**: Only the desktop viewport (1440px) was captured. Mobile breakpoints are inferred from the Wix responsive system.
- **Testimonial carousel behavior**: Whether testimonials auto-rotate or require user interaction was not testable via static screenshots.
- **Exact lime green hex**: The lime green reads as approximately `#CAFF00` or `#C8FF00` from visual inspection. Exact value should be sampled from the live site using a color picker tool.
- **Contact form behavior**: Form submission endpoint and validation behavior not tested.
- **Footer gradient exact values**: The multi-color gradient (gray-purple to olive-green) is visually estimated. Use a browser devtools gradient picker on the live site to extract exact values.
