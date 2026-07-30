import { motion } from 'framer-motion';
import { SmartImage } from '@/components/ui/SmartImage';

export function Atmosphere() {
  return (
    // Ho aumentato py-48 md:py-64 per dare più "finestra" verticale alla tua foto
    <section className="relative py-48 md:py-64 overflow-hidden bg-espresso-950">
      <div className="absolute inset-0">
        <SmartImage
          src="/images/pianta.jpg"
          alt="Atmosfera del bistrot"
          // Usiamo "object-bottom" nativo di Tailwind invece dello style inline
          className="h-full w-full object-cover object-bottom"
        />
        {/* Overlay scuro bilanciato per far risaltare il testo senza spegnere la foto */}
        <div className="absolute inset-0 bg-espresso-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/40 to-espresso-950/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center px-6">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Testo in bianco elegante con ombra pulita per la massima leggibilità */}
          <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-cream leading-[1.3] italic tracking-wide text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            «Entrare qui è come varcare la soglia di un’altra epoca. Il tempo si dissolve, resta solo il piacere.»
          </p>
          
          {/* Firma coerente con il locale */}
          <span className="block mt-8 text-xs uppercase tracking-[0.4em] text-amber-gold/90 font-sans drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            — Imperia, Liguria
          </span>
        </motion.blockquote>
      </div>
    </section>
  );
}
