# UP5Star SEO – Meta Master Edition

Kompletny, produkcyjny serwis agencji SEO klasy enterprise oparty o Next.js 15, TypeScript, Tailwind CSS i framer-motion. Projekt został zaprojektowany według standardu "meta master": zero placeholderów, pełne treści sprzedażowe, efektowne animacje 60 fps i gotowość do wdrożeń headless (WordPress) oraz PWA/offline.

## 1) Snapshot wartości biznesowej
- **Premium storytelling:** Hero z KPI, CTA, metrykami i animacją cząsteczek w motywie gold/black.
- **Oferta end-to-end:** Usługi SEO/CRO/Content + case studies z wynikami liczbowymi i tagami branż.
- **Metodyka i operacje:** Discovery → sprinty → authority → resilience z KPI, SLA i playbookami.
- **Dowody wiarygodności:** Testimonials, partnerstwa, certyfikacje, zespół ekspertów z linkami do LinkedIn.
- **Konwersja i retencja:** Formularz briefu z walidacją, FAQ, CTA końcowe, jasne modele współpracy.
- **Rezyliencja:** PWA, offline fallback, service worker z precache i cache-first.

## 2) Architektura i technologia
- **Runtime:** Node.js 20 (zalecane) lub 18 LTS; npm 10+.
- **Framework:** Next.js 15 (App Router), React 18.3, TypeScript (strict).
- **UI:** Tailwind CSS 3.4 z paletą gold/black, framer-motion 11, mikrointerakcje 60 fps.
- **Stan:** Zustand (przechowywanie motywu, preferencje użytkownika) + lokalne storage.
- **PWA:** `app/manifest.ts`, `public/sw.js`, `public/offline.html`, rejestracja w layoucie.
- **Testy:** Vitest (unit); przygotowanie pod Playwright (E2E) i Lighthouse CI.
- **Bezpieczeństwo:** CSP/HSTS/Permissions-Policy w `next.config.js`, `.htaccess` dla hostingów Apache.

## 3) Instalacja i uruchomienie
```bash
npm install
npm run dev
```
Aplikacja startuje pod `http://localhost:3000`.

### Build i start produkcyjny
```bash
npm run build
npm run start
```

### Kontrola jakości (lokalnie)
```bash
npm run lint         # ESLint (konfiguracja Next.js)
npm run type-check   # Ścisły TypeScript (noEmit)
npm run test         # Testy jednostkowe Vitest
```

## 4) Struktura katalogów (podgląd funkcjonalny)
- `app/`
  - `layout.tsx` – meta, JSON-LD (Organization, WebSite, FAQ), rejestracja SW, globalny theme.
  - `page.tsx` – landing łączący sekcje premium (Hero → CTA).
  - `globals.css`, `manifest.ts`, `robots.ts`, `sitemap.ts` – styl globalny, PWA, SEO.
- `components/`
  - `layout/` – Header, Footer (nawigacja, CTA, status offline).
  - `sections/` – Hero, Services, Cases, Approach, Differentiators, Operations, Engagements, Partners, Resources, Testimonials, Team, Contact, CTA.
  - `providers/` – ThemeProvider, ServiceWorkerInitializer.
  - `ui/` – Button i prymitywy interakcji (focus, hover, ripple).
- `data/` – treści produkcyjne (nawigacja, usługi, case studies, FAQ, resources, partners, KPI).
- `lib/` – `theme-store.ts` (motyw), `utils.ts` (helpery, filtry).
- `public/` – brand SVG, favicon, `offline.html`, `sw.js`, `.htaccess`.
- `docs/` – checklisty i przewodniki (`MASTER_CHECKLIST.md`, `DEPLOYMENT-GUIDE.md`).
- `__tests__/` – unit testy utili (Vitest) + konfiguracja `vitest.config.ts`.

## 5) Styl wizualny i UX (motyw gold/black)
- Gradienty, glow i glassmorphism zbalansowane względem tła, typografii i CTA.
- Animacje framer-motion zoptymalizowane pod 60 fps; respekt `prefers-reduced-motion`.
- Responsywność mobile-first, siatka kart dostosowana do mobile/tablet/desktop.
- Alt/aria, focus states, kontrast WCAG 2.1 AA, brak zbędnych ruchów layoutu (CLS < 0.1).

## 6) SEO, dane strukturalne, PWA
- Meta: title, description, Open Graph, canonical ustawione w layoucie.
- JSON-LD: Organization, WebSite, FAQ – rozszerzalne o BreadcrumbList/Article/Product po dodaniu podstron.
- Pliki: `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts` generowane w runtime.
- Service Worker (`public/sw.js`): precache kluczowych assetów, cache-first dla stron, fallback do `public/offline.html`.

## 7) Dostępność i wydajność
- Semantyczne znaczniki, aria-labels, logiczny porządek nagłówków, widoczny focus.
- Animacje GPU-friendly, brak blokowania głównej pętli renderowania, lazy motion.
- SVG brand, ograniczona liczba assetów, brak nieużywanych importów.

