import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS, RESTAURANT } from '@/lib/constants';
import { OpeningHours } from '@/components/ui/OpeningHours';

export function Footer() {
  return (
    <footer className="bg-espresso-950 border-t border-cream/5 grain-overlay">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl text-cream">Il Bistrot</h3>
            <p className="font-serif text-sm tracking-[0.3em] uppercase text-amber-gold/80 mt-1">
              del Tempo Perduto
            </p>
            <p className="mt-6 text-sm leading-relaxed text-cream/50 max-w-xs">
              {RESTAURANT.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-amber-gold/90 mb-6">
              Esplora
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="link-underline text-sm text-cream/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/reservations"
                  className="link-underline text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  Prenotazioni
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-amber-gold/90 mb-6">
              Orari
            </h4>
            <OpeningHours />
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-amber-gold/90 mb-6">
              Contatti
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-amber-gold/60 shrink-0" />
                <span className="text-sm text-cream/70 leading-relaxed">
                  {RESTAURANT.address.street}
                  <br />
                  {RESTAURANT.address.postalCode} {RESTAURANT.address.city},{' '}
                  {RESTAURANT.address.region}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-amber-gold/60 shrink-0" />
                <a
                  href={RESTAURANT.phoneHref}
                  className="text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  {RESTAURANT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-amber-gold/60 shrink-0" />
                <a
                  href={RESTAURANT.emailHref}
                  className="text-sm text-cream/70 hover:text-cream transition-colors break-all"
                >
                  {RESTAURANT.email}
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4">
              {RESTAURANT.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-xs uppercase tracking-[0.2em] text-cream/60 hover:text-amber-gold transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-xs text-cream/40 tracking-wide">
            © {new Date().getFullYear()} {RESTAURANT.name}. Tutti i diritti riservati.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="text-xs text-cream/40">
              Imperia · Liguria · Italia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}