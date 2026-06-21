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
│   └── analytics.webp                                # Analytics screenshot (Proof section)
├── dist/                            # Build output (NOT tracked in git)
└── src/
    ├── main.tsx                     # Entry: ReactDOM.createRoot, StrictMode
    ├── App.tsx                      # Shell: Navbar + sections (lazy-loaded) + SectionDividers + Footer
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
    │   │   ├── Features.tsx         # Two-column checklist (delegate + organiser features)
    │   │   ├── Proof.tsx            # Animated stats + analytics screenshot
    │   │   ├── HowItWorks.tsx       # 5-step vertical timeline (alternates L/R on desktop)
    │   │   ├── Testimonials.tsx     # Auto-scrolling image carousel (placehold.co placeholders)
    │   │   └── CTA.tsx              # WhatsApp contact card with real number
    │   ├── shared/
    │   │   ├── ScrollReveal.tsx     # Scroll-triggered fade-up (framer-motion)
    │   │   ├── AnimatedCounter.tsx  # Eased number counter (requestAnimationFrame)
    │   │   ├── ImageCarousel.tsx    # Infinite CSS-scroll carousel (clones children)
    │   │   └── SectionDivider.tsx   # Thin horizontal rule between sections in App
    │   └── ui/
    │       ├── button.tsx           # USED — shadcn/ui button with cva() variants
    │       ├── compare.tsx          # USED — aceternity before/after image slider
    │       ├── glowing-effect.tsx   # USED — mouse-tracking conic-gradient border glow
    │       ├── sparkles.tsx         # USED by compare.tsx — simplified stub (CSS pulses, not particles)
    │       ├── badge.tsx            # UNUSED — dead code
    │       ├── card.tsx             # UNUSED — dead code
    │       ├── separator.tsx        # UNUSED — dead code
    │       ├── lamp.tsx             # UNUSED — dead code
    │       ├── timeline.tsx         # UNUSED — dead code
    │       └── noise-background.tsx # UNUSED — dead code
```

## Key Modules (ranked by importance)

### 1. `src/App.tsx` — Shell & lazy loading
Single scrollable `<div>` with `<Navbar>`, then `<main>` containing `<Hero>` (eager) + 6 lazy-loaded sections separated by `<SectionDivider />`, then `<Footer>`. Uses `React.lazy()` + `React.Suspense` with a spinner `SectionFallback`. No router — anchor-scroll via `scrollIntoView`.

### 2. `src/index.css` — Design tokens
Tailwind v4 with `@theme inline` defining `--font-sans` (DM Sans), `--font-heading` (Playfair Display), color primitives (all map to CSS vars), radius scale, and `animate-scroll` keyframe. The `:root` block holds the actual oklch color values. Background color is hardcoded as `#faf5ed` on `body`. Includes `prefers-reduced-motion` handling and custom scrollbar styles.

### 3. `src/hooks/useIntersectionObserver.ts` — Animation trigger
Returns `{ ref, isInView }`. Uses native `IntersectionObserver`. Fires once by default (`triggerOnce: true`). Powers `ScrollReveal` and `AnimatedCounter`.

### 4. `src/components/shared/ScrollReveal.tsx` — Entrance animation
Wraps children in `motion.div` (from `framer-motion`) that fades up on scroll. Accepts `delay` prop. Used by most sections.

### 5. `src/components/sections/Hero.tsx` — Above-fold
Headline, CTA buttons (one scrolls to `#cta`, one links to `https://www.tatvam2026.in`), a `Compare` before/after slider using real `/public/` images with responsive `srcSet`/`sizes`, and a trust badge. Most visually complex section.

### 6. `src/components/ui/compare.tsx` — Before/after slider
Aceternity UI component. Renders two `<img>` elements clipped via `clipPath`. Supports `hover` and `drag` slide modes, optional autoplay with ping-pong. Uses `motion/react` for clip-path animation and `SparklesCore` (stub) for divider effects. Handles both mouse and touch. ~180 lines.

### 7. `src/components/layout/Navbar.tsx` — Fixed nav + mobile drawer
Scroll-aware (transparent → blurred after 20px). Desktop: horizontal link buttons + "Get Started" CTA. Mobile: slide-in drawer from left with staggered link animations, backdrop, body scroll lock. Branded "FestFlow" + "by Rexon" badge.

### 8. `src/components/sections/Proof.tsx` — Social proof
`AnimatedCounter` stats in a 2×2 / 4-col grid inside `GlowingEffect` bordered cards. Below that, an analytics screenshot (`/analytics.webp`) in a mock browser chrome, plus a mobile-only stats row.

## Data Flow

There is no data flow. This is a static page:

- **No API calls.** No `fetch`, no `axios`.
- **No router.** Single-page. Anchor links (`#problem`, `#features`, etc.) trigger `scrollIntoView`.
- **No state management.** Only component-local `useState` (mobile menu, scroll state, animation triggers).
- **No backend.** Deployed as static files from `dist/`.
- **No environment variables.** No `.env`, no `import.meta.env`.

External references (hardcoded):
- Google Fonts (CDN `<link>` in `index.html`)
- `https://www.tatvam2026.in` (live demo link, used in Hero + Testimonials)
- WhatsApp: `+916362840780` (CTA.tsx) and `+919XXXXXXXXX` (HowItWorks.tsx — see tech debt)
- `https://placehold.co/...` (Testimonials carousel only)

## External Integrations & Env Vars

