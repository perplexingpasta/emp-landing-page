# PLAN.md — FestFlow / Rishabh J. Landing Page

Static client-side landing page selling a white-label fest management platform to Indian medical college fest organisers. Built with Vite 8 + React 19 + Tailwind CSS v4. Zero backend, zero API calls, zero runtime data dependencies.

## File Tree

```
.
├── index.html                       # HTML shell, Google Fonts preconnect + <link>
├── vite.config.ts                   # Vite 8, @/ path alias, Tailwind plugin
├── tsconfig.json                    # Root TS config (references tsconfig.app + tsconfig.node)
├── tsconfig.app.json                # App TS: ES2023, bundler mode, React JSX
├── tsconfig.node.json               # Node TS: covers vite.config.ts only
├── eslint.config.js                 # Flat config: TS, React hooks, React refresh
├── components.json                  # shadcn/ui config (new-york style, lucide icons)
├── package.json
├── public/                          # Static assets served at /
│   ├── favicon.svg
│   ├── icons.svg
│   ├── old.webp, old-mobile.webp, old-tablet.webp   # Before images for Compare slider
│   ├── new.webp, new-mobile.webp, new-tablet.webp   # After images for Compare slider
│   ├── analytics.webp                                # Analytics screenshot (Proof section)
│   └── testimonials/                                # Carousel images (4 files)
│       ├── 1.webp, 2.webp, 3.webp, 4.webp
├── dist/                            # Build output (NOT tracked in git)
└── src/
    ├── main.tsx                     # Entry: ReactDOM.createRoot, StrictMode
    ├── App.tsx                      # Shell: Navbar + 9 lazy sections + Footer
    ├── index.css                    # Tailwind v4, CSS vars, fonts, scrollbar, reduced-motion
    ├── lib/
    │   └── utils.ts                 # cn() = twMerge(clsx(inputs))
    ├── hooks/
    │   └── useIntersectionObserver.ts
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx           # Fixed nav, scroll detection, mobile slide-in drawer
    │   │   └── Footer.tsx           # Copyright footer
    │   ├── sections/
    │   │   ├── Hero.tsx             # Above-fold: headline, Compare slider, CTA buttons
    │   │   ├── ImagineThis.tsx      # "Nightmare vs dream" contrast narrative
    │   │   ├── Problem.tsx          # 4 pain-point cards (2×2 grid)
    │   │   ├── Features.tsx         # Two-column checklist (organiser + delegate features)
    │   │   ├── Prestige.tsx         # Status-signaling with website mockup
    │   │   ├── Proof.tsx            # Animated stats + analytics screenshot
    │   │   ├── HowItWorks.tsx       # 5-step vertical timeline (alternating L/R)
    │   │   ├── TestimonialsWhatsApp.tsx  # Auto-scrolling screenshot carousel (active)
    │   │   ├── Testimonials.tsx     # Named quote cards version (DEAD — not in App.tsx)
    │   │   ├── AboutFounder.tsx     # Personal story + avatar
    │   │   ├── Pricing.tsx          # 2-tier pricing (DEAD — commented out in App.tsx)
    │   │   └── CTA.tsx              # WhatsApp contact card
    │   ├── shared/
    │   │   ├── ScrollReveal.tsx     # Scroll-triggered fade-up (framer-motion)
    │   │   ├── AnimatedCounter.tsx  # Eased number counter (requestAnimationFrame)
    │   │   ├── ImageCarousel.tsx    # Infinite CSS-scroll carousel (clones children)
    │   │   └── SectionDivider.tsx   # Thin horizontal rule between sections
    │   └── ui/
    │       ├── button.tsx           # USED — shadcn/ui button with cva() variants
    │       ├── compare.tsx          # USED — aceternity before/after image slider
    │       ├── glowing-effect.tsx   # USED — mouse-tracking conic-gradient border glow
    │       ├── sparkles.tsx         # USED by compare.tsx — simplified stub (CSS pulses)
    │       ├── badge.tsx            # UNUSED — dead code
    │       ├── card.tsx             # UNUSED — dead code
    │       ├── separator.tsx        # UNUSED — dead code
    │       ├── lamp.tsx             # UNUSED — dead code
    │       ├── timeline.tsx         # UNUSED — dead code
    │       └── noise-background.tsx # UNUSED — dead code
```

