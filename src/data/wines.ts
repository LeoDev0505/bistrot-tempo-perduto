export interface Wine {
  id: string;
  name: string;
  producer: string;
  region: string;
  year: string;
  type: WineType;
  category: WineCategory;
  description: string;
  tastingNotes: string[];
  pairing: string;
  featured?: boolean;
  image: string;
}

export type WineType = 'Rosso' | 'Bianco' | 'Bollicine' | 'Dolce' | 'Rosato';
export type WineCategory = 'liguria' | 'italia' | 'francia' | 'bollicine';

export interface WineRegion {
  id: WineCategory;
  label: string;
  subtitle: string;
  description: string;
}

export const WINE_REGIONS: WineRegion[] = [
  {
    id: 'liguria',
    label: 'Liguria',
    subtitle: 'La nostra terra',
    description:
      'Vitigni coltivati su terrazze a picco sul mare. Rossese, Vermentino, Pigato — l’anima del territorio.',
  },
  {
    id: 'italia',
    label: 'Italia',
    subtitle: 'Le grandi regioni',
    description:
      'Una selezione delle migliori espressioni italiane, dai grandi rossi piemontesi alle eleganze siciliane.',
  },
  {
    id: 'francia',
    label: 'Francia',
    subtitle: 'I classici d’oltralpe',
    description:
      'Bordeaux, Borgogna, Champagne e la Loira. La tradizione francese che ispira la nostra cucina.',
  },
  {
    id: 'bollicine',
    label: 'Bollicine',
    subtitle: 'Le celebrazioni',
    description:
      'Metodo classico e Charmat. Per iniziare la serata, per brindare, per chiudere in bellezza.',
  },
];

