import { ButtonLink } from '@/components/ui/Button';
import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SmartImage } from '@/components/ui/SmartImage';
import { IMAGE, RESTAURANT } from '@/lib/constants';
import { useTranslation } from 'react-i18next';

// Inline image URLs for the atmosphere strip (gallery page removed).
const STRIP_IMAGES = [
  '/images/sociality.jpg',
  '/images/candle.png',
  '/images/musicista.jpeg',
];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        eyebrow={t('aboutPage.heroEyebrow')}
        title={t('aboutPage.heroTitle')}
        image="/images/casa.jpg"
      />

      {/* Story — alternating editorial layout */}
      <section className="relative py-24 md:py-40 bg-espresso-950 grain-overlay">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <SmartImage
                    src="images/vanessa.jpg"
                    alt="Lo chef al lavoro"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <SectionLabel label={t('aboutPage.originsLabel')} />
              <Reveal delay={0.1}>
                <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] text-balance">
                  {t('aboutPage.originsTitle1')}
                  <span className="block italic text-amber-light/90">
                    {t('aboutPage.originsTitle2')}
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 text-cream/60 leading-relaxed text-lg max-w-2xl">
                  {t('aboutPage.originsP1_1')}
                  <span className="text-amber-light/90">
                    {t('aboutPage.originsP1_2')}
                  </span>
                  {t('aboutPage.originsP1_3')}
                  <span className="text-amber-light/90">
                    {t('aboutPage.originsP1_4')}
                  </span>
                  {t('aboutPage.originsP1_5')}
                  <span className="text-amber-light/90">
                    {t('aboutPage.originsP1_6')}
                  </span>
                  {t('aboutPage.originsP1_7')}
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-6 text-cream/50 leading-relaxed max-w-2xl">
                  {t('aboutPage.originsP2_1')}
                  <span className="text-amber-light/90">
                    {t('aboutPage.originsP2_2')}
                  </span>
                  {t('aboutPage.originsP2_3')}
                  <span className="text-amber-light/90">
                    {t('aboutPage.originsP2_4')}
                  </span>
                  {t('aboutPage.originsP2_5')}
                  <span className="text-amber-light/90">
                    {t('aboutPage.originsP2_6')}
                  </span>
                  {t('aboutPage.originsP2_7')}
                  <span className="text-amber-light/90">
                    {t('aboutPage.originsP2_8')}
                  </span>
                  {t('aboutPage.originsP2_9')}
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="mt-6 text-cream/50 leading-relaxed max-w-2xl">
                  {t('aboutPage.originsP3_1')}
                  <span className="text-amber-light/90">
                    {t('aboutPage.originsP3_2')}
                  </span>
                  {t('aboutPage.originsP3_3')}
                  <span className="text-amber-light/90">
                    {t('aboutPage.originsP3_4')}
                  </span>
                  {t('aboutPage.originsP3_5')}
                  <span className="text-amber-light/90">
                    {t('aboutPage.originsP3_6')}
                  </span>
                  {t('aboutPage.originsP3_7')}
                  <span className="text-amber-light/90">
                    {t('aboutPage.originsP3_8')}
                  </span>
                  {t('aboutPage.originsP3_9')}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy — full image with overlay quote */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden bg-charcoal-dark">
        <SmartImage
          src={IMAGE.atmosphereCandle}
          alt="Atmosfera intima con candele"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso-950/55" />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.4em] text-amber-gold/90 mb-6">
                {t('aboutPage.philosophyLabel')}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-cream italic leading-[1.2] text-balance">
                {t('aboutPage.philosophyQuote')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Inspiration — editorial split */}
      <section className="relative py-24 md:py-40 bg-espresso-950 grain-overlay">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 lg:order-2">
              <Reveal y={40}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <SmartImage
                    src="/images/inside.jpeg"
                    alt="Pasta fresca ispirata alla tradizione franco-ligure"
                    className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <SectionLabel label={t('aboutPage.inspirationLabel')} />
              <Reveal delay={0.1}>
                <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] text-balance">
                  {t('aboutPage.inspirationTitle1')}
                  <span className="block italic text-amber-light/90">
                    {t('aboutPage.inspirationTitle2')}
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 text-cream/60 leading-relaxed text-lg max-w-xl">
                  {t('aboutPage.inspirationP1')}
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-6 text-cream/50 leading-relaxed max-w-xl">
                  {t('aboutPage.inspirationP2')}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal cuisine — stats split */}
      <section className="relative py-24 md:py-40 bg-charcoal-dark grain-overlay overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <SectionLabel label={t('aboutPage.seasonLabel')} />
              <Reveal delay={0.1}>
                <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] text-balance">
                  {t('aboutPage.seasonTitle1')}
                  <span className="block italic text-amber-light/90">
                    {t('aboutPage.seasonTitle2')}
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 text-cream/60 leading-relaxed text-lg">
                  {t('aboutPage.seasonP1')}
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-6 text-cream/50 leading-relaxed">
                  {t('aboutPage.seasonP2')}
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="mt-12 grid grid-cols-3 gap-8 border-t border-cream/10 pt-10">
                  {[
                    { value: '20+', label: t('aboutPage.statsLabel1') },
                    { value: t('aboutPage.statsValue2'), label: t('aboutPage.statsLabel2') },
                    { value: t('aboutPage.statsValue3'), label: t('aboutPage.statsLabel3') },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-serif text-2xl md:text-3xl text-amber-gold">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream/40">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="group relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                <SmartImage
                  src="/images/pescatori.jpeg"
                  alt="Pesce fresco della pesca del giorno"
                  className="h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 to-transparent pointer-events-none" />
              </div>
              <p className="mt-4 text-sm text-cream/40 font-serif italic">
                {t('aboutPage.seasonQuote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality — full-width quote with subtle editorial background */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage
            src={IMAGE.atmosphereCandle}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso-950/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
          <SectionLabel label={t('aboutPage.hospitalityLabel')} align="center" />
          <Reveal delay={0.1}>
            <p className="mt-8 font-serif text-2xl md:text-4xl text-cream italic leading-[1.3] text-balance">
              {t('aboutPage.hospitalityQuote')}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-sm text-cream/40">
              {t('aboutPage.hospitalitySub')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Three pillars */}
      <section className="relative py-24 md:py-40 bg-charcoal-dark grain-overlay">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <SectionLabel label={t('aboutPage.pillarsLabel')} align="center" />
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] max-w-3xl text-balance">
                {t('aboutPage.pillarsTitle')}
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                num: '01',
                title: t('aboutPage.kitchenTitle'),
                text: t('aboutPage.kitchenText'),
              },
              {
                num: '02',
                title: t('aboutPage.cellarTitle'),
                text: t('aboutPage.cellarText'),
              },
              {
                num: '03',
                title: t('aboutPage.atmosphereTitle'),
                text: t('aboutPage.atmosphereText'),
              },
            ].map((p, i) => (
              <Reveal key={p.num} delay={i * 0.12}>
                <div className="border-t border-cream/10 pt-8">
                  <p className="font-serif text-5xl text-amber-gold/40 mb-6">
                    {p.num}
                  </p>
                  <h3 className="font-serif text-3xl text-cream mb-4">
                    {p.title}
                  </h3>
                  <p className="text-cream/55 leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere image strip */}
      <section className="relative py-24 md:py-32 bg-espresso-950 grain-overlay">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {STRIP_IMAGES.map((src, i) => (
              <Reveal key={src} delay={i * 0.1} y={30}>
                <div
                  className={`relative overflow-hidden aspect-square transition-all ${
                    i === 2 ? 'col-span-2 md:col-span-1 justify-self-center md:justify-self-auto' : ''
                  }`}
                >
                  <SmartImage
                    src={src}
                    alt="Atmosfera del bistrot"
                    className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-charcoal-dark">
        <div className="mx-auto max-w-3xl text-center px-6">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-cream leading-[1.1] text-balance">
              {t('aboutPage.ctaTitle1')}
              <span className="block italic text-amber-light/90">
                {t('aboutPage.ctaTitle2')}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <ButtonLink to="/reservations" variant="solid" withArrow>
                {t('aboutPage.ctaBtnBook')}
              </ButtonLink>
              <ButtonLink to="/menu" variant="outline">
                {t('aboutPage.ctaBtnMenu')}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-12 text-sm text-cream/40">
              {RESTAURANT.address.street} · {RESTAURANT.address.city}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}