import { resources } from '@/data/content';
import { cn } from '@/lib/utils';

export function Resources() {
  return (
    <section id="resources" className="bg-slate-925 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Zasoby i playbooki</p>
            <h2 className="text-3xl font-bold text-white">Dostarczamy gotowe frameworki do działania</h2>
          </div>
          <p className="max-w-xl text-sm text-white/70">
            Udostępniamy materiały, które można wdrożyć od razu: checklisty Core Web Vitals, mapy klastrów treści i playbooki
            reagowania na incydenty.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.title}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-card transition hover:-translate-y-1 hover:border-gold-primary"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs uppercase tracking-[0.25em] text-gold-light">{resource.category}</p>
                <span className="h-2 w-2 rounded-full bg-gold-primary" aria-hidden />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">{resource.title}</h3>
                <p className="text-sm text-white/70">{resource.description}</p>
              </div>
              <div className="mt-auto">
                <a
                  href={resource.link}
                  className={cn(
                    'inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition',
                    'hover:border-gold-primary hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light'
                  )}
                >
                  Pobierz playbook
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
