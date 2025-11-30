UP5Star – Neon Luxury Website
Overview
UP5Star is a premium "Neon Luxury" website built using the latest web technologies. The project runs
on Next.js 15 with the App Router, harnessing the power of React 18, TypeScript, Tailwind CSS, and
framer-motion. It delivers a modern multi‑language (Polish   & English) experience with a dark,
luxurious aesthetic accented by neon and gold highlights, anchored by the signature "neon wolf"
visuals.
This repository ( agent-web ) serves as the base for the website, built from the
up5star‑neon‑next‑final‑updated package. It includes a complete codebase with pages, layouts,
components, contexts, localization files, and assets.
Getting Started
Prerequisites
Node.js v18 or newer
A package manager such as pnpm, npm, or yarn
Install dependencies:
# Using pnpm
pnpm install
# or using npm
npm install
Development
Start the development server:
pnpm run dev
# or npm run dev
Open http://localhost:3000 to view the site. The application uses Next.js 15’s App Router. There are
language‑specific route groups ( (en) and (pl) ); for example, http://localhost:3000/en serves the
English version.
Building for Production
Run the following to check code quality and build the project:
•
•
1
pnpm run lint # run ESLint with Next.js rules
pnpm run type-check # run the TypeScript compiler (if configured)
pnpm run build # create an optimized production build
Running in Production
After building, start the server with:
pnpm start
Project Structure
├── app/
│ ├── globals.css # global Tailwind styles
│ ├── (en)/ # English pages and layouts
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ └── not-found.tsx
│ └── (pl)/ # Polish pages and layouts
│ ├── layout.tsx
│ ├── page.tsx
│ └── not-found.tsx
├── components/
│ ├── layout/ # Navbar, Footer, Preloader
│ ├── sections/ # Hero, WhyUs, Packages, Process, Cases,
About, Newsletter, Contact
│ └── ui/ # shared buttons, cards, inputs
├── contexts/
│ └── ThemeContext.tsx # dark/light mode, accent colors, contrast
settings, reduced motion
├── locales/
│ ├── en.json # all English text
│ └── pl.json # all Polish text
├── lib/
│ └── cms.ts # CMS abstraction (local, Sanity, Contentful,
Strapi)
├── data/
│ ├── posts-en.ts # blog & case study data in English
│ └── posts-pl.ts # blog & case study data in Polish
├── public/
│ └── assets/ # images, videos, icons including the neon
wolf and preloader
├── tailwind.config.ts # design system tokens & animations
└── next.config.js # Next.js configuration
2
Localization
This project supports Polish ( pl ) and English ( en ). All user‑facing text is stored in locales/
en.json and locales/pl.json . When adding new content, you must:
Add corresponding keys and translations to both JSON files.
Access the strings via the messages or translation hooks in layouts and sections instead of
hard‑coding text.
CMS Integration
The lib/cms.ts module abstracts data sources. By setting NEXT_PUBLIC_CMS_PROVIDER in
.env.local you can switch providers:
local – uses static data files ( data/posts-*.ts and locales/*.json ).
sanity, contentful, strapi – use external services (not configured by default).
For external providers, populate NEXT_PUBLIC_CMS_* environment variables as documented in
cms.ts .
Design & Motion
Theme: Dark background with gold and neon accents.
Visual: Signature "neon wolf" motif in public/assets .
Components: Use Tailwind utility classes consistent with the custom color palette defined in
tailwind.config.ts . Avoid arbitrary hex codes.
Animations: Use framer-motion for subtle entrance transitions, parallax, and hover effects.
Always respect the prefers-reduced-motion setting to provide a static fallback.
Quality & Contribution Guidelines
This repository follows a strict zero‑placeholders policy (no lorem ipsum, no TODOs, no partial
implementations). When contributing:
Write complete, functional code. Avoid leaving sections incomplete or using placeholders.
Use TypeScript strictly ( noImplicitAny: true ). Avoid any types unless absolutely
necessary and explain why in comments.
Always import modules using the @/ alias as defined in tsconfig.json .
Ensure there is only one page.tsx per route level (Next.js App Router restriction).
Extract all display text into locales/en.json and locales/pl.json .
Keep the design consistent with the dark and neon aesthetic.
Before submitting a change, run lint and type‑check, and mentally simulate the build process to
catch errors.
For more details on our developer workflows, see the internal meta plan file
AGENT_WEB_UP5STAR_META_PLAN.md .
1.
2.
•
•
•
•
•
•
•
•
•
•
•
•
•
3
