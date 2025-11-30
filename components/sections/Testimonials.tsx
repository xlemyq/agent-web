import { testimonials } from '@/data/content';

export function Testimonials() {
  return (
    <section className="bg-slate-850 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Rekomendacje</p>
            <h2 className="text-3xl font-bold text-white">Partnerzy, którzy potwierdzają wyniki</h2>
          </div>
          <p className="max-w-xl text-sm text-white/70">
            Realne opinie kadry C-level i marketingu. Transparentne raporty, zero wymówek, pełna odpowiedzialność za wynik.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-white/10 bg-slate-925/80 p-6 shadow-card"
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-white/60">{item.role}</p>
                </div>
                <span className="rounded-full bg-gold-primary/15 px-3 py-1 text-xs text-gold-light">{item.score} / 5</span>
              </div>
              <p className="text-sm text-white/80">“{item.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
