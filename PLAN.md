# PLAN.md — Rishabh J. College Fest Landing Page

Static client-side landing page targeting Indian medical college fest organisers. Vite 8 + React 19 + Tailwind CSS v4. Zero backend, zero API calls, zero runtime data dependencies.

## File Tree

```
.
├── index.html                       # HTML shell, Google Fonts (DM Sans + Playfair Display), image preloads
├── vite.config.ts                   # Vite 8, @/ path alias, Tailwind v4 plugin
├── tsconfig.json                    # Root TS config (references tsconfig.app + tsconfig.node)
├── tsconfig.app.json                # App TS: ES2023, bundler mode, react-jsx
├── tsconfig.node.json               # Node TS: covers vite.config.ts only
├── eslint.config.js                 # Flat config: TS, React hooks, React refresh
├── components.json                  # shadcn/ui config (new-york style, lucide icons)
├── package.json
├── public/                          # Static assets served at /
│   ├── favicon.svg
│   ├── icons.svg
│   ├── old-mobile.webp, old-tablet.webp   # Before images for Compare slider (no bare old.webp)
│   ├── new-mobile.webp, new-tablet.webp   # After images for Compare slider (no bare new.webp)
│   ├── analytics.webp                      # Analytics screenshot (Proof section)
│   ├── pfp.webp                            # Founder avatar (AboutFounder section)
│   └── testimonials/                       # Carousel images (4 files)
│       ├── 1.webp, 2.webp, 3.webp, 4.webp
├── dist/                            # Build output (NOT tracked in git)
└── src/
    ├── main.tsx                     # Entry: ReactDOM.createRoot, StrictMode
    ├── App.tsx                      # Shell: Navbar + 2 eager sections + 7 lazy sections + Footer
    ├── index.css                    # Tailwind v4, @theme inline, CSS vars (oklch), fonts, scrollbar, animations
    ├── lib/
    │   └── utils.ts                 # cn() = twMerge(clsx(inputs))
    ├── hooks/
    │   └── useIntersectionObserver.ts   # Returns {ref, isInView}. Fires once by default.
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx           # Fixed nav, scroll-aware blur, mobile slide-in drawer
    │   │   └── Footer.tsx           # Copyright footer
    │   ├── sections/
    │   │   ├── Hero.tsx             # Above-fold: headline, Compare slider, 2 CTA buttons
    │   │   ├── ImagineThis.tsx      # "Nightmare vs dream" contrast narrative (EAGER)
    │   │   ├── Problem.tsx          # 4 pain-point cards (2×2 grid) + AmbientBlobs
    │   │   ├── Features.tsx         # Two-column checklist (organiser + delegate) + AmbientBlobs
    │   │   ├── Prestige.tsx         # Status-signaling with website mockup (EAGER)
    │   │   ├── Proof.tsx            # AnimatedCounter stats + analytics screenshot
    │   │   ├── HowItWorks.tsx       # 5-step vertical timeline (alternating L/R) with WhatsApp CTA in step 1
    │   │   ├── TestimonialsWhatsApp.tsx  # Auto-scrolling screenshot carousel (ACTIVE)
    │   │   ├── Testimonials.tsx     # Named quote cards (DEAD — commented out of App.tsx)
    │   │   ├── AboutFounder.tsx     # Personal story + avatar (pfp.webp)
    │   │   ├── Pricing.tsx          # 2-tier pricing (DEAD — commented out of App.tsx)
    │   │   └── CTA.tsx              # WhatsApp contact card with scoped slots messaging
    │   ├── shared/
    │   │   ├── ScrollReveal.tsx     # Scroll-triggered fade-up (motion/react)
    │   │   ├── AnimatedCounter.tsx  # Eased number counter (requestAnimationFrame)
    │   │   ├── ImageCarousel.tsx    # Infinite CSS-scroll carousel (clones images via DOM, accepts image array)
    │   │   ├── AmbientBlobs.tsx     # Low-opacity floating gradient orbs (CSS-only, no JS)
    │   │   └── WhatsAppIcon.tsx     # Shared WhatsApp SVG icon component
    │   └── ui/
    │       ├── button.tsx           # shadcn/ui button with cva() variants, Slot.Root for asChild
    │       └── compare.tsx          # Before/after image slider (aceternity-derived), no external icon deps
```

