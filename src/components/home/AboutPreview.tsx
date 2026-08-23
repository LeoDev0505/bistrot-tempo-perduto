import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SmartImage } from '@/components/ui/SmartImage';
import { IMAGE } from '@/lib/constants';
import { useTranslation } from 'react-i18next';

export function AboutPreview() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 md:py-40 bg-espresso-950 grain-overlay">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image column — single editorial image, no collage */}
          <div className="lg:col-span-6 lg:order-2">
            <Reveal y={40}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <SmartImage
                  src="/images/sala.jpg"
                  alt="L'interno del bistrot illuminato da candele"
                  className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out hover:scale-105"
                />
              </div>
            </Reveal>
          </div>

          {/* Text column — concise teaser */}
          <div className="lg:col-span-6 lg:order-1">
            <SectionLabel label={t('aboutPreview.label')} />

            <Reveal delay={0.1}>
              <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] text-balance">
                {t('aboutPreview.title')}
                <span className="block italic text-amber-light/90">
                  {t('aboutPreview.titleItalic')}
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 text-cream/60 leading-relaxed text-lg max-w-xl">
                {t('aboutPreview.description')}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10">
                <ButtonLink to="/about" variant="ghost" withArrow className="text-amber-gold">
                  {t('aboutPreview.button')}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
