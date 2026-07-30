import { Reveal } from './Reveal';

interface SectionLabelProps {
  label: string;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Small uppercase eyebrow label with a thin gold rule.
 * Sits above section titles throughout the site.
 */
export function SectionLabel({
  label,
  align = 'left',
  className = '',
}: SectionLabelProps) {
  const alignment = align === 'center' ? 'items-center' : 'items-start';
  const ruleClass = align === 'center' ? 'mx-auto' : '';
  return (
    <Reveal>
      <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
        <span className="h-px w-12 bg-amber-gold/70" />
        <span className="text-xs uppercase tracking-[0.3em] text-amber-gold/90 font-sans">
          {label}
        </span>
      </div>
    </Reveal>
  );
}
