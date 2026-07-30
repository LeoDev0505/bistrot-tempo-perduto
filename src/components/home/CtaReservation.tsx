import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/ui/Button';
import { SmartImage } from '@/components/ui/SmartImage';
import { IMAGE } from '@/lib/constants';

export function CtaReservation() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0">
        <SmartImage
          src={IMAGE.reservationHero}
          alt="Tavola apparecchiata per la cena"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/40 to-espresso-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs uppercase tracking-[0.4em] text-amber-gold/90 mb-6"
        >
          Prenota la tua serata
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.05] text-balance"
        >
          Riserva un tavolo
          <span className="block italic text-amber-light/90">
            e lascia che il tempo si fermi
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <ButtonLink to="/reservations" variant="solid" withArrow>
            Prenota un Tavolo
          </ButtonLink>
          <ButtonLink to="/contact" variant="outline">
            Contattaci
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
