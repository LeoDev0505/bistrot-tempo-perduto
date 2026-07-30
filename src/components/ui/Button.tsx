import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
  className?: string;
  withArrow?: boolean;
}

const base =
  'group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-widest font-sans transition-all duration-500';

const variants: Record<NonNullable<ButtonLinkProps['variant']>, string> = {
  solid:
    'bg-amber-gold text-espresso-950 hover:bg-amber-light border border-amber-gold hover:border-amber-light',
  outline:
    'border border-cream/30 text-cream hover:border-amber-gold hover:text-amber-gold',
  ghost: 'text-cream hover:text-amber-gold px-0 py-0',
};

export function ButtonLink({
  to,
  children,
  variant = 'solid',
  className = '',
  withArrow = false,
}: ButtonLinkProps) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

interface MotionButtonProps {
  children: ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
  className?: string;
  withArrow?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'solid',
  className = '',
  withArrow = false,
  onClick,
  type = 'button',
  disabled = false,
}: MotionButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`${base} ${variants[variant]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
      )}
    </motion.button>
  );
}
