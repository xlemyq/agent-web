# Dev Container – UP5Star SEO

Ta konfiguracja devcontainer zapewnia powtarzalne, produkcyjne środowisko do pracy nad projektem UP5Star SEO z pełnym zestawem narzędzi wymaganych przez proces Guardian i testy e2e.

## Obraz bazowy i funkcje
- **Obraz**: `mcr.microsoft.com/devcontainers/typescript-node:22` (Node.js 22 LTS, Git, npx) z użytkownikiem `node`.
- **Funkcje**:
  - `ghcr.io/devcontainers/features/git:1` – Git z konfiguracją CLI.
  - `ghcr.io/devcontainers/features/node:1` (22) – spójność z `engines.node` w `package.json`.
  - `ghcr.io/devcontainers/features/docker-in-docker:2` – wsparcie dla zadań CI w kontenerze (np. Lighthouse CI, docker-compose).

## Zainstalowane rozszerzenia VS Code
- ESLint, Prettier, TypeScript Next, Tailwind CSS IntelliSense.
- Playwright (debug e2e), Prisma, Docker, GitLens, GitHub Actions, Dotenv.

## Komendy automatyczne
- `postCreateCommand`: `npm install && npx playwright install --with-deps` – instaluje zależności oraz przeglądarki Playwright z bibliotekami systemowymi.
- `postStartCommand`: `npm run lint:check && npm run type-check` – szybki sanity check po starcie kontenera.

## Porty i env
- Forwarding portu `3000` (Next.js dev server) z etykietą.
- Zmienna env w kontenerze: `NEXT_TELEMETRY_DISABLED=1`.

## Montowanie Docker sock
- `source=/var/run/docker.sock,target=/var/run/docker.sock,type=bind` – umożliwia korzystanie z docker-cli z poziomu kontenera (np. Lighthouse CI). Nie jest wymagane dla zwykłego `npm run dev`, ale pozwala na pipeline’owe scenariusze produkcyjne.

## Użycie
1. Otwórz repo w VS Code, wybierz „Reopen in Container”.
2. Po zbudowaniu kontenera zależności i przeglądarki Playwright zostaną zainstalowane automatycznie.
3. W terminalu kontenera uruchom:
   ```bash
   npm run dev            # lokalny podgląd
   npm run test           # pakiet testów Vitest
   npm run test:e2e       # Playwright (przeglądarki gotowe)
   npm run guardian:validate  # pełny cykl jakości
   ```

## Typowe problemy
- **Brak pamięci podczas `playwright install`** – zwiększ limit RAM lub usuń niewykorzystane obrazy Docker przed budową.
- **Brak dostępu do `/var/run/docker.sock`** – jeśli host nie udostępnia socketa, usuń wpis z `mounts` albo skonfiguruj odpowiednie uprawnienia na hoście.
- **Wolne buildy** – włącz cache warstw devcontainer w ustawieniach VS Code lub pre-build image w CI.

## Powiązane pliki
- `.devcontainer/devcontainer.json` – główna konfiguracja.
- `package.json` – skrypty uruchamiane w hookach post-start.