export const WINES: Wine[] = [
  // LIGURIA
  {
    id: 'w-lig-1',
    name: 'Vermentino',
    producer: 'Maixei',
    region: 'Riviera Ligure di Ponente',
    year: '2025',
    type: 'Bianco',
    category: 'liguria',
    description:
      'Vermentino fresco e vivace del Ponente ligure. Delicati profumi floreali e nota sapida che richiama il mare.',
    tastingNotes: ['Fiori bianchi', 'Agrumi', 'Erbe aromatiche'],
    pairing: 'Antipasti di mare, pescato del giorno e primi piatti leggeri.',
    featured: true,
    image: '/images/vermentino.jpeg',
  },
  {
    id: 'w-lig-2',
    name: 'Moscatello di Taggia',
    producer: 'Maixei',
    region: 'Riviera Ligure di Ponente',
    year: '2025',
    type: 'Bianco',
    category: 'liguria',
    description:
      'Bianco aromatico e suadente, perla rara ligure. Sorso fresco e avvolgente con inconfondibili profumi floreali.',
    tastingNotes: ['Fiori d\'arancio', 'Pesca bianca', 'Salvia'],
    pairing: 'Antipasti della tradizione ligure, crostacei, formaggi freschi e pasticceria secca.',
    image: '/images/moscatello.jpeg',
  },

  // ITALIA
  {
    id: 'w-ita-1',
    name: 'Pinot Grigio Riserva "Giatl"',
    producer: 'Peter Zemmer',
    region: 'Alto Adige, Italia',
    year: '2023',
    type: 'Bianco',
    category: 'italia',
    description:
      'Pinot Grigio di grande struttura ed eleganza alpina. Sorso avvolgente e bilanciato da una vibrante mineralità.',
    tastingNotes: ['Pera matura', 'Fiori di campo', 'Leggera vaniglia'],
    pairing: 'Pesce al forno, carni bianche saporite, risotti ricchi e formaggi di media stagionatura.',
    image: '/images/pinot.jpeg',
  },
  {
    id: 'w-ita-2',
    name: 'Barbaresco',
    producer: 'Marolo',
    region: 'Piemonte, Italia',
    year: '2022',
    type: 'Rosso',
    category: 'italia',
    description:
      'Nebbiolo in purezza di aristocratica eleganza. Bouquet etereo, tannini nobili e finale di lunga persistenza.',
    tastingNotes: ['Viola appassita', 'Frutti rossi', 'Spezie dolci'],
    pairing: 'Arrosti, selvaggina, primi piatti ricchi e formaggi stagionati.',
    featured: true,
    image: '/images/marolo.jpeg',
  },
  {
    id: 'w-ita-3',
    name: 'Lagrein',
    producer: 'Peter Zemmer',
    region: 'Alto Adige, Italia',
    year: '2024',
    type: 'Rosso',
    category: 'italia',
    description:
      'Rosso autoctono dal carattere deciso e fitto. Sorso vellutato di gran corpo con un finale morbidamente speziato.',
    tastingNotes: ['Frutti di bosco scuri', 'Cioccolato fondente', 'Viola'],
    pairing: 'Taglieri di salumi saporiti, carni rosse alla griglia e formaggi di media o lunga stagionatura.',
    image: '/images/lagrein.jpeg',
  },
  {
    id: 'w-ita-4',
    name: 'Gewürztraminer',
    producer: 'Peter Zemmer',
    region: 'Alto Adige, Italia',
    year: '2025',
    type: 'Bianco',
    category: 'italia',
    description:
      'Emblema dell\'aromaticità altoatesina. Sorso ricco e morbido, unisce note floreali ed esotiche dal finale lungo.',
    tastingNotes: ['Petali di rosa', 'Litchi', 'Spezie dolci'],
    pairing: 'Piatti speziati, cucina asiatica, crostacei e formaggi saporiti o erborinati.',
    image: '/images/gewurz.jpeg',
  },
  {
    id: 'w-ita-5',
    name: 'Derthona (Timorasso)',
    producer: 'Claudio Mariotto',
    region: 'Piemonte, Italia',
    year: '2024',
    type: 'Bianco',
    category: 'italia',
    description:
      'Bianco autoctono di straordinaria struttura. Caldo, sapido e minerale, destinato a evolvere nel tempo.',
    tastingNotes: ['Pesca gialla', 'Fiori d\'acacia', 'Pietra focaia'],
    pairing: 'Antipasti ricchi, carni bianche, formaggi stagionati e piatti strutturati a base di pesce.',
    image: '/images/derthona.jpeg',
  },
  {
    id: 'w-ita-6',
    name: 'Chardonnay',
    producer: 'Peter Zemmer',
    region: 'Alto Adige, Italia',
    year: '2024',
    type: 'Bianco',
    category: 'italia',
    description:
      'Classico internazionale di grande eleganza alpina. Sorso fresco, perfettamente armonico e dalla spinta minerale.',
    tastingNotes: ['Mela Golden', 'Fiori bianchi', 'Note minerali'],
    pairing: 'Antipasti leggeri, primi piatti a base di pesce, carni bianche e verdure di stagione.',
    image: '/images/chardonnay.jpeg',
  },

  // FRANCIA
  {
    id: 'w-fra-1',
    name: 'Côtes d\'Auxerre',
    producer: 'Domaine Verret',
    region: 'Bourgogne, Francia',
    year: '2024',
    type: 'Rosso',
    category: 'francia',
    description:
      'Pinot Noir elegante e fruttato del terroir borgognone. Spicca per la vibrante freschezza e i tannini morbidi.',
    tastingNotes: ['Ciliegia', 'Sottobosco', 'Spezie leggere'],
    pairing: 'Carni bianche, anatra arrosto, formaggi a crosta fiorita.',
    image: '/images/verret.jpeg',
  },
  {
    id: 'w-fra-2',
    name: 'Léoville Las Cases',
    producer: 'Château Léoville Las Cases',
    region: 'Saint-Julien, Francia',
    year: '2010',
    type: 'Rosso',
    category: 'francia',
    description:
      'Rosso bordolese leggendario di maestosa complessità. Tannini fitti, note terziarie e finale incredibilmente profondo.',
    tastingNotes: ['Ribes nero', 'Legno di cedro', 'Grafite'],
    pairing: 'Carni rosse strutturate, agnello arrosto, selvaggina nobile.',
    featured: true,
    image: '/images/recolte.jpeg',
  },
  {
    id: 'w-fra-3',
    name: 'Minuty Prestige',
    producer: 'Minuty',
    region: 'Côtes de Provence, Francia',
    year: '2025',
    type: 'Rosato',
    category: 'francia',
    description:
      'Rosé iconico, simbolo dell\'eleganza provenzale. Sorso fresco e vivace, di grande finezza e vibrante mineralità.',
    tastingNotes: ['Pompelmo rosa', 'Fragolina di bosco', 'Fiori bianchi'],
    pairing: 'Crudi di mare, crostacei, insalate estive e piatti leggeri della cucina mediterranea.',
    image: '/images/minuty.jpeg',
  },
  {
    id: 'w-fra-4',
    name: 'Chablis',
    producer: 'Domaine Hamelin',
    region: 'Bourgogne, Francia',
    year: '2024',
    type: 'Bianco',
    category: 'francia',
    description:
      'Espressione pura dello Chardonnay senza rovere. Spicca per la vibrante freschezza e la tesa nota minerale.',
    tastingNotes: ['Mela verde', 'Limone', 'Sasso bagnato'],
    pairing: 'Ostriche, crudi di mare, crostacei, sushi e formaggi caprini freschi.',
    image: '/images/chablis.jpeg',
  },

  // BOLLICINE
  {
    id: 'w-bol-1',
    name: 'Franciacorta Brut',
    producer: 'La Fiorita',
    region: 'Lombardia, Italia',
    year: 'S.A.',
    type: 'Bollicine',
    category: 'bollicine',
    description:
      'Metodo Classico di grande eleganza e freschezza. Perlage fine, sorso cremoso con un vibrante finale agrumato.',
    tastingNotes: ['Crosta di pane', 'Fiori bianchi', 'Scorza di limone'],
    pairing: 'Perfetto come aperitivo, si sposa magnificamente con crudi di mare, fritture leggere, ostriche e risotti delicati.',
    featured: true,
    image: '/images/brut.jpeg',
  },
];