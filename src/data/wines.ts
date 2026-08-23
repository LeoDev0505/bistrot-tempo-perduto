export interface Wine {
  id: string;
  name: string;
  producer: string;
  region: { it: string; en: string; fr: string };
  year: string;
  type: WineType;
  category: WineCategory;
  description: { it: string; en: string; fr: string };
  tastingNotes: { it: string[]; en: string[]; fr: string[] };
  pairing: { it: string; en: string; fr: string };
  featured?: boolean;
  image: string;
}

export type WineType = 'Rosso' | 'Bianco' | 'Bollicine' | 'Dolce' | 'Rosato';
export type WineCategory = 'liguria' | 'italia' | 'francia' | 'bollicine';

export interface WineRegion {
  id: WineCategory;
  label: { it: string; en: string; fr: string };
  subtitle: { it: string; en: string; fr: string };
  description: { it: string; en: string; fr: string };
}

export const WINE_REGIONS: WineRegion[] = [
  {
    id: 'liguria',
    label: { it: 'Liguria', en: 'Liguria', fr: 'Ligurie' },
    subtitle: { it: 'La nostra terra', en: 'Our Land', fr: 'Notre Terre' },
    description: {
      it: 'Vitigni coltivati su terrazze a picco sul mare. Rossese, Vermentino, Pigato — l’anima del territorio.',
      en: 'Vines cultivated on terraces overlooking the sea. Rossese, Vermentino, Pigato — the soul of the territory.',
      fr: 'Cépages cultivés sur des terrasses surplombant la mer. Rossese, Vermentino, Pigato — l’âme du territoire.',
    },
  },
  {
    id: 'italia',
    label: { it: 'Italia', en: 'Italy', fr: 'Italie' },
    subtitle: { it: 'Le grandi regioni', en: 'The Great Regions', fr: 'Les Grandes Régions' },
    description: {
      it: 'Una selezione delle migliori espressioni italiane, dai grandi rossi piemontesi alle eleganze siciliane.',
      en: 'A selection of the best Italian expressions, from great Piedmontese reds to Sicilian elegance.',
      fr: 'Une sélection des meilleures expressions italiennes, des grands rouges piémontais aux élégances siciliennes.',
    },
  },
  {
    id: 'francia',
    label: { it: 'Francia', en: 'France', fr: 'France' },
    subtitle: { it: 'I classici d’oltralpe', en: 'The Transalpine Classics', fr: 'Les Classiques d’Outre-Rhin' },
    description: {
      it: 'Bordeaux, Borgogna, Champagne e la Loira. La tradizione francese che ispira la nostra cucina.',
      en: 'Bordeaux, Burgundy, Champagne, and the Loire. The French tradition that inspires our cuisine.',
      fr: 'Bordeaux, Bourgogne, Champagne et la Loire. La tradition française qui inspire notre cuisine.',
    },
  },
  {
    id: 'bollicine',
    label: { it: 'Bollicine', en: 'Bubbles', fr: 'Bulles' },
    subtitle: { it: 'Le celebrazioni', en: 'The Celebrations', fr: 'Les Célébrations' },
    description: {
      it: 'Metodo classico e Charmat. Per iniziare la serata, per brindare, per chiudere in bellezza.',
      en: 'Classic method and Charmat. To start the evening, to toast, to finish in style.',
      fr: 'Méthode classique et Charmat. Pour commencer la soirée, pour trinquer, pour finir en beauté.',
    },
  },
];

