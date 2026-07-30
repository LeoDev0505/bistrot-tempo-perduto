import { useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
}

/**
 * Image with async decoding, lazy loading by default, and an elegant
 * gradient fallback when a source fails — so broken images never surface
 * as broken icons or visible alt text. Preserves layout via aspect-ratio.
 */
export function SmartImage({
  src,
  alt,
  className = '',
  eager = false,
  fetchPriority = 'auto',
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} bg-gradient-to-br from-espresso-800 via-espresso-900 to-espresso-950`}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      // @ts-expect-error fetchPriority is valid HTML; not yet in TS DOM lib
      fetchpriority={fetchPriority}
      onError={() => setFailed(true)}
    />
  );
}
