import { Button } from '@/components/ui/Button';

const points = [
  'Warsztat strategiczny + audyt 360° w pierwszych 7 dniach',
  'Roadmapa na 90 dni z KPI, RICE i Definition of Done',
  'Panel wyników w czasie rzeczywistym + weekly sprint updates'
];

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-850 py-16">
      <div className="pointer-events-none absolute inset-0 bg-gold-linear opacity-10" aria-hidden />
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gold-light">Gotowi na wzrost</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Zaproś UP5Star do stołu decyzyjnego</h2>
        <p className="mt-4 text-base text-white/75">
          Współpracujemy z liderami marketingu i productu, którzy potrzebują szybkiego i bezpiecznego wzrostu organicznego.
          Pracujemy transparentnie, w sprintach, z pełną odpowiedzialnością za wynik.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 text-sm text-white/80">
          {points.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-primary/20 text-xs text-gold-light">
                ✓
              </span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button className="w-full sm:w-auto">Umów strategię 30 min</Button>
          <Button className="w-full sm:w-auto" variant="ghost">
            Pobierz przykładowy raport KPI
          </Button>
        </div>
      </div>
    </section>
  );
}
