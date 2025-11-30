import { partners } from '@/data/content';

export function Partners() {
  return (
    <section id="partners" className="bg-slate-900 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Partnerstwa i certyfikacje</p>
            <h2 className="text-3xl font-bold text-white">Łączymy ekosystemy technologiczne dla SEO i CRO</h2>
          </div>
          <p className="max-w-xl text-sm text-white/70">
            Pracujemy na narzędziach enterprise i posiadamy certyfikacje, które skracają czas wdrożeń i zwiększają pewność
            rezultatów.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="flex items-start justify-between gap-4 rounded-3xl border border-white/10 bg-slate-925/80 p-6 shadow-card"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                <p className="text-sm text-white/70">{partner.detail}</p>
              </div>
              <span className="rounded-full bg-gold-primary/15 px-3 py-1 text-xs font-semibold text-gold-light">{partner.badge}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