## Section Order (top to bottom)

1. **Hero** — eager-loaded. Everything below is `React.lazy()` + `<Suspense>`.
2. ImagineThis (dream outcome first — prospects see the solved state before pain reminder)
3. Problem
4. Features
5. Prestige
6. Proof
7. HowItWorks
8. Testimonials (WhatsApp carousel version)
9. AboutFounder
10. CTA
11. Footer

**Pricing is commented out** in App.tsx — the file compiles but isn't rendered.

## Key Modules (ranked by importance)

### 1. `src/App.tsx` — Shell & lazy loading
Single `<div>` with `<Navbar>`, then `<main>` containing `<Hero>` (eager) + 8 lazy-loaded sections + `<Footer>`. Uses `React.lazy()` + `React.Suspense` with a spinner `<SectionFallback>`. No router — anchor-scroll via `scrollIntoView`. **Pricing is commented out** in both the lazy imports and JSX. **Testimonials** imports from `TestimonialsWhatsApp`, not the named-quote-card `Testimonials.tsx`.

### 2. `src/index.css` — Design tokens
Tailwind v4 with `@theme inline` defining `--font-sans` (DM Sans), `--font-heading` (Playfair Display), color primitives mapped to CSS vars in `:root`, radius scale, and `animate-scroll` keyframe. Colors are oklch() in `:root`. Background is hardcoded `#faf5ed` on `body`. Includes `prefers-reduced-motion` handling and custom scrollbar styles.

### 3. `src/hooks/useIntersectionObserver.ts` — Animation trigger
Returns `{ ref, isInView }`. Uses native `IntersectionObserver`. Fires once by default (`triggerOnce: true`). Powers `ScrollReveal` and `AnimatedCounter`.

### 4. `src/components/shared/ScrollReveal.tsx` — Entrance animation
Wraps children in `motion.div` (from `framer-motion`) that fades up on scroll. Accepts `delay` prop. Used by all 8 below-fold sections.

### 5. `src/components/sections/Hero.tsx` — Above-fold
Headline: "Your fest, fully handled, before you even wake up." Trust badge (`ShieldCheck` icon + "Trusted by 1,700+ delegates at JSSMC") inline in sub-headline. Two CTA buttons: "Get This for Your Fest" (scrolls to `#cta`) and "Visit Live Website" (links to `https://www.tatvam2026.in`). A `Compare` before/after slider with responsive `srcSet`/`sizes`. Labels: BEFORE / AFTER.

### 6. `src/components/ui/compare.tsx` — Before/after slider
Aceternity UI component. Two `<img>` elements clipped via `clipPath`. Supports `hover` and `drag` slide modes, optional autoplay with ping-pong. Uses `motion/react` for clip-path animation and `SparklesCore` (stub) for divider effects. Handles mouse and touch.

### 7. `src/components/layout/Navbar.tsx` — Fixed nav + mobile drawer
Branded "Rishabh J." Scroll-aware (transparent → blurred after 20px). Desktop: horizontal link buttons + "Get Started" CTA. Mobile: "Get Started!" pill button + hamburger → slide-in drawer from left with staggered animations. **Missing nav links**: ImagineThis and Prestige are commented out. Only has: Problem, Features, Proof, HowItWorks, Testimonials, Pricing, Contact (7 links). Nav anchors point to `#problem`, `#features`, `#proof`, `#how-it-works`, `#testimonials`, `#pricing` (section commented out but link still in nav), `#cta`.

