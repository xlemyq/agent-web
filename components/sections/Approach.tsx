'use client';

import { motion } from 'framer-motion';
import { approach } from '@/data/content';

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index: number) => ({ opacity: 1, y: 0, transition: { delay: index * 0.08, duration: 0.5 } })
};

export function Approach() {
  return (
    <section id="approach" className="bg-slate-850 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Metodyka</p>
            <h2 className="text-3xl font-bold text-white">Proces, który łączy strategię, delivery i kontrolę jakości</h2>
          </div>
          <p className="max-w-xl text-sm text-white/70">
            Pracujemy w cyklu discovery → sprinty wykonawcze → authority → performance &amp; resilience. Każdy etap ma KPI, deliverables
            i jasne kryteria Definition of Done.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {approach.map((step, index) => (
            <motion.article
              key={step.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-925/85 p-6 shadow-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              variants={cardVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/8 via-transparent to-white/5" aria-hidden />
              <div className="relative flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold-light">Etap {index + 1}</p>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-white/75">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="rounded-full bg-gold-primary/15 px-3 py-1 text-xs font-semibold text-gold-light">{step.kpi}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
