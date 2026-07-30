import type { ReactNode } from 'react';
import { SmartImage } from '@/components/ui/SmartImage';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  image: string;
  children?: ReactNode;
  isCompact?: boolean; // <--- Abbiamo aggiunto questa opzione
}

/**
 * Fullscreen cinematic hero used at the top of interior pages.
 * Image is eager-loaded with high priority for a fast LCP.
 */
export function PageHero({ eyebrow, title, image, children, isCompact = false }: PageHeroProps) {
  
  // Se isCompact è true, usa l'altezza ridotta, altrimenti usa quella originale
  const heightClass = isCompact ? "min-h-[40vh] md:min-h-[50vh]" : "min-h-[70vh] md:min-h-[80vh]";
  const paddingClass = isCompact ? "pt-32" : "pt-32";

  return (
    <section className={`relative flex items-end overflow-hidden ${heightClass}`}>
      <div className="absolute inset-0">
        <SmartImage
          src={image}
          alt=""
          className="h-full w-full object-cover"
          eager
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/50 to-espresso-950/30" />
        <div className="absolute inset-0 bg-espresso-950/20" />
      </div>

      <div className={`relative z-10 mx-auto max-w-[1600px] w-full px-6 md:px-10 lg:px-16 pb-20 md:pb-28 ${paddingClass}`}>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-gold/90 mb-6">
            {eyebrow}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream text-shadow-strong leading-[1.05]">
            {title}
          </h1>
          {children}
        </div>
      </div>
    </section>
  );
}
