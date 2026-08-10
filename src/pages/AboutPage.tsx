import { ButtonLink } from '@/components/ui/Button';
import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SmartImage } from '@/components/ui/SmartImage';
import { IMAGE, RESTAURANT } from '@/lib/constants';

// Inline image URLs for the atmosphere strip (gallery page removed).
const STRIP_IMAGES = [
  '/images/sociality.jpg',
  '/images/immagini.jpeg',
  '/images/musicista.jpeg',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="La Casa"
        title="Una storia di tempo e di gusti"
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
              <SectionLabel label="Le Origini" />
              <Reveal delay={0.1}>
                <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] text-balance">
                  Nato nel 2003 da un’idea
                  <span className="block italic text-amber-light/90">
                    di tempo e di pazienza
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 text-cream/60 leading-relaxed text-lg max-w-2xl">
                  C'era una volta{' '}
                  <span className="text-amber-light/90">
                    "Il Bistrot del Tempo Perduto"
                  </span>
                  , un delizioso angolo di paradiso fatto di candele, luci
                  soffuse, profumi e oggetti che respirano l'aria di un'epoca
                  passata.{' '}
                  <span className="text-amber-light/90">
                    Oggi è il momento di cambiare
                  </span>
                  , non nella sostanza, ma nei luoghi. Dopo un percorso sfidante
                  e faticoso, siamo finalmente arrivati al traguardo: vi
                  accogliamo in un{' '}
                  <span className="text-amber-light/90">
                    nuovo spazio dove arredi e colori emanano bellezza
                  </span>{' '}
                  e ricercatezza nei dettagli, senza mai lasciare indietro i nostri
                  sapori.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-6 text-cream/50 leading-relaxed max-w-2xl">
                  La nostra cucina si rifà ai{' '}
                  <span className="text-amber-light/90">
                    ricettari della nonna
                  </span>
                  . I nostri piatti sono fatti di{' '}
                  <span className="text-amber-light/90">
                    ricordi e tradizioni
                  </span>
                  , come la pasta fresca e lo stoccafisso alla ligure. Da noi puoi
                  ritrovare l'autentico{' '}
                  <span className="text-amber-light/90">
                    "piatto della domenica"
                  </span>
                  , quello che riporta alla mente i caldi pranzi in famiglia, per
                  poi chiudere in dolcezza con i{' '}
                  <span className="text-amber-light/90">
                    dessert più classici
                  </span>
                  , semplicemente quelli della mamma.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="mt-6 text-cream/50 leading-relaxed max-w-2xl">
                  Fuori tutto è{' '}
                  <span className="text-amber-light/90">
                    corsa e frenesia
                  </span>
                  , ma nel Bistrot no. Il nome "Tempo Perduto" continua a essere
                  un{' '}
                  <span className="text-amber-light/90">
                    omaggio alle sere che sembrano non finire mai
                  </span>{' '}
                  e ai vini che si fanno aspettare. Qui è come se il{' '}
                  <span className="text-amber-light/90">
                    tempo si fermasse
                  </span>
                  , trasformando l'attesa in meraviglia. Lo spirito è lo stesso di
                  sempre: grande cura per i dettagli, il sapore dei ricordi e{' '}
                  <span className="text-amber-light/90">
                    nessuna fretta
                  </span>
                  . E il nostro racconto continua con grandi novità... a presto.
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
                La Filosofia
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-cream italic leading-[1.2] text-balance">
                «Non serviamo solo cibo. Serviamo il lusso del tempo che fugge,
                trasformato in memoria.»
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
              <SectionLabel label="L’Ispirazione" />
              <Reveal delay={0.1}>
                <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] text-balance">
                  Tra Liguria
                  <span className="block italic text-amber-light/90">
                    e Provenza
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 text-cream/60 leading-relaxed text-lg max-w-xl">
                  La nostra cucina nasce dall’incontro tra due tradizioni che si
                  somigliano: la Liguria dei pesti e del pesce azzurro, e la
                  Francia delle salse madri e delle cotture lente.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-6 text-cream/50 leading-relaxed max-w-xl">
                  Anni passati in Provenza ci hanno insegnato il
                  rispetto per il tempo: il tempo di un fondo che riduce, di un
                  brasato che cuoce sei ore, di una pasta che riposa. 
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
              <SectionLabel label="Cucina di Stagione" />
              <Reveal delay={0.1}>
                <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] text-balance">
                  Il menù segue
                  <span className="block italic text-amber-light/90">
                    il mercato e l’orto
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 text-cream/60 leading-relaxed text-lg">
                  Il nostro menù cambia con le stagioni e con la pesca del giorno.
                  Lavoriamo con piccoli produttori dell’entroterra ligure e con
                  i pescatori del mercato di Imperia, scegliendo solo il meglio.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-6 text-cream/50 leading-relaxed">
                  La tradizione ligure — il pesto, i pansoti, il pesce azzurro —
                  incontra la tecnica francese: le salse madri, le cotture lente,
                  la pasticceria classica. Un dialogo tra due cucine che si
                  somigliano per amore del tempo e dell’ingrediente.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="mt-12 grid grid-cols-3 gap-8 border-t border-cream/10 pt-10">
                  {[
                    { value: '20+', label: 'Anni di cucina' },
                    { value: 'Ogni giorno', label: 'Pesca fresca' },
                    { value: 'A mano', label: 'Pasta fresca' },
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
                «Il tempo è l’ingrediente che non si compra.»
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
          <SectionLabel label="L’Ospitalità" align="center" />
          <Reveal delay={0.1}>
            <p className="mt-8 font-serif text-2xl md:text-4xl text-cream italic leading-[1.3] text-balance">
              «Accogliamo ogni ospite come si accoglie un amico di lunga data:
              con tempo, con cura, con la voglia di farlo sentire a casa.»
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-sm text-cream/40">
              La nostra squadra — sala e cucina
            </p>
          </Reveal>
        </div>
      </section>

      {/* Three pillars */}
      <section className="relative py-24 md:py-40 bg-charcoal-dark grain-overlay">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <SectionLabel label="I Tre Pilastri" align="center" />
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1] max-w-3xl text-balance">
                Cucina, Cantina, Atmosfera
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                num: '01',
                title: 'Cucina',
                text: 'Materia prima eccellente, tecnica classica, stagionalità rigorosa. Niente compromessi sull’ingrediente.',
              },
              {
                num: '02',
                title: 'Cantina',
                text: "Una selezione curata di vini. Il nostro staff ti consiglierà l'abbinamento perfetto per i tuoi piatti.",
              },
              {
                num: '03',
                title: 'Atmosfera',
                text: 'Poca luce, molta cura. Tavoli distanti, musica soft, candele accese ogni sera come un rito.',
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
              Vieni a scoprire
              <span className="block italic text-amber-light/90">
                il tempo perduto
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <ButtonLink to="/reservations" variant="solid" withArrow>
                Prenota un Tavolo
              </ButtonLink>
              <ButtonLink to="/menu" variant="outline">
                Vedi il Menù
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
