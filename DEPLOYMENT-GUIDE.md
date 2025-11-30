# UP5Star Deployment Guide (Next.js 15, PWA)

Kompletny proces wdrożenia produkcyjnego, w tym tryb PWA/offline, bezpieczeństwo, monitoring i opcja headless WordPress.

## 1. Wymagania środowiskowe
- Node.js 20 LTS, npm 10+
- Build cache (CI) z dostępem do `npm ci`
- HTTPS (HSTS) na warstwie reverse-proxy lub Vercel
- Dostęp do DNS dla domeny głównej i www

## 2. Instalacja zależności
```bash
npm ci
```

## 3. Budowanie i uruchomienie
```bash
npm run build
npm run start -- -H 0.0.0.0 -p 3000
```
- W środowisku Vercel użyj `npm run build` (SSR/ISR wspierane domyślnie).
- W środowisku własnym ustaw reverse-proxy (Nginx/Apache) z cache static i kompresją.

## 4. Service Worker i tryb offline
- Service Worker znajduje się w `public/sw.js` z precache oraz fallbackiem `public/offline.html`.
- Rejestracja odbywa się w `ServiceWorkerInitializer` (ładowany w `app/layout.tsx`) tylko w produkcji.
- Offline banner (klasa `html.offline`) informuje użytkownika o braku sieci.

## 5. Bezpieczeństwo
- Globalne nagłówki security w `next.config.js` (CSP, HSTS, Permissions-Policy, X-Frame-Options).
- `public/.htaccess` dla hostingów Apache odtwarza te nagłówki + kompresję i cache.
- Upewnij się, że reverse-proxy nie nadpisuje CSP; w razie potrzeby rozszerz whitelistę dla zewnętrznych zasobów.

## 6. Monitoring i logowanie
- Rekomendacja: Sentry dla front-end (DSN w zmiennych środowiskowych) + LogRocket dla replay.
- Core Web Vitals: cykliczne raporty Lighthouse (lokalnie: `npm run lint && npm run type-check && npm test && npm run lighthouse`).
- Dodaj uptime checks (UptimeRobot/BetterStack) na endpoint `/` i `/api/health` (po wdrożeniu backendu).

## 7. SEO i dane strukturalne
- JSON-LD (Organization, WebSite, FAQ) załadowane przez `next/script` w `app/layout.tsx`.
- `app/robots.ts` i `app/sitemap.ts` generują metapliki w runtime; zweryfikuj domenę w Search Console po deployu.
- Ustaw canonical w konfiguracji domeny (np. przekierowanie 301 z www -> bez www lub odwrotnie).

## 8. CDN i obrazy
- Next/Image wspiera AVIF/WEBP; dodaj domeny zewnętrzne w `next.config.js` gdy użyjesz CDN (np. CloudFront/S3).
- Jeżeli serwujesz z Cloudflare, włącz kompresję brotli i HTTP/2/3.

## 9. Integracja z headless WordPress (opcjonalna)
1. Utwórz instalację WordPress z włączonym REST API lub WPGraphQL.
2. Dodaj token aplikacyjny z rolą tylko do odczytu (auth do REST/GraphQL).
3. Utwórz API route w Next.js (np. `/app/api/wp/posts/route.ts`) zwracający treści do front-endu.
4. Rozszerz `PRECACHE_URLS` w `public/sw.js` o krytyczne endpointy lub wprowadź runtime cache (`stale-while-revalidate`).
5. Dodaj webhook w WordPress (np. `wp-json/wp/v2/posts`) do wywołania rewalidacji ISR po publikacji.
6. Media serwuj z S3/CloudFront i skonfiguruj domeny w `next.config.js` -> `images.domains`.

## 10. CI/CD
- Workflow minimalny: `npm ci && npm run lint && npm run type-check && npm test && npm run build`.
- Dodaj krok Lighthouse CI i raport bezpieczeństwa (`npm audit --audit-level=moderate`).
- Taguj releasy semantycznie (semver) i opisuj zmiany w CHANGELOG.

## 11. Migracja i rollback
- Utrzymuj wersjonowane obrazy Docker (jeżeli konteneryzujesz). Snapshot bazy/redis (jeśli dodasz backend) przed deployem.
- Rollback = przełączenie na poprzedni build + przywrócenie cache CDN.

## 12. Checklista pre-deploy
- [ ] `npm run lint && npm run type-check && npm test`
- [ ] Lighthouse >= 90 (Performance/Accessibility/Best Practices/SEO)
- [ ] Brak błędów runtime w logach dev/preview
- [ ] Domeny i certyfikaty SSL aktywne
- [ ] (Opcjonalnie) WordPress endpointy zwracają 200 OK i zawierają wymagane pola
