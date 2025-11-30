import { operations } from '@/data/content';

export function Operations() {
  return (
    <section id="operations" className="bg-slate-900 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Operacje i niezawodność</p>
            <h2 className="text-3xl font-bold text-white">Kontrola jakości, bezpieczeństwa i uptime</h2>
          </div>
          <p className="max-w-xl text-sm text-white/70">
            Stabilne SEO wymaga procedur. Monitorujemy, zabezpieczamy i automatyzujemy każdy element Twojej widoczności, aby
            uniknąć regresji i zapewnić przewidywalne wyniki.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {operations.map((item) => (
            <article
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-slate-925/80 p-6 shadow-card transition hover:-translate-y-1 hover:border-gold-primary"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <span className="rounded-full bg-gold-primary/15 px-3 py-1 text-xs font-semibold text-gold-light">
                  Stała kontrola
                </span>
              </div>
              <p className="mt-3 text-sm text-white/70">{item.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.signals.map((signal) => (
                  <li
                    key={signal}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {signal}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
