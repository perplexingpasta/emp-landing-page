# PLAN.md — FestFlow Landing Page

A pure client-side static landing page for FestFlow, a white-label fest management platform targeting Indian medical colleges. Built with Vite + React 19 + Tailwind CSS v4.

## File Tree

```
.
├── index.html                    # HTML shell, Google Fonts preconnects
├── vite.config.ts                # Vite 8, @/ path alias, Tailwind plugin
├── tsconfig.json                 # Root TS config (references)
├── tsconfig.app.json             # App TS: ES2023, bundler mode, React JSX
├── tsconfig.node.json            # Node TS: for vite.config.ts
├── eslint.config.js              # Flat config: TS, React hooks, React refresh
├── components.json               # shadcn/ui config (new-york style, lucide icons)
├── package.json                  # Dependencies & scripts
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── dist/                         # Pre-built output (static .html + .js + .css)
└── src/
    ├── main.tsx                  # Entry point
    ├── App.tsx                   # Shell: Navbar + lazy sections + Footer
    ├── index.css                 # Tailwind v4, CSS vars, fonts, scrollbar
    ├── lib/
    │   └── utils.ts              # cn() — tailwind-merge + clsx
    ├── hooks/
    │   └── useIntersectionObserver.ts  # Scroll visibility hook
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx        # Fixed nav, scroll detection, mobile drawer
    │   │   └── Footer.tsx        # Simple copyright footer
    │   ├── sections/
    │   │   ├── Hero.tsx          # Above-fold: headline, Compare slider, stats
    │   │   ├── Problem.tsx       # Pain points + "40+ hours" stat
    │   │   ├── Features.tsx      # Bento grid feature cards
    │   │   ├── Proof.tsx         # Animated stats, analytics mock, trust points
    │   │   ├── HowItWorks.tsx    # 5-step timeline
    │   │   ├── Testimonials.tsx  # Image carousel (placeholder images)
    │   │   └── CTA.tsx           # WhatsApp contact, limited-slots messaging
    │   ├── shared/
    │   │   ├── ScrollReveal.tsx          # Scroll-triggered fade-up wrapper
    │   │   ├── AnimatedCounter.tsx       # Eased number counter
    │   │   └── ImageCarousel.tsx         # Infinite-scroll CSS carousel
    │   └── ui/                           # shadcn/ui + aceternity components
    │       ├── button.tsx        # Used (Navbar, Hero, CTA)
    │       ├── compare.tsx       # Used (Hero — before/after slider)
    │       ├── glowing-effect.tsx  # Used (Proof — mouse-tracking border glow)
    │       ├── sparkles.tsx      # Used by compare.tsx (simplified stub)
    │       ├── badge.tsx         # UNUSED — dead code
    │       ├── card.tsx          # UNUSED — dead code
    │       ├── separator.tsx     # UNUSED — dead code
    │       ├── lamp.tsx          # UNUSED — dead code
    │       ├── timeline.tsx      # UNUSED — dead code
    │       └── noise-background.tsx  # UNUSED — dead code
```

## Key Modules (ranked by importance)

### 1. `src/App.tsx` — Shell + lazy loading
The entire page is a single scrollable `<div>` with `<Navbar>` at top, then 7 sections in `<main>`, then `<Footer>`. The first section (Hero) is eagerly loaded; all below-fold sections use `React.lazy()` + `<Suspense>` with a spinner fallback. No router — navigation is anchor-scroll (`#problem`, `#features`, etc.).

### 2. `src/index.css` — Design token source of truth
Tailwind v4 with `@theme inline` block. CSS custom properties for colors (all oklch), border-radius scale, and scroll animation keyframes. Two font families: `font-sans` (DM Sans) and `font-heading` (Playfair Display). Background color hardcoded as `#faf5ed` on `body`. Includes custom scrollbar styles and `prefers-reduced-motion` handling.

### 3. `src/hooks/useIntersectionObserver.ts` — Animation trigger
Single hook using native `IntersectionObserver`. Returns `{ ref, isInView }`. By default, fires once (`triggerOnce: true`). Used by `ScrollReveal` and `AnimatedCounter` to trigger entrance animations on scroll.

### 4. `src/components/shared/ScrollReveal.tsx` — Standard animation wrapper
Wraps children in a `motion.div` that fades up (`opacity: 0, y: 24` → `opacity: 1, y: 0`) when scrolled into view. Accepts `delay` prop. Used by most sections.

