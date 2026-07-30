import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grape } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { SmartImage } from '@/components/ui/SmartImage';
import { CategoryNav } from '@/components/ui/CategoryNav';
import { WINE_REGIONS, WINES } from '@/data/wines';
import type { WineCategory } from '@/data/wines';
import { IMAGE } from '@/lib/constants';

export default function WinePage() {
  const [active, setActive] = useState<WineCategory>('liguria');
  const activeRegion = WINE_REGIONS.find((r) => r.id === active)!;
  const wines = WINES.filter((w) => w.category === active);

  return (
    <>
      <PageHero
        eyebrow="La Cantina"
        title="Mille etichette, una storia"
        image={IMAGE.wineCellar}
      >
        <p className="mt-6 max-w-xl text-cream/60 leading-relaxed">
          Una cantina costruita in vent’anni di ricerca. Vitigni liguri,
          grandi italiani, classici francesi e bollicine per ogni occasione.
        </p>
      </PageHero>

      <CategoryNav
        categories={WINE_REGIONS}
        active={active}
        onChange={setActive}
      />

      {/* Region content */}
      <section className="relative py-20 md:py-32 bg-espresso-950 grain-overlay min-h-[60vh]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Region header */}
              <div className="mb-12 md:mb-16 max-w-2xl">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-gold/90 mb-3">
                  {activeRegion.subtitle}
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1]">
                  {activeRegion.label}
                </h2>
                <p className="mt-6 text-cream/55 leading-relaxed">
                  {activeRegion.description}
                </p>
              </div>

              {/* Wine grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {wines.map((wine, i) => (
                  <motion.article
                    key={wine.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group"
                  >
                    {/* Bottle image */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-charcoal mb-6">
                      <img
                        src={wine.image}
                        alt={wine.name}
                        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex flex-col gap-1">
                        <span className="text-[0.6rem] uppercase tracking-[0.25em] text-amber-gold bg-espresso-950/70 backdrop-blur-sm px-2.5 py-1">
                          {wine.type}
                        </span>
                        {wine.featured && (
                          <span className="text-[0.6rem] uppercase tracking-[0.25em] text-cream bg-amber-gold/30 backdrop-blur-sm px-2.5 py-1">
                            In Evidenza
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Wine details */}
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-gold/70 mb-2">
                        {wine.region}
                      </p>
                      <h3 className="font-serif text-2xl md:text-3xl text-cream group-hover:text-amber-gold transition-colors duration-500 leading-tight">
                        {wine.name}
                      </h3>
                      <p className="mt-1 text-sm text-cream/50 font-serif italic">
                        {wine.producer} · {wine.year}
                      </p>
                      <p className="mt-4 text-cream/55 leading-relaxed text-sm">
                        {wine.description}
                      </p>

                      {/* Tasting notes */}
                      <div className="mt-5">
                        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream/40 mb-2">
                          Note di degustazione
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {wine.tastingNotes.map((note) => (
                            <span
                              key={note}
                              className="text-xs text-cream/60 border border-cream/15 px-2.5 py-1"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Pairing */}
                      <div className="mt-5 flex items-start gap-2">
                        <Grape className="w-4 h-4 text-amber-gold/60 mt-0.5 shrink-0" />
                        <p className="text-sm text-cream/50 leading-relaxed">
                          <span className="text-cream/40">Abbinamento: </span>
                          {wine.pairing}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Sommelier note + CTA — subtle editorial background */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage
            src={IMAGE.wineGlasses}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso-950/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl text-center px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-gold/90 mb-6">
              Il Sommelier
            </p>
            <p className="font-serif text-2xl md:text-3xl text-cream italic leading-[1.3] text-balance">
              «Ogni bottiglia racconta un territorio. Lasciatevi guidare
              in un percorso su misura, dall’aperitivo al dolce.»
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12">
              <ButtonLink to="/reservations" variant="solid" withArrow>
                Prenota un Tavolo
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