export const WINES: Wine[] = [
  // LIGURIA
  {
    id: 'w-lig-1',
    name: 'Vermentino',
    producer: 'Maixei',
    region: { it: 'Riviera Ligure di Ponente', en: 'Riviera Ligure di Ponente', fr: 'Riviera Ligure di Ponente' },
    year: '2025',
    type: 'Bianco',
    category: 'liguria',
    description: {
      it: 'Vermentino fresco e vivace del Ponente ligure. Delicati profumi floreali e nota sapida che richiama il mare.',
      en: 'Fresh and lively Vermentino from western Liguria. Delicate floral aromas and a savory note reminiscent of the sea.',
      fr: 'Vermentino frais et vif de l\'ouest ligure. Parfums floraux délicats et note saline évoquant la mer.',
    },
    tastingNotes: {
      it: ['Fiori bianchi', 'Agrumi', 'Erbe aromatiche'],
      en: ['White flowers', 'Citrus', 'Aromatic herbs'],
      fr: ['Fleurs blanches', 'Agrumes', 'Herbes aromatiques'],
    },
    pairing: {
      it: 'Antipasti di mare, pescato del giorno e primi piatti leggeri.',
      en: 'Seafood appetizers, catch of the day, and light first courses.',
      fr: 'Entrées de mer, pêche du jour et premiers plats légers.',
    },
    featured: true,
    image: '/images/vermentino.jpeg',
  },
  {
    id: 'w-lig-2',
    name: 'Moscatello di Taggia',
    producer: 'Maixei',
    region: { it: 'Riviera Ligure di Ponente', en: 'Riviera Ligure di Ponente', fr: 'Riviera Ligure di Ponente' },
    year: '2025',
    type: 'Bianco',
    category: 'liguria',
    description: {
      it: 'Bianco aromatico e suadente, perla rara ligure. Sorso fresco e avvolgente con inconfondibili profumi floreali.',
      en: 'Aromatic and smooth white wine, a rare Ligurian pearl. Fresh and enveloping sip with unmistakable floral scents.',
      fr: 'Blanc aromatique et suave, perle ligure rare. Gorgée fraîche et enveloppante aux parfums floraux inconfondibles.',
    },
    tastingNotes: {
      it: ['Fiori d\'arancio', 'Pesca bianca', 'Salvia'],
      en: ['Orange blossom', 'White peach', 'Sage'],
      fr: ['Fleurs d\'oranger', 'Pêche blanche', 'Sauge'],
    },
    pairing: {
      it: 'Antipasti della tradizione ligure, crostacei, formaggi freschi e pasticceria secca.',
      en: 'Traditional Ligurian appetizers, shellfish, fresh cheeses, and dry pastry.',
      fr: 'Entrées de la tradition ligure, crustacés, fromages frais et biscuits secs.',
    },
    image: '/images/moscatello.jpeg',
  },

  // ITALIA
  {
    id: 'w-ita-1',
    name: 'Pinot Grigio Riserva "Giatl"',
    producer: 'Peter Zemmer',
    region: { it: 'Alto Adige, Italia', en: 'South Tyrol, Italy', fr: 'Haut-Adige, Italie' },
    year: '2023',
    type: 'Bianco',
    category: 'italia',
    description: {
      it: 'Pinot Grigio di grande struttura ed eleganza alpina. Sorso avvolgente e bilanciato da una vibrante mineralità.',
      en: 'Pinot Grigio with great structure and alpine elegance. Enveloping sip balanced by a vibrant minerality.',
      fr: 'Pinot Grigio d’une grande structure et élégance alpine. Gorgée enveloppante et équilibrée par une minéralité vibrante.',
    },
    tastingNotes: {
      it: ['Pera matura', 'Fiori di campo', 'Leggera vaniglia'],
      en: ['Ripe pear', 'Wildflowers', 'Light vanilla'],
      fr: ['Poire mûre', 'Fleurs des champs', 'Légère vanille'],
    },
    pairing: {
      it: 'Pesce al forno, carni bianche saporite, risotti ricchi e formaggi di media stagionatura.',
      en: 'Baked fish, savory white meats, rich risottos, and medium-aged cheeses.',
      fr: 'Poisson au four, viandes blanches savoureuses, risottos riches et fromages à affinage moyen.',
    },
    image: '/images/pinot.jpeg',
  },
  {
    id: 'w-ita-2',
    name: 'Barbaresco',
    producer: 'Marolo',
    region: { it: 'Piemonte, Italia', en: 'Piedmont, Italy', fr: 'Piémont, Italie' },
    year: '2022',
    type: 'Rosso',
    category: 'italia',
    description: {
      it: 'Nebbiolo in purezza di aristocratica eleganza. Bouquet etereo, tannini nobili e finale di lunga persistenza.',
      en: 'Pure Nebbiolo of aristocratic elegance. Ethereal bouquet, noble tannins, and a long persistent finish.',
      fr: 'Nebbiolo pur d’une élégance aristocratique. Bouquet éthéré, tanins nobles et finale de longue persistance.',
    },
    tastingNotes: {
      it: ['Viola appassita', 'Frutti rossi', 'Spezie dolci'],
      en: ['Withered violet', 'Red fruits', 'Sweet spices'],
      fr: ['Violette fanée', 'Fruits rouges', 'Épices douces'],
    },
    pairing: {
      it: 'Arrosti, selvaggina, primi piatti ricchi e formaggi stagionati.',
      en: 'Roasts, game, rich first courses, and aged cheeses.',
      fr: 'Rôtis, gibier, premiers plats riches et fromages affinés.',
    },
    featured: true,
    image: '/images/marolo.jpeg',
  },
  {
    id: 'w-ita-3',
    name: 'Lagrein',
    producer: 'Peter Zemmer',
    region: { it: 'Alto Adige, Italia', en: 'South Tyrol, Italy', fr: 'Haut-Adige, Italie' },
    year: '2024',
    type: 'Rosso',
    category: 'italia',
    description: {
      it: 'Rosso autoctono dal carattere deciso e fitto. Sorso vellutato di gran corpo con un finale morbidamente speziato.',
      en: 'Indigenous red with a bold and dense character. Full-bodied velvety sip with a softly spiced finish.',
      fr: 'Rouge autochtone au caractère affirmé et dense. Gorgée veloutée et corsée avec une finale doucement épicée.',
    },
    tastingNotes: {
      it: ['Frutti di bosco scuri', 'Cioccolato fondente', 'Viola'],
      en: ['Dark berries', 'Dark chocolate', 'Violet'],
      fr: ['Fruits des bois noirs', 'Chocolat noir', 'Violette'],
    },
    pairing: {
      it: 'Taglieri di salumi saporiti, carni rosse alla griglia e formaggi di media o lunga stagionatura.',
      en: 'Savory cured meat platters, grilled red meats, and medium to long-aged cheeses.',
      fr: 'Plateaux de charcuterie savoureuse, viandes rouges grillées et fromages à affinage moyen ou long.',
    },
    image: '/images/lagrein.jpeg',
  },
  {
    id: 'w-ita-4',
    name: 'Gewürztraminer',
    producer: 'Peter Zemmer',
    region: { it: 'Alto Adige, Italia', en: 'South Tyrol, Italy', fr: 'Haut-Adige, Italie' },
    year: '2025',
    type: 'Bianco',
    category: 'italia',
    description: {
      it: 'Emblema dell\'aromaticità altoatesina. Sorso ricco e morbido, unisce note floreali ed esotiche dal finale lungo.',
      en: 'Emblem of South Tyrolean aromaticity. Rich and soft sip, combining floral and exotic notes with a long finish.',
      fr: 'Emblème de l’aromaticité sud-tirolienne. Gorgée riche et douce, unissant des notes florales et exotiques à la longue finale.',
    },
    tastingNotes: {
      it: ['Petali di rosa', 'Litchi', 'Spezie dolci'],
      en: ['Rose petals', 'Lychee', 'Sweet spices'],
      fr: ['Pétales de rose', 'Litchi', 'Épices douces'],
    },
    pairing: {
      it: 'Piatti speziati, cucina asiatica, crostacei e formaggi saporiti o erborinati.',
      en: 'Spicy dishes, Asian cuisine, shellfish, and savory or blue cheeses.',
      fr: 'Plats épicés, cuisine asiatique, crustacés et fromages savoureux ou persillés.',
    },
    image: '/images/gewurz.jpeg',
  },
  {
    id: 'w-ita-5',
    name: 'Derthona (Timorasso)',
    producer: 'Claudio Mariotto',
    region: { it: 'Piemonte, Italia', en: 'Piedmont, Italy', fr: 'Piémont, Italie' },
    year: '2024',
    type: 'Bianco',
    category: 'italia',
    description: {
      it: 'Bianco autoctono di straordinaria struttura. Caldo, sapido e minerale, destinato a evolvere nel tempo.',
      en: 'Indigenous white of extraordinary structure. Warm, savory, and mineral, destined to evolve over time.',
      fr: 'Blanc autochtone à la structure extraordinaire. Chaud, salin et minéral, destiné à évoluer avec le temps.',
    },
    tastingNotes: {
      it: ['Pesca gialla', 'Fiori d\'acacia', 'Pietra focaia'],
      en: ['Yellow peach', 'Acacia flowers', 'Flint'],
      fr: ['Pêche jaune', 'Fleurs d\'acacia', 'Silex'],
    },
    pairing: {
      it: 'Antipasti ricchi, carni bianche, formaggi stagionati e piatti strutturati a base di pesce.',
      en: 'Rich appetizers, white meats, aged cheeses, and structured fish-based dishes.',
      fr: 'Entrées riches, viandes blanches, fromages affinés et plats structurés à base de poisson.',
    },
    image: '/images/derthona.jpeg',
  },
  {
    id: 'w-ita-6',
    name: 'Chardonnay',
    producer: 'Peter Zemmer',
    region: { it: 'Alto Adige, Italia', en: 'South Tyrol, Italy', fr: 'Haut-Adige, Italie' },
    year: '2024',
    type: 'Bianco',
    category: 'italia',
    description: {
      it: 'Classico internazionale di grande eleganza alpina. Sorso fresco, perfettamente armonico e dalla spinta minerale.',
      en: 'International classic of great alpine elegance. Fresh sip, perfectly harmonious with a mineral drive.',
      fr: 'Classique international d’une grande élégance alpine. Gorgée fraîche, parfaitement harmonique et à l’impulsion minérale.',
    },
    tastingNotes: {
      it: ['Mela Golden', 'Fiori bianchi', 'Note minerali'],
      en: ['Golden Apple', 'White flowers', 'Mineral notes'],
      fr: ['Pomme Golden', 'Fleurs blanches', 'Notes minérales'],
    },
    pairing: {
      it: 'Antipasti leggeri, primi piatti a base di pesce, carni bianche e verdure di stagione.',
      en: 'Light appetizers, fish-based first courses, white meats, and seasonal vegetables.',
      fr: 'Entrées légères, premiers plats à base de poisson, viandes blanches et légumes de saison.',
    },
    image: '/images/chardonnay.jpeg',
  },

  // FRANCIA
  {
    id: 'w-fra-1',
    name: 'Côtes d\'Auxerre',
    producer: 'Domaine Verret',
    region: { it: 'Bourgogne, Francia', en: 'Burgundy, France', fr: 'Bourgogne, France' },
    year: '2024',
    type: 'Rosso',
    category: 'francia',
    description: {
      it: 'Pinot Noir elegante e fruttato del terroir borgognone. Spicca per la vibrante freschezza e i tannini morbidi.',
      en: 'Elegant and fruity Pinot Noir from the Burgundian terroir. Stands out for its vibrant freshness and soft tannins.',
      fr: 'Pinot Noir élégant et fruité du terroir bourguignon. Se distingue par sa fraîcheur vibrante et ses tanins souples.',
    },
    tastingNotes: {
      it: ['Ciliegia', 'Sottobosco', 'Spezie leggere'],
      en: ['Cherry', 'Underbrush', 'Light spices'],
      fr: ['Cerise', 'Sous-bois', 'Épices légères'],
    },
    pairing: {
      it: 'Carni bianche, anatra arrosto, formaggi a crosta fiorita.',
      en: 'White meats, roast duck, bloomy rind cheeses.',
      fr: 'Viandes blanches, canard rôti, fromages à croûte fleuries.',
    },
    image: '/images/verret.jpeg',
  },
  {
    id: 'w-fra-2',
    name: 'Léoville Las Cases',
    producer: 'Château Léoville Las Cases',
    region: { it: 'Saint-Julien, Francia', en: 'Saint-Julien, France', fr: 'Saint-Julien, France' },
    year: '2010',
    type: 'Rosso',
    category: 'francia',
    description: {
      it: 'Rosso bordolese leggendario di maestosa complessità. Tannini fitti, note terziarie e finale incredibilmente profondo.',
      en: 'Legendary Bordeaux red of majestic complexity. Dense tannins, tertiary notes, and an incredibly deep finish.',
      fr: 'Rouge bordelais légendaire d’une complexité majestueuse. Tanins denses, notes tertiaires et finale incroyablement profonde.',
    },
    tastingNotes: {
      it: ['Ribes nero', 'Legno di cedro', 'Grafite'],
      en: ['Blackcurrant', 'Cedar wood', 'Graphite'],
      fr: ['Cassis', 'Bois de cèdre', 'Graphite'],
    },
    pairing: {
      it: 'Carni rosse strutturate, agnello arrosto, selvaggina nobile.',
      en: 'Structured red meats, roast lamb, noble game.',
      fr: 'Viandes rouges structurées, agneau rôti, gibier noble.',
    },
    featured: true,
    image: '/images/recolte.jpeg',
  },
  {
    id: 'w-fra-3',
    name: 'Minuty Prestige',
    producer: 'Minuty',
    region: { it: 'Côtes de Provence, Francia', en: 'Côtes de Provence, France', fr: 'Côtes de Provence, France' },
    year: '2025',
    type: 'Rosato',
    category: 'francia',
    description: {
      it: 'Rosé iconico, simbolo dell\'eleganza provenzale. Sorso fresco e vivace, di grande finezza e vibrante mineralità.',
      en: 'Iconic rosé, symbol of Provençal elegance. Fresh and lively sip, of great finesse and vibrant minerality.',
      fr: 'Rosé iconique, symbole de l’élégance provençale. Gorgée fraîche et vive, d’une grande finesse et d’une minéralité vibrante.',
    },
    tastingNotes: {
      it: ['Pompelmo rosa', 'Fragolina di bosco', 'Fiori bianchi'],
      en: ['Pink grapefruit', 'Wild strawberry', 'White flowers'],
      fr: ['Pamplemousse rose', 'Fraise des bois', 'Fleurs blanches'],
    },
    pairing: {
      it: 'Crudi di mare, crostacei, insalate estive e piatti leggeri della cucina mediterranea.',
      en: 'Raw seafood, shellfish, summer salads, and light Mediterranean dishes.',
      fr: 'Crus de la mer, crustacés, salades d’été et plats légers de la cuisine méditerranéenne.',
    },
    image: '/images/minuty.jpeg',
  },
  {
    id: 'w-fra-4',
    name: 'Chablis',
    producer: 'Domaine Hamelin',
    region: { it: 'Bourgogne, Francia', en: 'Burgundy, France', fr: 'Bourgogne, France' },
    year: '2024',
    type: 'Bianco',
    category: 'francia',
    description: {
      it: 'Espressione pura dello Chardonnay senza rovere. Spicca per la vibrante freschezza e la tesa nota minerale.',
      en: 'Pure expression of unoaked Chardonnay. Stands out for its vibrant freshness and tight mineral note.',
      fr: 'Expression pure du Chardonnay sans bois. Se distingue par sa fraîcheur vibrante et sa note minérale tendue.',
    },
    tastingNotes: {
      it: ['Mela verde', 'Limone', 'Sasso bagnato'],
      en: ['Green apple', 'Lemon', 'Wet stone'],
      fr: ['Pomme verte', 'Citron', 'Pierre mouillée'],
    },
    pairing: {
      it: 'Ostriche, crudi di mare, crostacei, sushi e formaggi caprini freschi.',
      en: 'Oysters, raw seafood, shellfish, sushi, and fresh goat cheeses.',
      fr: 'Huîtres, fruits de mer crus, crustacés, sushis et fromages de chèvre frais.',
    },
    image: '/images/chablis.jpeg',
  },

  // BOLLICINE
  {
    id: 'w-bol-1',
    name: 'Franciacorta Brut',
    producer: 'La Fiorita',
    region: { it: 'Lombardia, Italia', en: 'Lombardy, Italy', fr: 'Lombardie, Italie' },
    year: 'S.A.',
    type: 'Bollicine',
    category: 'bollicine',
    description: {
      it: 'Metodo Classico di grande eleganza e freschezza. Perlage fine, sorso cremoso con un vibrante finale agrumato.',
      en: 'Classic Method of great elegance and freshness. Fine perlage, creamy sip with a vibrant citrus finish.',
      fr: 'Méthode Classique d’une grande élégance et fraîcheur. Perlage fin, gorgée crémeuse avec une finale agrumée vibrante.',
    },
    tastingNotes: {
      it: ['Crosta di pane', 'Fiori bianchi', 'Scorza di limone'],
      en: ['Bread crust', 'White flowers', 'Lemon zest'],
      fr: ['Croûte de pain', 'Fleurs blanches', 'Zeste de citron'],
    },
    pairing: {
      it: 'Perfetto come aperitivo, si sposa magnificamente con crudi di mare, fritture leggere, ostriche e risotti delicati.',
      en: 'Perfect as an aperitif, it pairs wonderfully with raw seafood, light fried dishes, oysters, and delicate risottos.',
      fr: 'Parfait à l’apéritif, il s’associe à merveille avec les fruits de mer crus, les fritures légères, les huîtres et les risottos délicats.',
    },
    featured: true,
    image: '/images/brut.jpeg',
  },
];