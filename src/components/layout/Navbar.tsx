import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { useScrolled } from '@/hooks/useScrolled';
import { useTranslation } from 'react-i18next';

export function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const { t, i18n } = useTranslation();
  const solid = scrolled || !isHome || open;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

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
          {/* Aggiunto "relative" al contenitore padre */}
          <div className="relative flex h-20 md:h-24 items-center justify-between gap-4">
            
            {/* Blocco 1: Logo (Aggiunto z-10 per tenerlo sopra) */}
            <Link
              to="/"
              className="group flex flex-col leading-none shrink-0 z-10"
              onClick={() => setOpen(false)}
            >
              <span className="font-serif text-xl md:text-2xl text-cream tracking-wide transition-colors duration-500 group-hover:text-amber-gold">
                Il Bistrot
              </span>
              <span className="font-serif text-[0.65rem] md:text-xs tracking-[0.3em] uppercase text-amber-gold/80 mt-1">
                del Tempo Perduto
              </span>
            </Link>

            {/* Blocco 2: Desktop nav (POSIZIONAMENTO ASSOLUTO AL CENTRO MATEMATICO) */}
            <ul className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-6 xl:gap-10 w-max">
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
                    {t(`navbar.links.${link.to.replace('/', '') || 'home'}`, link.label)}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Blocco 3: CTA + Lingue (Aggiunto z-10 per tenerlo sopra) */}
            <div className="flex items-center justify-end gap-6 shrink-0 z-10">
              
              <div className="hidden lg:flex gap-2 text-xs uppercase tracking-[0.2em] font-sans text-cream/50">
                <button onClick={() => changeLanguage('it')} className={i18n.language === 'it' ? 'text-amber-gold' : 'hover:text-cream transition-colors'}>IT</button>
                <span>|</span>
                <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'text-amber-gold' : 'hover:text-cream transition-colors'}>EN</button>
                <span>|</span>
                <button onClick={() => changeLanguage('fr')} className={i18n.language === 'fr' ? 'text-amber-gold' : 'hover:text-cream transition-colors'}>FR</button>
              </div>

              <Link
                to="/reservations"
                className="hidden lg:inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.2em] font-sans border border-amber-gold/60 text-amber-gold hover:bg-amber-gold hover:text-espresso-950 transition-all duration-500 whitespace-nowrap"
              >
                {t('navbar.book')}
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

      {/* Mobile drawer (Invariato) */}
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
                     {t(`navbar.links.${link.to.replace('/', '') || 'home'}`, link.label)}
                  </NavLink>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + NAV_LINKS.length * 0.08, duration: 0.6 }}
                className="flex flex-col items-center gap-6"
              >
                <Link
                  to="/reservations"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.2em] border border-amber-gold text-amber-gold hover:bg-amber-gold hover:text-espresso-950 transition-all duration-500"
                >
                  {t('navbar.bookTable')}
                </Link>

                <div className="flex gap-4 text-sm uppercase tracking-[0.2em] font-sans text-cream/50 mt-4">
                  <button onClick={() => changeLanguage('it')} className={i18n.language === 'it' ? 'text-amber-gold' : 'hover:text-cream transition-colors'}>IT</button>
                  <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'text-amber-gold' : 'hover:text-cream transition-colors'}>EN</button>
                  <button onClick={() => changeLanguage('fr')} className={i18n.language === 'fr' ? 'text-amber-gold' : 'hover:text-cream transition-colors'}>FR</button>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-10 text-xs tracking-[0.2em] uppercase text-cream/40 text-center px-6"
              >
                {t('navbar.tagline')}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}