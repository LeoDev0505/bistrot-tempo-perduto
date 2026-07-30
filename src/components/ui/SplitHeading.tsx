import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface SplitHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

/**
 * Headline that rises word-by-word with a mask reveal.
 * For the hero and major section titles.
 */
export function SplitHeading({
  text,
  className = '',
  as = 'h2',
}: SplitHeadingProps) {
  const words = text.split(' ');
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={`leading-[1.05] ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            variants={wordVariants}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </MotionTag>
  );
}
