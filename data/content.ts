export const navigation = [
  { label: 'Start', href: '#hero' },
  { label: 'Oferta', href: '#services' },
  { label: 'Realizacje', href: '#cases' },
  { label: 'Metodyka', href: '#approach' },
  { label: 'Operacje', href: '#operations' },
  { label: 'Współpraca', href: '#engagements' },
  { label: 'Partnerzy', href: '#partners' },
  { label: 'Zasoby', href: '#resources' },
  { label: 'Zespół', href: '#team' },
  { label: 'FAQ', href: '#contact' }
];

export const metrics = [
  { label: 'Średni wzrost ruchu organicznego', value: '184%', detail: 'w ciągu 9 miesięcy' },
  { label: 'Współczynnik utrzymania klientów', value: '93%', detail: 'rok do roku' },
  { label: 'Leady B2B miesięcznie', value: '1200+', detail: 'wygenerowane dla klientów' }
];

export const services = [
  {
    title: 'Audyt SEO 360°',
    description:
      'Kompletny audyt techniczny, treściowy i off-site z listą wdrożeń wpływających na Core Web Vitals i widoczność SERP.',
    highlights: ['Core Web Vitals', 'Mapa priorytetów', 'Roadmap 90 dni']
  },
  {
    title: 'Strategia Content & Topical Authority',
    description:
      'Budujemy klastry tematyczne, które zdobywają pozycję eksperta w branży. Tworzymy treści konwertujące na leady.',
    highlights: ['Research semantyczny', 'Briefy AI + Human QA', 'Publikacja i optymalizacja']
  },
  {
    title: 'Link Building klasy Enterprise',
    description:
      'Etyczne, trwałe linki z domen o wysokim autorytecie. Transparentne raporty i kontrola profilu linków.',
    highlights: ['Digital PR', 'White-hat outreach', 'Monitoring toksyczności']
  },
  {
    title: 'SEO Growth Ops',
    description:
      'Stały zespół wzrostu z KPI, sprintami i eksperymentami. Łączymy SEO, CRO i analitykę w jeden strumień.',
    highlights: ['OKR & KPI', 'A/B testy', 'Panel wyników realtime']
  }
];

export const approach = [
  {
    title: 'Discovery & Alignment',
    description:
      'Audyt techniczny, contentowy i off-site plus warsztat z Twoim zespołem. Zbieramy dane GA4/Search Console, mapujemy ryzyka, definiujemy North Star KPI.',
    deliverables: ['Raport audytowy 360°', 'Mapa interesariuszy', 'Roadmapa na 90 dni'],
    kpi: 'gotowość planu: 7 dni'
  },
  {
    title: 'Execution Sprints',
    description:
      'Dwu‑tygodniowe sprinty łączące SEO, content ops i CRO. Dostarczamy task board, priorytety w RICE, kryteria akceptacji i asynchroniczne demo.',
    deliverables: ['Backlog RICE', 'Definition of Ready', 'Sprint demo video'],
    kpi: 'velocity: 95% planned -> done'
  },
  {
    title: 'Authority & Outreach',
    description:
      'Digital PR, white-hat outreach i partnerstwa branżowe. Monitorujemy toksyczność linków, wykorzystujemy schematy Structured Data i pilnujemy brand safety.',
    deliverables: ['Plan publikacji', 'Lista domen docelowych', 'Raport toksyczności'],
    kpi: 'DR + topical trust rośnie co sprint'
  },
  {
    title: 'Performance & Resilience',
    description:
      'Stały monitoring Core Web Vitals, uptime i regresji SEO. Używamy alertów Lighthouse CI, SLA na reakcję i rollback playbook.',
    deliverables: ['Alerty Lighthouse', 'SLA incident', 'Dashboard wyników'],
    kpi: 'LCP < 2.5s, CLS < 0.1'
  }
];

