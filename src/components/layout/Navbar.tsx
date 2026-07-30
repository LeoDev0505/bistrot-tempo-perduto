import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, RESTAURANT } from '@/lib/constants';
import { useScrolled } from '@/hooks/useScrolled';

export function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const solid = scrolled || !isHome || open;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          solid
            ? 'bg-espresso-950/85 backdrop-blur-xl border-b border-cream/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          <div className="flex h-20 md:h-24 items-center justify-between gap-4">
            {/* Logo / Wordmark */}
            <Link
              to="/"
              className="group flex flex-col leading-none shrink-0"
              onClick={() => setOpen(false)}
            >
              <span className="font-serif text-xl md:text-2xl text-cream tracking-wide transition-colors duration-500 group-hover:text-amber-gold">
                Il Bistrot
              </span>
              <span className="font-serif text-[0.65rem] md:text-xs tracking-[0.3em] uppercase text-amber-gold/80 mt-1">
                del Tempo Perduto
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-6 xl:gap-10 shrink">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `link-underline text-xs uppercase tracking-[0.2em] font-sans transition-colors duration-500 whitespace-nowrap ${
                        isActive
                          ? 'text-amber-gold'
                          : 'text-cream/80 hover:text-cream'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-6 shrink-0">
              <Link
                to="/reservations"
                className="hidden lg:inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.2em] font-sans border border-amber-gold/60 text-amber-gold hover:bg-amber-gold hover:text-espresso-950 transition-all duration-500 whitespace-nowrap"
              >
                Prenota
              </Link>

              <button
                aria-label="Apri menu"
                className="lg:hidden text-cream p-2"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-espresso-950 lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `font-serif text-3xl transition-colors duration-500 ${
                        isActive ? 'text-amber-gold' : 'text-cream hover:text-amber-gold'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + NAV_LINKS.length * 0.08, duration: 0.6 }}
              >
                <Link
                  to="/reservations"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.2em] border border-amber-gold text-amber-gold hover:bg-amber-gold hover:text-espresso-950 transition-all duration-500"
                >
                  Prenota un Tavolo
                </Link>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-10 text-xs tracking-[0.2em] uppercase text-cream/40"
              >
                {RESTAURANT.subTagline}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}