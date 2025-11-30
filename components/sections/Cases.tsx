import { cases } from '@/data/content';

export function Cases() {
  return (
    <section id="cases" className="bg-slate-925 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Realizacje</p>
            <h2 className="text-3xl font-bold text-white">Case studies z transparentnymi wynikami</h2>
          </div>
          <p className="max-w-xl text-sm text-white/70">
            Raportujemy realne rezultaty: wzrosty widoczności, poprawę Core Web Vitals, wzrost konwersji. Każdy case to
            udokumentowany proces end-to-end.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.client}
              className="rounded-3xl border border-white/10 bg-slate-850/80 p-6 shadow-card transition hover:-translate-y-1 hover:border-gold-primary"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{item.client}</h3>
                <span className="text-xs text-gold-light">{item.result}</span>
              </div>
              <p className="text-sm text-white/75">{item.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/5 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
