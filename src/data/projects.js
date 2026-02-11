export const projects = [
  {
    id: 1,
    slug: 'travel-guide-podgorica',
    title: 'Travel Guide – Podgorica',
    category: 'Web / UX',
    client: 'TO Podgorica (demo)',
    year: 2026,
    excerpt: 'One-page mini portal sa mapom atrakcija, rutama i preporukama.',
    services: ['UI/UX', 'Web dizajn', 'Copy', 'SEO osnove'],
    cover: 'https://picsum.photos/seed/podgorica-guide/1200/800',
    gallery: [
      'https://picsum.photos/seed/podgorica-guide-1/1200/800',
      'https://picsum.photos/seed/podgorica-guide-2/1200/800'
    ],
    description:
      'Koncept: jednostavan turistički vodič sa fokusom na mobilno iskustvo, brzu navigaciju i jasne CTA elemente.'
  },
  {
    id: 2,
    slug: 'travel-guide-berane',
    title: 'Travel Guide – Berane',
    category: 'Web / Branding',
    client: 'TO Berane (demo)',
    year: 2026,
    excerpt: 'Vizuelni identitet + landing za lokalne rute i događaje.',
    services: ['Branding', 'Web dizajn', 'Social media assets'],
    cover: 'https://picsum.photos/seed/berane-guide/1200/800',
    gallery: [
      'https://picsum.photos/seed/berane-guide-1/1200/800',
      'https://picsum.photos/seed/berane-guide-2/1200/800'
    ],
    description:
      'Topla paleta boja, minimalističke ikonice i šabloni za objave (Instagram/Facebook).'
  },
  {
    id: 3,
    slug: 'branding-restoran-atelier',
    title: 'Branding – Fine Dining “Atelier”',
    category: 'Branding / Print',
    client: 'Atelier (demo)',
    year: 2026,
    excerpt: 'Premium identitet: logo, meni, vizitke, ambalaža.',
    services: ['Branding', 'Dizajn za štampu', 'Art direction'],
    cover: 'https://picsum.photos/seed/atelier-restaurant/1200/800',
    gallery: [
      'https://picsum.photos/seed/atelier-restaurant-1/1200/800',
      'https://picsum.photos/seed/atelier-restaurant-2/1200/800'
    ],
    description:
      'Crno-zlatni sistem, tipografija sa “lux” osjećajem, priprema fajlova za štampu.'
  },
  {
    id: 4,
    slug: 'hotel-kolasin-1450',
    title: 'Ekskluzivni Hotel – Kolašin 1450 Resort',
    category: 'Branding / Marketing',
    client: 'K1450 Resort (demo)',
    year: 2026,
    excerpt: 'Brend + kampanja za zimsku sezonu (web, social, promo).',
    services: ['Branding', 'Marketing kampanja', 'Social media', 'Web dizajn'],
    cover: 'https://picsum.photos/seed/kolasin-1450/1200/800',
    gallery: [
      'https://picsum.photos/seed/kolasin-1450-1/1200/800',
      'https://picsum.photos/seed/kolasin-1450-2/1200/800'
    ],
    description:
      'Naglasak na “premium winter escape”: hero vizuali, kratke poruke i jasni paketi ponude.'
  },
  {
    id: 5,
    slug: 'social-gym-campaign',
    title: 'Social Media – “Pulse Gym” Kampanja',
    category: 'Social media',
    client: 'Pulse Gym (demo)',
    year: 2026,
    excerpt: '30-dnevni plan sadržaja + dizajn šablona + reels ideje.',
    services: ['Content plan', 'Dizajn šablona', 'Community management'],
    cover: 'https://picsum.photos/seed/pulse-gym/1200/800',
    gallery: [
      'https://picsum.photos/seed/pulse-gym-1/1200/800',
      'https://picsum.photos/seed/pulse-gym-2/1200/800'
    ],
    description:
      'Šabloni za objave, highlight cover-i, i sistem boja koji radi na tamnoj/ svijetloj pozadini.'
  },
  {
    id: 6,
    slug: 'packaging-coffee-roastery',
    title: 'Packaging – “Crna Gora Roastery”',
    category: 'Packaging / Print',
    client: 'CG Roastery (demo)',
    year: 2026,
    excerpt: 'Dizajn ambalaže za 3 blend-a + mockup vizuali.',
    services: ['Packaging dizajn', 'Dizajn za štampu', 'Product mockups'],
    cover: 'https://picsum.photos/seed/coffee-roastery/1200/800',
    gallery: [
      'https://picsum.photos/seed/coffee-roastery-1/1200/800',
      'https://picsum.photos/seed/coffee-roastery-2/1200/800'
    ],
    description:
      'Snažna tipografija, kodiranje boja po ukusu, priprema dieline-a za štampu.'
  },
  {
    id: 7,
    slug: 'drone-real-estate-promo',
    title: 'Drone Promo – Nekretnine “Skyline Estates”',
    category: 'Video / Drone',
    client: 'Skyline Estates (demo)',
    year: 2026,
    excerpt: 'Kratak promo video (30–45s) + vertikalni cut za reels.',
    services: ['Snimanje dronom', 'Montaža videa', 'Color grading'],
    cover: 'https://picsum.photos/seed/drone-estates/1200/800',
    gallery: [
      'https://picsum.photos/seed/drone-estates-1/1200/800',
      'https://picsum.photos/seed/drone-estates-2/1200/800'
    ],
    description:
      'Dinamični kadrovi eksterijera, titlovi, i verzije za IG/FB oglašavanje.'
  },
  {
    id: 8,
    slug: 'event-marketing-budva-nights',
    title: 'Event Marketing – “Budva Nights”',
    category: 'Marketing / Social',
    client: 'Budva Nights (demo)',
    year: 2026,
    excerpt: 'Key visual + digital kampanja + set šablona za objave.',
    services: ['Key visual', 'Marketing', 'Social media dizajn'],
    cover: 'https://picsum.photos/seed/budva-nights/1200/800',
    gallery: [
      'https://picsum.photos/seed/budva-nights-1/1200/800',
      'https://picsum.photos/seed/budva-nights-2/1200/800'
    ],
    description:
      'Neon estetika, jasna hijerarhija informacija, i assets za story/post/banere.'
  }
]

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug)
}
