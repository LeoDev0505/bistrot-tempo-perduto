import { ArrowRight, Calendar, Clock, Mail, Phone, User, Users } from 'lucide-react';

/**
 * Reservation form wired for Netlify Forms.
 *
 * Native HTML submission — no JS fetch. Netlify intercepts the POST at
 * deploy time and stores the submission. The `action` attribute sends the
 * guest to a thank-you anchor after success.
 */
interface ReservationFormProps {
  className?: string;
}

const inputBase =
  'w-full bg-transparent border-b border-cream/20 focus:border-amber-gold py-3 pl-10 text-cream placeholder-cream/30 transition-colors duration-500 outline-none font-sans text-sm';

const labelBase =
  'block text-xs uppercase tracking-[0.2em] text-cream/50 mb-2';

export function ReservationForm({ className = '' }: ReservationFormProps) {
  return (
    <form
      name="prenotazione"
      method="POST"
      action="/reservations?grazie=1"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className={`space-y-8 ${className}`}
    >
      {/* Netlify hidden fields */}
      <input type="hidden" name="form-name" value="prenotazione" />
      <p className="hidden">
        <label>
          Non compilare questo campo: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelBase}>
            Nome e Cognome
          </label>
          <div className="relative">
            <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
            <input
              id="name"
              name="name"
              type="text"
              required
              className={inputBase}
              placeholder="Mario Rossi"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelBase}>
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputBase}
              placeholder="mario.rossi@email.com"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelBase}>
            Telefono
          </label>
          <div className="relative">
            <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className={inputBase}
              placeholder="+39 333 1234567"
            />
          </div>
        </div>

        {/* Party size */}
        <div>
          <label htmlFor="party_size" className={labelBase}>
            Numero di Ospiti
          </label>
          <div className="relative">
            <Users className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
            <select
              id="party_size"
              name="party_size"
              required
              defaultValue="2"
              className={`${inputBase} appearance-none cursor-pointer`}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n} className="bg-espresso-900 text-cream">
                  {n} {n === 1 ? 'ospite' : 'ospiti'}
                </option>
              ))}
              <option value={9} className="bg-espresso-900 text-cream">
                9+ (gruppi)
              </option>
            </select>
          </div>
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className={labelBase}>
            Data
          </label>
          <div className="relative">
            <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
            <input
              id="date"
              name="date"
              type="date"
              required
              min={new Date().toISOString().split('T')[0]}
              className={`${inputBase} [color-scheme:dark]`}
            />
          </div>
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className={labelBase}>
            Ora
          </label>
          <div className="relative">
            <Clock className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
            <select
              id="time"
              name="time"
              required
              defaultValue="20:00"
              className={`${inputBase} appearance-none cursor-pointer`}
            >
              {[
                '12:30', '13:00', '13:30', '14:00',
                '19:00', '19:30', '20:00', '20:30', '21:00', '21:30',
              ].map((t) => (
                <option key={t} value={t} className="bg-espresso-900 text-cream">
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Occasion */}
      <div>
        <label htmlFor="occasion" className={labelBase}>
          Occasione <span className="text-cream/30 normal-case tracking-normal">(opzionale)</span>
        </label>
        <select
          id="occasion"
          name="occasion"
          defaultValue=""
          className={`${inputBase} pl-0 appearance-none cursor-pointer`}
        >
          <option value="" className="bg-espresso-900 text-cream">
            Nessuna
          </option>
          <option value="anniversary" className="bg-espresso-900 text-cream">
            Anniversario
          </option>
          <option value="birthday" className="bg-espresso-900 text-cream">
            Compleanno
          </option>
          <option value="business" className="bg-espresso-900 text-cream">
            Cena di lavoro
          </option>
          <option value="celebration" className="bg-espresso-900 text-cream">
            Celebrazione
          </option>
          <option value="first-date" className="bg-espresso-900 text-cream">
            Primo appuntamento
          </option>
        </select>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className={labelBase}>
          Richieste Speciali <span className="text-cream/30 normal-case tracking-normal">(opzionale)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="w-full bg-transparent border-b border-cream/20 focus:border-amber-gold py-3 text-cream placeholder-cream/30 transition-colors duration-500 outline-none font-sans text-sm resize-none"
          placeholder="Allergie, intolleranze, richieste particolari..."
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-widest font-sans transition-all duration-500 bg-amber-gold text-espresso-950 hover:bg-amber-light border border-amber-gold hover:border-amber-light"
        >
          <span>Invia Richiesta</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
        </button>
      </div>

      <p className="text-xs text-cream/40 leading-relaxed">
        La prenotazione non è confermata fino a quando non riceverai una
        comunicazione dal nostro staff. Per richieste urgenti, chiamaci
        direttamente.
      </p>
    </form>
  );
}