### 8. `src/components/sections/Proof.tsx` — Social proof
`AnimatedCounter` stats (1768 delegates, 51 events, ₹7.97L handled, 99.9% uptime) in a 2×2 / 4-col grid inside `GlowingEffect` bordered cards. Analytics screenshot (`/analytics.webp`) in a mock browser chrome. Mobile-only stats row (visitors, page views). Framing text: "My website handled 1,768 real delegates at Tatvam 2026, JSS Medical College, Mysuru."

### 9. `src/components/sections/TestimonialsWhatsApp.tsx` — Active testimonials
Uses `ImageCarousel` component to auto-scroll 4 testimonial screenshot images from `public/testimonials/`. Shuffles order on mount using `useMemo`. Section badge: "TRUST". Has gradient edge fades. Note: the `Testimonials.tsx` file with named quote cards exists but is commented out of App.tsx.

### 10. `src/components/shared/ImageCarousel.tsx` — Infinite scroll carousel
Clones children into two sets, uses CSS `animate-scroll` keyframe. Pauses on hover. Used only by `TestimonialsWhatsApp.tsx`.

## Data Flow

There is no data flow. This is a static page:

- **No API calls.** No `fetch`, no `axios`.
- **No router.** Single-page. Anchor links trigger `scrollIntoView`.
- **No state management.** Only component-local `useState` (mobile menu, scroll state, animation triggers).
- **No backend.** Deployed as static files from `dist/`.
- **No environment variables.** No `.env`, no `import.meta.env`.

## External References (all hardcoded)

| Integration | Where | Notes |
|---|---|---|
| Google Fonts | `index.html` | DM Sans + Playfair Display via CDN `<link>` |
| WhatsApp | `CTA.tsx`, `HowItWorks.tsx`, `Pricing.tsx` | Same number: `+916362840780`. Prefill message: `"Hi! Can you tell me more about how you can make our upcoming fest 10x better?"` |
| tatvam2026.in | `Hero.tsx` | External demo link |
| WhatsApp icon | `CTA.tsx`, `HowItWorks.tsx` | Inline SVG path (not lucide `MessageCircle`). Button uses green `#25D366` / `#20bd5a`. |

## Verified Conventions

- **Exports:** Named exports throughout. Only exception: `App.tsx` uses `export default function App`.
- **Path alias:** `@/` → `./src/` (in vite.config.ts, tsconfig.app.json, tsconfig.json).
- **CSS:** Tailwind v4 `@theme inline` — no `tailwind.config` file. Colors in oklch() in `:root`. Background `#faf5ed` hardcoded on `body`.
- **Fonts:** `font-sans` = DM Sans, `font-heading` = Playfair Display. Headings use `text-[2.2rem]` on mobile (arbitrary value, not a standard Tailwind class).
- **Animation:** `framer-motion` used in Navbar.tsx and ScrollReveal.tsx. `motion/react` (from `motion` package) used in compare.tsx, glowing-effect.tsx, and 3 unused UI components. Custom easing `[0.22, 1, 0.36, 1]` used consistently.
- **Component folders:** `layout/` (shell), `sections/` (page sections), `shared/` (reusable wrappers), `ui/` (design-system primitives).
- **shadcn/ui patterns:** `data-slot` attributes, `cva()` for variants, `Slot.Root` for `asChild`.
- **TypeScript:** TS 6 with `verbatimModuleSyntax`, `erasableSyntaxOnly`, `noUnusedLocals`, `noUnusedParameters`.
- **Build:** `tsc -b && vite build` → `dist/` (not tracked in git). `npm run dev` for Vite dev server.
- **Layout width:** `max-w-265` (1060px) used as the standard content width in most sections.
- **WhatsApp buttons:** Green `#25D366` with inline SVG WhatsApp logo (not lucide icon). Pattern is duplicated in CTA.tsx and HowItWorks.tsx.

## Known Workarounds & Tech Debt

