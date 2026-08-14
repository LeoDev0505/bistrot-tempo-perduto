import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { OpeningHours } from '@/components/ui/OpeningHours';
import { IMAGE, RESTAURANT } from '@/lib/constants';

export default function ReservationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Prenotazioni"
        title="Riserva il tuo tavolo"
        image="/images/tavolo.jpg"
      >
        <p className="mt-6 max-w-xl text-cream/60 leading-relaxed">
          Contattaci direttamente per riservare il tuo tavolo.
        </p>
      </PageHero>

      <section className="relative pt-16 pb-12 md:py-32 bg-espresso-950 grain-overlay">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Sezione Contatti Diretti (Ex Form) */}
            <div className="lg:col-span-8">
              <SectionLabel label="Come Prenotare" />
              <Reveal delay={0.1}>
                <h2 className="mt-8 font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.1] mb-12">
                  Prenota Direttamente
                </h2>
              </Reveal>

              <div className="space-y-6">
                {/* Card Chiamata */}
                <a
                  href={RESTAURANT.phoneHref}
                  className="group flex flex-col sm:flex-row sm:items-center gap-6 p-8 border border-amber-gold/20 bg-charcoal-dark hover:border-amber-gold/50 transition-all duration-500"
                >
                  <div className="w-14 h-14 shrink-0 flex items-center justify-center border border-amber-gold/30 rounded-full text-amber-gold group-hover:scale-110 group-hover:bg-amber-gold/10 transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-2">Chiamaci</p>
                    <p className="font-serif text-2xl md:text-3xl text-cream">{RESTAURANT.phone}</p>
                  </div>
                </a>

                {/* Card WhatsApp */}
                <a
                  /* Sostituisci '393899024014' con il numero corretto (solo numeri, con il 39 davanti) */
                  href="https://wa.me/393899024014" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row sm:items-center gap-6 p-8 border border-amber-gold/20 bg-charcoal-dark hover:border-amber-gold/50 transition-all duration-500"
                >
                  <div className="w-14 h-14 shrink-0 flex items-center justify-center border border-amber-gold/30 rounded-full text-amber-gold group-hover:scale-110 group-hover:bg-amber-gold/10 transition-all duration-500">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-2">Scrivici su WhatsApp</p>
                    <p className="font-serif text-2xl md:text-3xl text-cream">{RESTAURANT.phone}</p>
                  </div>
                </a>

                {/* Card Email / PEC */}
                <a
                  /* Inserisci qui l'indirizzo email o PEC corretto dopo "mailto:" */
                  href="mailto:ilbistrotdeltempoperduto@pec.it"
                  className="group flex flex-col sm:flex-row sm:items-center gap-6 p-8 border border-amber-gold/20 bg-charcoal-dark hover:border-amber-gold/50 transition-all duration-500"
                >
                  <div className="w-14 h-14 shrink-0 flex items-center justify-center border border-amber-gold/30 rounded-full text-amber-gold group-hover:scale-110 group-hover:bg-amber-gold/10 transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cream/50 mb-2">Invia una Email / PEC</p>
                    {/* Inserisci qui l'indirizzo da mostrare a schermo */}
                    <p className="font-serif text-2xl md:text-3xl text-cream break-all">ilbistrotdeltempoperduto@pec.it</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Sidebar info (Invariata) */}
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
