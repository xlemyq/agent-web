# UP5Star SEO – Meta Master Edition

Kompletny, produkcyjny serwis agencji SEO klasy enterprise zbudowany na Next.js 15, TypeScript, Tailwind CSS i framer-motion. Projekt zawiera rozbudowane sekcje sprzedażowe, mikroanimacje, manifest PWA, schematy SEO (Organization, FAQ, WebSite) i treści gotowe do publikacji w motywie gold & black premium.

## Funkcje
- Hero z kluczowymi wskaźnikami wzrostu, CTA i kartą wskaźników 60 fps.
- Sekcja usług z value proposition i highlightami deliverables.
- Case studies z rezultatami, tagami branżowymi i proof pointami.
- Sekcja metodyki (discovery → sprinty → authority → resilience) z KPI i deliverables.
- Przewagi operacyjne (perf, CRO, security) w formie kart premium.
- Rekomendacje klientów z oceną satysfakcji.
- Zespół ekspercki z linkami do LinkedIn.
- Formularz briefu + FAQ z najczęstszymi pytaniami.
- Finalna sekcja CTA z listą obietnic i przyciskiem do rozmowy.
- Motyw ciemny/jasny kontrolowany przez lokalne ustawienia użytkownika.
- Manifest PWA, sitemap, robots i schematy JSON-LD (Organization, WebSite, FAQ).

## Technologie
- Next.js 15 (App Router) + React + TypeScript (strict)
- Tailwind CSS 3.4 z niestandardową paletą złoto/czerń
- framer-motion 11 do animacji wejść i mikrointerakcji
- Zustand do zarządzania motywem
- Vitest do testów jednostkowych
- Manifest PWA + sitemap/robots w App Router

## Szybki start
```bash
npm install
npm run dev
```
Aplikacja startuje pod `http://localhost:3000`.

### Praca w Dev Container
Repozytorium zawiera w pełni skonfigurowany devcontainer (VS Code / GitHub Codespaces) oparty na Node.js 22 z preinstalowanymi rozszerzeniami ESLint, Prettier, Tailwind, Prisma i Playwright.

1. Otwórz projekt w VS Code i wybierz **Reopen in Container**.
2. Po zbudowaniu środowiska zostaną wykonane automatycznie: `npm install`, `npx playwright install --with-deps`, a następnie sanity checki `npm run lint:check` i `npm run type-check`.
3. Uruchamiaj standardowe skrypty, np. `npm run dev`, `npm run test`, `npm run guardian:validate` bez dodatkowej konfiguracji hosta.

Szczegóły konfiguracji znajdziesz w `docs/DEVCONTAINER.md`.

## Jakość
- `npm run lint` – reguły Next.js + ESLint
- `npm run type-check` – weryfikacja TypeScript
- `npm run test` – testy jednostkowe (Vitest)

## Struktura
- `app/` – układ, strony i globalne style
- `components/` – komponenty layoutu, sekcji i UI
- `data/` – statyczne treści (nawigacja, usługi, case studies, FAQ)
- `lib/` – utilsy i store motywu
- `__tests__/` – testy jednostkowe

## Dostępność i wydajność
- Semantyczne znaczniki, aria-labels i wysoki kontrast
- Layout responsywny mobile-first
- Animacje z respektem dla prefers-reduced-motion

## Licencja
Kod udostępniany w celach demonstracyjnych. Skontaktuj się z zespołem UP5Star w sprawie wdrożeń komercyjnych.
