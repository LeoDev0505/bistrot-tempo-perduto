export const RESTAURANT = {
  name: 'Il Bistrot del Tempo Perduto',
  shortName: 'Tempo Perduto',
  tagline: 'Il gusto del tempo che fugge',
  subTagline: 'Imperia · Liguria',
  established: '2003',
  description:
    'Un bistrot di fine dining nel cuore di Imperia, dove la cucina ligure incontra la tradizione francese in un’atmosfera senza tempo.',
  phone: '+39 389 902 4014',
  phoneHref: 'tel:+393899024014',
  email: 'ilbistrotdeltempoperduto@pec.it',
  emailHref: 'mailto:ilbistrotdeltempoperduto@pec.it',
address: {
    street: 'Piazza Nino Bixio, Calata G.B. Cuneo, 1',
    city: 'Imperia',
    region: 'Liguria',
    postalCode: '18100',
    country: 'Italia',
  },
hours: [
    { days: 'Lunedì', time: 'Chiuso' },
    { days: 'Martedì e Giovedì', time: '19:00 — 22:00' },
    { days: 'Mercoledì', time: '12:00 — 14:30 · 19:00 — 22:00' },
    { days: 'Venerdì — Domenica', time: '12:00 — 14:30 · 19:00 — 22:00' },
  ],
social: [
    { label: 'Instagram', href: 'https://www.instagram.com/il_bistrot_del_tempoperduto/' },
    { label: 'Facebook', href: 'https://www.facebook.com/ilbistrotdeltempoperduto/?locale=it_IT' },
    { label: 'Tripadvisor', href: 'https://www.tripadvisor.it/Restaurant_Review-g194781-d13392039-Reviews-Il_Bistrot_Del_Tempo_Perduto-Imperia_Italian_Riviera_Liguria.html' },
  ],
// Google Maps coordinates for Piazza Nino Bixio, Imperia
  mapLat: 43.886026,
  mapLng: 8.037149,
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.3900249539343!2d8.037149!3d43.886026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d26ce37beea121%3A0x6b107b30932bc6e7!2sPiazza%20Nino%20Bixio%2C%2018100%20Imperia%20IM!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Piazza+Nino+Bixio+1+Imperia',
  mapDirectionsLink:
    'https://www.google.com/maps/dir/?api=1&destination=Piazza+Nino+Bixio+1+Imperia',
};

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'La Casa', to: '/about' },
  { label: 'Menù', to: '/menu' },
  { label: 'Cantina', to: '/wine' },
  { label: 'Contatti', to: '/contact' },
];

export const IMAGE = {
  heroMain:
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=80',
  heroSecondary:
    'https://images.unsplash.com/photo-1551218808-94e33e1271c3?auto=format&fit=crop&w=1600&q=80',
  aboutInterior:
    'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1600&q=80',
  aboutChef:
    'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80',
  aboutTable:
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80',
  dishSeafood:
    'https://images.unsplash.com/photo-1559737558-2f5a35f4029b?auto=format&fit=crop&w=1200&q=80',
  dishPasta:
    'https://images.unsplash.com/photo-1551183053-bf91a84d8c5f?auto=format&fit=crop&w=1200&q=80',
  dishMeat:
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
  dishDessert:
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80',
  atmosphereDining:
    'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1600&q=80',
  atmosphereCandle:
    'https://images.unsplash.com/photo-1517248135467-4c33ed439b18?auto=format&fit=crop&w=1600&q=80',
  wineCellar:
    '/images/winepage.jpg',
  wineGlasses:
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
  wineBottle:
    'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=1200&q=80',
  reservationHero:
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80',
  contactHero:
    '/images/contatti.jpg',
};
