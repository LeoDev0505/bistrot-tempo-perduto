import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Thin gold progress bar fixed at the very top of the viewport.
 * Reflects scroll position through the page.
 * Disabilitata su mobile per garantire uno scorrimento fluido.
 */
export function ScrollProgress() {
  const [isMobile, setIsMobile] = useState(false);

  // Controlliamo se siamo su uno schermo piccolo (telefono)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Controllo iniziale
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Se è un telefono, non carichiamo la barra (zero calcoli, zero lag!)
  if (isMobile) return null;

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-amber-gold origin-left"
    />
  );
}