| Integration | Where | Notes |
|---|---|---|
| Google Fonts | `index.html` | DM Sans + Playfair Display via CDN `<link>` |
| WhatsApp | `CTA.tsx`, `HowItWorks.tsx` | Two different numbers hardcoded (see tech debt) |
| tatvam2026.in | `Hero.tsx`, `Testimonials.tsx` | External demo link |
| placehold.co | `Testimonials.tsx` | Placeholder testimonial images |

**No environment variables needed.** Zero-config static site.

## Verified Conventions

- **Exports:** Named exports throughout. Only exception: `App.tsx` uses `export default function App`.
- **Path alias:** `@/` → `./src/` (in vite.config.ts, tsconfig.app.json, tsconfig.json).
- **CSS:** Tailwind v4 `@theme inline` — no `tailwind.config` file. All colors in oklch(). Background `#faf5ed` hardcoded on `body`.
- **Fonts:** `font-sans` = DM Sans, `font-heading` = Playfair Display.
- **Animation:** `framer-motion` used in Navbar.tsx and ScrollReveal.tsx. `motion/react` used in compare.tsx, glowing-effect.tsx (and the 3 unused aceternity components). Custom easing `[0.22, 1, 0.36, 1]` used consistently.
- **Component folders:** `layout/` (shell), `sections/` (page sections), `shared/` (reusable wrappers), `ui/` (design-system primitives).
- **shadcn/ui patterns:** `data-slot` attributes, `cva()` for variants, `Slot.Root` for `asChild`.
- **TypeScript:** TS 6 with `verbatimModuleSyntax`, `erasableSyntaxOnly`, `noUnusedLocals`, `noUnusedParameters`.
- **Build:** `tsc -b && vite build` → `dist/` (not tracked in git). `npm run dev` for Vite dev server.
- **No tests.** Zero test files, no testing framework.

## Known Workarounds & Tech Debt

1. **Two different WhatsApp numbers.** `CTA.tsx` has `+916362840780` (real). `HowItWorks.tsx` line 7 has `+919XXXXXXXXX` (placeholder). Both must be kept in sync.
2. **Testimonial images are placeholders.** `Testimonials.tsx` uses `placehold.co` URLs. Replace with real screenshots.
3. **Six unused UI components** in `src/components/ui/`: `badge.tsx`, `card.tsx`, `separator.tsx`, `lamp.tsx`, `timeline.tsx`, `noise-background.tsx`. Not imported anywhere. Won't affect bundle (tree-shaken) but clutter the repo.
4. **`framer-motion` and `motion` both installed** (both v12.40.0). `framer-motion` used for Navbar/ScrollReveal; `motion/react` used for compare/glowing-effect and 3 unused components. Consolidate to one.
5. **`radix-ui` meta-package** (v1.6.0) pulls in every Radix package. Only `Slot` is used (in `button.tsx`). Switch to `@radix-ui/react-slot` to reduce install size.
6. **`SparklesCore` is a stub** — renders CSS gradient pulses, not real particles. Original aceternity implementation replaced.
7. **`@tabler/icons-react`** used only for `IconDotsVertical` in compare.tsx. All other icons come from `lucide-react`. Could remove tabler.
8. **Hardcoded `#faf5ed` background** in `index.css` body block and in Navbar scroll state (`bg-[#faf5ed]/70`). Doesn't use a CSS variable like all other colors.
9. **Section backgrounds vary inconsistently**: Hero = transparent, Problem = `bg-white`, Features = `bg-stone-50`, Proof = `bg-white`, HowItWorks = `bg-[#faf5ed]`, Testimonials = `bg-white`, CTA = `bg-[#faf5ed]`. No single source of truth.
10. **No README.md.** `college-fest-app-readme.md` exists but GitHub won't render it as the project README.
11. **No image optimization pipeline.** Hero Compare uses responsive `srcSet`/`sizes` (good), but Testimonials carousel and Proof analytics don't.
12. **Commented-out code** in multiple files: Hero (badge, "Drag the slider"), Problem (40+ hours stat), CTA (response time, "Currently serving"), Testimonials (ExternalLink icon), Footer ("Made with ♥").
13. **`.gitignore` lists `TODO.md` and `PROMPTS.md`** as ignored, preventing them from being tracked.

## Where to Start (by task type)

### Adding a new page section
1. Create `src/components/sections/YourSection.tsx` (named export).
2. Add a section `id` for anchor nav.
3. In `App.tsx`: add `React.lazy()` import + `<Suspense>` + `<SectionDivider />` before it.
4. To add a nav link: edit `navLinks` array in `Navbar.tsx`.

### Adding a UI component
1. Create `src/components/ui/your-component.tsx`.
2. Use `cn()` from `@/lib/utils` for className merging.
3. Follow shadcn conventions: `data-slot`, `React.ComponentProps<"element">`, named export.

### Changing design tokens
Edit `src/index.css`. Colors in `:root` block. Fonts and radii in `@theme inline`. Background is hardcoded on `body` and referenced as `bg-[#faf5ed]` — change both places.

### Adding an animation wrapper
Use `useIntersectionObserver` from `@/hooks/useIntersectionObserver`. Wrap with `motion.div` from `framer-motion`. Follow `ScrollReveal` pattern.

### Replacing placeholder assets
- **Testimonial images:** `testimonialImages` array in `Testimonials.tsx`.
- **Hero Compare images:** Replace files in `public/` (old*.webp, new*.webp).
- **Analytics screenshot:** Replace `public/analytics.webp`.
- **WhatsApp numbers:** `CTA.tsx` line 4 and `HowItWorks.tsx` line 7.

### Building
```
npm run build     # tsc -b && vite build → dist/
npm run preview   # serve dist/ locally
```
`dist/` is not committed to git — build before deploying.
