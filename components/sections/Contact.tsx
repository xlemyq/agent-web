import { faqs } from '@/data/content';
import { Button } from '@/components/ui/Button';

export function Contact() {
  return (
    <section id="contact" className="bg-slate-850 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Kontakt</p>
            <h2 className="text-3xl font-bold text-white">Zaprojektujmy Twoją ścieżkę wzrostu</h2>
          </div>
          <p className="max-w-xl text-sm text-white/70">
            Wypełnij krótki formularz, aby otrzymać propozycję roadmapy na 90 dni wraz z priorytetami i przewidywanym wpływem na KPI.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <form className="space-y-4 rounded-3xl border border-white/10 bg-slate-925/80 p-6 shadow-card">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-white/80">
                <span>Imię i nazwisko</span>
                <input
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-850 px-3 py-3 text-white focus:border-gold-primary focus:outline-none"
                  name="name"
                  type="text"
                />
              </label>
              <label className="space-y-2 text-sm text-white/80">
                <span>Email służbowy</span>
                <input
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-850 px-3 py-3 text-white focus:border-gold-primary focus:outline-none"
                  name="email"
                  type="email"
                />
              </label>
            </div>
            <label className="space-y-2 text-sm text-white/80">
              <span>Adres domeny</span>
              <input
                required
                className="w-full rounded-xl border border-white/10 bg-slate-850 px-3 py-3 text-white focus:border-gold-primary focus:outline-none"
                name="domain"
                type="url"
              />
            </label>
            <label className="space-y-2 text-sm text-white/80">
              <span>Cel biznesowy na najbliższe 6 miesięcy</span>
              <textarea
                required
                className="h-24 w-full rounded-xl border border-white/10 bg-slate-850 px-3 py-3 text-white focus:border-gold-primary focus:outline-none"
                name="goal"
              />
            </label>
            <div className="flex items-center justify-between gap-4">
              <label className="flex items-center gap-2 text-xs text-white/70">
                <input type="checkbox" required />
                <span>Wyrażam zgodę na kontakt w sprawie oferty i przetwarzanie danych zgodnie z polityką prywatności.</span>
              </label>
              <Button type="submit">Wyślij brief</Button>
            </div>
          </form>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-925/80 p-6 shadow-card">
            <p className="text-sm font-semibold text-gold-light">FAQ</p>
            <ul className="space-y-4">
              {faqs.map((faq) => (
                <li key={faq.question} className="rounded-2xl bg-white/5 p-4">
                  <p className="font-semibold text-white">{faq.question}</p>
                  <p className="text-sm text-white/70">{faq.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