## 8) Zarządzanie treścią i motywem
- Edycja copy, CTA, list usług, case studies, FAQ, resources: `data/content.ts`.
- Przechowywanie motywu: `lib/theme-store.ts` – zapis w localStorage, pełny toggle w Header.
- Dodawanie sekcji: trzymaj strukturę komponentów w `components/sections/`, importuj dane z `data/content.ts`.

## 9) Testy i jakość (plan)
- `npm run test` – unit (obecnie utils); planowane rozszerzenie o snapshoty komponentów i E2E (Playwright) dla ścieżek CTA.
- `npm run lint` oraz `npm run type-check` przed każdym buildem/commitem.
- Lighthouse/axe: rekomendowany audyt po każdej zmianie wizualnej lub contentowej.

## 10) CI/CD i środowiska
- Minimalny pipeline: `npm ci && npm run lint && npm run type-check && npm test && npm run build`.
- Dodaj krok Lighthouse CI oraz `npm audit --audit-level=moderate` w CI.
- Artefakty: raporty testów, raport Lighthouse, logi builda.

## 11) Deployment (skrót operacyjny)
1. `npm run build`.
2. `npm run start -- -H 0.0.0.0 -p 3000` lub deploy na Vercel.
3. Reverse-proxy (Nginx/Apache) z HSTS, gzip/brotli, cache static, HTTP/2/3.
4. Zweryfikuj status SW (`chrome://serviceworker-internals`), sprawdź `offline.html` w trybie offline.
5. Checklisty wdrożeniowe i szczegóły w `DEPLOYMENT-GUIDE.md`.

## 12) WordPress jako headless CMS (opcjonalnie)
- WP jako panel redakcyjny (REST/GraphQL). Zabezpiecz token tylko-do-odczytu.
- Dodaj API route w App Routerze (np. `/app/api/wp/posts/route.ts`) z walidacją danych.
- Rozszerz SW o cache strategicznych endpointów i webhook do rewalidacji ISR.
- Media obsłuż z CDN (S3/CloudFront/Cloudflare); domeny w `next.config.js -> images.domains`.

## 13) Monitoring i analityka
- Zalecane: Sentry + LogRocket (dsn w środowisku). UptimeRobot/BetterStack na `/` i `/api/health` (po dodaniu backendu).
- Core Web Vitals: Lighthouse CI; okresowe raporty CrUX po wdrożeniu produkcyjnym.

## 14) Bezpieczeństwo i zgodność
- Nagłówki: CSP, HSTS, Permissions-Policy, X-Frame-Options w `next.config.js`; `.htaccess` dla Apache.
- Zero sekretów w repo; konfiguracje środowiskowe poza kodem.
- Walidacja formularzy, `rel="noopener noreferrer"`, brak `eval`, zgodność z OWASP Top 10.

## 15) Framework Analiz (FA-1…FA-7)
Dla każdej dużej zmiany wykonaj cykl: **Analiza → Działanie → Weryfikacja** i ocenę 1–10. Minimalny wynik do akceptacji: 9/10.
- **FA-1 Koncept:** jasność propozycji wartości i zgodność z brandem.
- **FA-2 Informacja:** architektura informacji, ścieżki CTA, kolejność sekcji.
- **FA-3 Wizual:** jakość layoutu, hierarchia, typografia, animacje, spójność gold/black.
- **FA-4 UX/CRO:** klarowność CTA, formularzy, mikrointerakcji, responsywność.
- **FA-5 Technika:** jakość kodu, typowanie TS, lint, struktura repo, PWA.
- **FA-6 SEO & Content:** meta, schema, słowa kluczowe, copy bez placeholderów.
- **FA-7 A11y & Performance:** WCAG, focus, kontrast, LCP/FID/CLS/INP.
Jeśli wynik < 9/10 – iteruj aż do skutku, aktualizując checklistę w `docs/MASTER_CHECKLIST.md`.

## 16) Checklista realizacji i backlog
- Aktualny status prac znajduje się w `docs/MASTER_CHECKLIST.md` (PWA, bezpieczeństwo, content, testy, WordPress, monitoring).
- Checklistę wdrożeniową i operacyjną znajdziesz w `DEPLOYMENT-GUIDE.md` (pre-deploy, monitoring, rollback, WordPress).

## 17) Utrzymanie i dalszy rozwój
- Zachowuj spójność namingową i strukturalną komponentów; dane centralnie w `data/content.ts`.
- Dodaj testy Playwright dla ścieżek CTA i formularza, pipeline Lighthouse CI i raporty axe.
- Rozszerz dane strukturalne o BreadcrumbList/Article przy dodaniu bloga lub podstron produktowych.

## 18) Licencja
Kod udostępniany w celach demonstracyjnych. Skontaktuj się z zespołem UP5Star w sprawie wdrożeń komercyjnych.
