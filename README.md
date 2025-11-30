# UP5Star SEO – Meta Master Edition

Kompletny, produkcyjny serwis agencji SEO klasy enterprise oparty o Next.js 15, TypeScript, Tailwind CSS i framer-motion. Projekt dostarcza pełne treści sprzedażowe, sekcje premium (Hero, Usługi, Case Studies, Metodyka, Operations, Engagements, Partners, Resources), mikrointerakcje 60 fps w motywie gold & black, manifest PWA oraz schematy JSON-LD (Organization, WebSite, FAQ) gotowe do publikacji.

## Kluczowe możliwości
- **Hero + KPI** z wyróżnionym CTA, kartą wskaźników i animacją 60 fps.
- **Usługi SEO/CRO/Content** z value proposition, deliverables i rezultatami.
- **Case Studies** z wynikami liczbowymi, tagami branżowymi i proof pointami.
- **Metodyka / Framework** (discovery → sprinty → authority → resilience) z KPI i SLA.
- **Przewagi operacyjne** (performance, bezpieczeństwo, CRO, monitoring) w kartach premium.
- **Engagement Models & Operations** pokazujące procesy, komunikację i governance.
- **Partners & Certifications** z referencjami, narzędziami i ekosystemem.
- **Resources** – materiały do pobrania i playbooki gotowe do użycia.
- **Testimonials & Team** z kontekstem wdrożeń i linkami do LinkedIn.
- **Formularz briefu + FAQ** z walidacją i pełnymi opisami wartości.
- **Motyw ciemny/jasny** zapisany lokalnie na urządzeniu użytkownika.
- **Manifest PWA, sitemap, robots oraz schematy JSON-LD** osadzone w layoucie.

## Stos technologiczny
- **Runtime:** Node.js 18+/20+ (zalecany Node 20)
- **Framework:** Next.js 15 (App Router) + React 18.3 + TypeScript (strict)
- **UI:** Tailwind CSS 3.4 (paleta gold/black), framer-motion 11
- **Stan:** Zustand (przechowywanie motywu)
- **Testy:** Vitest (jednostkowe)

## Wymagania
- Node.js 20 (rekomendowane) lub 18 LTS
- npm 10+

## Instalacja i uruchomienie
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

### Kontrola jakości
```bash
npm run lint         # ESLint (konfiguracja Next.js)
npm run type-check   # Ścisły TypeScript (noEmit)
npm run test         # Testy jednostkowe Vitest
```

## Struktura katalogów
- `app/` – layout, strony, globalne style oraz pliki manifestu, sitemap i robots w App Router.
- `components/` – komponenty layoutu, sekcji i UI (Hero, Services, Cases, CTA, Operations, Engagements, Partners, Resources, Team itd.).
- `data/` – statyczne treści (nawigacja, usługi, case studies, FAQ, partners, resources, KPI, CTA).
- `lib/` – utilsy (store motywu, funkcje pomocnicze).
- `public/` – ikony, favicon, brand SVG oraz assety (np. `brand.svg`, `wolf.svg`).
- `__tests__/` – testy jednostkowe (Vitest) dla utili.

## Styl wizualny i UX
- Motyw **gold & black** z gradientami, glow i glassmorphismem dopasowanymi do tła.
- Animacje framer-motion zoptymalizowane pod 60 fps; respekt dla `prefers-reduced-motion`.
- Responsywność mobile-first, kontrola typografii i spacingu, kontrast WCAG 2.1 AA.
- Mikrointerakcje dla przycisków, kart, nawigacji i CTA, spójne z brandem UP5Star.

## SEO, dane strukturalne i PWA
- Pełne metatagowanie (title, description, Open Graph, canonical) w layoucie.
- JSON-LD: **Organization**, **WebSite**, **FAQ** w `app/layout.tsx`.
- **`app/manifest.ts`**, **`app/robots.ts`**, **`app/sitemap.ts`** generowane w App Router.
- Service Worker (`public/sw.js`) z precache, cache-first i fallbackiem do `public/offline.html`; rejestracja w layoucie.
- Treści zoptymalizowane pod wyszukiwane frazy B2B (SEO, CRO, content, growth, performance).

## Dostępność i wydajność
- Semantyczne znaczniki, aria-labels, focus states i minimalizacja layout shift.
- GPU-friendly animacje, brak blokowania głównej pętli renderowania.
- Wektory SVG dla brandu, lekkie bundlowanie, brak zbędnych assetów.

## Zarządzanie treścią i motywem
- Copy, nawigacja i sekcje: edytuj w `data/content.ts` (pełne, produkcyjne treści bez placeholderów).
- Motyw i preferencje: store w `lib/theme-store.ts` z lokalnym zapisem wyboru użytkownika.
- Nowe sekcje: utrzymuj konwencję komponentów w `components/sections/` korzystających z danych z `data/content.ts`.

## Testy i jakość
- Uruchom `npm run test` dla istniejących testów utili; rozbudowując pokrycie, dodawaj pliki w `__tests__/unit`.
- `npm run lint` i `npm run type-check` przed każdym commitem zapewniają spójność kodu.

## Deployment (skrót)
1. Zbuduj: `npm run build`.
2. Uruchom: `npm run start` (domyślnie port 3000) lub wdroż na Vercel/Node host z HTTPS.
3. Serwuj statyczne assety z `public/`, włącz cache dla ikon/manifestu, ustaw kompresję i HTTP/2.
4. W środowiskach kontenerowych ustaw `PORT` i reverse-proxy (np. Nginx) z HSTS i gzip/brotli.

## Bezpieczeństwo i zgodność
- Brak sekretów w repo; konfiguracje środowiskowe przechowuj poza kodem.
- Formularz działa po stronie klienta – integrując backend, dodaj walidację, CSRF i rate limiting.
- Stosuj bezpieczne atrybuty linków (`rel="noopener noreferrer"`), unikaj `eval`, waliduj wszystkie dane.

## Monitoring i analityka
- Integruj analitykę (np. Plausible/GA4) w layoucie zgodnie z RODO/CMP.
- Regularnie audytuj Core Web Vitals (Lighthouse/CrUX) po zmianach wizualnych lub treściowych.

## WordPress jako headless CMS (opcjonalnie)
- Utrzymuj WordPress jako panel redakcyjny (REST/GraphQL), pobieraj wpisy w dedykowanych API routes w App Routerze.
- Rozszerz caching w `public/sw.js` o strategiczne endpointy, rewaliduj ISR webhookiem po publikacji.
- Media serwuj z CDN (S3/CloudFront) i dodaj domeny do `next.config.js` → `images.domains`.

## Checklista realizacji
- Postęp i backlog w `docs/MASTER_CHECKLIST.md` (PWA, bezpieczeństwo, content, integracje, testy).
- Kroki wdrożeniowe opisano w `DEPLOYMENT-GUIDE.md` wraz z checklistą pre-deploy i integracją headless WordPress.

## Utrzymanie i dalszy rozwój
- Projekt jest w pełni statyczny – łatwy do iteracji i rozbudowy o kolejne sekcje i podstrony.
- Zachowuj spójność namingową i strukturalną komponentów; korzystaj z danych centralnie w `data/content.ts`.
- Rozważ dodanie testów e2e (Playwright) dla ścieżek CTA oraz testów integracyjnych dla nowych funkcji.

## Licencja
Kod udostępniany w celach demonstracyjnych. Skontaktuj się z zespołem UP5Star w sprawie wdrożeń komercyjnych.
