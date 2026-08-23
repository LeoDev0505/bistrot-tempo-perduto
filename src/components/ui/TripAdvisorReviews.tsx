import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';

interface Review {
  quote: string;
}

export function TripAdvisorReviews() {
  const { t } = useTranslation();
  const reviews = t('tripadvisorSection.reviews', { returnObjects: true }) as Review[];

  return (
    <section className="relative py-24 md:py-36 bg-espresso-900/60 border-t border-b border-cream/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        
        {/* Intestazione della sezione */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <SectionLabel label={t('tripadvisorSection.eyebrow')} />
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.2]">
              {t('tripadvisorSection.title')}
            </h2>
          </Reveal>
        </div>

        {/* Griglia delle 3 recensioni */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {Array.isArray(reviews) && reviews.map((review, i) => (
            <Reveal key={i} delay={0.2 + i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-full flex flex-col justify-between p-8 md:p-10 bg-charcoal-dark/80 border border-amber-gold/20 shadow-xl relative group hover:border-amber-gold/50 transition-colors duration-500"
              >
                {/* 5 Stelline Dorate */}
                <div className="flex items-center gap-1 mb-6 text-amber-gold">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-gold" />
                  ))}
                </div>

                {/* Testo in corsivo, più grande e più marcato */}
                <p className="font-serif text-cream/90 font-medium italic text-lg md:text-xl leading-relaxed mb-8">
                  {review.quote}
                </p>

                {/* Dettaglio decorativo inferiore */}
                <div className="pt-4 border-t border-cream/10 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-amber-gold/70">
                  <span>Tripadvisor</span>
                  <span className="w-8 h-px bg-amber-gold/30" />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}