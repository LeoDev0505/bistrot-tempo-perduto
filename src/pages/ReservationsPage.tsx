import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { OpeningHours } from '@/components/ui/OpeningHours';
import { ReservationForm } from '@/components/ui/ReservationForm';
import { IMAGE, RESTAURANT } from '@/lib/constants';

export default function ReservationsPage() {
  const [params] = useSearchParams();
  const confirmed = params.get('grazie') === '1';
  return (
    <>
      <PageHero
        eyebrow="Prenotazioni"
        title="Riserva il tuo tavolo"
        image={IMAGE.reservationHero}
      >
        <p className="mt-6 max-w-xl text-cream/60 leading-relaxed">
          Compila la richiesta qui sotto. Ti contatteremo per confermare la
          disponibilità. Per gruppi oltre gli 8 ospiti o eventi privati,
          chiamaci direttamente.
        </p>
      </PageHero>

      <section className="relative pt-16 pb-12 md:py-32 bg-espresso-950 grain-overlay">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-8">
              <SectionLabel label="Richiesta di Prenotazione" />
              <Reveal delay={0.1}>
                <h2 className="mt-8 font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.1] mb-12">
                  I tuoi dettagli
                </h2>
              </Reveal>

              {confirmed ? (
                <div className="border border-amber-gold/30 bg-charcoal-dark p-10 md:p-14">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-gold/90 mb-4">
                    Richiesta ricevuta
                  </p>
                  <p className="font-serif text-2xl md:text-3xl text-cream italic leading-[1.3]">
                    «Grazie. Ti contatteremo presto per confermare la tua prenotazione.»
                  </p>
                </div>
              ) : (
                <ReservationForm />
              )}
            </div>

            {/* Sidebar info */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-10">
                <div>
                  <SectionLabel label="Orari di Apertura" />
                  <div className="mt-6">
                    <OpeningHours />
                  </div>
                </div>

                <div className="h-px bg-cream/10" />

                <div>
                  <SectionLabel label="Contatti Diretti" />
                  <ul className="mt-6 space-y-5">
                    <li className="flex items-start gap-3">
                      <Phone className="w-4 h-4 mt-1 text-amber-gold/60 shrink-0" />
                      <a
                        href={RESTAURANT.phoneHref}
                        className="text-sm text-cream/70 hover:text-amber-gold transition-colors"
                      >
                        {RESTAURANT.phone}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 mt-1 text-amber-gold/60 shrink-0" />
                      <span className="text-sm text-cream/70 leading-relaxed">
                        {RESTAURANT.address.street}
                        <br />
                        {RESTAURANT.address.postalCode} {RESTAURANT.address.city}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="h-px bg-cream/10" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="border border-amber-gold/20 p-6"
                >
                  <p className="font-serif text-lg text-amber-gold italic leading-relaxed">
                    «Il tempo perduto è il tempo più bello.»
                  </p>
                </motion.div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
