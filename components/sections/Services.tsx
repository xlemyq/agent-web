import { services } from '@/data/content';

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-850 py-16">
      <div className="glow-orb left-10 -top-10" aria-hidden />
      <div className="glow-orb right-8 top-16" aria-hidden />
      <div className="grid-overlay" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 relative">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Oferta</p>
            <h2 className="text-3xl font-bold text-white">Usługi SEO, które dowożą KPI</h2>
          </div>
          <p className="max-w-xl text-sm text-white/70">
            Łączymy audyt techniczny, content ops i link building w jednolitą strategię. Każdy pakiet zawiera roadmapę na 90 dni,
            harmonogram sprintów i mierzalne KPI.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-925/80 p-6 shadow-card transition hover:-translate-y-1 hover:border-gold-primary"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-gold-primary/10 opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden />
              <div className="relative mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <span className="rounded-full bg-gold-primary/15 px-3 py-1 text-xs text-gold-light">Enterprise</span>
              </div>
              <p className="relative text-sm text-white/75">{service.description}</p>
              <ul className="relative mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                {service.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-full border border-white/10 px-3 py-1 text-gold-light transition group-hover:border-gold-primary"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