### 5. `src/components/shared/AnimatedCounter.tsx` — Number animation
Uses `requestAnimationFrame` with easeOutCubic easing to count from 0 to a target number when the element enters viewport. Supports `prefix` and `suffix` (e.g., "₹", "L+").

### 6. `src/components/sections/Hero.tsx` — Above-fold section
Headline, CTA buttons (one scrolls to `#cta`, one links to `https://www.tatvam2026.in`), a `Compare` before/after slider component, and a 3-stat trust bar. The most visually complex section.

### 7. `src/components/ui/compare.tsx` — Before/after image slider
Aceternity UI component. Renders two images with a draggable vertical divider. Supports `hover` and `drag` slide modes, optional autoplay. Uses `motion/react` for animation and `SparklesCore` for divider sparkle effects. Most complex UI component in the project (~180 lines).

### 8. `src/components/ui/glowing-effect.tsx` — Mouse-tracking glow
Aceternity UI component. Renders a conic-gradient border that follows the mouse cursor around a container. Uses `motion/react` for smooth angle animation and `requestAnimationFrame` for position tracking. Used solely in the Proof section around stat cards.

### 9. `src/components/layout/Navbar.tsx` — Fixed nav + mobile drawer
Scroll-aware transparency toggle (`window.scrollY > 20`). Desktop: horizontal button links. Mobile: slide-in drawer from left with staggered link animations, backdrop click-to-close. Body scroll lock when open. All nav clicks scroll to anchor targets.

### 10. `src/lib/utils.ts` — cn() utility
Standard shadcn/ui pattern: `twMerge(clsx(inputs))`. Used throughout for conditional className merging.

## Data Flow

**There is no data flow.** This is a pure static marketing page with zero runtime data dependencies:

- **No API calls.** No `fetch`, no `axios`, no server endpoints.
- **No router.** It's a single HTML page. Anchor links (`#problem`, `#features`, etc.) trigger `scrollIntoView` via `handleNavClick` or direct `<a href>`.
- **No state management.** Component-local `useState` only (mobile menu open, scroll state, animation triggers).
- **No backend.** The `dist/` folder is deployed as static files.
- **No environment variables.** Nothing in `.env`, no `import.meta.env` usage.

The only external references are:
- Google Fonts (preconnect in `index.html`)
- `https://www.tatvam2026.in` (live demo link)
- `https://wa.me/+919XXXXXXXXX` (WhatsApp CTA — placeholder number)
- `https://placehold.co/...` (placeholder images in Hero Compare + Testimonials carousel)

## External Integrations & Env Vars

| Service | Used In | Notes |
|---------|---------|-------|
| Google Fonts | `index.html` | DM Sans + Playfair Display, loaded via CDN `<link>` |
| WhatsApp | `CTA.tsx` | Hardcoded `whatsappNumber = "+919XXXXXXXXX"` — **placeholder, must be replaced** |
| tatvam2026.in | `Hero.tsx`, `Testimonials.tsx` | External link to live demo |
| placehold.co | `Hero.tsx`, `Testimonials.tsx`, `Proof.tsx` | Placeholder images — replace with real screenshots |

**No environment variables are needed.** This is a zero-config static site.

## Verified Conventions

- **Exports:** Named exports throughout, except `App.tsx` which uses `export default function App`.
- **Path alias:** `@/` → `./src/` (configured in `vite.config.ts` and `tsconfig.app.json`).
- **CSS:** Tailwind v4 `@theme inline` — no `tailwind.config` file. Design tokens defined as CSS custom properties with `@theme inline` and `:root` blocks.
- **Colors:** oklch() exclusively. Primary amber: `oklch(0.68 0.17 75)`. Background: `#faf5ed` (hardcoded, not using a CSS var).
- **Fonts:** `font-sans` = DM Sans (body), `font-heading` = Playfair Display (headings). Applied via Tailwind utility classes.
- **Animation:** `framer-motion` for entrance animations and gestures; `motion/react` for newer motion components (used in `compare.tsx`, `glowing-effect.tsx`, `noise-background.tsx`). Custom easing `[0.22, 1, 0.36, 1]` used consistently.
- **Component structure:** `components/layout/` for shell, `components/sections/` for page sections, `components/shared/` for reusable animation wrappers, `components/ui/` for design-system primitives (shadcn/ui + aceternity).
- **shadcn/ui patterns:** `data-slot` attributes, `cva()` for variants, `Slot.Root` for `asChild`.
- **TypeScript:** TypeScript 6 with `verbatimModuleSyntax: true`, `erasableSyntaxOnly: true`, `noUnusedLocals: true`, `noUnusedParameters: true`.
- **No testing framework** configured — zero test files.
- **Server:** None. This project has no backend code whatsoever.

