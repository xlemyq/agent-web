# UP5Star Meta-Master Checklist

Śledzenie realizacji wymagań produkcyjnych dla serwisu UP5Star (Next.js). Zadania oznaczone `[x]` są wykonane, `[ ]` w backlogu.

## Fundamenty i PWA
- [x] Manifest PWA (`app/manifest.ts`) z motywem gold/black.
- [x] Service Worker (`public/sw.js`) z precache, cache-first i fallbackiem do `offline.html`.
- [x] Strona offline (`public/offline.html`) spójna z brandem i CTA powrotu.
- [x] Rejestracja SW w layoucie (`ServiceWorkerInitializer`).
- [ ] Rozszerzyć cache o API headless CMS (np. WordPress REST) po wdrożeniu backendu.

## Bezpieczeństwo i nagłówki
- [x] Security headers (CSP, HSTS, Permissions-Policy) w `next.config.js`.
- [x] Plik `.htaccess` dla hostingów Apache z kompresją i cache static.
- [ ] Dodać raportowanie CSP do dedykowanego endpointu po uruchomieniu logowania serwerowego.

## SEO i dane strukturalne
- [x] JSON-LD: Organization, WebSite, FAQ w `app/layout.tsx`.
- [x] Robots, sitemap, manifest generowane w App Router.
- [ ] Dodać BreadcrumbList dla planowanych podstron produktowych (wymaga routingu wielostronicowego).

## Content i sekcje
- [x] Pełne sekcje premium (Hero, Services, Cases, Approach, Differentiators, Operations, Engagements, Partners, Resources, Testimonials, Team, Contact, CTA).
- [ ] Utworzyć dedykowaną stronę blog/insights z paginacją i kartami artykułów.
- [ ] Dodać sekcję "Awards / Media" z konkretnymi publikacjami po zebraniu materiałów.
- [ ] Rozszerzyć resources o bibliotekę playbooków do pobrania (PDF/Markdown) hostowaną w `public/assets/`.
- [ ] Przygotować wersję landing page EN/DE (internationalization) z osobną sitemapą językową.

## UX i dostępność
- [x] Motyw gold/black, animacje framer-motion, glassmorphism, wskaźniki kontrastu.
- [x] Obsługa `prefers-reduced-motion` i focus styles.
- [x] Pasek statusu offline (class `html.offline`).
- [ ] Pełny audyt WCAG 2.1 AA z raportem axe i planem poprawek.
- [ ] Dodaj testy E2E (Playwright) na ścieżki klawiatury (Tab/Enter/Escape) dla kluczowych CTA i formularza.

## Wydajność i monitoring
- [x] Responsywność mobile/tablet/desktop w układach sekcji.
- [ ] Lighthouse CI pipeline w GitHub Actions (po instalacji zależności CI).
- [ ] Monitorowanie Sentry + LogRocket (wymaga kluczy środowiskowych).
- [ ] Raport Core Web Vitals (LCP/CLS/INP) zasilany z CrUX lub własnego RUM (po wdrożeniu analityki).

## Integracje i WordPress
- [ ] Headless WordPress: integracja REST/GraphQL dla wpisów i case studies.
- [ ] Webhooki do odświeżania statycznego cache po publikacji w WordPress.
- [ ] Import mediów do S3/CloudFront z mapowaniem w Next/Image.
- [ ] Automatyczny cache strategicznych endpointów WP w Service Worker (stale-while-revalidate).

## Testy i jakość
- [x] Testy jednostkowe utili (Vitest).
- [ ] Rozszerzyć pokrycie o komponenty sekcji (snapshot + interakcje).
- [ ] Scenariusze E2E (Playwright) dla ścieżek CTA i formularza kontaktowego.
- [ ] Lighthouse CI + axe w pipeline (próg 90/95/95/95 i brak krytycznych naruszeń a11y).
- [ ] Raportowanie wyników FA-1…FA-7 (min 9/10) w README i w opisach PR.
