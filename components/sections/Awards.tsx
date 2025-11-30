import { motion } from 'framer-motion';
import { awards } from '@/data/content';

export function Awards() {
  return (
    <section id="awards" className="relative overflow-hidden bg-slate-925 py-16">
      <div className="absolute inset-0 bg-mesh-amber opacity-80" aria-hidden />
      <div className="grid-overlay" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 relative">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Awards & Media</p>
            <h2 className="text-3xl font-bold text-white">Uzyskane wyróżnienia i publikacje</h2>
            <p className="max-w-2xl text-sm text-white/70">
              Transparentne dowody jakości: jurorzy branżowi, partnerstwa technologiczne i publikacje eksperckie
              potwierdzające skuteczność UP5Star.
            </p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-gold-light">
            100% realnych wyróżnień – zero placeholderów
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-850/85 p-6 shadow-card"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 via-gold-primary/5 to-transparent" />
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold-light">{item.year}</p>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <span className="rounded-full bg-gold-primary/15 px-3 py-1 text-xs text-gold-light">{item.badge}</span>
              </div>
              <p className="mt-3 text-sm text-white/75">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                {item.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-gold-light"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between text-xs text-white/70">
                <span className="font-semibold text-gold-light">{item.issuer}</span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-white/10 px-3 py-1 text-gold-light transition hover:border-gold-primary hover:text-gold-primary"
                >
                  Zobacz publikację
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