## Known Workarounds & Tech Debt

1. **WhatsApp number is a placeholder** (`+919XXXXXXXXX` in `CTA.tsx`). The CTA button will not work until replaced with a real number.
2. **All testimonial images are placeholders** (`placehold.co` URLs in `Testimonials.tsx`). Must be replaced with real screenshots.
3. **Analytics screenshot is a placeholder** (`Proof.tsx` lines 78-84). Replace with the actual Vercel Analytics screenshot.
4. **Six unused UI components** in `src/components/ui/`: `badge.tsx`, `card.tsx`, `separator.tsx`, `lamp.tsx`, `timeline.tsx`, `noise-background.tsx`. These are shadcn/ui and aceternity boilerplate copied in but never imported by any section. Safe to delete if they're not needed, but they won't add to the bundle since nothing imports them.
5. **`motion` and `framer-motion` both installed.** `motion` (v12.40.0) is the newer package; `framer-motion` (v12.40.0) is also installed. Some components import from `framer-motion`, others from `motion/react`. Consider consolidating to one.
6. **`radix-ui` is the meta-package** (v1.6.0). This pulls in every Radix package. Only `Slot` is actually used (in `button.tsx` and `badge.tsx`). Bundle size could be reduced by switching to `@radix-ui/react-slot`.
7. **`SparklesCore` is a stub** — it renders CSS gradient pulses, not real particle animation. The original aceternity `SparklesCore` was replaced with a simplified version.
8. **`lamp.tsx` exports both** a `default` function (`LampDemo`) and a named export (`LampContainer`). This is from the aceternity demo and is unconventional for the project's named-export pattern.
9. **No README.md** — the file `college-fest-app-readme.md` exists with marketing content but isn't named `README.md`, so GitHub won't render it automatically.
10. **Hardcoded background color** — `body { background-color: #faf5ed; }` in `index.css` bypasses the CSS variable system used for all other colors.
11. **`dist/` is committed to version control** — the pre-built output lives in the repo. This means changes need a rebuild before they're reflected in production.
12. **No image optimization** — all images are loaded via `<img>` tags with `loading="lazy"` but no responsive sizes, no `srcset`, no AVIF/WebP fallbacks.

## Where to Start (by task type)

### Adding a new page section
1. Create `src/components/sections/YourSection.tsx` with a named export.
2. Add a section `id` for anchor navigation (e.g., `id="your-section"`).
3. In `App.tsx`, add a `React.lazy()` import and a `<Suspense>` wrapper with `<SectionFallback />`.
4. If the section should appear in the Navbar, add an entry to `navLinks` in `Navbar.tsx` with a matching `href`.

### Adding a new UI design-system component
1. Create `src/components/ui/your-component.tsx`.
2. Use `cn()` from `@/lib/utils` for className merging.
3. Follow shadcn/ui conventions: `data-slot` attribute, `React.ComponentProps<"element">` type, named exports.

### Changing design tokens (colors, fonts, radii)
1. Edit `src/index.css`. Colors are in the `:root` block as oklch values. Font families in `@theme inline`. Radius scale in `@theme inline`.
2. The background color is hardcoded on `body` and also referenced in Navbar as `bg-[#faf5ed]` — change both places.

### Adding a new animation wrapper
1. Use the existing `useIntersectionObserver` hook from `@/hooks/useIntersectionObserver`.
2. Wrap with `motion.div` from `framer-motion`.
3. Follow the `ScrollReveal` pattern: `ref` on the motion element, `isInView` drives `animate` vs `initial`.

### Replacing placeholder assets
- **WhatsApp number:** Edit `whatsappNumber` in `CTA.tsx`.
- **Testimonial images:** Edit the `testimonialImages` array in `Testimonials.tsx`.
- **Hero Compare images:** Edit `firstImage` and `secondImage` props in `Hero.tsx`.
- **Analytics screenshot:** Replace the placeholder div in `Proof.tsx` (lines 78-84).

### Building for production
```
npm run build    # tsc -b && vite build → outputs to dist/
npm run preview   # vite preview — serves dist/ locally
```
The `dist/` folder is committed to the repo. After `npm run build`, the new output should be staged and committed.
