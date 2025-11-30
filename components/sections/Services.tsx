import { services } from '@/data/content';

export function Services() {
  return (
    <section id="services" className="bg-slate-850 py-16">
      <div className="mx-auto max-w-6xl px-4">
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
              className="group rounded-3xl border border-white/10 bg-slate-925/80 p-6 shadow-card transition hover:-translate-y-1 hover:border-gold-primary"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <span className="rounded-full bg-gold-primary/15 px-3 py-1 text-xs text-gold-light">Enterprise</span>
              </div>
              <p className="text-sm text-white/75">{service.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
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
