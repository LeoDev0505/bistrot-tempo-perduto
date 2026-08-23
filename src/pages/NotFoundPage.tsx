import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/ui/Button';
import { IMAGE } from '@/lib/constants';
import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGE.atmosphereCandle}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-espresso-950/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs uppercase tracking-[0.4em] text-amber-gold/90 mb-6"
        >
          {t('notFoundPage.eyebrow')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-[1] text-shadow-strong"
        >
          {t('notFoundPage.title1')}
          <span className="block italic text-amber-light/90 mt-2">
            {t('notFoundPage.titleItalic')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-cream/60 leading-relaxed max-w-md mx-auto"
        >
          {t('notFoundPage.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <ButtonLink to="/" variant="solid" withArrow>
            {t('notFoundPage.homeBtn')}
          </ButtonLink>
          <ButtonLink to="/reservations" variant="outline">
            {t('notFoundPage.bookBtn')}
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
