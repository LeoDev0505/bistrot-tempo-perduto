import { ArrowRight, Calendar, Clock, Mail, Phone, User, Users } from 'lucide-react';

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
      name="prenotazione_it" // <--- CAMBIATO QUI
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/?grazie=1"
      className={`space-y-8 ${className}`}
    >
      {/* Netlify hidden fields */}
      <input type="hidden" name="form-name" value="prenotazione_it" /> {/* <--- CAMBIATO ANCHE QUI */}
      <p className="hidden">
        <label>
          Non compilare questo campo: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="nome" className={labelBase}>Nome e Cognome</label>
          <div className="relative">
            <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
            <input id="nome" name="nome" type="text" required className={inputBase} placeholder="Mario Rossi" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className={labelBase}>Email</label>
          <div className="relative">
            <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
            <input id="email" name="email" type="email" required className={inputBase} placeholder="mario.rossi@email.com" />
          </div>
        </div>

        <div>
          <label htmlFor="telefono" className={labelBase}>Telefono</label>
          <div className="relative">
            <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
            <input id="telefono" name="telefono" type="tel" required className={inputBase} placeholder="+39 333 1234567" />
          </div>
        </div>

        <div>
          <label htmlFor="ospiti" className={labelBase}>Numero di Ospiti</label>
          <div className="relative">
            <Users className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
            <select id="ospiti" name="ospiti" required defaultValue="2" className={`${inputBase} appearance-none cursor-pointer`}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n} className="bg-espresso-900 text-cream">
                  {n} {n === 1 ? 'ospite' : 'ospiti'}
                </option>
              ))}
              <option value="9+" className="bg-espresso-900 text-cream">9+ (gruppi)</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="data" className={labelBase}>Data</label>
          <div className="relative">
            <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
            <input id="data" name="data" type="date" required min={new Date().toISOString().split('T')[0]} className={`${inputBase} [color-scheme:dark]`} />
          </div>
        </div>

        <div>
          <label htmlFor="ora" className={labelBase}>Ora</label>
          <div className="relative">
            <Clock className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/40" />
            <select id="ora" name="ora" required defaultValue="20:00" className={`${inputBase} appearance-none cursor-pointer`}>
              {['12:30', '13:00', '13:30', '14:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map((t) => (
                <option key={t} value={t} className="bg-espresso-900 text-cream">{t}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="occasione" className={labelBase}>Occasione <span className="text-cream/30 normal-case tracking-normal">(opzionale)</span></label>
        <select id="occasione" name="occasione" defaultValue="" className={`${inputBase} pl-0 appearance-none cursor-pointer`}>
          <option value="Nessuna" className="bg-espresso-900 text-cream">Nessuna</option>
          <option value="Anniversario" className="bg-espresso-900 text-cream">Anniversario</option>
          <option value="Compleanno" className="bg-espresso-900 text-cream">Compleanno</option>
          <option value="Cena di lavoro" className="bg-espresso-900 text-cream">Cena di lavoro</option>
          <option value="Celebrazione" className="bg-espresso-900 text-cream">Celebrazione</option>
          <option value="Primo appuntamento" className="bg-espresso-900 text-cream">Primo appuntamento</option>
        </select>
      </div>

      <div>
        <label htmlFor="messaggio" className={labelBase}>Richieste Speciali <span className="text-cream/30 normal-case tracking-normal">(opzionale)</span></label>
        <textarea id="messaggio" name="messaggio" rows={3} className="w-full bg-transparent border-b border-cream/20 focus:border-amber-gold py-3 text-cream placeholder-cream/30 transition-colors duration-500 outline-none font-sans text-sm resize-none" placeholder="Allergie, intolleranze, richieste particolari..." />
      </div>

      <div className="pt-4">
        <button type="submit" className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-widest font-sans transition-all duration-500 bg-amber-gold text-espresso-950 hover:bg-amber-light border border-amber-gold hover:border-amber-light">
          <span>Invia Richiesta</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}