**Note**: `.gitignore` excludes `TODO.md`, `PROMPTS.md`, and `emp landing page assets/` from version control. These exist on disk but are not committed.

## Section Order (top to bottom)

1. **Hero** — eager-loaded
2. **ImagineThis** — eager-loaded (dream outcome first — prospects see solved state before pain reminder)
3. **Problem** — lazy (Suspense)
4. **Features** — lazy (Suspense)
5. **Prestige** — eager-loaded
6. **Proof** — lazy (Suspense)
7. **HowItWorks** — lazy (Suspense)
8. **Testimonials** (WhatsApp carousel) — lazy (Suspense)
9. **AboutFounder** — lazy (Suspense)
10. **CTA** — lazy (Suspense)
11. **Footer**

**Pricing is commented out** — the file compiles but isn't rendered. Both the lazy import and `<Suspense>` block are commented in App.tsx.

## Key Modules

### 1. `src/App.tsx` — Shell & loading strategy
Single `<div>` with `<Navbar>`, then `<main>` containing `<Hero>` + `<ImagineThis>` (eager) + `<Prestige>` (eager) + 7 lazy-loaded sections in `<Suspense>` wrappers + `<Footer>`. Each lazy section uses `React.lazy()` with a spinner `<SectionFallback>`. No router — anchor-scroll via `scrollIntoView` with `tabindex` focus management. Includes skip-to-content link. **Pricing commented out**. **Testimonials** imports from `TestimonialsWhatsApp`, not the named-quote-card `Testimonials.tsx`.

### 2. `src/index.css` — Design tokens & global styles
Tailwind v4 with `@theme inline` defining `--font-sans` (DM Sans), `--font-heading` (Playfair Display), color primitives mapped to shadcn/ui CSS vars in `:root`, radius scale, `animate-scroll` keyframe, `cv-auto` utility (content-visibility). Colors are oklch() in `:root`. Background is hardcoded `#faf5ed` on `body`. Includes `blob-drift` and `blob-drift-slow` keyframes for AmbientBlobs, `prefers-reduced-motion` handling, custom scrollbar styles, and base layer typography rules (h1–h6 use Playfair Display).

### 3. `src/hooks/useIntersectionObserver.ts` — Animation trigger
Returns `{ ref, isInView }`. Uses native `IntersectionObserver`. Fires once by default (`triggerOnce: true`), but supports persistent mode. Powers `ScrollReveal`, `AnimatedCounter`, and the Compare autoplay pause.

### 4. `src/components/shared/ScrollReveal.tsx` — Entrance animation
Wraps children in `motion.div` (from `motion/react`) that fades up on scroll. Accepts `delay` and `as` (polymorphic element) props. Used by all below-fold sections.

### 5. `src/components/sections/Hero.tsx` — Above-fold
Headline: "Your fest, fully handled, before you even wake up." Trust badge inline with `ShieldCheck` icon + "Trusted by JSS Medical College". Two CTA buttons: "Get This for Your Fest" (scrolls to `#cta`) and "Visit Live Website" (links to `https://www.tatvam2026.in`). A `Compare` before/after slider using `old-tablet.webp`/`new-tablet.webp` with responsive `srcSet`/`sizes`. Labels: BEFORE / AFTER.

### 6. `src/components/ui/compare.tsx` — Before/after slider
Derived from aceternity UI. Two `<img>` elements clipped via `clipPath`. Supports `hover` and `drag` slide modes, autoplay with ping-pong, keyboard (arrow keys, Home, End), touch, and visibility-aware pause (IntersectionObserver). Uses `motion/react` for clip-path animation. Handlebar is an inline SVG (three-dot grip). **No SparklesCore — no external icon library dependency**.

