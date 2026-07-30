import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SmartImage } from '@/components/ui/SmartImage';
import { IMAGE } from '@/lib/constants';

export function WinePreview() {
  return (
    <section className="relative py-24 md:py-40 bg-espresso-950 grain-overlay">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="lg:col-span-7">
            <div className="relative">
              <Reveal y={40}>
                <div className="aspect-[4/3] md:aspect-[16/11] overflow-hidden">
                  <SmartImage
                    src={IMAGE.wineCellar}
                    alt="La cantina dei vini"
                    className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                  />
                </div>
              </Reveal>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:block absolute -bottom-10 -right-10 w-52 h-72 overflow-hidden border-8 border-espresso-950 shadow-2xl"
              >
                <SmartImage
                  src="images/redwine.jpg"
                  alt="Bottiglia di vino selezionata"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-5">
            <SectionLabel label="La Cantina" />
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] text-balance">
                Una cantina da
                <span className="block italic text-amber-light/90">
                  mille e più etichette
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-cream/60 leading-relaxed text-lg">
                La nostra cantina raccoglie oltre mille etichette, con una
                selezione dedicata ai vitigni liguri, ai grandi rossi italiani
                e ai classici francesi. Ogni piatto trova il suo abbinamento.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 text-cream/50 leading-relaxed">
                Il nostro sommelier è a disposizione per guidarti in un percorso
                di degustazione, dalla bollicina d’apertura al dolce finale.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10">
                <ButtonLink to="/wine" variant="ghost" withArrow className="text-amber-gold">
                  Esplora la Cantina
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