export const differentiators = [
  {
    title: 'Core Vitals na produkcji',
    detail: 'Pipeline z Lighthouse CI, budowanie krytycznych CSS, obrazów AVIF/WebP i edge cache.',
    metric: '1.8s LCP',
    badge: 'Perf'
  },
  {
    title: 'SEO x CRO jednocześnie',
    detail: 'Testy A/B CTA, heatmapy, mikrocopy w oparciu o dane. Bez konfliktów z roadmapą SEO.',
    metric: '+27% CR',
    badge: 'CRO'
  },
  {
    title: 'Compliance i bezpieczeństwo',
    detail: 'Nagłówki CSP, sanitizacja wejść, kontrola contentu AI, pełna zgodność z WCAG AA.',
    metric: '0 incydentów',
    badge: 'Sec'
  }
];

export const cases = [
  {
    client: 'Aurum Logistics',
    result: '↑ 212% ruchu organicznego w 7 miesięcy',
    summary:
      'Przebudowa architektury informacji, wdrożenie schema FAQ/Product oraz automatyczne mapy internal linking.',
    tags: ['B2B', 'Logistyka', 'Enterprise CMS']
  },
  {
    client: 'Helio Clinic',
    result: '↑ 145% wizyt lokalnych i ↑ 68% konwersji telefonicznych',
    summary:
      'Lokalne SEO, poprawa LCP z 3.2s do 1.8s, wdrożenie FAQ i Appointment markup, optymalizacja Google Business Profile.',
    tags: ['Healthcare', 'Local', 'Performance']
  },
  {
    client: 'Nordic SaaS',
    result: '↑ 320% MQL z ruchu organicznego',
    summary:
      'Strategia topical authority, content ops z AI assisted QA, usprawniona nawigacja i testy A/B CTA.',
    tags: ['SaaS', 'Global', 'Content Ops']
  }
];

export const testimonials = [
  {
    name: 'Maja Lis',
    role: 'CMO, Helio Clinic',
    quote:
      'UP5Star dowiozło kompletny program wzrostu. Raporty są jasne, priorytety klarowne, a wyniki przewyższyły prognozy.',
    score: 4.9
  },
  {
    name: 'Krzysztof Wrona',
    role: 'CEO, Aurum Logistics',
    quote:
      'Współpraca jest jak z wewnętrznym działem SEO klasy enterprise. Technologia, procesy i komunikacja na światowym poziomie.',
    score: 5
  },
  {
    name: 'Hanna Kruk',
    role: 'VP Marketing, Nordic SaaS',
    quote:
      'Zespół UP5Star wniósł dyscyplinę operacyjną i kreatywność. Tematyczne klastry zwiększyły nasz pipeline MQL kilkukrotnie.',
    score: 4.95
  }
];

export const operations = [
  {
    title: 'Monitoring 24/7',
    description:
      'Alerty Lighthouse CI, uptime 99.95%, ścieżki rollbacku i obserwowalność w jednym panelu. Minimalizujemy ryzyko regresji SEO.',
    signals: ['Lighthouse CI', 'Statuspage SLA', 'Playbook rollback']
  },
  {
    title: 'Bezpieczeństwo i zgodność',
    description:
      'CSP, rate limiting, szyfrowanie TLS, skanowanie OWASP. Zasady least privilege i kontrola danych wrażliwych.',
    signals: ['OWASP ASVS', 'CSP strict', 'Security by design']
  },
  {
    title: 'Automatyzacja i QA',
    description:
      'Pipelines z testami regresji, kontraktów API i wizualnymi. Audyty Core Web Vitals przed każdym deployem.',
    signals: ['Visual diff', 'API contracts', 'CWV gate']
  }
];

