# Applying the Confetti.io Style Profile

This guide walks you through adapting the existing Next.js + Tailwind site to the **Confetti.io** brand profile found in `JSONPROFILE.json`.

---

## 1 · Set-up & Audit

1. **Read the JSON profile** and keep it open for reference.
2. **Audit the current codebase** (components & pages) to locate:
   - Global styles (`app/globals.css`, `tailwind.config.ts`)
   - Layout wrappers (`app/layout.tsx`)
   - Core UI blocks (hero, proof stats, process steps, etc.)
3. Create a **feature branch** (e.g. `profile/confetti-style`).

---

## 2 · Typography

| Token | Font | Source |
|-------|------|--------|
| Headline | `Space Grotesk, sans-serif` | Google Fonts |
| Body     | `Inter, sans-serif`         | Google Fonts |

1. Add the fonts in `app/layout.tsx` using `<link rel="preconnect" ...>` tags or local font files.
2. Extend Tailwind:

   ```ts title="tailwind.config.ts"
   export default {
     // ... existing config ...
     theme: {
       extend: {
         fontFamily: {
           headline: ["'Space Grotesk'", 'sans-serif'],
           body: ["Inter", 'sans-serif'],
         },
       },
     },
   }
   ```
3. Replace all `className="font-..."` usages accordingly (`font-headline` for headings, `font-body` for paragraphs).

---

## 3 · Color System

```js title="tailwind.config.ts"
extend: {
  colors: {
    base: '#0b0b0c',     // Dark background
    fg:   '#ffffff',     // Light text
    accent: {
      primary:   '#ff2bd6',
      secondary: '#19d4ff',
      muted:     '#8a8a8f',
    },
  },
}
```

Usage rules:
- Default background `bg-base` + text `text-fg`.
- Primary accent for CTAs: `bg-accent-primary`.
- Secondary accent for highlights, gradients, borders.

Update existing components & utility classes to respect this palette.

---

## 4 · Spacing & Type Scale

Inject CSS variables or Tailwind spacing scale overrides:

```css title="app/globals.css"
:root {
  --space-xxl: 8rem;
  --space-xl:  5rem;
  --space-l:   3rem;
  --space-m:   1.5rem;
  --space-s:   0.75rem;
}
```

```ts title="tailwind.config.ts"
spacing: {
  xxl: 'var(--space-xxl)',
  xl:  'var(--space-xl)',
  l:   'var(--space-l)',
  m:   'var(--space-m)',
  s:   'var(--space-s)',
},
fontSize: {
  h1: 'clamp(48px,6vw,88px)',
  h2: 'clamp(32px,4vw,56px)',
  h3: '24px',
  base: '18px',
  mono: '14px',
},
```

Refactor components to use the new scale (`py-xxl`, `text-h1`, etc.).

---

## 5 · Background Animation

Add the gradient blob background once globally in `app/layout.tsx`:

```tsx
<div className="bg fixed inset-0 -z-10" />
```

and in `globals.css`:

```css
.bg {
  background: radial-gradient(at 15% 20%, #ff2bd6 0 35%, transparent 70%),
              radial-gradient(at 85% 80%, #19d4ff 0 35%, transparent 70%),
              radial-gradient(at 70% 15%, #00ffb2 0 35%, transparent 70%);
  filter: blur(60px);
  animation: hue 18s linear infinite;
}
@keyframes hue { to { filter: hue-rotate(360deg); } }
```

Test performance; if heavy, fall back to the linear-gradient variant provided in the JSON.

---

## 6 · Component / Section Architecture

Follow the narrative sequence:

1. **Hero** – oversized headline + subhead trio + primary CTA.
2. **Proof Bar** – 3-5 bold stats.
3. **How It Works** – capture → integrate → reward → analyze.
4. **Advantages** – H3 + one-line explainer per feature.
5. **Gallery / Social Proof** – UGC grid with captions.
6. **Conversion Form** – conversational headline + minimal fields.

Implement or refactor components inside `components/` to match these sections, re-using Tailwind tokens above.

---

## 7 · Buttons & CTAs

Create a reusable button class/component:

```tsx
export const Button = ({ children, ...props }) => (
  <button
    className="bg-accent-primary text-fg py-4 px-7 rounded-full font-semibold uppercase hover:opacity-90 transition"
    {...props}
  >{children}</button>
);
```

Replace all anchor/button elements with this component.

---

## 8 · Voice & Microcopy

- Lead with **verbs** (e.g. _"Join the Tour"_).
- Use **exclusive framing** (“for your biggest fans”).
- Keep copy **user-centric**, addressing “you”.
- H3s should be **short + declarative**, followed by a single-sentence explainer.

Audit content in `app/` pages & update language accordingly.

---

## 9 · Imagery & Iconography

1. Replace stock photos with **real, candid event shots**.
2. Build simple **line-icon** set (plus signs, arrows, step numbers) or use an icon library.
3. Use photo mosaics/grids for authenticity.

---

## 10 · Motion & Micro-interactions

- Add **fade/slide reveals** with `framer-motion` or Tailwind scroll animations.
- Implement **stat counters** (e.g. for the Proof Bar) ticking up on viewport entry.

---

## 11 · QA & Launch

1. Verify accessibility (contrast against dark base).
2. Test responsive typography & spacing.
3. Lighthouse performance pass.
4. Remove obsolete styles and dead assets.
5. PR review → merge → deploy.

---

## 12 · Future Enhancements

- Explore WebGL blob animations if you need richer motion.
- A/B test CTA copy & colors.
- Modularize tokens into a **design-tokens** package for multi-app reuse.

---

_Confetti.io profile applied – ship it!_ 