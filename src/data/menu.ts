import { IMAGE } from '@/lib/constants';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuItemCategory;
  price: string; // <-- HO AGGIUNTO IL CAMPO PREZZO QUI
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
      'I sapori che aprono la serata — mare crudo, verdure dell’orto e grandi classici.',
    image: '/images/ostriche.jpg',
  },
  {
    id: 'mare',
    label: 'Dal Mare',
    subtitle: 'La pesca del giorno',
    description:
      'Ogni giorno una selezione diversa, scelta al mercato del mattino. Il pesce arriva intero e viene lavorato a mano.',
    image: '/images/pesce.jpg'
  },
  {
    id: 'pasta',
    label: 'Pasta Fresca',
    subtitle: 'Fatta a mano ogni mattina',
    description:
      'La pasta fresca è il cuore della cucina ligure. Tirata al mattarello, ripiena con cura, cotta al momento.',
    image: '/images/tagliolini.jpg',
  },
  {
    id: 'secondi',
    label: 'Secondi Piatti',
    subtitle: 'La terra e il fuoco',
    description:
      'Carni selezionate, cotture lente e salse ridotte al punto giusto. L’anima della nostra cucina.',
    image: '/images/anatra.jpg',
  },
  {
    id: 'dolci',
    label: 'Dolci',
    subtitle: 'La chiusura',
    description:
      'Dolci classici rivisitati con leggerezza. Lo zucchero non copre mai il sapore dell’ingrediente principale.',
    image: '/images/pannacotta.jpg',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // ANTIPASTI
  // ==========================================
  {
    id: 'ant-1',
    name: '6 Ostriche della Bretagna (N° 2 Concave)',
    description: 'Pregiate ostriche bretoni servite freschissime al naturale.',
    category: 'antipasti',
    price: '26 €',
    tags: ['Crudo', 'Mare'],
  },
  {
    id: 'ant-2',
    name: 'Plateau Misto',
    description: 'Selezione speciale composta da 3 ostriche e 3 crevettes.',
    category: 'antipasti',
    price: '28 €',
    tags: ['Crudo'],
  },
  {
    id: 'ant-3',
    name: 'Crevettes à l\'aïoli',
    description: 'Gamberi serviti con la tradizionale e cremosa salsa aïoli francese.',
    category: 'antipasti',
    price: '22 €',
  },
  {
    id: 'ant-4',
    name: 'Gamberi alla catalana',
    description: 'Gamberi freschi con pomodorini, cipolla rossa dolce e vinaigrette.',
    category: 'antipasti',
    price: '16 €',
  },
  {
    id: 'ant-5',
    name: 'Baccalà mantecato',
    description: 'Baccalà lavorato ad arte con olio extravergine, servito con crostini.',
    category: 'antipasti',
    price: '18 €',
    tags: ['Tradizione'],
  },
  {
    id: 'ant-6',
    name: 'Tartare di Tonno',
    description: 'Battuta di tonno crudo al coltello in porzione da antipasto.',
    category: 'antipasti',
    price: '14 €',
  },
  {
    id: 'ant-7',
    name: 'Soufflé di Carote',
    description: 'Morbido soufflé alle carote accompagnato da una ricca fonduta di gorgonzola.',
    category: 'antipasti',
    price: '15 €',
    tags: ['Vegetariano'],
  },
  {
    id: 'ant-8',
    name: 'Soufflé di Trombette',
    description: 'Soufflé di zucchine trombette liguri con salsina fresca di pomodoro.',
    category: 'antipasti',
    price: '15 €',
    tags: ['Vegetariano'],
  },
  {
    id: 'ant-9',
    name: 'Panna Cotta Salata',
    description: 'Una sfiziosa e delicata rivisitazione salata per aprire l\'appetito.',
    category: 'antipasti',
    price: '15 €',
  },
  {
    id: 'ant-10',
    name: 'Verdure ripiene',
    description: 'Le classiche verdure della tradizione ligure, farcite di magro e cotte al forno.',
    category: 'antipasti',
    price: '12 €',
    tags: ['Tradizione Ligure', 'Vegetariano'],
  },
  {
    id: 'ant-11',
    name: 'Parmigiana',
    description: 'Parmigiana di melanzane con pomodoro, basilico e formaggio filante.',
    category: 'antipasti',
    price: '15 €',
    tags: ['Vegetariano'],
  },
  {
    id: 'ant-12',
    name: 'Panzanella di Mare',
    description: 'Insalata di pane povera arricchita con freschi frutti di mare.',
    category: 'antipasti',
    price: '16 €',
  },
  {
    id: 'ant-13',
    name: 'Insalata "Condiglione"',
    description: 'Tradizionale insalata estiva del ponente ligure, fresca e ricca.',
    category: 'antipasti',
    price: '16 €',
    tags: ['Vegetariano'],
  },
  {
    id: 'ant-14',
    name: 'Vitello Tonnato',
    description: 'Girello cotto a bassa temperatura con morbida salsa tonnata.',
    category: 'antipasti',
    price: '20 €',
  },

  // ==========================================
  // PASTA E PRIMI
  // ==========================================
  {
    id: 'pas-1',
    name: 'Tagliolini Verdi al Ragù di Pesce',
    description: 'Pasta fresca agli spinaci condita con un ricco ragù di pescato.',
    category: 'pasta',
    price: '20 €',
    tags: ['Pasta Fresca'],
  },
  {
    id: 'pas-2',
    name: 'Gnocchi con polpo e datterini',
    description: 'Gnocchi fatti in casa con polpo verace e datterini gialli e rossi.',
    category: 'pasta',
    price: '22 €',
  },
  {
    id: 'pas-3',
    name: 'Gnocchi con Cozze e Fichi',
    description: 'Abbinamento audace e riuscito tra la sapidità delle cozze e la dolcezza dei fichi.',
    category: 'pasta',
    price: '22 €',
  },
  {
    id: 'pas-4',
    name: 'Pappardelle con acciughe',
    description: 'Pappardelle mantecate con acciughe, mandorle croccanti e pinoli.',
    category: 'pasta',
    price: '20 €',
  },
  {
    id: 'pas-5',
    name: 'Tagliatelle Verdi al Ragù di Anatra',
    description: 'Pasta all\'uovo verde con ragù d\'anatra tagliato al coltello.',
    category: 'pasta',
    price: '18 €',
  },
  {
    id: 'pas-6',
    name: 'Tagliatelle Verdi, Zucchine, Gamberi e Bottarga',
    description: 'Un trionfo di sapori con zucchine fresche, gamberi e spolverata di bottarga.',
    category: 'pasta',
    price: '20 €',
  },
  {
    id: 'pas-7',
    name: 'Raviolini Verdi al ragù di manzo',
    description: 'Ravioli verdi ripieni di carne, serviti con ragù di manzo a lenta cottura.',
    category: 'pasta',
    price: '20 €',
    tags: ['Pasta Ripiena'],
  },
  {
    id: 'pas-8',
    name: 'Ravioli Verdi Burro e Salvia',
    description: 'Ravioli delicati esaltati dalla semplicità del burro fuso e della salvia.',
    category: 'pasta',
    price: '18 €',
    tags: ['Pasta Ripiena', 'Vegetariano'],
  },
  {
    id: 'pas-9',
    name: 'Lasagne della casa',
    description: 'Fatte al forno con zucchine trombette liguri e pesto genovese.',
    category: 'pasta',
    price: '18 €',
  },
  {
    id: 'pas-10',
    name: 'Risotto con trombette e cuore di Bue',
    description: 'Risotto mantecato con zucchine, pomodoro cuore di bue, cipolla e basilico.',
    category: 'pasta',
    price: '20 €',
    tags: ['Vegetariano'],
  },
  {
    id: 'pas-11',
    name: 'Fregola di Mare',
    description: 'Fregola sarda risottata con scampi, cozze, calamari, vongole e merluzzo.',
    category: 'pasta',
    price: '28 €',
  },
  {
    id: 'pas-12',
    name: 'Paëlla alla Valenciana',
    description: 'Il classico piatto spagnolo ricco di sapore, con carne, pesce e zafferano.',
    category: 'pasta',
    price: '28 €',
  },

  // ==========================================
  // SECONDI DI MARE
  // ==========================================
  {
    id: 'mar-1',
    name: 'Tartare di Tonno (Secondo)',
    description: 'Abbondante battuta di tonno fresco al coltello, condita con olio EVO e agrumi.',
    category: 'mare',
    price: '30 €',
    tags: ['Crudo'],
  },
  {
    id: 'mar-2',
    name: 'Seppie in Zemin',
    description: 'Storica e saporita zuppa ligure a base di seppie, bietole e pinoli.',
    category: 'mare',
    price: '26 €',
    tags: ['Tradizione Ligure'],
  },
  {
    id: 'mar-3',
    name: 'Zuppetta di Pesce',
    description: 'Ricca e profumata zuppa con il pescato del giorno, servita con crostini caldi.',
    category: 'mare',
    price: '32 €',
  },
  {
    id: 'mar-4',
    name: 'Frittura di Acciughe e Gamberetti',
    description: 'Frittura croccante, asciutta e dorata mista di mare.',
    category: 'mare',
    price: '26 €',
  },
  {
    id: 'mar-5',
    name: 'Brandacujun',
    description: 'Piatto forte del Ponente: stoccafisso mantecato con patate, aglio, olive e prezzemolo.',
    category: 'mare',
    price: '20 €',
    tags: ['Tradizione Ligure'],
  },
  {
    id: 'mar-6',
    name: 'Orata alla Ligure',
    description: 'Filetto d\'orata cotto al forno con patate, olive taggiasche e pinoli.',
    category: 'mare',
    price: '28 €',
  },
  {
    id: 'mar-7',
    name: 'Cozze alla marinara',
    description: 'Cozze saltate in padella con aglio, prezzemolo, vino bianco e pomodoro.',
    category: 'mare',
    price: '18 €',
  },

  // ==========================================
  // SECONDI DI TERRA
  // ==========================================
  {
    id: 'sec-1',
    name: 'Anatra all\'arancia',
    description: 'Grande classico francese: petto d\'anatra servito con salsa agrodolce all\'arancia.',
    category: 'secondi',
    price: '28 €',
    tags: ['Classico Francese'],
  },
  {
    id: 'sec-2',
    name: 'Filetto al pepe Verde',
    description: 'Tenero filetto di manzo servito con la classica crema al pepe verde in grani.',
    category: 'secondi',
    price: '30 €',
  },
  {
    id: 'sec-3',
    name: 'Escargots de Bourgogne',
    description: 'Lumache alla borgognona gratinate nel guscio con burro, aglio e prezzemolo.',
    category: 'secondi',
    price: '22 €',
    tags: ['Classico Francese'],
  },
  {
    id: 'sec-4',
    name: 'Tajin di Pollo con le Sue Spezie',
    description: 'Pollo stufato lentamente con aromi orientali, servito nel tradizionale tegame.',
    category: 'secondi',
    price: '26 €',
  },
  {
    id: 'sec-5',
    name: 'Tartare di Fassona con Spiedino di Zucchine',
    description: 'Carne cruda di altissima qualità, tagliata a mano, accompagnata da verdure.',
    category: 'secondi',
    price: '26 €',
  },
  {
    id: 'sec-6',
    name: 'Lumache alla ligure',
    description: 'Lumache stufate secondo la tradizione con erbe aromatiche e pomodoro.',
    category: 'secondi',
    price: '28 €',
    tags: ['Tradizione Ligure'],
  },

  // ==========================================
  // DOLCI (Mantenuti dalla lista originale)
  // ==========================================
  {
    id: 'dol-1',
    name: 'Crème Brûlée alla Lavanda',
    description: 'Crème brûlée classica con infusione di lavanda di Provenza, zucchero caramellato al momento.',
    category: 'dolci',
    price: '10 €',
    tags: ['Classico francese'],
  },
  {
    id: 'dol-2',
    name: 'Torta Caprese',
    description: 'Torta al cioccolato fondente e mandorle senza farina, cuore morbido, cioccolato caldo a parte.',
    category: 'dolci',
    price: '10 €',
    tags: ['Senza glutine'],
  },
  {
    id: 'dol-3',
    name: 'Panna Cotta alla Vaniglia',
    description: 'Panna cotta con bacche di vaniglia del Madagascar, coulis di frutti di bosco freschi.',
    category: 'dolci',
    price: '9 €',
    tags: ['Classico'],
  },
  {
    id: 'dol-4',
    name: 'Tarte Tatin',
    description: 'Tarte tatin di mele renette, caramello scuro, gelato alla vaniglia fatto in casa.',
    category: 'dolci',
    price: '10 €',
    tags: ['Classico francese'],
  },
  {
    id: 'dol-5',
    name: 'Sorbetto del Giorno',
    description: 'Sorbetto alla frutta di stagione. Chiedi al cameriere la proposta del giorno.',
    category: 'dolci',
    price: '8 €',
    tags: ['Stagionale', 'Vegano'],
  },
];
