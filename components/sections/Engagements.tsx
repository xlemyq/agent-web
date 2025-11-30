import { engagements } from '@/data/content';

export function Engagements() {
  return (
    <section id="engagements" className="bg-slate-925 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Modele współpracy</p>
            <h2 className="text-3xl font-bold text-white">Transparentne pakiety i odpowiedzialność za wyniki</h2>
          </div>
          <p className="max-w-xl text-sm text-white/70">
            Dobierz formę współpracy do etapu rozwoju. Każdy model zawiera jasne wskaźniki, raportowanie executive i dedykowany
            squad.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {engagements.map((plan) => (
            <article
              key={plan.name}
              className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-card transition hover:-translate-y-1 hover:border-gold-primary"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold-light">{plan.badge}</p>
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                </div>
                <span className="rounded-full bg-gold-primary/15 px-3 py-1 text-xs font-semibold text-gold-light">{plan.price}</span>
              </div>
              <p className="mt-3 text-sm text-white/70">{plan.description}</p>
              <ul className="mt-4 space-y-2">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gold-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between text-sm text-gold-light">
                <span>Umowa SLA i KPI</span>
                <span>Onboarding 7 dni</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
