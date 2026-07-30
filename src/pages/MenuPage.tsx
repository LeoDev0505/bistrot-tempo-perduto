import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wine as WineIcon } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { CategoryNav } from '@/components/ui/CategoryNav';
import { SmartImage } from '@/components/ui/SmartImage';
import { MENU_CATEGORIES, MENU_ITEMS } from '@/data/menu';
import type { MenuItem, MenuItemCategory } from '@/data/menu';
import { IMAGE } from '@/lib/constants';

export default function MenuPage() {
  const [active, setActive] = useState<MenuItemCategory>('antipasti');
  const activeCategory = MENU_CATEGORIES.find((c) => c.id === active)!;
  const items = MENU_ITEMS.filter((i) => i.category === active);

  return (
    <>
      <PageHero
        eyebrow="Il Menù"
        title="Il menù cambia con le stagioni"
        image={IMAGE.dishSeafood}
        isCompact={true} // <--- AGGIUNTA QUI!
      >
        <p className="mt-6 max-w-xl text-cream/60 leading-relaxed">
          Una cucina che segue il mercato, il mare e l’orto. Questi sono i
          piatti della nostra carta — una selezione che si rinnova ogni stagione.
        </p>
      </PageHero>

      <CategoryNav
        categories={MENU_CATEGORIES}
        active={active}
        onChange={setActive}
      />

      {/* Rimosso grain-overlay per eliminare il lag grafico */}
      <section className="relative py-20 md:py-32 bg-espresso-950 min-h-[60vh]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: 'auto' }} // Aggiunto per alleggerire il browser
            >
              <div className="mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                <div className="md:col-span-5">
                  <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
                    <SmartImage
                      src={activeCategory.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="md:col-span-7 md:pl-8 lg:pl-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-gold/90 mb-3">
                    {activeCategory.subtitle}
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1]">
                    {activeCategory.label}
                  </h2>
                  <p className="mt-6 text-cream/55 leading-relaxed max-w-xl">
                    {activeCategory.description}
                  </p>
                </div>
              </div>

              <div className="divide-y divide-cream/10 border-t border-cream/10">
                {items.map((item) => (
                  <MenuRow key={item.id} item={item} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage
            src={IMAGE.atmosphereCandle}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso-950/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-gold/90 mb-6">
              Nota
            </p>
            <p className="font-serif text-2xl md:text-3xl text-cream italic leading-[1.3] text-balance">
              «Il menù può variare secondo la disponibilità del mercato e
              della stagione. Per allergie e intolleranze, parla con il nostro staff.»
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

/** MenuRow semplificato per non affaticare lo scorrimento */
function MenuRow({ item }: { item: MenuItem }) {
  return (
    <article className="group py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
      <div className="md:col-span-9">
        <h3 className="font-serif text-2xl md:text-3xl text-cream group-hover:text-amber-gold transition-colors duration-500">
          {item.name}
        </h3>
        <p className="mt-3 text-cream/55 leading-relaxed max-w-2xl">
          {item.description}
        </p>
        {item.tags && item.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[0.65rem] uppercase tracking-[0.2em] text-amber-gold/70 border border-amber-gold/30 px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="md:col-span-3 md:text-right">
        {item.pairingNote && (
          <div className="flex md:flex-col md:items-end gap-2 md:gap-1">
            <WineIcon className="w-4 h-4 text-amber-gold/60 shrink-0" />
            <span className="text-xs text-cream/50 leading-relaxed font-serif italic">
              {item.pairingNote}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
