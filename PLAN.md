# PLAN.md — FestFlow Landing Page

Static client-side landing page for FestFlow, a white-label fest management platform. Built with Vite 8 + React 19 + Tailwind CSS v4. Zero backend, zero API calls, zero runtime data dependencies.

## File Tree

```
.
├── index.html                       # HTML shell, Google Fonts preconnect + <link>
├── vite.config.ts                   # Vite 8, @/ path alias, Tailwind plugin
├── tsconfig.json                    # Root TS config (references tsconfig.app + tsconfig.node)
├── tsconfig.app.json                # App TS: ES2023, bundler mode, React JSX
├── tsconfig.node.json               # Node TS: covers vite.config.ts only
├── eslint.config.js                 # Flat config: TS, React hooks, React refresh
├── components.json                  # shadcn/ui config (new-york style, lucide icons, aceternity registry)
├── package.json
├── public/                          # Static assets served at /
│   ├── favicon.svg
│   ├── icons.svg
│   ├── old.webp, old-mobile.webp, old-tablet.webp   # Before images for Compare slider
│   ├── new.webp, new-mobile.webp, new-tablet.webp   # After images for Compare slider
│   ├── analytics.webp                                # Analytics screenshot (Proof section)
│   └── testimonials/                                # Testimonial screenshots (4 images)
│       ├── 1.webp, 2.webp, 3.webp, 4.webp
├── dist/                            # Build output (NOT tracked in git)
└── src/
    ├── main.tsx                     # Entry: ReactDOM.createRoot, StrictMode
    ├── App.tsx                      # Shell: Navbar + 10 sections (eager Hero + 9 lazy) + Footer
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
    │   │   ├── Problem.tsx          # 4 pain-point cards (2×2 grid)
    │   │   ├── ImagineThis.tsx      # Narrative "before vs after" contrast
    │   │   ├── Features.tsx         # Two-column checklist (delegate + organiser features)
    │   │   ├── Prestige.tsx         # "First impression" with website preview mockup
    │   │   ├── Proof.tsx            # Animated stats + analytics screenshot
    │   │   ├── HowItWorks.tsx       # 5-step vertical timeline (alternates L/R on desktop)
    │   │   ├── Testimonials.tsx     # Auto-scrolling screenshot carousel (local images)
    │   │   ├── Pricing.tsx          # 2-tier pricing cards (Essentials + Full Platform)
    │   │   └── CTA.tsx              # WhatsApp contact card with real number
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
2. Problem
3. ImagineThis
4. Features
5. Prestige
6. Proof
7. HowItWorks
8. Testimonials
9. Pricing
10. CTA
11. Footer

## Key Modules (ranked by importance)

### 1. `src/App.tsx` — Shell & lazy loading
Single `<div>` with `<Navbar>`, then `<main>` containing `<Hero>` (eager) + 9 lazy-loaded sections separated by `<SectionDivider />`, then `<Footer>`. Uses `React.lazy()` + `React.Suspense` with a spinner `<SectionFallback>`. No router — anchor-scroll via `scrollIntoView`.

### 2. `src/index.css` — Design tokens
Tailwind v4 with `@theme inline` defining `--font-sans` (DM Sans), `--font-heading` (Playfair Display), color primitives (map to CSS vars in `:root`), radius scale, and `animate-scroll` keyframe for the carousel. Colors are oklch() in `:root`. Background is hardcoded `#faf5ed` on `body` (not using the CSS variable). Includes `prefers-reduced-motion` handling and custom scrollbar styles.

### 3. `src/hooks/useIntersectionObserver.ts` — Animation trigger
Returns `{ ref, isInView }`. Uses native `IntersectionObserver`. Fires once by default (`triggerOnce: true`). Powers `ScrollReveal` and `AnimatedCounter`.

### 4. `src/components/shared/ScrollReveal.tsx` — Entrance animation
Wraps children in `motion.div` (from `framer-motion`) that fades up on scroll. Accepts `delay` prop. Used by all 9 below-fold sections.

### 5. `src/components/sections/Hero.tsx` — Above-fold
Headline, two CTA buttons (one scrolls to `#cta`, one links to `https://www.tatvam2026.in`), a `Compare` before/after slider using `/public/` images with responsive `srcSet`/`sizes`, and a trust badge.