1. **Navbar missing ImagineThis and Prestige links.** `navLinks` array has those entries commented out. The sections exist in the page but aren't reachable from the nav — scroll-only.
2. **Six unused UI components** in `src/components/ui/`: `badge.tsx`, `card.tsx`, `separator.tsx`, `lamp.tsx`, `timeline.tsx`, `noise-background.tsx`. Not imported anywhere. Tree-shaken from bundle but clutter the repo.
3. **`framer-motion` and `motion` both installed** (both v12.40.0). `framer-motion` used for Navbar/ScrollReveal; `motion/react` used for compare/glowing-effect and 3 unused components.
4. **`radix-ui` meta-package** (v1.6.0) pulls in every Radix package. Only `Slot` is used (in `button.tsx`, also imported by unused `badge.tsx` and `separator.tsx`).
5. **`SparklesCore` is a stub** — renders CSS gradient pulses, not real particles.
6. **`@tabler/icons-react`** used only for `IconDotsVertical` in compare.tsx. All other icons come from `lucide-react`.
7. **Hardcoded `#faf5ed` background** in `index.css` body block, Navbar scroll state (`bg-[#faf5ed]/70`), and section backgrounds (ImagineThis, HowItWorks, CTA, AboutFounder). Doesn't use the `--background` CSS variable.
8. **Two testimonial implementations exist:** `TestimonialsWhatsApp.tsx` (carousel, active in App.tsx) and `Testimonials.tsx` (named quote cards, commented out). The carousel images in `public/testimonials/` are still needed.
9. **Pricing section exists but is commented out** in App.tsx. The file compiles and has up-to-date copy (₹49,997 / ₹1,09,997), but it's not rendered. The navbar still links to `#pricing` (dead anchor).
10. **No README.md.**
11. **No image optimization pipeline.** Hero Compare uses responsive `srcSet`/`sizes` (good), but other sections don't.
12. **Commented-out code:** Hero (old trust badge at bottom), Problem (40+ hours stat), ImagineThis (old badge), Features (no commented items now), Prestige (FIRST IMPRESSIONS badge), CTA (response time, "Currently serving" div), Navbar (ImagineThis/Prestige links, "by Rishabh J." badge), TestimonialsWhatsApp (Visit Live Website button).
13. **TODO.md and PROMPTS.md** committed as agent instruction files.
14. **WhatsApp SVG icon path duplicated** between CTA.tsx and HowItWorks.tsx — no shared component.

## Where to Start (by task type)

### Adding a new page section
1. Create `src/components/sections/YourSection.tsx` (named export).
2. Add a section `id` for anchor nav.
3. In `App.tsx`: add `React.lazy()` import + `<Suspense>` + `<SectionDivider />` at the correct position.
4. To add a nav link: edit `navLinks` array in `Navbar.tsx`. Uncomment existing entries where possible.

### Changing design tokens
Edit `src/index.css`. Colors in `:root` block. Fonts and radii in `@theme inline`. Background is hardcoded `#faf5ed` on `body` and referenced in 5 component files — change both if updating.

### Replacing the WhatsApp number
Edit the `whatsappNumber` variable in `CTA.tsx` (line ~5), `HowItWorks.tsx` (line ~12), and `Pricing.tsx` (line ~5). Also update the prefill `whatsappMessage` if desired — same pattern in all three files.

### Swapping testimonial implementations
In `App.tsx`, swap the commented `Testimonials` lazy import (named cards) with the active `TestimonialsWhatsApp` import. The named-card version in `Testimonials.tsx` has hardcoded placeholder names/roles — update those before activating.

### Enabling/disabling the Pricing section
In `App.tsx`, uncomment/comment the `Pricing` lazy import and its `<Suspense>` + `<SectionDivider />` block. The `Pricing.tsx` file itself has real prices and doesn't need changes.

### Building
```
npm run build     # tsc -b && vite build → dist/
npm run preview   # serve dist/ locally
```
`dist/` is not committed to git — build before deploying.
