import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  AlertTriangle,
  // Sparkles,
  // LayoutGrid,
  Star,
  BarChart3,
  Route,
  MessageSquareHeart,
  // MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'The Problem', href: '#problem', icon: AlertTriangle },
  // { label: "Imagine This", href: "#imagine", icon: Sparkles },
  { label: 'The Solution', href: '#features', icon: Star },
  // { label: "Prestige", href: "#prestige", icon: Star },
  { label: 'Proof', href: '#proof', icon: BarChart3 },
  { label: 'How It Works', href: '#how-it-works', icon: Route },
  { label: 'Testimonials', href: '#testimonials', icon: MessageSquareHeart },
  // { label: 'Get in Touch', href: '#cta', icon: MessageCircle },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 20);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileOpen]);

  // Focus trap for mobile nav drawer
  useEffect(() => {
    if (!isMobileOpen) return;
    const drawer = drawerRef.current;
    const hamburger = hamburgerRef.current;
    if (!drawer) return;

    const timeout = setTimeout(() => {
      const closeButton = drawer.querySelector(
        'button[aria-label="Close menu"]'
      ) as HTMLButtonElement | null;
      closeButton?.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;

      const focusableElements = drawer.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      if (!firstFocusable || !lastFocusable) return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('keydown', handleKeyDown);
      hamburger?.focus();
    };
  }, [isMobileOpen]);

  const handleNavClick = useCallback((href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href) as HTMLElement | null;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Move focus to the section for keyboard/screen-reader users
      el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
      el.addEventListener('blur', () => el.removeAttribute('tabindex'), {
        once: true,
      });
    }
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
          isScrolled
            ? 'border-b border-stone-200/40 bg-[#faf5ed]/70 shadow-sm backdrop-blur-lg'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8 xl:max-w-360">
          <a
            href="#hero"
            onClick={e => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2"
          >
            <span className="font-heading text-xl font-bold text-stone-800 md:text-2xl">
              Rishabh J.
            </span>
            {/*<span className="hidden rounded-md bg-amber-100 px-1.5 py-0.5 font-sans text-[10px] font-semibold text-amber-700 sm:inline-block">
              by Rishabh J.
            </span>*/}
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 font-sans text-sm font-medium text-stone-600 transition-colors hover:bg-stone-200/60 hover:text-stone-800 xl:text-base"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </button>
            ))}
            <Button
              size="xl"
              className="ml-3 font-sans"
              onClick={() => handleNavClick('#cta')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile CTA pill + menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNavClick('#cta')}
              className="rounded-full border border-amber-300/60 bg-amber-100/60 px-3 py-1.5 font-sans text-xs font-semibold text-amber-700 transition-colors hover:bg-amber-200/60 active:scale-95 md:text-base"
            >
              Get Started
            </button>
            <button
              ref={hamburgerRef}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-stone-600 transition-colors hover:bg-stone-100"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile slide-in drawer + backdrop */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-51 bg-black/30 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer — slides from left */}
            <motion.div
              ref={drawerRef}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 left-0 z-52 w-70 bg-[#faf5ed] shadow-2xl lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex h-16 items-center justify-between border-b border-stone-200/40 px-5">
                <span className="font-heading text-lg font-bold text-stone-800">
                  Rishabh J.
                </span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="rounded-lg p-2 text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-700"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Nav links — staggered slide-in + fade */}
              <nav className="flex flex-col gap-1 px-3 pt-4">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{
                      delay: 0.08 * i,
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => handleNavClick(link.href)}
                    className="font-heading flex w-full items-center justify-between rounded-xl px-4 py-4 text-lg font-semibold text-stone-800 transition-colors hover:bg-stone-100"
                  >
                    {link.label}
                    <link.icon className="h-5 w-5 shrink-0 text-stone-400" />
                  </motion.button>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{
                    delay: 0.08 * navLinks.length,
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-3 px-2"
                >
                  <Button
                    size="xl"
                    className="font-heading w-full text-lg font-bold"
                    onClick={() => handleNavClick('#cta')}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
