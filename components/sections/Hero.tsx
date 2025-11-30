'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { metrics } from '@/data/content';

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-925 pb-20 pt-24">
      <div className="pointer-events-none absolute inset-0 bg-gold-radial" aria-hidden />
      <div className="glow-orb left-[5%] top-10" aria-hidden />
      <div className="glow-orb right-[5%] top-24" aria-hidden />
      <div className="grid-overlay" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-8">
          <motion.p
            className="text-xs uppercase tracking-[0.35em] text-gold-light"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Premium SEO & Growth Engine
          </motion.p>
          <motion.h1
            className="text-4xl font-bold leading-tight text-white sm:text-5xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            UP5Star – agencja SEO, która łączy strategię, technologię i operacje wzrostu.
          </motion.h1>
          <motion.p
            className="text-lg text-white/80"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Audyty 360°, topical authority, link building klasy enterprise i growth ops prowadzone w sprintach. Wszystko w jednym
            zespole, który działa transparentnie i dostarcza KPI.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button>Umów strategię 30 min</Button>
            <Button variant="ghost">Zobacz nasze podejście</Button>
          </motion.div>
          <motion.div
            className="grid gap-3 sm:grid-cols-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            {[
              { label: 'Core Web Vitals', value: '95+/100', note: 'Lighthouse lab' },
              { label: 'SLA na reakcję', value: '<2h', note: 'incydenty SEO' },
              { label: 'Retencja', value: '93%', note: 'rok do roku' }
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-card">
                <p className="text-xs uppercase tracking-[0.2em] text-gold-light">{item.label}</p>
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="text-xs text-white/60">{item.note}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="relative w-full max-w-md overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 shadow-card"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="absolute inset-0 -z-10 bg-onyx-gold opacity-60 blur-3xl" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" aria-hidden />
          <p className="text-sm font-semibold text-gold-light">Wskaźniki wzrostu</p>
          <ul className="mt-4 space-y-4">
            {metrics.map((metric) => (
              <li
                key={metric.label}
                className="rounded-3xl border border-white/10 bg-slate-850/70 p-4 shadow-card"
              >
                <p className="text-3xl font-bold text-white">{metric.value}</p>
                <p className="text-sm text-white/70">{metric.label}</p>
                <p className="text-xs text-gold-light">{metric.detail}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl bg-gold-primary/10 px-4 py-3 text-sm text-gold-light">
            60 fps wrażenia użytkownika, zero kompromisów w dostępie do treści i szybkości ładowania.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
