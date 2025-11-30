import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
}

export function Button({ className, children, variant = 'primary', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  const styles =
    variant === 'primary'
      ? 'bg-gold-primary text-slate-925 shadow-glow hover:bg-gold-light focus-visible:outline-gold-light'
      : 'border border-white/10 bg-white/5 text-white hover:border-gold-primary hover:text-gold-light focus-visible:outline-gold-light';

  return (
    <button className={cn(base, styles, className)} {...props}>
      {children}
    </button>
  );
}
