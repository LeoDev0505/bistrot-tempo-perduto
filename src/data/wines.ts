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

export type WineType = 'Rosso' | 'Bianco' | 'Bollicine' | 'Dolce';
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
  // Liguria
  {
    id: 'w-lig-1',
    name: 'Rossese di Dolceacqua',
    producer: 'Lupi',
    region: 'Dolceacqua, Liguria',
    year: '2019',
    type: 'Rosso',
    category: 'liguria',
    description:
      'Il rosso storico della Liguria, elegante e profumato, coltivato sulle terrazze dell’entroterra di Ventimiglia.',
    tastingNotes: ['Frutti rossi', 'Pepe bianco', 'Liquirizia'],
    pairing: 'Cacciagione, formaggi stagionati',
    featured: true,
    image:
      '/images/rossese.jpeg',
  },
  {
    id: 'w-lig-2',
    name: 'Vermentino',
    producer: 'Tenuta Selvamatica',
    region: 'Liguria di Levante',
    year: '2022',
    type: 'Bianco',
    category: 'liguria',
    description:
      'Vermentino ligure fresco e sapido, profumo di fiori di ginepro e macchia mediterranea.',
    tastingNotes: ['Fiori bianchi', 'Mandarino', 'Mineralità'],
    pairing: 'Pesce crudo, antipasti di mare',
    image: '/images/vermentino.jpeg',
  },
  {
    id: 'w-lig-3',
    name: 'Pigato',
    producer: 'Lunae',
    region: 'Colli di Luni, Liguria',
    year: '2021',
    type: 'Bianco',
    category: 'liguria',
    description:
      'Pigato dalla struttura importante, sapore ricco e finale lungo. Tra i bianchi liguri più complessi.',
    tastingNotes: ['Frutto giallo', 'Erbe aromatiche', 'Mandorla'],
    pairing: 'Pesci in salsa, risotti al nero',
    image: '/images/pigato.jpeg',
  },

  // Italia
  {
    id: 'w-ita-1',
    name: 'Barolo',
    producer: 'Giuseppe Rinaldi',
    region: 'Piemonte',
    year: '2017',
    type: 'Rosso',
    category: 'italia',
    description:
      'Il re dei vini italiani. Nebbiolo di struttura, lungo affinamento, profumi complessi che si evolvono nel tempo.',
    tastingNotes: ['Tartrato', 'Rosa appassita', 'Spezie'],
    pairing: 'Carni rosse, brasati, formaggi',
    featured: true,
    image:
      '/images/barolo.jpg',
  },
  {
    id: 'w-ita-2',
    name: 'Brunello di Montalcino',
    producer: 'Biondi Santi',
    region: 'Toscana',
    year: '2016',
    type: 'Rosso',
    category: 'italia',
    description:
      'Sangiovese in purezza, lungo affinamento in botte grande. Eleganza toscana che sfida il tempo.',
    tastingNotes: ['Ciliegia', 'Cuoio', 'Tabacco'],
    pairing: 'Carni arrosto, cacciagione',
    image:
      '/images/brunello.jpg',
  },
  {
    id: 'w-ita-3',
    name: 'Etna Rosso',
    producer: 'Frank Cornelissen',
    region: 'Sicilia',
    year: '2020',
    type: 'Rosso',
    category: 'italia',
    description:
      'Nerello Mascalese coltivato sui vulcani dell’Etna. Vino di terroir, fresco e vibrante.',
    tastingNotes: ['Frutti rossi', 'Pietra focaia', 'Fumo'],
    pairing: 'Carni bianche, selvaggina',
    image:
      '/images/etnarosso.png',
  },

  // Francia
  {
    id: 'w-fra-1',
    name: 'Châteauneuf-du-Pape',
    producer: 'Château de Beaucastel',
    region: 'Rhône, Francia',
    year: '2018',
    type: 'Rosso',
    category: 'francia',
    description:
      'Blend di tredici vitigni del sud della Francia. Vino generoso, speziato, di grande longevità.',
    tastingNotes: ['Prugna', 'Liquirizia', 'Garrigue'],
    pairing: 'Carne arrosto, formaggi forti',
    image:
      '/images/beaucastel.png',
  },
  {
    id: 'w-fra-2',
    name: 'Chablis Premier Cru',
    producer: 'Domaine Laroche',
    region: 'Borgogna, Francia',
    year: '2020',
    type: 'Bianco',
    category: 'francia',
    description:
      'Chardonnay su suoli calcarei del Kimmeridgiano. Freschezza minerale e eleganza pura.',
    tastingNotes: ['Agrumi', 'Gesso', 'Fiori bianchi'],
    pairing: 'Pesce crudo, ostriche',
    image:
      '/images/premiercru.png',
  },
  {
    id: 'w-fra-3',
    name: 'Sancerre',
    producer: 'Henri Bourgeois',
    region: 'Loira, Francia',
    year: '2021',
    type: 'Bianco',
    category: 'francia',
    description:
      'Sauvignon Blanc della Loira. Vino asciutto, profumato, con la tipica mineralità dei suoli calcarei.',
    tastingNotes: ['Ribes', 'Asparago', 'Mineralità'],
    pairing: 'Caprino, pesce leggero',
    image:
      '/images/sancerre.png',
  },

  // Bollicine
  {
    id: 'w-bol-1',
    name: 'Champagne Brut',
    producer: 'Krug',
    region: 'Champagne, Francia',
    year: 'NV',
    type: 'Bollicine',
    category: 'bollicine',
    description:
      'Grande Cuvée di Krug. Un blend di oltre 120 vini, affinamento lungo in cantina. Eleganza assoluta.',
    tastingNotes: ['Brioche', 'Mela', 'Mandorla'],
    pairing: 'Aperitivo, crostacei',
    featured: true,
    image:
      '/images/champagne.png',
  },
  {
    id: 'w-bol-2',
    name: 'Franciacorta Cuvée',
    producer: 'Bellavista',
    region: 'Lombardia, Italia',
    year: '2018',
    type: 'Bollicine',
    category: 'bollicine',
    description:
      'Metodo classico italiano di grande livello. Perlage fine, profumi complessi, persistenza lunga.',
    tastingNotes: ['Pane tostato', 'Agrumi', 'Fiori'],
    pairing: 'Aperitivo, antipasti',
    image:
      '/images/franciacorta.png',
  },
  {
    id: 'w-bol-3',
    name: 'Prosecco Superiore',
    producer: 'Valdo',
    region: 'Valdobbiadene, Veneto',
    year: '2022',
    type: 'Bollicine',
    category: 'bollicine',
    description:
      'Glera coltivata sui colli di Valdobbiadene. Fresco, fruttato, elegante nel perlage.',
    tastingNotes: ['Mela verde', 'Pera', 'Acacia'],
    pairing: 'Aperitivo, dessert leggeri',
    image:
      '/images/valdobbiadene.png',
  },
];
