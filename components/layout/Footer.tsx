import { navigation } from '@/data/content';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-slate-925/80 py-10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-gold-light">UP5Star SEO</p>
          <h3 className="text-2xl font-semibold text-white">Agencja SEO klasy enterprise dla marek, które chcą rosnąć szybciej.</h3>
          <p className="text-sm text-white/70">
            Strategia, technologia i operacje wzrostu, które utrzymują 60 fps w doświadczeniu użytkownika i dowożą KPI.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm text-white/70">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold-light">Nawigacja</p>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a className="hover:text-gold-light" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold-light">Kontakt</p>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-gold-light" href="mailto:hello@up5star.com">
                  hello@up5star.com
                </a>
              </li>
              <li>
                <a className="hover:text-gold-light" href="tel:+48555555555">
                  +48 555 555 555
                </a>
              </li>
              <li>Warszawa / Remote-first</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl items-center justify-between px-4 text-xs text-white/60">
        <span>© {year} UP5Star. Wszelkie prawa zastrzeżone.</span>
        <span>Performance-first · WCAG AA · Secure by design</span>
      </div>
    </footer>
  );
}
