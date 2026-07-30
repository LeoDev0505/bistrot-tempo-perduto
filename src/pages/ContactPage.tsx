import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { OpeningHours } from '@/components/ui/OpeningHours';
import { ButtonLink } from '@/components/ui/Button';
import { IMAGE, RESTAURANT } from '@/lib/constants';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title="Vieni a trovarci"
        image={IMAGE.contactHero}
      >
        <p className="mt-6 max-w-xl text-cream/60 leading-relaxed">
          Siamo nel cuore di Imperia, a pochi passi dal porto. Per qualsiasi
          richiesta — prenotazioni, eventi privati, cene di lavoro — siamo
          a tua disposizione.
        </p>
      </PageHero>

      <section className="relative py-20 md:py-32 bg-espresso-950 grain-overlay">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Info column */}
            <div className="lg:col-span-5">
              <SectionLabel label="Dove Siamo" />
              <Reveal delay={0.1}>
                <h2 className="mt-8 font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.1] mb-10">
                  Il Bistrot del Tempo Perduto
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 mt-1 text-amber-gold/70 shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-gold/70 mb-2">
                        Indirizzo
                      </p>
                      <p className="text-cream/80 leading-relaxed">
                        {RESTAURANT.address.street}
                        <br />
                        {RESTAURANT.address.postalCode} {RESTAURANT.address.city},{' '}
                        {RESTAURANT.address.region}
                        <br />
                        {RESTAURANT.address.country}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 mt-1 text-amber-gold/70 shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-gold/70 mb-2">
                        Telefono
                      </p>
                      <a
                        href={RESTAURANT.phoneHref}
                        className="text-cream/80 hover:text-amber-gold transition-colors"
                      >
                        {RESTAURANT.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 mt-1 text-amber-gold/70 shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-gold/70 mb-2">
                        Email
                      </p>
                      <a
                        href={RESTAURANT.emailHref}
                        className="text-cream/80 hover:text-amber-gold transition-colors break-all"
                      >
                        {RESTAURANT.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 mt-1 text-amber-gold/70 shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-gold/70 mb-2">
                        Orari
                      </p>
                      <OpeningHours compact />
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-10">
                  <ButtonLink to="/reservations" variant="solid" withArrow>
                    Prenota un Tavolo
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            {/* Map column */}
            <div className="lg:col-span-7">
              <Reveal y={40}>
                <div className="relative h-[400px] md:h-[500px] lg:h-full lg:min-h-[600px] overflow-hidden border border-cream/10 bg-charcoal-dark">
                <iframe
                      title="Mappa del ristorante"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.3900249539343!2d8.037149!3d43.886026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d26ce37beea121%3A0x6b107b30932bc6e7!2sPiazza%20Nino%20Bixio%2C%2018100%20Imperia%20IM!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                      className="absolute top-0 left-0 w-full h-full"
                      style={{ border: 0, filter: 'grayscale(0.4) contrast(0.95) brightness(0.85)' }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  {/* Subtle overlay to harmonize the map with the dark theme */}
                  <div className="pointer-events-none absolute inset-0 bg-espresso-950/20" />

                  {/* Directions + Open in map buttons */}
                  <div className="absolute bottom-4 right-4 flex flex-col sm:flex-row gap-2">
                    <a
                      href={RESTAURANT.mapDirectionsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-amber-gold text-espresso-950 px-4 py-2 text-xs uppercase tracking-[0.2em] hover:bg-amber-light transition-all duration-500"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Indicazioni
                    </a>
                    <a
                      href={RESTAURANT.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-espresso-950/80 backdrop-blur-sm border border-amber-gold/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-amber-gold hover:bg-amber-gold hover:text-espresso-950 transition-all duration-500"
                    >
                      Apri in mappa
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Social row */}
      <section className="relative py-16 md:py-20 bg-charcoal-dark grain-overlay border-t border-cream/5">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <Reveal>
              <p className="font-serif text-2xl md:text-3xl text-cream italic">
                Seguici nei nostri canali
              </p>
            </Reveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-8"
            >
              {RESTAURANT.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-xs uppercase tracking-[0.2em] text-cream/70 hover:text-amber-gold transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