### 6. `src/components/ui/compare.tsx` — Before/after slider
Aceternity UI component. Two `<img>` elements clipped via `clipPath`. Supports `hover` and `drag` slide modes, optional autoplay with ping-pong. Uses `motion/react` for clip-path animation and `SparklesCore` (stub) for divider effects. Handles mouse and touch. ~230 lines.

### 7. `src/components/layout/Navbar.tsx` — Fixed nav + mobile drawer
Scroll-aware (transparent → blurred after 20px). Desktop: horizontal link buttons + "Get Started" CTA. Mobile: slide-in drawer from left with staggered link animations, backdrop, body scroll lock. Branded "FestFlow" + "by Rexon" badge. **Only links to 6 of 10 sections** — missing ImagineThis, Prestige, and Pricing (see tech debt).

### 8. `src/components/sections/Proof.tsx` — Social proof
`AnimatedCounter` stats (1768 delegates, 51 events, ₹7.97L handled, 99.9% uptime) in a 2×2 / 4-col grid inside `GlowingEffect` bordered cards. Analytics screenshot (`/analytics.webp`) in a mock browser chrome. Mobile-only stats row (visitors, page views, bounce rate).

### 9. `src/components/sections/Pricing.tsx` — Pricing with real prices
Two-tier pricing: Essentials (₹49,997) and Full Platform (₹1,09,997). Each has a feature checklist. Full Platform is highlighted ("Most popular"). WhatsApp CTA with 50/50 payment terms.

### 10. `src/components/shared/ImageCarousel.tsx` — Infinite scroll carousel
Clones children into two sets, uses CSS `animate-scroll` keyframe for infinite horizontal scroll. Pauses on hover. Used only by Testimonials.

## Data Flow

There is no data flow. This is a static page:

- **No API calls.** No `fetch`, no `axios`.
- **No router.** Single-page. Anchor links (`#problem`, `#features`, etc.) trigger `scrollIntoView`.
- **No state management.** Only component-local `useState` (mobile menu, scroll state, animation triggers).
- **No backend.** Deployed as static files from `dist/`.
- **No environment variables.** No `.env`, no `import.meta.env`.

External references (all hardcoded):
- Google Fonts (CDN `<link>` in `index.html`)
- `https://www.tatvam2026.in` (live demo link, used in Hero + Testimonials)
- WhatsApp: `+916362840780` (CTA.tsx, HowItWorks.tsx, Pricing.tsx — same number everywhere now)

## External Integrations & Env Vars

| Integration | Where | Notes |
|---|---|---|
| Google Fonts | `index.html` | DM Sans + Playfair Display via CDN `<link>` |
| WhatsApp | `CTA.tsx`, `HowItWorks.tsx`, `Pricing.tsx` | Same number: `+916362840780` |
| tatvam2026.in | `Hero.tsx`, `Testimonials.tsx` | External demo link |

**No environment variables needed.** Zero-config static site.

## Verified Conventions

- **Exports:** Named exports throughout. Only exception: `App.tsx` uses `export default function App`.
- **Path alias:** `@/` → `./src/` (in vite.config.ts, tsconfig.app.json, tsconfig.json).
- **CSS:** Tailwind v4 `@theme inline` — no `tailwind.config` file. Colors in oklch() in `:root`. Background `#faf5ed` hardcoded on `body`.
- **Fonts:** `font-sans` = DM Sans, `font-heading` = Playfair Display.
- **Animation:** `framer-motion` used in Navbar.tsx and ScrollReveal.tsx. `motion/react` (from `motion` package) used in compare.tsx, glowing-effect.tsx, and 3 unused UI components. Custom easing `[0.22, 1, 0.36, 1]` used consistently.
- **Component folders:** `layout/` (shell), `sections/` (page sections), `shared/` (reusable wrappers), `ui/` (design-system primitives).
- **shadcn/ui patterns:** `data-slot` attributes, `cva()` for variants, `Slot.Root` for `asChild`.
- **TypeScript:** TS 6 with `verbatimModuleSyntax`, `erasableSyntaxOnly`, `noUnusedLocals`, `noUnusedParameters`.
- **Build:** `tsc -b && vite build` → `dist/` (not tracked in git). `npm run dev` for Vite dev server.
- **No tests.** Zero test files, no testing framework.
- **Layout width:** `max-w-265` (1060px) used as the standard content width in all sections.

## Known Workarounds & Tech Debt

