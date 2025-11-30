import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
}

export function Button({ className, children, variant = 'primary', ...props }: ButtonProps) {
  const base =
    'relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  const styles =
    variant === 'primary'
      ? 'bg-gold-primary text-slate-925 shadow-glow hover:bg-gold-light focus-visible:outline-gold-light'
      : 'border border-white/10 bg-white/5 text-white hover:border-gold-primary hover:text-gold-light focus-visible:outline-gold-light';

  return (
    <button className={cn(base, styles, className)} {...props}>
      <span className="absolute inset-0 -z-10 bg-gradient-to-r from-gold-dark/35 via-gold-primary/45 to-gold-light/35 opacity-0 transition duration-300 hover:opacity-100" />
      <span className="absolute inset-[-120%] z-0 animate-[shimmer_5s_linear_infinite] bg-[linear-gradient(120deg,transparent,rgba(255,215,0,0.4),transparent)]" aria-hidden />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