export const engagements = [
  {
    name: 'Retainer Growth',
    price: 'od 18 500 PLN / mc',
    description: 'Stały squad SEO + CRO z dedykowanym PM i sprintami co 2 tygodnie.',
    includes: ['Backlog RICE', 'Raporty executive', 'Panel wyników realtime'],
    badge: 'Najczęściej wybierany'
  },
  {
    name: 'Program 90 dni',
    price: 'od 42 000 PLN',
    description: 'Intensywny plan na kwartał: audyt 360°, roadmapa i dowiezienie priorytetów.',
    includes: ['Audyt techniczny + content', 'Implementacja priorytetów', 'Warsztat zamknięcia'],
    badge: 'Time-to-value'
  },
  {
    name: 'Advisory C-Level',
    price: 'od 8 500 PLN / mc',
    description: 'Doradztwo strategiczne, przeglądy roadmapy, sparring z zespołem product/marketing.',
    includes: ['Office hours 2x w miesiącu', 'Przegląd roadmapy', 'Shadowing decyzji'],
    badge: 'Strategia'
  }
];

export const partners = [
  {
    name: 'Google Partners',
    detail: 'Certyfikowani specjaliści z ekosystemu Google Marketing Platform.',
    badge: 'Certyfikat'
  },
  {
    name: 'Ahrefs Certified Agency',
    detail: 'Zaawansowane wykorzystanie danych linków i content gap na poziomie enterprise.',
    badge: 'Data'
  },
  {
    name: 'Cloudflare Alliance',
    detail: 'Edge cache, Workers i ochronę WAF łączymy z celami Core Web Vitals.',
    badge: 'Edge'
  },
  {
    name: 'HubSpot Solutions',
    detail: 'Integrujemy SEO z CRM, lead scoringiem i automatyzacją nurtures.',
    badge: 'RevOps'
  }
];

export const resources = [
  {
    title: 'Playbook Core Web Vitals',
    description: 'Checklisty wdrożeń LCP, CLS i INP z mierzalnym wpływem na SEO i UX.',
    link: 'mailto:hello@up5star.com?subject=Playbook%20Core%20Web%20Vitals',
    category: 'Performance'
  },
  {
    title: 'Framework Topical Authority',
    description: 'Model budowy klastrów tematycznych z harmonogramem publikacji i QA treści.',
    link: 'mailto:hello@up5star.com?subject=Framework%20Topical%20Authority',
    category: 'Content'
  },
  {
    title: 'Playbook Incident Response',
    description: 'Procedury na spadki ruchu: diagnostyka, rollback, komunikacja z interesariuszami.',
    link: 'mailto:hello@up5star.com?subject=Playbook%20Incident%20Response',
    category: 'Ops'
  }
];

export const team = [
  {
    name: 'Oliwia Nowicka',
    role: 'Head of SEO Strategy',
    bio: 'Odpowiada za architekturę strategii, roadmapy i konsulting C-level. 12 lat doświadczenia w SEO enterprise.',
    socials: {
      linkedin: 'https://www.linkedin.com'
    }
  },
  {
    name: 'Milan Drzewiecki',
    role: 'Lead Technical SEO',
    bio: 'Specjalizuje się w Core Web Vitals, crawlingu i automatyzacji audytów. Buduje narzędzia internal linking.',
    socials: {
      linkedin: 'https://www.linkedin.com'
    }
  },
  {
    name: 'Lena Rybak',
    role: 'Content & Authority Director',
    bio: 'Prowadzi content ops, topical authority i quality assurance. Łączy analitykę danych z storytellingiem.',
    socials: {
      linkedin: 'https://www.linkedin.com'
    }
  }
];

export const faqs = [
  {
    question: 'Czy pracujecie w modelu retainer czy projektowym?',
    answer: 'Oba. Najczęściej rekomendujemy retainer z kwartalnymi celami KPI i roadmapą wdrożeń na 90 dni.'
  },
  {
    question: 'Jak wygląda raportowanie?',
    answer:
      'Dostarczamy cotygodniowe sprint updaty i miesięczne executive decki. Każdy klient ma panel wyników w czasie rzeczywistym.'
  },
  {
    question: 'Czy obsługujecie rynki zagraniczne?',
    answer: 'Tak, pracujemy wielojęzycznie. Mamy doświadczenie w ekspansji na rynki DACH, Nordics i US.'
  }
];