1. **Navbar missing links.** `navLinks` array in Navbar.tsx only has 6 entries (Problem, Features, Proof, HowItWorks, Testimonials, Contact). ImagineThis (#imagine), Prestige (#prestige), and Pricing (#pricing) exist as sections but have no nav links — reachable only by scrolling.
2. **Six unused UI components** in `src/components/ui/`: `badge.tsx`, `card.tsx`, `separator.tsx`, `lamp.tsx`, `timeline.tsx`, `noise-background.tsx`. Not imported anywhere. Won't affect bundle (tree-shaken) but clutter the repo.
3. **`framer-motion` and `motion` both installed** (both v12.40.0). `framer-motion` used for Navbar/ScrollReveal; `motion/react` used for compare/glowing-effect and 3 unused components. Consolidate to one.
4. **`radix-ui` meta-package** (v1.6.0) pulls in every Radix package. Only `Slot` is used (in `button.tsx`, also imported by unused `badge.tsx` and `separator.tsx`). Switch to `@radix-ui/react-slot` to reduce install size.
5. **`SparklesCore` is a stub** — renders CSS gradient pulses, not real particles. Original aceternity implementation replaced.
6. **`@tabler/icons-react`** used only for `IconDotsVertical` in compare.tsx. All other icons come from `lucide-react`. Could remove tabler after fixing compare.tsx.
7. **Hardcoded `#faf5ed` background** in `index.css` body block, Navbar scroll state (`bg-[#faf5ed]/70`), and section backgrounds (ImagineThis, HowItWorks, CTA). Doesn't use the `--background` CSS variable like all other colors.
8. **Section backgrounds vary**: Hero = transparent, Problem/Proof/Prestige/Testimonials = `bg-white`, Features/Pricing = `bg-stone-50`, ImagineThis/HowItWorks/CTA = `bg-[#faf5ed]`. No single source of truth.
9. **No README.md.** `college-fest-app-readme.md` exists but GitHub won't render it as the project README.
10. **No image optimization pipeline.** Hero Compare uses responsive `srcSet`/`sizes` (good), but other sections don't.
11. **Commented-out code**: Hero (badge span, "Drag the slider" label), Problem ("40+ hours" stat), Features (3 commented-out feature items in both arrays), CTA (response time, "Currently serving" div), Prestige ("FIRST IMPRESSIONS" badge), Footer ("Made with ♥" line).
12. **TODO.md and PROMPTS.md** are listed in `.gitignore` but were committed before the gitignore entry was added — they remain tracked. Both were intentionally committed as agent instruction files.
13. **`festflow-audit.html` and `FESTFLOW_MARKETING.md`** exist in the root but are not part of the app build.

## Where to Start (by task type)

### Adding a new page section
1. Create `src/components/sections/YourSection.tsx` (named export).
2. Add a section `id` for anchor nav.
3. In `App.tsx`: add `React.lazy()` import + `<Suspense>` + `<SectionDivider />` at the correct position in section order.
4. To add a nav link: edit `navLinks` array in `Navbar.tsx`.

### Adding a UI component
1. Create `src/components/ui/your-component.tsx`.
2. Use `cn()` from `@/lib/utils` for className merging.
3. Follow shadcn conventions: `data-slot`, `React.ComponentProps<"element">`, named export.

### Changing design tokens
Edit `src/index.css`. Colors in `:root` block. Fonts and radii in `@theme inline`. Background is hardcoded `#faf5ed` on `body` and referenced as `bg-[#faf5ed]` in 4 places — change both if updating the background color.

### Adding an animation wrapper
Use `useIntersectionObserver` from `@/hooks/useIntersectionObserver`. Wrap with `motion.div` from `framer-motion`. Follow `ScrollReveal` pattern.

### Replacing assets
- **Testimonial images:** `sourceImages` array in `Testimonials.tsx` + files in `public/testimonials/`.
- **Hero Compare images:** Replace files in `public/` (old*.webp, new*.webp).
- **Analytics screenshot:** Replace `public/analytics.webp`.
- **WhatsApp number:** `CTA.tsx` line 4, `HowItWorks.tsx` line 7, `Pricing.tsx` line 8 (same variable name `whatsappNumber`).
- **Pricing:** `price` props in `Pricing.tsx` `PricingTier` components (Essentials and Full Platform).

### Building
```
npm run build     # tsc -b && vite build → dist/
npm run preview   # serve dist/ locally
```
`dist/` is not committed to git — build before deploying.
