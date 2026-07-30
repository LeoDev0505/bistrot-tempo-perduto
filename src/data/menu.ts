import { IMAGE } from '@/lib/constants';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuItemCategory;
  tags?: string[];
  pairingNote?: string;
}

export type MenuItemCategory =
  | 'antipasti'
  | 'mare'
  | 'pasta'
  | 'secondi'
  | 'dolci';

export interface MenuCategory {
  id: MenuItemCategory;
  label: string;
  subtitle: string;
  description: string;
  image: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'antipasti',
    label: 'Antipasti',
    subtitle: 'Gli inizi',
    description:
      'I sapori che aprono la serata — pesce crudo dell’Ligurian Sea, verdure dell’orto e il tocco francese della maison.',
    image: '/images/antipasti.jpg',
  },
  {
    id: 'mare',
    label: 'Dal Mare',
    subtitle: 'La pesca del giorno',
    description:
      'Ogni giorno una selezione diversa, scelta al mercato del mattino. Il pesce arriva intero e viene lavorato a mano.',
    image: '/images/mare.jpg'
  },
  {
    id: 'pasta',
    label: 'Pasta Fresca',
    subtitle: 'Fatta a mano ogni mattina',
    description:
      'La pasta fresca è il cuore della cucina ligure. Tirata al mattarello, ripiena con cura, cotta al momento.',
    image: '/images/pasta.jpg',
  },
  {
    id: 'secondi',
    label: 'Secondi Piatti',
    subtitle: 'La terra e il fuoco',
    description:
      'Carni matureate in casa, cotture lente e salse ridotte al punto giusto. L’anima della cucina francese.',
    image: '/images/carne.jpg',
  },
  {
    id: 'dolci',
    label: 'Dolci',
    subtitle: 'La chiusura',
    description:
      'Dolci classici rivisitati con leggerezza. Lo zucchero non copre mai il sapore dell’ingrediente principale.',
    image: '/images/dolce.jpg',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Antipasti
  {
    id: 'ant-1',
    name: 'Crudo di Ricciola',
    description:
      'Filetto di ricciola affettato sottile, olio extravergine di Taggia, scorza di limone di Ventimiglia e fiore di sale.',
    category: 'antipasti',
    tags: ['Crudo', 'Ligurian Sea'],
    pairingNote: 'Vermentino — Tenuta Selvamatica',
  },
  {
    id: 'ant-2',
    name: 'Brandade di Merluzzo',
    description:
      'Baccalà mantecato con patate di Vessalico, aglio confit e crostini di pane casereccio tostato.',
    category: 'antipasti',
    tags: ['Tradizione francese'],
    pairingNote: 'Chablis — Domaine Laroche',
  },
  {
    id: 'ant-3',
    name: 'Tarte Flambée della Casa',
    description:
      'Pasta sottile, crème fraîche, cipolla di Borretana caramellata e lardo di Colonnata tagliato al coltello.',
    category: 'antipasti',
    tags: ['Ispirazione alsaziana'],
  },
  {
    id: 'ant-4',
    name: 'Velouté di Zucca',
    description:
      'Vellutata di zucca mantovana, olio al rosmarino, granella di nocciole del Piemonte e semi di zucca tostati.',
    category: 'antipasti',
    tags: ['Vegetariano', 'Stagionale'],
  },
  {
    id: 'ant-5',
    name: 'Carpaccio di Gamberi Rossi',
    description:
      'Gamberi rossi di Sanremo, polpa di pomodoro datterino condita, basilico genovese DOP e pangrattato profumato.',
    category: 'antipasti',
    tags: ['Crudo', 'DOP'],
  },

  // Mare
  {
    id: 'mare-1',
    name: 'Coda di Rospo in Salsa Nera',
    description:
      'Coda di rospo in guazzetto, salsa di nero di seppia, pomodorini confit e patate schiacciate al rosmarino.',
    category: 'mare',
    tags: ['Pesce del giorno'],
    pairingNote: 'Rossese di Dolceacqua — Lupi',
  },
  {
    id: 'mare-2',
    name: 'Risotto al Nero di Seppia',
    description:
      'Risotto Carnaroli mantecato al nero di seppia, scaglie di bottarga di tonno e olio extravergine a crudo.',
    category: 'mare',
    tags: ['Risotto', 'Stagionale'],
  },
  {
    id: 'mare-3',
    name: 'Tagliata di Tonno Pinna Gialla',
    description:
      'Tonno pinna gialla leggermente scottato, riduzione di soia e aceto balsamico, sesamo tostato e germogli.',
    category: 'mare',
    tags: ['Scottato'],
  },
  {
    id: 'mare-4',
    name: 'Branzino in Crosta di Sale',
    description:
      'Branzino selvatico cotto in crosta di sale marino e erbe aromatiche, servito con salsa salmoriglio.',
    category: 'mare',
    tags: ['Selvatico', 'Per due'],
    pairingNote: 'Pigato — Lunae',
  },
  {
    id: 'mare-5',
    name: 'Frittura di Paranza',
    description:
      'Pesce di paranza del giorno, pastella leggera alla birra, sale e limone. Servita su carta pagana.',
    category: 'mare',
    tags: ['Classico ligure'],
  },

  // Pasta
  {
    id: 'pasta-1',
    name: 'Pansoti con Salsa di Noci',
    description:
      'Pansoti ripieni di erbette di campo, salsa di noci, pinoli e ricotta di pecora stagionata.',
    category: 'pasta',
    tags: ['Tradizione ligure', 'DOP'],
    pairingNote: 'Vermentino — Poggio dei Grilli',
  },
  {
    id: 'pasta-2',
    name: 'Trenette al Pesto',
    description:
      'Trenette fresche, pesto genovese al mortaio, patate e fagiolini. La ricetta della tradizione, senza compromessi.',
    category: 'pasta',
    tags: ['Pesto DOP', 'Classico'],
  },
  {
    id: 'pasta-3',
    name: 'Ravioli di Pesce',
    description:
      'Ravioli ripieni di branzino e gamberi, burro alle erbe, polvere di liquirizia e germogli di finocchietto.',
    category: 'pasta',
    tags: ['Ripieni', 'Pesce'],
  },
  {
    id: 'pasta-4',
    name: 'Tagliatelle al Ragù Bianco',
    description:
      'Tagliatelle fresche, ragù bianco di coniglio, vino bianco di Pigato e timo limonato fresco.',
    category: 'pasta',
    tags: ['Ragù', 'Stagionale'],
  },
  {
    id: 'pasta-5',
    name: 'Cannelloni alla Francese',
    description:
      'Cannelloni ripieni di pollo e funghi porcini, besciamella, gratinati al forno con parmigiano di 24 mesi.',
    category: 'pasta',
    tags: ['Ispirazione francese', 'Gratinati'],
  },

  // Secondi
  {
    id: 'sec-1',
    name: 'Entrecôte au Poivre',
    description:
      'Entrecôte di manzo maremmano, salsa al pepe verde, patate soufflé e riduzione di vino rosso.',
    category: 'secondi',
    tags: ['Manzo', 'Maturato 40 giorni'],
    pairingNote: 'Barolo — Giuseppe Rinaldi',
  },
  {
    id: 'sec-2',
    name: 'Coniglio alla Ligure',
    description:
      'Coniglio brasato in bianco con olive taggiasche, pinoli, capperi di Pantelleria e rosmarino.',
    category: 'secondi',
    tags: ['Tradizione ligure'],
  },
  {
    id: 'sec-3',
    name: 'Anatra all’Arancia',
    description:
      'Petto d’anatra rosa, salsa all’arancia di Ventimiglia, purea di sedano rapa e chips croccanti.',
    category: 'secondi',
    tags: ['Classico francese', 'Cottura rosa'],
  },
  {
    id: 'sec-4',
    name: 'Ossobuco in Gremolata',
    description:
      'Ossobuco di vitello brasato lentamente, gremolata classica, risotto alla milanese di accompagnamento.',
    category: 'secondi',
    tags: ['Cottura lenta'],
  },
  {
    id: 'sec-5',
    name: 'Filetto di Cinghiale',
    description:
      'Filetto di cinghiale, salsa alle bacche di ginepro, castagne arrostite e purè di patate al tartufo.',
    category: 'secondi',
    tags: ['Selvaggina', 'Stagionale'],
  },

  // Dolci
  {
    id: 'dol-1',
    name: 'Crème Brûlée al Lavanda',
    description:
      'Crème brûlée classica con infusione di lavanda di Provenza, zucchero caramellato al momento.',
    category: 'dolci',
    tags: ['Classico francese'],
  },
  {
    id: 'dol-2',
    name: 'Torta Caprese',
    description:
      'Torta al cioccolato fondente e mandorle senza farina, cuore morbido, cioccolato caldo a parte.',
    category: 'dolci',
    tags: ['Senza glutine'],
  },
  {
    id: 'dol-3',
    name: 'Panna Cotta alla Vaniglia',
    description:
      'Panna cotta con bacche di vaniglia del Madagascar, coulis di frutti di bosco freschi.',
    category: 'dolci',
    tags: ['Classico'],
  },
  {
    id: 'dol-4',
    name: 'Tarte Tatin',
    description:
      'Tarte tatin di mele renette, caramello scuro, gelato alla vaniglia fatto in casa.',
    category: 'dolci',
    tags: ['Classico francese'],
  },
  {
    id: 'dol-5',
    name: 'Sorbetto del Giorno',
    description:
      'Sorbetto alla frutta di stagione. Chiedi al cameriere la proposta del giorno.',
    category: 'dolci',
    tags: ['Stagionale', 'Vegano'],
  },
];
