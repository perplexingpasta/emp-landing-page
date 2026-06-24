import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  IndianRupee,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'The Problem', href: '#problem', icon: AlertTriangle },
  // { label: "Imagine This", href: "#imagine", icon: Sparkles },
  { label: 'Features', href: '#features', icon: Star },
  // { label: "Prestige", href: "#prestige", icon: Star },
  { label: 'Proof', href: '#proof', icon: BarChart3 },
  { label: 'How It Works', href: '#how-it-works', icon: Route },
  { label: 'Testimonials', href: '#testimonials', icon: MessageSquareHeart },
  { label: 'Pricing', href: '#pricing', icon: IndianRupee },
  { label: 'Contact', href: '#cta', icon: MessageCircle },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            : 'bg-transparent',
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a
            href="#hero"
            onClick={e => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2"
          >
            <span className="font-heading text-xl font-bold text-stone-800">
              FestFlow
            </span>
            <span className="hidden rounded-md bg-amber-100 px-1.5 py-0.5 font-sans text-[10px] font-semibold text-amber-700 sm:inline-block">
              by Rishabh J.
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="rounded-lg px-3 py-2 font-sans text-sm font-medium text-stone-600 transition-colors hover:bg-stone-200/60 hover:text-stone-800"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="lg"
              className="ml-3 font-sans"
              onClick={() => handleNavClick('#cta')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-stone-600 transition-colors hover:bg-stone-100 md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
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
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer — slides from left */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 left-0 z-50 w-70 bg-[#faf5ed] shadow-2xl md:hidden"
            >
              {/* Drawer header */}
              <div className="flex h-16 items-center justify-between border-b border-stone-200/40 px-5">
                <span className="font-heading text-lg font-bold text-stone-800">
                  FestFlow
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
                    className="flex w-full items-center justify-between rounded-xl px-4 py-4 font-heading text-lg font-semibold text-stone-800 transition-colors hover:bg-stone-100"
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
                    size="lg"
                    className="w-full font-heading font-bold text-lg"
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
