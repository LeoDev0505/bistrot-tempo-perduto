import { Clock } from 'lucide-react';
import { RESTAURANT } from '@/lib/constants';

interface OpeningHoursProps {
  /** Compact variant uses a single inline row per day (used in sidebars/footers). */
  compact?: boolean;
  className?: string;
}

/**
 * Opening hours list. Single source of truth for the hours markup,
 * used by the Footer, Reservations sidebar, and Contact page.
 */
export function OpeningHours({ compact = false, className = '' }: OpeningHoursProps) {
  if (compact) {
    return (
      <ul className={`space-y-1.5 ${className}`}>
        {RESTAURANT.hours.map((h) => (
          <li key={h.days} className="text-cream/70 text-sm">
            <span className="text-cream/80">{h.days}</span>
            <span className="text-cream/40 mx-2">·</span>
            <span className="text-cream/60">{h.time}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`space-y-5 ${className}`}>
      {RESTAURANT.hours.map((h) => (
        <li key={h.days} className="flex items-start gap-3">
          <Clock className="w-4 h-4 mt-1 text-amber-gold/60 shrink-0" />
          <div>
            <p className="text-sm text-cream/80">{h.days}</p>
            <p className="text-sm text-cream/50 mt-0.5">{h.time}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
