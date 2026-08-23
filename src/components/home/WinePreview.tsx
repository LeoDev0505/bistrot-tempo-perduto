import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SmartImage } from '@/components/ui/SmartImage';
import { IMAGE } from '@/lib/constants';
import { useTranslation } from 'react-i18next';

export function WinePreview() {
  const { t } = useTranslation();

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
                    alt={t('winePreview.altMain')}
                    className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                  />
                </div>
              </Reveal>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block absolute -bottom-4 -right-4 w-32 h-44 md:-bottom-10 md:-right-10 md:w-52 md:h-72 overflow-hidden border-4 md:border-8 border-espresso-950 shadow-2xl z-10"
              >
                <SmartImage
                  src="images/redwine.jpg"
                  alt={t('winePreview.altSecondary')}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-5">
            <SectionLabel label={t('winePreview.label')} />
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] text-balance">
                {t('winePreview.title')}
                <span className="block italic text-amber-light/90">
                  {t('winePreview.titleItalic')}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-cream/60 leading-relaxed text-lg">
                {t('winePreview.description1')}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-6 text-cream/50 leading-relaxed">
                {t('winePreview.description2')}
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10">
                <ButtonLink to="/wine" variant="ghost" withArrow className="text-amber-gold">
                  {t('winePreview.button')}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
