import { differentiators } from '@/data/content';

export function Differentiators() {
  return (
    <section className="bg-slate-925 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Przewagi</p>
            <h2 className="text-3xl font-bold text-white">Dlaczego marki enterprise wybierają UP5Star</h2>
          </div>
          <p className="max-w-xl text-sm text-white/70">
            Budujemy przewagę operacyjną, łącząc wydajność, CRO i bezpieczeństwo. Każda przewaga jest mierzona i raportowana w panelu wyników.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {differentiators.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-slate-850/80 p-6 shadow-card transition hover:-translate-y-1 hover:border-gold-primary"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <span className="rounded-full bg-gold-primary/15 px-3 py-1 text-xs text-gold-light">{item.badge}</span>
              </div>
              <p className="text-sm text-white/75">{item.detail}</p>
              <p className="mt-4 text-sm font-semibold text-gold-light">{item.metric}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
