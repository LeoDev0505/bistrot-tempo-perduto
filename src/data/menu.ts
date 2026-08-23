import { IMAGE } from '@/lib/constants';

export interface MenuItem {
  id: string;
  name: { it: string; en: string; fr: string };
  description: { it: string; en: string; fr: string };
  category: MenuItemCategory;
  price: string;
  tags?: { it: string[]; en: string[]; fr: string[] };
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
  label: { it: string; en: string; fr: string };
  subtitle: { it: string; en: string; fr: string };
  description: { it: string; en: string; fr: string };
  image: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'antipasti',
    label: { it: 'Antipasti', en: 'Starters', fr: 'Entrées' },
    subtitle: { it: 'Gli inizi', en: 'The Beginnings', fr: 'Les Commencements' },
    description: {
      it: 'I sapori che aprono la serata — mare crudo, verdure dell’orto e grandi classici.',
      en: 'Flavors to open the evening — raw seafood, garden vegetables, and great classics.',
      fr: 'Des saveurs pour ouvrir la soirée — fruits de mer crus, légumes du potager et grands classiques.',
    },
    image: '/images/ostriche.jpg',
  },
  {
    id: 'mare',
    label: { it: 'Dal Mare', en: 'From the Sea', fr: 'De la Mer' },
    subtitle: { it: 'La pesca del giorno', en: 'The Catch of the Day', fr: 'La Pêche du Jour' },
    description: {
      it: 'Ogni giorno una selezione diversa, scelta al mercato del mattino. Il pesce arriva intero e viene lavorato a mano.',
      en: 'A different selection every day, chosen at the morning market. Fish arrives whole and is hand-prepared.',
      fr: 'Une sélection différente chaque jour, choisie au marché du matin. Le poisson arrive entier et est travaillé à la main.',
    },
    image: '/images/pesce.jpg',
  },
  {
    id: 'pasta',
    label: { it: 'Pasta Fresca', en: 'Fresh Pasta', fr: 'Pâtes Fraîches' },
    subtitle: { it: 'Fatta a mano ogni mattina', en: 'Handmade Every Morning', fr: 'Faites à la main chaque matin' },
    description: {
      it: 'La pasta fresca è il cuore della cucina ligure. Tirata al mattarello, ripiena con cura, cotta al momento.',
      en: 'Fresh pasta is the heart of Ligurian cuisine. Rolled with a rolling pin, carefully stuffed, cooked to order.',
      fr: 'Les pâtes fraîches sont le cœur de la cuisine ligure. Étirées au rouleau, farcies avec soin, cuites à la commande.',
    },
    image: '/images/pansoti.jpg',
  },
  {
    id: 'secondi',
    label: { it: 'Secondi Piatti', en: 'Main Courses', fr: 'Plats Principaux' },
    subtitle: { it: 'La terra e il fuoco', en: 'Land and Fire', fr: 'La Terre et le Feu' },
    description: {
      it: 'Carni selezionate, cotture lente e salse ridotte al punto giusto. L’anima della nostra cucina.',
      en: 'Selected meats, slow cooking, and perfectly reduced sauces. The soul of our cuisine.',
      fr: 'Viandes sélectionnées, cuissons lentes et sauces réduites à point. L’âme de notre cuisine.',
    },
    image: '/images/anatra.jpg',
  },
  {
    id: 'dolci',
    label: { it: 'Dolci', en: 'Desserts', fr: 'Desserts' },
    subtitle: { it: 'La chiusura', en: 'The Finale', fr: 'La Clôture' },
    description: {
      it: 'Dolci classici rivisitati con leggerezza. Lo zucchero non copre mai il sapore dell’ingrediente principale.',
      en: 'Classic desserts revisited with lightness. Sugar never masks the flavor of the main ingredient.',
      fr: 'Desserts classiques revisités en légèreté. Le sucre ne masque jamais la saveur de l’ingrédient principal.',
    },
    image: '/images/pannacotta.jpg',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // ANTIPASTI
  // ==========================================
  {
    id: 'ant-1',
    name: { it: '6 Ostriche della Bretagna (N° 2 Concave)', en: '6 Breton Oysters (N° 2 Concave)', fr: '6 Huîtres de Bretagne (N° 2 Concaves)' },
    description: { it: 'Pregiate ostriche bretoni servite freschissime al naturale.', en: 'Fine Breton oysters served very fresh au naturel.', fr: 'Fines huîtres bretonnes servies très fraîches au naturel.' },
    category: 'antipasti',
    price: '26 €',
    tags: { it: ['Crudo', 'Mare'], en: ['Raw', 'Sea'], fr: ['Cru', 'Mer'] },
  },
  {
    id: 'ant-2',
    name: { it: 'Plateau Misto', en: 'Mixed Plateau', fr: 'Plateau Misto' },
    description: { it: 'Selezione speciale composta da 3 ostriche e 3 crevettes.', en: 'Special selection consisting of 3 oysters and 3 prawns.', fr: 'Sélection spéciale composée de 3 huîtres et 3 crevettes.' },
    category: 'antipasti',
    price: '28 €',
    tags: { it: ['Crudo'], en: ['Raw'], fr: ['Cru'] },
  },
  {
    id: 'ant-3',
    name: { it: 'Crevettes à l\'aïoli', en: 'Crevettes à l\'aïoli', fr: 'Crevettes à l\'aïoli' },
    description: { it: 'Gamberi serviti con la tradizionale e cremosa salsa aïoli francese.', en: 'Prawns served with traditional and creamy French aïoli sauce.', fr: 'Crevettes servies avec la traditionnelle et cremosa sauce aïoli française.' },
    category: 'antipasti',
    price: '22 €',
  },
  {
    id: 'ant-4',
    name: { it: 'Gamberi alla catalana', en: 'Catalan-style Prawns', fr: 'Crevettes à la catalane' },
    description: { it: 'Gamberi freschi con pomodorini, cipolla rossa dolce e vinaigrette.', en: 'Fresh prawns with cherry tomatoes, sweet red onion, and vinaigrette.', fr: 'Crevettes fraîches avec tomates cerises, oignon rouge doux et vinaigrette.' },
    category: 'antipasti',
    price: '16 €',
  },
  {
    id: 'ant-5',
    name: { it: 'Baccalà mantecato', en: 'Mantecato Cod', fr: 'Brandade de Morue' },
    description: { it: 'Baccalà lavorato ad arte con olio di oliva, servito con crostini.', en: 'Artfully prepared salted cod with olive oil, served with croutons.', fr: 'Morue travaillée avec art avec de l’huile d’olive, servie avec des croûtons.' },
    category: 'antipasti',
    price: '18 €',
    tags: { it: ['Tradizione'], en: ['Tradition'], fr: ['Tradition'] },
  },
  {
    id: 'ant-6',
    name: { it: 'Tartare di Tonno', en: 'Tuna Tartare', fr: 'Tartare de Thon' },
    description: { it: 'Battuta di tonno crudo al coltello in porzione da antipasto.', en: 'Hand-cut raw tuna tartare in an appetizer portion.', fr: 'Battue de thon cru au couteau en portion d\'entrée.' },
    category: 'antipasti',
    price: '14 €',
  },
  {
    id: 'ant-7',
    name: { it: 'Soufflé di Carote', en: 'Carrot Soufflé', fr: 'Soufflé de Carottes' },
    description: { it: 'Morbido soufflé alle carote accompagnato da una ricca fonduta di gorgonzola.', en: 'Soft carrot soufflé accompanied by a rich gorgonzola fondue.', fr: 'Moelleux soufflé aux carottes accompagné d\'une riche fondue de gorgonzola.' },
    category: 'antipasti',
    price: '15 €',
    tags: { it: ['Vegetariano'], en: ['Vegetarian'], fr: ['Végétarien'] },
  },
  {
    id: 'ant-8',
    name: { it: 'Soufflé di Trombette', en: 'Trumpet Zucchini Soufflé', fr: 'Soufflé de Courgettes Trombette' },
    description: { it: 'Soufflé di zucchine trombette liguri con salsina fresca di pomodoro.', en: 'Ligurian trumpet zucchini soufflé with fresh tomato sauce.', fr: 'Soufflé de courgettes trombette ligures avec une sauce tomate fraîche.' },
    category: 'antipasti',
    price: '15 €',
    tags: { it: ['Vegetariano'], en: ['Vegetarian'], fr: ['Végétarien'] },
  },
  {
    id: 'ant-9',
    name: { it: 'Panna Cotta Salata', en: 'Savory Panna Cotta', fr: 'Panna Cotta Salée' },
    description: { it: 'Una sfiziosa e delicata rivisitazione salata per aprire l\'appetito.', en: 'A delightful and delicate savory twist to open the appetite.', fr: 'Une délicieuse et subtile réinterprétation salée pour ouvrir l\'appétit.' },
    category: 'antipasti',
    price: '15 €',
  },
  {
    id: 'ant-10',
    name: { it: 'Verdure ripiene', en: 'Stuffed Vegetables', fr: 'Légumes Farcis' },
    description: { it: 'Le classiche verdure della tradizione ligure, farcite di magro e cotte al forno.', en: 'Classic Ligurian tradition vegetables, lean-stuffed and oven-baked.', fr: 'Les classiques légumes de la tradition ligure, farcis maigre et cuits au four.' },
    category: 'antipasti',
    price: '12 €',
    tags: { it: ['Tradizione Ligure', 'Vegetariano'], en: ['Ligurian Tradition', 'Vegetarian'], fr: ['Tradition Ligure', 'Végétarien'] },
  },
  {
    id: 'ant-11',
    name: { it: 'Parmigiana', en: 'Eggplant Parmigiana', fr: 'Parmigiana' },
    description: { it: 'Parmigiana di melanzane con pomodoro, basilico e formaggio filante.', en: 'Eggplant parmigiana with tomato, basil, and melted cheese.', fr: 'Parmigiana d\'aubergines à la tomate, basilic et fromage fondant.' },
    category: 'antipasti',
    price: '15 €',
    tags: { it: ['Vegetariano'], en: ['Vegetarian'], fr: ['Végétarien'] },
  },
  {
    id: 'ant-12',
    name: { it: 'Panzanella di Mare', en: 'Seafood Panzanella', fr: 'Panzanella de la Mer' },
    description: { it: 'Insalata di pane povera arricchita con freschi frutti di mare.', en: 'Simple rustic bread salad enriched with fresh seafood.', fr: 'Salade de pain rustique enrichie de fruits de mer frais.' },
    category: 'antipasti',
    price: '16 €',
  },
  {
    id: 'ant-13',
    name: { it: 'Insalata "Condiglione"', en: '"Condiglione" Salad', fr: 'Salade "Condiglione"' },
    description: { it: 'Tradizionale insalata estiva del ponente ligure, fresca e ricca.', en: 'Traditional fresh and rich summer salad from western Liguria.', fr: 'Traditionnelle salade estivale de la Riviera ligure, fraîche et riche.' },
    category: 'antipasti',
    price: '16 €',
    tags: { it: ['Vegetariano'], en: ['Vegetarian'], fr: ['Végétarien'] },
  },
  {
    id: 'ant-14',
    name: { it: 'Vitello Tonnato', en: 'Vitello Tonnato', fr: 'Veau Tonné' },
    description: { it: 'Girello cotto a bassa temperatura con morbida salsa tonnata.', en: 'Low-temperature cooked round of veal with smooth tuna sauce.', fr: 'Rôti de veau cuit à basse température avec une sauce au thon onctueuse.' },
    category: 'antipasti',
    price: '20 €',
  },

  // ==========================================
  // PASTA E PRIMI
  // ==========================================
  {
    id: 'pas-1',
    name: { it: 'Tagliolini Verdi al Ragù di Pesce', en: 'Green Tagliolini with Fish Ragoût', fr: 'Tagliolini Verts au Ragoût de Poisson' },
    description: { it: 'Pasta fresca agli spinaci condita con un ricco ragù di pescato.', en: 'Fresh spinach pasta tossed with a rich catch-of-the-day ragoût.', fr: 'Pâtes fraîches aux épinards assaisonnées d\'un riche ragoût de la pêche.' },
    category: 'pasta',
    price: '20 €',
    tags: { it: ['Pasta Fresca'], en: ['Fresh Pasta'], fr: ['Pâtes Fraîches'] },
  },
  {
    id: 'pas-2',
    name: { it: 'Pansoti ai Gamberi e Pomodorini', en: 'Pansoti with Prawns and Cherry Tomatoes', fr: 'Pansoti aux Crevettes et Tomates Cerises' },
    description: { it: 'Tipici pansoti della tradizione ligure, conditi con gamberi, pomodorini freschi e un tocco di verdurine croccanti.', en: 'Typical Ligurian pansoti tossed with prawns, fresh cherry tomatoes, and a touch of crunchy vegetables.', fr: 'Pansoti typiques de la tradition ligure, aux crevettes, tomates cerises fraîches et touche de légumes croquants.' },
    category: 'pasta',
    price: '18 €',
    tags: { it: ['Pasta Fresca'], en: ['Fresh Pasta'], fr: ['Pâtes Fraîches'] },
  },
  {
    id: 'pas-3',
    name: { it: 'Gnocchi con polpo e datterini', en: 'Gnocchi with Octopus and Datterini Tomatoes', fr: 'Gnocchi au Poulpe et Tomates Datterini' },
    description: { it: 'Gnocchi fatti in casa con polpo verace e datterini gialli e rossi.', en: 'Homemade gnocchi with true octopus and yellow/red datterini tomatoes.', fr: 'Gnocchi faits maison au vrai poulpe et tomates datterini jaunes et rouges.' },
    category: 'pasta',
    price: '22 €',
  },
  {
    id: 'pas-4',
    name: { it: 'Gnocchi con Cozze e Fichi', en: 'Gnocchi with Mussels and Figs', fr: 'Gnocchi aux Moules et Figues' },
    description: { it: 'Abbinamento audace e riuscito tra la sapidità delle cozze e la dolcezza dei fichi.', en: 'A bold and successful pairing between the savoriness of mussels and the sweetness of figs.', fr: 'Association audacieuse et réussie entre la salinité des moules et la douceur des figues.' },
    category: 'pasta',
    price: '22 €',
  },
  {
    id: 'pas-5',
    name: { it: 'Pappardelle con acciughe', en: 'Pappardelle with Anchovies', fr: 'Pappardelle aux Anchois' },
    description: { it: 'Pappardelle mantecate con acciughe, mandorle croccanti e pinoli.', en: 'Pappardelle tossed with anchovies, crunchy almonds, and pine nuts.', fr: 'Pappardelle liées aux anchois, amandes croquantes et pignons de pin.' },
    category: 'pasta',
    price: '20 €',
  },
  {
    id: 'pas-6',
    name: { it: 'Tagliatelle Verdi al Ragù di Anatra', en: 'Green Tagliatelle with Duck Ragoût', fr: 'Tagliatelles Vertes au Ragoût de Canard' },
    description: { it: 'Pasta all\'uovo verde con ragù d\'anatra tagliato al coltello.', en: 'Green egg pasta with knife-cut duck ragoût.', fr: 'Pâtes aux œufs vertes au ragoût de canard coupé au couteau.' },
    category: 'pasta',
    price: '18 €',
  },
  {
    id: 'pas-7',
    name: { it: 'Tagliatelle Verdi, Zucchine, Gamberi e Bottarga', en: 'Green Tagliatelle, Zucchini, Prawns, and Bottarga', fr: 'Tagliatelles Vertes, Courgettes, Crevettes et Boutargue' },
    description: { it: 'Un trionfo di sapori con zucchine fresche, gamberi e spolverata di bottarga.', en: 'A triumph of flavors with fresh zucchini, prawns, and a dusting of bottarga.', fr: 'Un triomphe de saveurs avec courgettes fraîches, crevettes et saupoudrage de boutargue.' },
    category: 'pasta',
    price: '20 €',
  },
  {
    id: 'pas-8',
    name: { it: 'Raviolini Verdi al ragù di manzo', en: 'Green Raviolini with Beef Ragoût', fr: 'Raviolis Verts au Ragoût de Bœuf' },
    description: { it: 'Ravioli verdi ripieni di carne, serviti con ragù di manzo a lenta cottura.', en: 'Meat-stuffed green ravioli served with slow-cooked beef ragoût.', fr: 'Raviolis verts farcis de viande, servis avec un ragoût de bœuf mijoté.' },
    category: 'pasta',
    price: '20 €',
    tags: { it: ['Pasta Ripiena'], en: ['Stuffed Pasta'], fr: ['Pâtes Farcies'] },
  },
  {
    id: 'pas-9',
    name: { it: 'Ravioli Verdi Burro e Salvia', en: 'Green Ravioli with Butter and Sage', fr: 'Raviolis Verts Beurre et Sauge' },
    description: { it: 'Ravioli delicati esaltati dalla semplicità del burro fuso e della salvia.', en: 'Delicate ravioli enhanced by the simplicity of melted butter and sage.', fr: 'Raviolis délicats rehaussés par la simplicité du beurre fondu et de la sauge.' },
    category: 'pasta',
    price: '18 €',
    tags: { it: ['Pasta Ripiena', 'Vegetariano'], en: ['Stuffed Pasta', 'Vegetarian'], fr: ['Pâtes Farcies', 'Végétarien'] },
  },
  {
    id: 'pas-10',
    name: { it: 'Lasagne della casa', en: 'House Lasagna', fr: 'Lasagnes de la Maison' },
    description: { it: 'Fatte al forno con zucchine trombette liguri e pesto genovese.', en: 'Baked with Ligurian trumpet zucchini and Genoese pesto.', fr: 'Faites au four avec courgettes trombette ligures et pesto génois.' },
    category: 'pasta',
    price: '18 €',
  },
  {
    id: 'pas-11',
    name: { it: 'Risotto con trombette e cuore di Bue', en: 'Risotto with Trumpet Zucchini and Oxheart Tomato', fr: 'Risotto aux Courgettes Trombette et Tomate Cœur de Bœuf' },
    description: { it: 'Risotto mantecato con zucchine, pomodoro cuore di bue, cipolla e basilico.', en: 'Risotto creamed with zucchini, oxheart tomato, onion, and basil.', fr: 'Risotto crémeux aux courgettes, tomate cœur de bœuf, oignon et basilic.' },
    category: 'pasta',
    price: '20 €',
    tags: { it: ['Vegetariano'], en: ['Vegetarian'], fr: ['Végétarien'] },
  },
  {
    id: 'pas-12',
    name: { it: 'Fregola di Mare', en: 'Seafood Fregola', fr: 'Fregola de la Mer' },
    description: { it: 'Fregola sarda risottata con scampi, cozze, calamari, vongole e merluzzo.', en: 'Sardinian fregola cooked like risotto with scampi, mussels, squid, clams, and hake.', fr: 'Fregola sarde cuite comme un risotto avec scampi, moules, calamars, palourdes et merlu.' },
    category: 'pasta',
    price: '28 €',
  },
  {
    id: 'pas-13',
    name: { it: 'Paëlla alla Valenciana', en: 'Valencian Paëlla', fr: 'Paëlla à la Valencienne' },
    description: { it: 'Il classico piatto spagnolo ricco di sapore, con carne, pesce e zafferano.', en: 'The classic flavor-rich Spanish dish with meat, fish, and saffron.', fr: 'Le plat espagnol classique riche en saveurs, avec viande, poisson et safran.' },
    category: 'pasta',
    price: '28 €',
  },

  // ==========================================
  // SECONDI DI MARE
  // ==========================================
  {
    id: 'mar-1',
    name: { it: 'Tartare di Tonno (Secondo)', en: 'Tuna Tartare (Main Course)', fr: 'Tartare de Thon (Plat Principal)' },
    description: { it: 'Abbondante battuta di tonno fresco al coltello, condita con olio EVO e agrumi.', en: 'Generous hand-cut fresh tuna tartare, dressed with extra virgin olive oil and citrus.', fr: 'Abondante tartare de thon frais au couteau, assaisonnée d\'huile d\'olive extra vierge et agrumes.' },
    category: 'mare',
    price: '30 €',
    tags: { it: ['Crudo'], en: ['Raw'], fr: ['Cru'] },
  },
  {
    id: 'mar-2',
    name: { it: 'Seppie in Zemin', en: 'Cuttlefish in Zemin', fr: 'Seiches en Zemin' },
    description: { it: 'Storica e saporita zuppa ligure a base di seppie, bietole e pinoli.', en: 'Historic and savory Ligurian soup made with cuttlefish, Swiss chard, and pine nuts.', fr: 'Soupe ligure historique et savoureuse à base de seiches, blettes et pignons de pin.' },
    category: 'mare',
    price: '26 €',
    tags: { it: ['Tradizione Ligure'], en: ['Ligurian Tradition'], fr: ['Tradition Ligure'] },
  },
  {
    id: 'mar-3',
    name: { it: 'Zuppetta di Pesce', en: 'Fish Soup', fr: 'Petite Soupe de Poisson' },
    description: { it: 'Ricca e profumata zuppa con il pescato del giorno, servita con crostini caldi.', en: 'Rich and fragrant soup with the catch of the day, served with warm croutons.', fr: 'Soupe riche et parfumée avec la pêche du jour, servie avec des croûtons chauds.' },
    category: 'mare',
    price: '32 €',
  },
  {
    id: 'mar-4',
    name: { it: 'Frittura di Acciughe e Gamberetti', en: 'Fried Anchovies and Small Prawns', fr: 'Friture d\'Anchois et Petites Crevettes' },
    description: { it: 'Frittura croccante, asciutta e dorata mista di mare.', en: 'Crispy, dry, and golden mixed seafood fry.', fr: 'Friture mixte de la mer croustillante, sèche et dorée.' },
    category: 'mare',
    price: '26 €',
  },
  {
    id: 'mar-5',
    name: { it: 'Brandacujun', en: 'Brandacujun', fr: 'Brandacujun' },
    description: { it: 'Piatto forte del Ponente: stoccafisso mantecato con patate, aglio, olive e prezzemolo.', en: 'Western Liguria powerhouse: salt cod creamed with potatoes, garlic, olives, and parsley.', fr: 'Spécialité de l\'Ouest ligure : stockfish monté avec pommes de terre, ail, olives et persil.' },
    category: 'mare',
    price: '20 €',
    tags: { it: ['Tradizione Ligure'], en: ['Ligurian Tradition'], fr: ['Tradition Ligure'] },
  },
  {
    id: 'mar-6',
    name: { it: 'Orata alla Ligure', en: 'Ligurian-style Sea Bream', fr: 'Daurade à la Ligure' },
    description: { it: 'Filetto d\'orata cotto al forno con patate, olive taggiasche e pinoli.', en: 'Oven-baked sea bream fillet with potatoes, Taggiasca olives, and pine nuts.', fr: 'Filet de daurade cuit au four avec pommes de terre, olives Taggiasche et pignons de pin.' },
    category: 'mare',
    price: '28 €',
  },
  {
    id: 'mar-7',
    name: { it: 'Sautè di Cozze', en: 'Mussel Sauté', fr: 'Sauté de Moules' },
    description: { it: 'Cozze saltate in padella con aglio, prezzemolo, vino bianco e pomodoro.', en: 'Pan-sautéed mussels with garlic, parsley, white wine, and tomato.', fr: 'Moules sautées à la poêle avec ail, persil, vin blanc et tomate.' },
    category: 'mare',
    price: '18 €',
  },

  // ==========================================
  // SECONDI DI TERRA
  // ==========================================
  {
    id: 'sec-1',
    name: { it: 'Anatra all\'arancia', en: 'Duck à l\'Orange', fr: 'Canard à l\'Orange' },
    description: { it: 'Grande classico francese: petto d\'anatra servito con salsa agrodolce all\'arancia.', en: 'Great French classic: duck breast served with sweet and sour orange sauce.', fr: 'Grand classique français : magret de canard servi avec une sauce aigre-douce à l\'orange.' },
    category: 'secondi',
    price: '28 €',
    tags: { it: ['Classico Francese'], en: ['French Classic'], fr: ['Classique Français'] },
  },
  {
    id: 'sec-2',
    name: { it: 'Filetto al pepe Verde', en: 'Green Peppercorn Filet', fr: 'Filet au Poivre Vert' },
    description: { it: 'Tenero filetto di manzo servito con la classica crema al pepe verde in grani.', en: 'Tender beef tenderloin served with classic green peppercorn cream sauce.', fr: 'Tendre filet de bœuf servi avec la crème classique au poivre vert en grains.' },
    category: 'secondi',
    price: '30 €',
  },
  {
    id: 'sec-3',
    name: { it: 'Escargots de Bourgogne', en: 'Escargots de Bourgogne', fr: 'Escargots de Bourgogne' },
    description: { it: 'Lumache alla borgognona gratinate nel guscio con burro, aglio e prezzemolo.', en: 'Burgundy snails gratinated in the shell with butter, garlic, and parsley.', fr: 'Escargots de Bourgogne gratinés en coquille avec beurre, ail et persil.' },
    category: 'secondi',
    price: '22 €',
    tags: { it: ['Classico Francese'], en: ['French Classic'], fr: ['Classique Français'] },
  },
  {
    id: 'sec-4',
    name: { it: 'Tajin di Pollo con le Sue Spezie', en: 'Chicken Tagine with Spices', fr: 'Tajine de Poulet aux Épices' },
    description: { it: 'Pollo stufato lentamente con aromi orientali, servito nel tradizionale tegame.', en: 'Chicken slowly stewed with oriental aromas, served in the traditional tagine.', fr: 'Poulet mijoté lentement aux arômes orientaux, servi dans le plat traditionnel.' },
    category: 'secondi',
    price: '26 €',
  },
  {
    id: 'sec-5',
    name: { it: 'Tartare di Fassona con Spiedino di Zucchine', en: 'Fassona Tartare with Zucchini Skewer', fr: 'Tartare de Fassona et Brochette de Courgettes' },
    description: { it: 'Carne cruda di altissima qualità, tagliata a mano, accompagnata da verdure.', en: 'Highest quality raw meat, hand-cut, accompanied by vegetables.', fr: 'Viande crue de très haute qualité, coupée à la main, accompagnée de légumes.' },
    category: 'secondi',
    price: '26 €',
  },
  {
    id: 'sec-6',
    name: { it: 'Lumache alla ligure', en: 'Ligurian-style Snails', fr: 'Escargots à la Ligure' },
    description: { it: 'Lumache stufate secondo la tradizione con erbe aromatiche e pomodoro.', en: 'Snails traditionally stewed with aromatic herbs and tomato.', fr: 'Escargots mijotés selon la tradition avec herbes aromatiques et tomate.' },
    category: 'secondi',
    price: '28 €',
    tags: { it: ['Tradizione Ligure'], en: ['Ligurian Tradition'], fr: ['Tradition Ligure'] },
  },

  // ==========================================
  // DOLCI
  // ==========================================
  {
    id: 'dol-1',
    name: { it: 'Tiramisù della Casa', en: 'House Tiramisù', fr: 'Tiramisù de la Maison' },
    description: { it: 'Il nostro classico tiramisù artigianale, preparato con savoiardi inzuppati nel caffè espresso e una soffice e golosa crema al mascarpone.', en: 'Our classic homemade tiramisù, prepared with ladyfingers dipped in espresso and a soft, delicious mascarpone cream.', fr: 'Notre tiramisù artisanal classique, préparé avec des biscuits imbibés d\'espresso et une crème mascarpone onctueuse.' },
    category: 'dolci',
    price: '8 €',
    tags: { it: ['Fatto in casa'], en: ['Homemade'], fr: ['Fait maison'] },
  },
  {
    id: 'dol-2',
    name: { it: 'Torta di Sandra', en: 'Sandra\'s Cake', fr: 'Gâteau de Sandra' },
    description: { it: 'Un dolce omaggio alla nostra storica cuoca: una deliziosa e avvolgente torta di crema cotta, dalla consistenza morbida e dal sapore genuino di una volta.', en: 'A delicious tribute to our historic cook: a soft baked custard cake with the genuine flavor of the old days.', fr: 'Un délicieux hommage à notre cuisinière historique : un gâteau de crème cuite moelleux au goût authentique d\'autrefois.' },
    category: 'dolci',
    price: '10 €',
    tags: { it: ['Fatto in casa'], en: ['Homemade'], fr: ['Fait maison'] },
  },
  {
    id: 'dol-3',
    name: { it: 'Panna Cotta alla Vaniglia', en: 'Vanilla Panna Cotta', fr: 'Panna Cotta à la Vanille' },
    description: { it: 'Panna cotta con bacche di vaniglia del Madagascar, coulis di frutti di bosco freschi.', en: 'Panna cotta with Madagascar vanilla beans, fresh wild berry coulis.', fr: 'Panna cotta aux gousses de vanille de Madagascar, coulis de fruits des bois frais.' },
    category: 'dolci',
    price: '9 €',
    tags: { it: ['Classico'], en: ['Classic'], fr: ['Classique'] },
  },
  {
    id: 'dol-4',
    name: { it: 'Tarte Tatin', en: 'Tarte Tatin', fr: 'Tarte Tatin' },
    description: { it: 'Tarte tatin di mele renette, caramello scuro, gelato alla vaniglia fatto in casa.', en: 'Renette apple tarte tatin, dark caramel, homemade vanilla ice cream.', fr: 'Tarte tatin aux pommes reinettes, caramel sombre, glace à la vanille maison.' },
    category: 'dolci',
    price: '10 €',
    tags: { it: ['Classico francese'], en: ['French Classic'], fr: ['Classique français'] },
  },
  {
    id: 'dol-5',
    name: { it: 'Sorbetto del Giorno', en: 'Sorbet of the Day', fr: 'Sorbet du Jour' },
    description: { it: 'Sorbetto alla frutta di stagione. Chiedi al cameriere la proposta del giorno.', en: 'Seasonal fruit sorbet. Ask the waiter for today\'s proposal.', fr: 'Sorbet aux fruits de saison. Demandez au serveur la proposition du jour.' },
    category: 'dolci',
    price: '8 €',
    tags: { it: ['Stagionale', 'Vegano'], en: ['Seasonal', 'Vegan'], fr: ['De saison', 'Végétalien'] },
  },
];
