'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { navigation } from '@/data/content';
import { initializeThemeFromStorage, useThemeStore } from '@/lib/theme-store';
import { cn } from '@/lib/utils';

const navVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 }
};

export function Header() {
  const { theme, toggle, setTheme } = useThemeStore();

  useEffect(() => {
    setTheme(initializeThemeFromStorage());
  }, [setTheme]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur-xl">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-gold-primary focus:px-4 focus:py-2 focus:text-slate-925"
      >
        Przejdź do treści
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-primary text-slate-925 font-bold shadow-glow">
            U5
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gold-light">UP5Star</p>
            <p className="font-semibold text-white">SEO Growth Lab</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/80 lg:flex">
          {navigation.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, color: '#FFD700' }}
              className="transition-colors duration-200"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Przełącz motyw"
            className="rounded-full border border-white/10 bg-slate-850 px-3 py-2 text-xs font-semibold text-white shadow-card transition hover:border-gold-primary hover:text-gold-primary"
          >
            {theme === 'dark' ? 'Tryb jasny' : 'Tryb ciemny'}
          </button>
          <a
            href="#contact"
            className={cn(
              'rounded-full bg-gold-primary px-4 py-2 text-xs font-semibold text-slate-925 shadow-glow transition',
              'hover:scale-[1.02] hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light'
            )}
          >
            Porozmawiajmy o wzroście
          </a>
        </div>
      </div>
    </header>
  );
}
