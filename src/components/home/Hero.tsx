import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/ui/Button';
import { SmartImage } from '@/components/ui/SmartImage';
import { IMAGE } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background image — eager for LCP, no scroll-linked transforms */}
      <div className="absolute inset-0">
        <SmartImage
          src={IMAGE.heroMain}
          alt="Sala da pranzo illuminata da candele"
          className="h-full w-full object-cover"
          eager
          fetchPriority="high"
        />
      </div>

      {/* Overlays — static gradients give the cinematic depth without parallax */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/40 via-espresso-950/30 to-espresso-950" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-transparent to-espresso-950/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-16 md:pt-24 pb-20">
        
        {/* Rimosso il margine sinistro su mobile per centrarlo, mantenuto su desktop (md:ml-20) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 md:mb-6 md:ml-20"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-amber-gold/90">
            Imperia · Liguria · Dal 2003
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-cream text-shadow-strong leading-[0.95] max-w-5xl"
        >
          Il Bistrot
          <span className="block font-serif italic text-amber-light/90 mt-2">
            del Tempo Perduto
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-base md:text-lg text-cream/70 leading-relaxed font-light"
        >
          Dove il tempo rallenta e ogni cena diventa un ricordo.
          Una cucina senza tempo tra Liguria e Francia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-5"
        >
          <ButtonLink to="/reservations" variant="solid" withArrow>
            Prenota un Tavolo
          </ButtonLink>
          <ButtonLink to="/menu" variant="outline">
            Esplora il Menù
          </ButtonLink>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-cream/40">
            Scopri
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-cream/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}