### 7. `src/components/layout/Navbar.tsx` — Fixed nav + mobile drawer
Branded "Rishabh J." Scroll-aware (transparent → blurred + bordered after 20px). Desktop: 5 horizontal link buttons + "Get Started" CTA button. Mobile: "Get Started!" pill + hamburger → slide-in drawer from left with staggered animations. **Active nav links (5 total)**: The Problem, The Solution (→ #features), Proof, How It Works, Testimonials. **Commented out**: ImagineThis, Prestige, Get in Touch. **No pricing link exists** (no dead anchor). Drawer includes focus trap and Escape key handling.

### 8. `src/components/sections/Proof.tsx` — Social proof
`AnimatedCounter` stats (1768 delegates, 51 events, ₹7.97L, 99.9% uptime) in a 2×2 / 4-col grid inside bordered cards (no GlowingEffect — plain border/shadow). Analytics screenshot (`/analytics.webp`) in a mock browser chrome. Mobile-only stats row (8,846 visitors, 26,036 page views).

### 9. `src/components/sections/TestimonialsWhatsApp.tsx` — Active testimonials
Uses `ImageCarousel` component to auto-scroll 4 testimonial screenshot images. Shuffles order on mount via `useMemo`. Section badge: "Trusted by JSS Medical College" with ShieldCheck icon. Has gradient edge fades. Commented-out "Visit Live Website" button.

### 10. `src/components/shared/AmbientBlobs.tsx` — Background atmosphere
Renders two floating gradient orbs (CSS-only `blob-drift` keyframe animation). Props: `colorTop`, `colorBottom` (Tailwind bg classes). Used by `Problem.tsx` (red/amber) and `Features.tsx` (amber/emerald). Place inside a `relative` container; marked `aria-hidden`.

### 11. `src/components/shared/WhatsAppIcon.tsx` — Shared WhatsApp SVG
Inline SVG WhatsApp logo. Used by `CTA.tsx` and `HowItWorks.tsx`. **`Pricing.tsx` does NOT use this** — it uses `MessageCircle` from lucide-react instead (inconsistency).

## Data Flow

There is no data flow. This is a static page:

- **No API calls.** No `fetch`, no `axios`.
- **No router.** Single-page. Anchor links trigger `scrollIntoView` with smooth scrolling.
- **No state management.** Only component-local `useState` (mobile menu, scroll state, animation triggers, carousel pause).
- **No backend.** Deployed as static files from `dist/`.
- **No environment variables.** No `.env`, no `import.meta.env`.

## External References (all hardcoded)

| Integration | Where | Notes |
|---|---|---|
| Google Fonts | `index.html` | DM Sans + Playfair Display via CDN `<link>` with preconnect/preload |
| WhatsApp | `CTA.tsx`, `HowItWorks.tsx`, `Pricing.tsx` | Number: `+918123655765`. Prefill: `"Hi! Can you tell me more about how you can make our upcoming fest 10x better?"` |
| tatvam2026.in | `Hero.tsx` | External demo link (CTA button, not the primary one) |
| WhatsApp button color | `CTA.tsx`, `HowItWorks.tsx` | Green `#25D366` / hover `#20bd5a`. Pricing.tsx uses outline variant (amber border) with lucide `MessageCircle` icon — not the green WhatsApp button pattern. |

## Verified Conventions

- **Exports:** Named exports throughout. Only `App.tsx` uses `export default function App`.
- **Path alias:** `@/` → `./src/` (vite.config.ts, tsconfig.app.json, tsconfig.json).
- **CSS:** Tailwind v4 `@theme inline` — no `tailwind.config` file. Colors in oklch() in `:root`. Background `#faf5ed` hardcoded on `body`.
- **Fonts:** `font-sans` = DM Sans, `font-heading` = Playfair Display. Headings use `text-[2.2rem]` on mobile (arbitrary value).
- **Animation:** `motion/react` (package `motion` v12.40.0) used in Navbar, ScrollReveal, and Compare. Custom easing `[0.22, 1, 0.36, 1]` used consistently.
- **Component folders:** `layout/` (shell), `sections/` (page sections), `shared/` (reusable wrappers), `ui/` (design-system primitives — only button and compare).
- **shadcn/ui patterns:** `data-slot` attributes, `cva()` for variants, `Slot.Root` for `asChild`.
- **TypeScript:** TS ~6.0 with `verbatimModuleSyntax`, `erasableSyntaxOnly`, `noUnusedLocals`, `noUnusedParameters`.
- **Build:** `tsc -b && vite build` → `dist/`. `npm run dev` for Vite dev server.
- **Layout width:** `max-w-265` (1060px) used as standard content width in most sections.
- **Performance:** `cv-auto` Tailwind utility (content-visibility: auto) applied to most section roots. Hero Compare images are preloaded in index.html.
- **Accessibility:** Skip-to-content link in App.tsx, `prefers-reduced-motion` respect, keyboard support in Compare slider, focus trap in mobile nav drawer, smooth scrolling on `<html>`.

## Known Workarounds & Tech Debt

1. **ImagineThis and Prestige are eagerly loaded** — not lazy like the other below-fold sections. This means they're in the initial bundle but aren't above-the-fold critical content.
2. **Navbar missing ImagineThis and Prestige links.** `navLinks` array has those entries commented out. The sections exist on the page but aren't reachable from the nav — scroll-only.
3. **No pricing link in navbar.** The Pricing section is commented out in App.tsx, and the navbar never had a pricing link — no dead anchor to worry about.
4. **Hardcoded `#faf5ed` background** in `index.css` body block, Navbar scroll state (`bg-[#faf5ed]/70`), and section backgrounds (Problem, HowItWorks, AboutFounder, Prestige). Does not use the `--background` CSS variable.
5. **Two testimonial implementations exist:** `TestimonialsWhatsApp.tsx` (carousel, active) and `Testimonials.tsx` (named quote cards, commented out). The named-card version has hardcoded placeholder names/roles — update before activating.
6. **Testimonials.tsx placeholder data is fake.** Names like "Arjun Menon", "Dr. Ananya Sharma" are not real testimonials — they're placeholder copy for the inactive card variant.
7. **WhatsApp button inconsistency:** `CTA.tsx` and `HowItWorks.tsx` use the shared `WhatsAppIcon` component with green `#25D366` background. `Pricing.tsx` uses lucide `MessageCircle` icon with an outline amber button — different visual pattern.
8. **No README.md.**
9. **No image optimization pipeline.** Hero Compare uses responsive `srcSet`/`sizes` (good), but other sections (Proof analytics, Prestige mockup, carousel images) don't.
10. **Commented-out code throughout:** Hero (old trust badge), Problem (40+ hours stat), ImagineThis (old badge), Prestige (FIRST IMPRESSIONS badge), Navbar (ImagineThis/Prestige links + "by Rishabh J." badge), TestimonialsWhatsApp (Visit Live Website button), Features (no active commented items), CTA (response time, "Currently serving" div), AboutFounder (alternate signature format).
11. **Pricing section exists but is commented out** in App.tsx. File compiles with real prices (₹49,997 / ₹1,09,997) and up-to-date copy. To enable: uncomment the lazy import and `<Suspense>` block in App.tsx.
12. **Compare slider uses tablet image variants as primary sources** (`old-tablet.webp`, `new-tablet.webp`). The bare `old.webp`/`new.webp` files exist only in the untracked `emp landing page assets/` directory, not in `public/`.

## Where to Start (by task type)

### Adding a new page section
1. Create `src/components/sections/YourSection.tsx` (named export).
2. Add a section `id` for anchor nav.
3. In `App.tsx`: add `React.lazy()` import + `<Suspense>` wrapper.
4. To add a nav link: edit `navLinks` array in `Navbar.tsx`. Uncomment existing entries where possible.

### Changing design tokens
Edit `src/index.css`. Colors in `:root` block. Fonts and radii in `@theme inline`. Background is hardcoded `#faf5ed` on `body` and referenced in 5+ component files — change both if updating.

### Replacing the WhatsApp number
Edit the `whatsappNumber` variable in `CTA.tsx`, `HowItWorks.tsx`, and `Pricing.tsx`. Also update the prefill `whatsappMessage` — same pattern in all three files.

### Swapping testimonial implementations
In `App.tsx`, swap the commented `Testimonials` lazy import (named cards) with the active `TestimonialsWhatsApp` import. Update placeholder data in `Testimonials.tsx` before activating.

### Enabling/disabling the Pricing section
In `App.tsx`, uncomment/comment the `Pricing` lazy import and its `<Suspense>` block.

### Building
```
npm run build     # tsc -b && vite build → dist/
npm run preview   # serve dist/ locally
```
