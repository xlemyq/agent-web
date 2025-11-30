import { team } from '@/data/content';

export function Team() {
  return (
    <section id="team" className="bg-slate-925 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Zespół</p>
            <h2 className="text-3xl font-bold text-white">Specjaliści, którzy budują przewagę</h2>
          </div>
          <p className="max-w-xl text-sm text-white/70">
            Senior eksperci z doświadczeniem w SEO enterprise, content ops i technologiach front-end. Transparentne procesy,
            skupienie na ROI.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="rounded-3xl border border-white/10 bg-slate-850/80 p-6 shadow-card transition hover:-translate-y-1 hover:border-gold-primary"
            >
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-xl font-semibold text-white">{member.name}</p>
                  <p className="text-sm text-gold-light">{member.role}</p>
                </div>
                <a
                  className="text-xs text-gold-light hover:text-gold-primary"
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <p className="text-sm text-white/75">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
