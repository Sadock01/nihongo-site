export interface CommuneData {
    id: string;
    name: string;
    specialites: string[];
    hotels: string[];
    lieuxHistoriques: string[];
    histoire: string;
    mets: string[];
    traditions: string[];
    habillement: string;
  }
  
  export interface DepartmentData {
    id: string;
    name: string;
    chefLieu: string;
    path: string; // SVG polygon points
    labelPos: { x: number; y: number };
    communes: CommuneData[];
  }
  
  export const departments: DepartmentData[] = [
    {
      id: 'alibori',
      name: 'Alibori',
      chefLieu: 'Kandi',
      path: 'M140,20 L240,40 L260,110 L250,150 L180,160 L130,135 L125,70 Z',
      labelPos: { x: 190, y: 90 },
      communes: [
        {
          id: 'banikoara', name: 'Banikoara',
          specialites: ['Plus grand producteur de coton du Bénin', 'Agriculture céréalière'],
          hotels: ['Hôtel Le Cotonnier', 'Auberge de Banikoara'],
          lieuxHistoriques: ['Palais royal de Banikoara', 'Mosquée ancienne'],
          histoire: 'Banikoara est la capitale du coton au Bénin. Cette commune bariba est un centre agricole majeur, produisant plus de 40% du coton national. Son histoire est liée au royaume bariba de Nikki.',
          mets: ['Igname pilée (telibo)', 'Tchatchanga (brochettes)', 'Koko (bouillie de maïs)'],
          traditions: ['Gaani (fête traditionnelle bariba)', 'Danse Tèkè'],
          habillement: 'Boubou ample en coton tissé localement, bonnets traditionnels bariba pour les hommes.'
        },
        {
          id: 'gogounou', name: 'Gogounou',
          specialites: ['Élevage bovin', 'Réserve de faune'],
          hotels: ['Campement de Gogounou'],
          lieuxHistoriques: ['Forêt classée de Gogounou'],
          histoire: 'Gogounou est un carrefour pastoral important dans le nord du Bénin, réputé pour son élevage bovin et sa biodiversité.',
          mets: ['Waragashi (fromage peul)', 'Lait caillé', 'Foura (boules de mil)'],
          traditions: ['Fête du Gaani', 'Transhumance peulh'],
          habillement: 'Tenues peulh colorées, chapeaux coniques en paille tressée.'
        },
        {
          id: 'kandi', name: 'Kandi',
          specialites: ['Chef-lieu du département', 'Commerce transfrontalier'],
          hotels: ['Hôtel Le Sahel', 'Hôtel de Kandi'],
          lieuxHistoriques: ['Grande Mosquée de Kandi', 'Marché central'],
          histoire: 'Chef-lieu de l\'Alibori, Kandi est une ville commerçante stratégique proche de la frontière nigériane. Elle est un important centre d\'échanges commerciaux.',
          mets: ['Riz au gras', 'Kilichi (viande séchée)', 'Dambou (couscous de manioc)'],
          traditions: ['Gaani', 'Courses hippiques traditionnelles'],
          habillement: 'Grand boubou brodé, turban pour les hommes, wax coloré pour les femmes.'
        },
        {
          id: 'karimama', name: 'Karimama',
          specialites: ['Parc W (patrimoine UNESCO)', 'Fleuve Niger'],
          hotels: ['Campement du Parc W', 'Relais de Karimama'],
          lieuxHistoriques: ['Parc National du W', 'Berges du Niger'],
          histoire: 'Karimama est la commune la plus septentrionale du Bénin, bordée par le fleuve Niger. Elle abrite la partie béninoise du Parc W, classé patrimoine mondial de l\'UNESCO.',
          mets: ['Poisson braisé du Niger', 'To (pâte de mil)', 'Soupe de gombo'],
          traditions: ['Pêche traditionnelle sur le Niger', 'Fête de la moisson'],
          habillement: 'Boubou en basin riche, turbans pour les anciens.'
        },
        {
          id: 'malanville', name: 'Malanville',
          specialites: ['Ville frontalière', 'Grand marché international'],
          hotels: ['Hôtel Bénin-Niger', 'Auberge du Pont'],
          lieuxHistoriques: ['Pont sur le Niger', 'Marché international de Malanville'],
          histoire: 'Ville frontalière avec le Niger, Malanville est un hub commercial international majeur. Son marché attire des commerçants de toute l\'Afrique de l\'Ouest.',
          mets: ['Riz jollof', 'Brochettes de bœuf', 'Dégué (yaourt au mil)'],
          traditions: ['Commerce transfrontalier ancestral', 'Fêtes musulmanes'],
          habillement: 'Tenues sahéliennes, bazin brodé, voiles pour les femmes.'
        },
        {
          id: 'segbana', name: 'Ségbana',
          specialites: ['Agriculture', 'Forêts classées'],
          hotels: ['Auberge de Ségbana'],
          lieuxHistoriques: ['Forêt classée de Ségbana'],
          histoire: 'Ségbana est une commune rurale de l\'extrême nord-est, caractérisée par ses vastes espaces agricoles et ses forêts.',
          mets: ['Igname bouillie', 'Sauce d\'arachide', 'Akassa'],
          traditions: ['Rituels agraires', 'Danses masquées'],
          habillement: 'Tenues traditionnelles bariba en coton.'
        },
      ],
    },
    {
      id: 'atacora',
      name: 'Atacora',
      chefLieu: 'Natitingou',
      path: 'M40,70 L125,70 L130,135 L120,190 L80,210 L30,185 Z',
    labelPos: { x: 75, y: 130 },
      communes: [
        {
          id: 'boukoumbe', name: 'Boukoumbé',
          specialites: ['Tata Somba (habitat fortifié UNESCO)', 'Paysages montagneux'],
          hotels: ['Tata Somba Lodge', 'Auberge de l\'Atacora'],
          lieuxHistoriques: ['Tata Somba (habitations fortifiées)', 'Monts de l\'Atacora'],
          histoire: 'Boukoumbé est célèbre pour ses Tata Somba, habitations fortifiées en terre uniques au monde, classées au patrimoine mondial de l\'UNESCO. Ces constructions à étages témoignent du génie architectural des Betammaribè.',
          mets: ['Tchoucoutou (bière de sorgho)', 'Pâte d\'igname', 'Sauce de feuilles de baobab'],
          traditions: ['Difoni (fête de l\'initiation)', 'Architecture Tata Somba', 'Scarifications rituelles'],
          habillement: 'Les Betammaribè portent traditionnellement peu de vêtements, utilisant des cache-sexes en peau et des parures de cauris et perles.'
        },
        {
          id: 'cobly', name: 'Cobly',
          specialites: ['Agriculture montagnarde', 'Artisanat'],
          hotels: ['Auberge de Cobly'],
          lieuxHistoriques: ['Grottes de Cobly'],
          histoire: 'Cobly est une commune de l\'Atacora connue pour ses paysages montagneux et ses communautés rurales préservées.',
          mets: ['Pâte de sorgho', 'Sauce de feuilles', 'Bière locale'],
          traditions: ['Danses traditionnelles', 'Fêtes agraires'],
          habillement: 'Pagnes traditionnels, parures en perles.'
        },
        {
          id: 'kerou', name: 'Kérou',
          specialites: ['Faune sauvage', 'Zone de chasse'],
          hotels: ['Campement de Kérou'],
          lieuxHistoriques: ['Zone cynégétique de Kérou'],
          histoire: 'Kérou est une commune de transition entre la savane et les montagnes, connue pour sa faune sauvage.',
          mets: ['Gibier braisé', 'Igname pilée', 'Sauce d\'oseille'],
          traditions: ['Chasse traditionnelle', 'Rituels de passage'],
          habillement: 'Tenues de chasseur traditionnelles, amulettes protectrices.'
        },
        {
          id: 'kouande', name: 'Kouandé',
          specialites: ['Agriculture', 'Artisanat du fer'],
          hotels: ['Hôtel de Kouandé'],
          lieuxHistoriques: ['Forges traditionnelles'],
          histoire: 'Kouandé est historiquement connue pour ses forgerons traditionnels qui travaillent le fer selon des techniques ancestrales.',
          mets: ['Tchoukoutou', 'Igname frite', 'Wagassi grillé'],
          traditions: ['Forge traditionnelle', 'Danses rituelles'],
          habillement: 'Boubous en tissu local, tabliers de forgeron traditionnels.'
        },
        {
          id: 'materi', name: 'Matéri',
          specialites: ['Porte d\'entrée de la Pendjari', 'Cascades'],
          hotels: ['Hôtel de la Pendjari', 'Lodge de Matéri'],
          lieuxHistoriques: ['Cascades de Tanougou', 'Entrée du Parc de la Pendjari'],
          histoire: 'Matéri est la porte d\'entrée du célèbre Parc National de la Pendjari. Les cascades de Tanougou sont une merveille naturelle de la région.',
          mets: ['Poisson de rivière grillé', 'Pâte de mil', 'Sauce de karité'],
          traditions: ['Gardiennage de la nature', 'Rituels liés à la rivière Pendjari'],
          habillement: 'Tenues légères en coton, chapeaux de paille pour les cultivateurs.'
        },
        {
          id: 'natitingou', name: 'Natitingou',
          specialites: ['Chef-lieu de l\'Atacora', 'Musée régional', 'Tourisme culturel'],
          hotels: ['Hôtel Tata Somba', 'Hôtel Kaba', 'Auberge de Nati'],
          lieuxHistoriques: ['Musée départemental de Natitingou', 'Chutes de Kota'],
          histoire: 'Chef-lieu du département de l\'Atacora, Natitingou est la porte d\'entrée du pays Somba et du Parc de la Pendjari. Son musée retrace l\'histoire des peuples de l\'Atacora.',
          mets: ['Igname pilée au fromage peul', 'Tchoucoutou', 'Riz sauce arachide'],
          traditions: ['Difoni', 'Festival des arts de Nati', 'Lutte traditionnelle'],
          habillement: 'Mélange de tenues modernes et traditionnelles Betammaribè, avec parures en cauris.'
        },
        {
          id: 'pehunco', name: 'Péhunco',
          specialites: ['Coton', 'Élevage'],
          hotels: ['Auberge de Péhunco'],
          lieuxHistoriques: ['Mosquée ancienne de Péhunco'],
          histoire: 'Péhunco est une commune agricole importante dans le nord-ouest du Bénin.',
          mets: ['Foura', 'Waragashi', 'Riz au gras'],
          traditions: ['Fêtes musulmanes', 'Transhumance'],
          habillement: 'Boubous amples, bonnets brodés.'
        },
        {
          id: 'tanguieta', name: 'Tanguiéta',
          specialites: ['Parc National de la Pendjari', 'Safari'],
          hotels: ['Pendjari Lodge', 'Hôtel Atacora'],
          lieuxHistoriques: ['Parc National de la Pendjari', 'Mare aux hippopotames'],
          histoire: 'Tanguiéta est le principal point d\'accès au Parc National de la Pendjari, l\'un des derniers refuges des grands mammifères d\'Afrique de l\'Ouest : éléphants, lions, buffles.',
          mets: ['Gibier braisé', 'Pâte de sorgho', 'Fruits sauvages'],
          traditions: ['Cohabitation homme-nature', 'Gardiens du parc'],
          habillement: 'Tenues de brousse, habits en coton léger.'
        },
        {
          id: 'toucountouna', name: 'Toucountouna',
          specialites: ['Agriculture de montagne', 'Culture Waama'],
          hotels: ['Campement villageois'],
          lieuxHistoriques: ['Villages perchés Waama'],
          histoire: 'Toucountouna abrite les communautés Waama, peuple de montagne aux traditions anciennes préservées.',
          mets: ['Pâte d\'igname', 'Sauce de néré', 'Bière de sorgho'],
          traditions: ['Initiations Waama', 'Architecture en terre'],
          habillement: 'Tenues Waama traditionnelles, parures en fer forgé.'
        },
      ],
    },
    {
      id: 'borgou',
      name: 'Borgou',
      chefLieu: 'Parakou',
      path: 'M130,135 L180,160 L250,150 L260,250 L240,320 L160,335 L120,290 L120,190 Z',
      labelPos: { x: 190, y: 240 },
      communes: [
        {
          id: 'bembe', name: 'Bembèrèkè',
          specialites: ['Agriculture', 'Traditions bariba'],
          hotels: ['Auberge de Bembèrèkè'],
          lieuxHistoriques: ['Palais du chef traditionnel'],
          histoire: 'Bembèrèkè est une commune bariba riche en traditions orales et en histoire royale.',
          mets: ['Igname pilée', 'Sauce de gombo', 'Tchatchanga'],
          traditions: ['Gaani', 'Récits épiques bariba'],
          habillement: 'Grand boubou bariba, bonnet traditionnel.'
        },
        {
          id: 'kalale', name: 'Kalalé',
          specialites: ['Élevage peulh', 'Fromage wagassi'],
          hotels: ['Campement pastoral'],
          lieuxHistoriques: ['Campements peulh traditionnels'],
          histoire: 'Kalalé est le cœur de la culture peulh au Bénin, centre de l\'élevage nomade et de la production de fromage wagassi.',
          mets: ['Waragashi grillé', 'Lait frais', 'Foura au lait'],
          traditions: ['Transhumance', 'Fête du lait', 'Pulaaku (code peulh)'],
          habillement: 'Tenues peulh colorées, grands chapeaux coniques ornés.'
        },
        {
          id: 'ndali', name: 'N\'Dali',
          specialites: ['Agriculture vivrière', 'Commerce'],
          hotels: ['Auberge de N\'Dali'],
          lieuxHistoriques: ['Marché de N\'Dali'],
          histoire: 'N\'Dali est une commune agricole dynamique entre Parakou et le nord.',
          mets: ['Riz au gras', 'Igname pilée', 'Sauce d\'arachide'],
          traditions: ['Gaani', 'Lutte traditionnelle'],
          habillement: 'Boubou ample, tenues en wax.'
        },
        {
          id: 'nikki', name: 'Nikki',
          specialites: ['Ancienne capitale du royaume bariba', 'Gaani'],
          hotels: ['Hôtel du Wasangari', 'Auberge Royale de Nikki'],
          lieuxHistoriques: ['Palais royal de Nikki', 'Place du Gaani'],
          histoire: 'Nikki est l\'ancienne capitale du puissant royaume bariba. Le Gaani, grande fête royale annuelle, commémore la victoire des guerriers Wasangari et attire des milliers de visiteurs.',
          mets: ['Igname pilée sauce baobab', 'Tchatchanga', 'Koko'],
          traditions: ['Gaani (plus grande fête du nord)', 'Cavalcades royales', 'Intronisation des rois'],
          habillement: 'Grand boubou brodé des Wasangari, bonnets royaux, bijoux en argent.'
        },
        {
          id: 'parakou', name: 'Parakou',
          specialites: ['3e ville du Bénin', 'Carrefour commercial du nord', 'Université'],
          hotels: ['Hôtel Les Canaris', 'Hôtel Central', 'Hôtel Worou Kpèra'],
          lieuxHistoriques: ['Gare ferroviaire historique', 'Grand Marché Arzèkè'],
          histoire: 'Parakou, troisième ville du Bénin et chef-lieu du Borgou, est le carrefour économique du nord. La ville doit son essor au chemin de fer colonial et au commerce régional.',
          mets: ['Riz au gras de Parakou', 'Tchatchanga', 'Dambou', 'Kilichi'],
          traditions: ['Gaani de Parakou', 'Festival culturel', 'Commerce caravanier'],
          habillement: 'Ville cosmopolite : boubous, bazin, wax, tenues modernes.'
        },
        {
          id: 'perere', name: 'Pèrèrè',
          specialites: ['Agriculture', 'Pêche fluviale'],
          hotels: ['Auberge de Pèrèrè'],
          lieuxHistoriques: ['Rives de l\'Okpara'],
          histoire: 'Pèrèrè est une commune rurale bordée par la rivière Okpara, connue pour sa pêche fluviale.',
          mets: ['Poisson fumé', 'Pâte d\'igname', 'Sauce de poisson'],
          traditions: ['Pêche traditionnelle', 'Gaani'],
          habillement: 'Tenues légères de pêcheurs, boubous simples.'
        },
        {
          id: 'sinende', name: 'Sinendé',
          specialites: ['Karité', 'Agriculture'],
          hotels: ['Auberge villageoise'],
          lieuxHistoriques: ['Forêt de karité'],
          histoire: 'Sinendé est réputée pour ses forêts de karité et la production de beurre de karité artisanal.',
          mets: ['Plats cuisinés au beurre de karité', 'Igname', 'Bouillie de mil'],
          traditions: ['Récolte collective du karité', 'Transformation artisanale'],
          habillement: 'Tenues bariba traditionnelles.'
        },
        {
          id: 'tchaourou', name: 'Tchaourou',
          specialites: ['Plus grande commune du Bénin', 'Agriculture', 'Forêts'],
          hotels: ['Auberge de Tchaourou'],
          lieuxHistoriques: ['Forêt classée de l\'Ouémé supérieur'],
          histoire: 'Tchaourou est la plus grande commune du Bénin en superficie. Elle abrite d\'importantes forêts classées et des zones agricoles vastes.',
          mets: ['Igname pilée', 'Riz local', 'Sauce de gombo'],
          traditions: ['Agriculture communautaire', 'Rituels forestiers'],
          habillement: 'Tenues simples en coton, boubous pour les cérémonies.'
        },
      ],
    },
    {
      id: 'donga',
      name: 'Donga',
      chefLieu: 'Djougou',
      path: 'M80,210 L120,190 L120,290 L100,340 L40,330 L35,270 Z',
      labelPos: { x: 75, y: 270 },
      communes: [
        {
          id: 'bassila', name: 'Bassila',
          specialites: ['Forêts denses', 'Apiculture', 'Miel'],
          hotels: ['Auberge Forestière de Bassila'],
          lieuxHistoriques: ['Forêts sacrées', 'Mont Sokbaro'],
          histoire: 'Bassila est entourée de forêts denses et est le centre de l\'apiculture au Bénin. Le miel de Bassila est réputé dans tout le pays.',
          mets: ['Miel de Bassila', 'Gibier', 'Igname au miel'],
          traditions: ['Apiculture traditionnelle', 'Rituels forestiers', 'Fête du miel'],
          habillement: 'Tenues en coton, combinaisons d\'apiculteur traditionnelles.'
        },
        {
          id: 'copargo', name: 'Copargo',
          specialites: ['Agriculture vivrière', 'Traditions Yom'],
          hotels: ['Auberge de Copargo'],
          lieuxHistoriques: ['Sites sacrés Yom'],
          histoire: 'Copargo est le cœur du pays Yom, peuple aux riches traditions culturelles.',
          mets: ['Pâte de sorgho', 'Sauce de néré', 'Bière de mil'],
          traditions: ['Fête du couteau (Korou)', 'Danses Yom'],
          habillement: 'Tenues Yom avec pagnes tissés et perles.'
        },
        {
          id: 'djougou', name: 'Djougou',
          specialites: ['Carrefour culturel', 'Artisanat du tissu', 'Commerce'],
          hotels: ['Hôtel Promasidor', 'Hôtel Le Donga'],
          lieuxHistoriques: ['Palais du roi de Djougou', 'Grande Mosquée'],
          histoire: 'Djougou est un important carrefour commercial et culturel du nord-ouest. Ville cosmopolite où cohabitent Dendi, Yom, Lokpa et Bariba.',
          mets: ['Wagassi au piment', 'Riz sauce tomate', 'Farofa'],
          traditions: ['Fête du Gaani', 'Korou (fête du couteau)', 'Artisanat textile'],
          habillement: 'Boubous richement brodés, turbans, tenues en bazin.'
        },
        {
          id: 'ouake', name: 'Ouaké',
          specialites: ['Culture Lokpa', 'Agriculture montagnarde'],
          hotels: ['Campement de Ouaké'],
          lieuxHistoriques: ['Sites sacrés Lokpa', 'Grottes historiques'],
          histoire: 'Ouaké est le fief des Lokpa, peuple de montagne aux traditions initiatiques riches.',
          mets: ['Pâte de sorgho', 'Sauce feuilles', 'Tchoukoutou'],
          traditions: ['Kamou (initiation Lokpa)', 'Lutte traditionnelle'],
          habillement: 'Pagnes tissés, parures traditionnelles Lokpa en cauris.'
        },
      ],
    },
    {
      id: 'collines',
      name: 'Collines',
      chefLieu: 'Dassa-Zoumè',
      path: 'M38,335 L98,345 128,295 178,335 198,375 178,435 98,445 58,415',
      labelPos: { x: 120, y: 385 },
      communes: [
        {
          id: 'bante', name: 'Bantè',
          specialites: ['Anacarde (noix de cajou)', 'Agriculture'],
          hotels: ['Auberge de Bantè'],
          lieuxHistoriques: ['Collines sacrées'],
          histoire: 'Bantè est un important centre de production de noix de cajou dans le centre du Bénin.',
          mets: ['Noix de cajou grillées', 'Igname pilée', 'Sauce arachide'],
          traditions: ['Fête de la récolte', 'Danses Idatcha'],
          habillement: 'Pagnes colorés, tenues festives en wax.'
        },
        {
          id: 'dassa', name: 'Dassa-Zoumè',
          specialites: ['Ville aux 41 collines', 'Pèlerinage marial', 'Grottes sacrées'],
          hotels: ['Hôtel de Dassa', 'Auberge Notre-Dame'],
          lieuxHistoriques: ['Grotte de Notre-Dame d\'Arigbo', 'Les 41 collines', 'Palais royal'],
          histoire: 'Dassa-Zoumè, la "ville aux 41 collines", est un haut lieu spirituel. La Grotte de Notre-Dame d\'Arigbo attire des milliers de pèlerins chaque année. Chef-lieu des Collines.',
          mets: ['Amiwo (pâte de maïs rouge)', 'Akassa', 'Sauce tomate au crabe'],
          traditions: ['Pèlerinage marial d\'Arigbo (15 août)', 'Fête des Idatcha', 'Rituels des collines sacrées'],
          habillement: 'Pagnes Idatcha aux motifs traditionnels, tenues de cérémonie blanches pour le pèlerinage.'
        },
        {
          id: 'glazoue', name: 'Glazoué',
          specialites: ['Nœud ferroviaire', 'Agriculture'],
          hotels: ['Auberge de Glazoué'],
          lieuxHistoriques: ['Gare de Glazoué'],
          histoire: 'Glazoué est un important nœud ferroviaire sur la ligne Cotonou-Parakou.',
          mets: ['Atassi (riz aux haricots)', 'Gari foto', 'Akassa'],
          traditions: ['Fête des récoltes', 'Danses traditionnelles'],
          habillement: 'Pagnes locaux, tenues en wax.'
        },
        {
          id: 'ouesse', name: 'Ouèssè',
          specialites: ['Agriculture', 'Forêts classées'],
          hotels: ['Auberge villageoise'],
          lieuxHistoriques: ['Forêt classée de Ouèssè'],
          histoire: 'Ouèssè est une vaste commune agricole aux forêts classées importantes.',
          mets: ['Igname bouillie', 'Sauce de gombo', 'Gari'],
          traditions: ['Rituels agraires', 'Fêtes communautaires'],
          habillement: 'Tenues simples en coton et wax.'
        },
        {
          id: 'savalou', name: 'Savalou',
          specialites: ['Collines et grottes', 'Royauté Mahi', 'Artisanat'],
          hotels: ['Hôtel Chez Théo', 'Auberge des Collines'],
          lieuxHistoriques: ['Palais royal de Savalou', 'Colline Gbèdiga', 'Grotte de Dassa'],
          histoire: 'Savalou est une cité royale Mahi avec un riche patrimoine historique. Ses collines et grottes abritent des lieux sacrés séculaires.',
          mets: ['Amiwo', 'Sauce Mahi aux crabes', 'Akpan (boisson fermentée)'],
          traditions: ['Fête des divinités Mahi', 'Rituels des collines', 'Artisanat du bronze'],
          habillement: 'Pagnes Mahi, tenues royales pour les cérémonies.'
        },
        {
          id: 'save', name: 'Savè',
          specialites: ['Culture Shabè', 'Collines', 'Patrimoine yoruba'],
          hotels: ['Hôtel de Savè'],
          lieuxHistoriques: ['Palais du Onisavè', 'Collines sacrées Shabè'],
          histoire: 'Savè est le cœur du pays Shabè (Yoruba du Bénin). Le roi Onisavè perpétue une tradition monarchique ancienne.',
          mets: ['Amala (pâte d\'igname)', 'Ewedu (sauce de jute)', 'Gbégiri'],
          traditions: ['Fête de l\'Oro', 'Mascarades Shabè', 'Royauté Onisavè'],
          habillement: 'Tenues yoruba : aso oke tissé, agbada brodé, gèlè (foulard) pour les femmes.'
        },
      ],
    },
    {
      id: 'zou',
      name: 'Zou',
      chefLieu: 'Abomey',
      path: 'M58,415 L98,445 178,435 168,515 98,525 48,505',
      labelPos: { x: 115, y: 475 },
      communes: [
        {
          id: 'abomey', name: 'Abomey',
          specialites: ['Palais Royaux UNESCO', 'Capitale historique du Dahomey', 'Artisanat'],
          hotels: ['Hôtel Sun Beach Abomey', 'Auberge d\'Abomey', 'Hôtel Dako'],
          lieuxHistoriques: ['Palais Royaux d\'Abomey (UNESCO)', 'Temple du python', 'Musée historique d\'Abomey'],
          histoire: 'Abomey est l\'ancienne capitale du puissant royaume du Dahomey (1600-1894). Ses palais royaux, classés au patrimoine mondial de l\'UNESCO, abritent les trônes, bas-reliefs et objets des 12 rois qui s\'y sont succédé. Le royaume était connu pour ses Amazones, guerrières d\'élite.',
          mets: ['Amiwo au poulet', 'Sauce dja (crabe)', 'Akassa au poisson', 'Gboman dessi'],
          traditions: ['Fête des Vodoun', 'Cérémonie royale annuelle', 'Artisanat des appliqués', 'Bas-reliefs narratifs'],
          habillement: 'Pagnes royaux aux motifs symboliques du Dahomey, tissus appliqués représentant les emblèmes des rois, coiffes traditionnelles Fon.'
        },
        {
          id: 'agbangnizoun', name: 'Agbangnizoun',
          specialites: ['Artisanat', 'Tissage'],
          hotels: ['Auberge locale'],
          lieuxHistoriques: ['Sites liés au royaume du Dahomey'],
          histoire: 'Agbangnizoun est liée à l\'histoire du royaume du Dahomey, dont plusieurs familles royales en sont originaires.',
          mets: ['Amiwo', 'Sauce de crabe', 'Akassa'],
          traditions: ['Fêtes vodoun', 'Tissage traditionnel'],
          habillement: 'Pagnes Fon aux couleurs vives.'
        },
        {
          id: 'bohicon', name: 'Bohicon',
          specialites: ['Carrefour commercial', 'Ville jumelle d\'Abomey'],
          hotels: ['Hôtel Dako', 'Hôtel Le Guézo'],
          lieuxHistoriques: ['Gare de Bohicon', 'Grand marché Bohicon'],
          histoire: 'Bohicon est la ville jumelle d\'Abomey et un important carrefour commercial du centre-sud. Sa gare ferroviaire en fait un hub de transport.',
          mets: ['Atassi', 'Pâte rouge au poisson', 'Tapioca'],
          traditions: ['Commerce traditionnel', 'Fêtes vodoun'],
          habillement: 'Tenues modernes et traditionnelles Fon.'
        },
        {
          id: 'cove', name: 'Covè',
          specialites: ['Agriculture', 'Palmier à huile'],
          hotels: ['Auberge de Covè'],
          lieuxHistoriques: ['Plantations historiques'],
          histoire: 'Covè est une commune agricole réputée pour ses palmeraies et la production d\'huile de palme.',
          mets: ['Amiwo', 'Sauce palmiste', 'Agonlinmi (pâte de maïs)'],
          traditions: ['Fête des récoltes', 'Vodoun'],
          habillement: 'Pagnes indigo traditionnels Fon.'
        },
        {
          id: 'djidja', name: 'Djidja',
          specialites: ['Plus grande commune du Zou', 'Agriculture'],
          hotels: ['Auberge de Djidja'],
          lieuxHistoriques: ['Villages historiques Fon'],
          histoire: 'Djidja est la plus grande commune du département du Zou, essentiellement rurale et agricole.',
          mets: ['Igname pilée', 'Sauce tomate', 'Akassa'],
          traditions: ['Vodoun', 'Agriculture communautaire'],
          habillement: 'Pagnes Fon, tenues en wax.'
        },
        {
          id: 'ouinhi', name: 'Ouinhi',
          specialites: ['Pêche', 'Marécages'],
          hotels: ['Campement de Ouinhi'],
          lieuxHistoriques: ['Zones marécageuses historiques'],
          histoire: 'Ouinhi est une commune lacustre connue pour ses activités de pêche dans les zones marécageuses.',
          mets: ['Poisson fumé', 'Akassa au poisson', 'Sauce de crabe'],
          traditions: ['Pêche communautaire', 'Rituels aquatiques'],
          habillement: 'Tenues légères de pêcheurs, pagnes simples.'
        },
        {
          id: 'zakpota', name: 'Za-Kpota',
          specialites: ['Agriculture', 'Culture Fon'],
          hotels: ['Auberge villageoise'],
          lieuxHistoriques: ['Sites vodoun'],
          histoire: 'Za-Kpota est une commune rurale Fon avec un riche patrimoine vodoun.',
          mets: ['Amiwo', 'Sauce de gombo', 'Gari foto'],
          traditions: ['Vodoun', 'Danses rituelles'],
          habillement: 'Pagnes traditionnels Fon.'
        },
        {
          id: 'zagnanado', name: 'Zagnanado',
          specialites: ['Ancien poste colonial', 'Cathédrale'],
          hotels: ['Mission catholique de Zagnanado'],
          lieuxHistoriques: ['Cathédrale de Zagnanado', 'Ancien poste colonial'],
          histoire: 'Zagnanado fut un important poste colonial et missionnaire. Sa cathédrale historique témoigne de l\'évangélisation du Dahomey.',
          mets: ['Atassi', 'Akassa', 'Sauce dja'],
          traditions: ['Fêtes religieuses', 'Traditions Fon'],
          habillement: 'Tenues de messe, pagnes traditionnels.'
        },
        {
          id: 'zogbodomey', name: 'Zogbodomey',
          specialites: ['Histoire du Dahomey', 'Agriculture'],
          hotels: ['Auberge de Zogbodomey'],
          lieuxHistoriques: ['Site historique de la résistance contre la colonisation'],
          histoire: 'Zogbodomey est historiquement liée à la résistance du roi Béhanzin contre la colonisation française en 1892-1894.',
          mets: ['Amiwo', 'Akassa', 'Sauce tomate'],
          traditions: ['Commémoration de Béhanzin', 'Vodoun'],
          habillement: 'Pagnes aux motifs du roi Béhanzin, couleurs royales.'
        },
      ],
    },
    {
      id: 'plateau',
      name: 'Plateau',
      chefLieu: 'Sakété',
      path: 'M178,435 L198,375 245,315 255,415 248,505 198,525 168,515',
      labelPos: { x: 215, y: 445 },
      communes: [
        {
          id: 'adja-ouere', name: 'Adja-Ouèrè',
          specialites: ['Agriculture', 'Palmier à huile'],
          hotels: ['Auberge d\'Adja-Ouèrè'],
          lieuxHistoriques: ['Palmeraies historiques'],
          histoire: 'Adja-Ouèrè est une commune agricole importante du Plateau, connue pour ses vastes palmeraies.',
          mets: ['Gari au poisson', 'Akassa', 'Sauce palmiste'],
          traditions: ['Fête des récoltes', 'Mascarades Nago'],
          habillement: 'Tenues Nago, pagnes colorés.'
        },
        {
          id: 'ifangni', name: 'Ifangni',
          specialites: ['Commerce transfrontalier', 'Proximité du Nigeria'],
          hotels: ['Auberge d\'Ifangni'],
          lieuxHistoriques: ['Marché frontalier'],
          histoire: 'Ifangni est une commune frontalière avec le Nigeria, animée par un commerce transfrontalier intense.',
          mets: ['Amala', 'Ewedu', 'Eba (gari)'],
          traditions: ['Commerce frontalier', 'Fêtes yoruba'],
          habillement: 'Tenues yoruba, aso oke.'
        },
        {
          id: 'ketou', name: 'Kétou',
          specialites: ['Ancienne cité yoruba', 'Masques Guèlèdè UNESCO', 'Culture Nago'],
          hotels: ['Hôtel Royal de Kétou', 'Auberge du Guèlèdè'],
          lieuxHistoriques: ['Palais de l\'Alakétou', 'Musée Guèlèdè', 'Forêt sacrée'],
          histoire: 'Kétou est l\'une des plus anciennes cités yoruba d\'Afrique. Les masques Guèlèdè, inscrits au patrimoine immatériel de l\'UNESCO, célèbrent le pouvoir des femmes et les divinités.',
          mets: ['Amala avec ewedu', 'Gbégiri', 'Ofada (riz local)'],
          traditions: ['Guèlèdè (patrimoine UNESCO)', 'Fête de l\'Oro', 'Mascarades nocturnes', 'Royauté Alakétou'],
          habillement: 'Aso oke tissé main, masques Guèlèdè sculptés, agbada richement brodé, coiffes royales.'
        },
        {
          id: 'pobe', name: 'Pobè',
          specialites: ['Station de recherche sur le palmier', 'Agriculture'],
          hotels: ['Auberge de Pobè'],
          lieuxHistoriques: ['Station de recherche NIFOR', 'Marché de Pobè'],
          histoire: 'Pobè abrite une importante station de recherche sur le palmier à huile, héritée de l\'époque coloniale.',
          mets: ['Huile de palme artisanale', 'Gari', 'Akassa'],
          traditions: ['Mascarades Nago', 'Fête de l\'igname'],
          habillement: 'Tenues Nago traditionnelles.'
        },
        {
          id: 'sakete', name: 'Sakété',
          specialites: ['Chef-lieu du Plateau', 'Commerce'],
          hotels: ['Hôtel de Sakété'],
          lieuxHistoriques: ['Marché de Sakété', 'Sites coloniaux'],
          histoire: 'Sakété est le chef-lieu du département du Plateau, centre commercial et administratif.',
          mets: ['Eba sauce egusi', 'Amala', 'Akara (beignets de haricot)'],
          traditions: ['Fêtes Nago', 'Commerce traditionnel'],
          habillement: 'Tenues Nago, wax coloré.'
        },
      ],
    },
    {
      id: 'oueme',
      name: 'Ouémé',
      chefLieu: 'Porto-Novo',
      path: 'M198,525 L248,505 255,555 238,615 188,635 168,585',
      labelPos: { x: 215, y: 570 },
      communes: [
        {
          id: 'adjarra', name: 'Adjarra',
          specialites: ['Tambours traditionnels', 'Artisanat'],
          hotels: ['Auberge d\'Adjarra'],
          lieuxHistoriques: ['Ateliers de tambours', 'Village des artisans'],
          histoire: 'Adjarra est mondialement connue pour la fabrication de tambours traditionnels de toutes tailles, art transmis de génération en génération.',
          mets: ['Akassa au crabe', 'Pâte de maïs', 'Sauce de gombo'],
          traditions: ['Fabrication de tambours', 'Musique traditionnelle', 'Danses percussives'],
          habillement: 'Pagnes Goun, tenues de musiciens traditionnels.'
        },
        {
          id: 'adjohoun', name: 'Adjohoun',
          specialites: ['Pharmacopée traditionnelle', 'Plantes médicinales'],
          hotels: ['Auberge d\'Adjohoun'],
          lieuxHistoriques: ['Jardin de plantes médicinales'],
          histoire: 'Adjohoun est le centre de la pharmacopée traditionnelle béninoise, avec un jardin unique de plantes médicinales.',
          mets: ['Tisanes médicinales', 'Akassa', 'Sauce feuilles'],
          traditions: ['Médecine traditionnelle', 'Herboristerie ancestrale'],
          habillement: 'Tenues Goun, pagnes blancs de guérisseurs.'
        },
        {
          id: 'aguegues', name: 'Aguégués',
          specialites: ['Commune lacustre', 'Pêche', 'Villages sur pilotis'],
          hotels: ['Hébergement chez l\'habitant'],
          lieuxHistoriques: ['Villages lacustres', 'Lac Nokoué'],
          histoire: 'Les Aguégués sont une commune lacustre sur le lac Nokoué, avec des villages entièrement construits sur l\'eau.',
          mets: ['Poisson frais du lac', 'Crevettes fumées', 'Akassa'],
          traditions: ['Pêche traditionnelle', 'Vie lacustre', 'Vodoun aquatique'],
          habillement: 'Tenues légères de pêcheurs, pagnes simples.'
        },
        {
          id: 'akpro', name: 'Akpro-Missérété',
          specialites: ['Agriculture périurbaine', 'Commerce'],
          hotels: ['Auberge locale'],
          lieuxHistoriques: ['Sites historiques Goun'],
          histoire: 'Akpro-Missérété est une commune périurbaine de Porto-Novo en pleine croissance.',
          mets: ['Atassi', 'Gari foto', 'Sauce tomate'],
          traditions: ['Fêtes Goun', 'Vodoun'],
          habillement: 'Tenues Goun traditionnelles et modernes.'
        },
        {
          id: 'avrankou', name: 'Avrankou',
          specialites: ['Vodoun', 'Artisanat'],
          hotels: ['Auberge d\'Avrankou'],
          lieuxHistoriques: ['Temples vodoun', 'Forêt sacrée'],
          histoire: 'Avrankou est un centre spirituel vodoun important avec plusieurs temples et forêts sacrées.',
          mets: ['Akassa', 'Sauce vodoun (spéciale cérémonies)', 'Amiwo'],
          traditions: ['Vodoun', 'Cérémonies nocturnes', 'Consultations Fâ (divination)'],
          habillement: 'Tenues blanches de cérémonie vodoun, parures de cauris.'
        },
        {
          id: 'bonou', name: 'Bonou',
          specialites: ['Agriculture', 'Pêche fluviale'],
          hotels: ['Auberge de Bonou'],
          lieuxHistoriques: ['Vallée de l\'Ouémé'],
          histoire: 'Bonou est située dans la vallée fertile de l\'Ouémé, avec une riche tradition de pêche fluviale.',
          mets: ['Poisson de rivière', 'Akassa', 'Sauce de crevettes'],
          traditions: ['Pêche au filet', 'Fêtes des eaux'],
          habillement: 'Pagnes Goun, tenues de pêcheurs.'
        },
        {
          id: 'dangbo', name: 'Dangbo',
          specialites: ['Agriculture', 'Maraîchage'],
          hotels: ['Auberge de Dangbo'],
          lieuxHistoriques: ['Sites Goun historiques'],
          histoire: 'Dangbo est une commune agricole dynamique, fournissant des produits maraîchers à Porto-Novo et Cotonou.',
          mets: ['Légumes frais', 'Sauce tomate maison', 'Akassa'],
          traditions: ['Maraîchage traditionnel', 'Vodoun'],
          habillement: 'Tenues Goun simples, pagnes colorés.'
        },
        {
          id: 'porto-novo', name: 'Porto-Novo',
          specialites: ['Capitale du Bénin', 'Architecture afro-brésilienne', 'Musées', 'Jardin des Plantes'],
          hotels: ['Hôtel Beaurivage', 'Hôtel Doyen', 'Villa Karo', 'Hôtel du Lac'],
          lieuxHistoriques: ['Musée Honmè (Palais Royal)', 'Musée da Silva', 'Grande Mosquée de Porto-Novo', 'Jardin des Plantes et de la Nature', 'Cathédrale Notre-Dame'],
          histoire: 'Porto-Novo est la capitale officielle du Bénin. Ville aux trois noms (Hogbonou, Adjatchè, Porto-Novo), elle est un joyau d\'architecture afro-brésilienne. Le Musée Honmè retrace l\'histoire du royaume de Hogbonou. La ville est le berceau du vodoun et de la culture Goun.',
          mets: ['Akassa au crabe', 'Amiwo', 'Sauce dja (crabe des lagunes)', 'Gboman dessi', 'Tapioca au lait de coco'],
          traditions: ['Fête du Nonvitcha', 'Zangbéto (gardiens de nuit vodoun)', 'Cérémonie du Fâ', 'Festival international Porto-Novo'],
          habillement: 'Pagne Goun aux motifs symboliques, boubou brodé pour les hommes, coiffures élaborées (tresses Goun), tenues afro-brésiliennes héritées des retornados.'
        },
        {
          id: 'seme-podji', name: 'Sèmè-Podji',
          specialites: ['Plage', 'Zone franche industrielle', 'Frontière Nigeria'],
          hotels: ['Hôtel de la Plage', 'Casa del Papa'],
          lieuxHistoriques: ['Plage de Sèmè', 'Zone franche'],
          histoire: 'Sèmè-Podji est une commune côtière à la frontière du Nigeria, connue pour ses plages et sa zone franche industrielle.',
          mets: ['Poisson grillé de mer', 'Crevettes', 'Gari au poisson'],
          traditions: ['Pêche maritime', 'Commerce frontalier'],
          habillement: 'Tenues balnéaires, pagnes légers.'
        },
      ],
    },
    {
      id: 'couffo',
      name: 'Couffo',
      chefLieu: 'Dogbo',
      path: 'M28,505 L48,505 98,525 88,585 58,615 28,595',
      labelPos: { x: 60, y: 555 },
      communes: [
        {
          id: 'aplahoue', name: 'Aplahoué',
          specialites: ['Palmier à huile', 'Vodoun'],
          hotels: ['Auberge d\'Aplahoué'],
          lieuxHistoriques: ['Temples vodoun', 'Palmeraies anciennes'],
          histoire: 'Aplahoué est un centre important de la culture vodoun et de la production d\'huile de palme dans le sud-ouest.',
          mets: ['Ablo (galette de maïs cuite à la vapeur)', 'Sauce palmiste', 'Akassa'],
          traditions: ['Vodoun', 'Danses Adja', 'Fête des divinités'],
          habillement: 'Pagnes Adja, tenues blanches de vodoun.'
        },
        {
          id: 'djakotomey', name: 'Djakotomey',
          specialites: ['Agriculture', 'Commerce'],
          hotels: ['Auberge de Djakotomey'],
          lieuxHistoriques: ['Marché de Djakotomey'],
          histoire: 'Djakotomey est un centre commercial actif du Couffo.',
          mets: ['Ablo', 'Sauce de crabe', 'Gari'],
          traditions: ['Danses Adja', 'Vodoun'],
          habillement: 'Pagnes traditionnels Adja.'
        },
        {
          id: 'dogbo', name: 'Dogbo',
          specialites: ['Chef-lieu du Couffo', 'Administration'],
          hotels: ['Hôtel de Dogbo', 'Auberge du Couffo'],
          lieuxHistoriques: ['Préfecture', 'Sites vodoun'],
          histoire: 'Dogbo est le chef-lieu du département du Couffo, centre administratif et culturel de la région Adja.',
          mets: ['Ablo au poisson', 'Amiwo', 'Sauce adja'],
          traditions: ['Fêtes Adja', 'Vodoun', 'Danses traditionnelles'],
          habillement: 'Pagnes Adja aux couleurs terre, coiffes traditionnelles.'
        },
        {
          id: 'klouekanme', name: 'Klouékanmè',
          specialites: ['Artisanat', 'Poterie traditionnelle'],
          hotels: ['Auberge locale'],
          lieuxHistoriques: ['Ateliers de poterie'],
          histoire: 'Klouékanmè est reconnue pour son artisanat, notamment la poterie traditionnelle.',
          mets: ['Ablo', 'Gari', 'Sauce palmiste'],
          traditions: ['Poterie', 'Vodoun', 'Danses Adja'],
          habillement: 'Pagnes Adja, tabliers de potier.'
        },
        {
          id: 'lalo', name: 'Lalo',
          specialites: ['Agriculture vivrière', 'Culture Adja'],
          hotels: ['Campement de Lalo'],
          lieuxHistoriques: ['Sites Adja anciens'],
          histoire: 'Lalo est une commune rurale Adja préservant des traditions culturelles fortes.',
          mets: ['Ablo', 'Akassa', 'Sauce de gombo'],
          traditions: ['Vodoun Adja', 'Danses nocturnes'],
          habillement: 'Pagnes Adja traditionnels.'
        },
        {
          id: 'toviklin', name: 'Toviklin',
          specialites: ['Agriculture', 'Artisanat'],
          hotels: ['Auberge villageoise'],
          lieuxHistoriques: ['Sites historiques Adja'],
          histoire: 'Toviklin est une commune rurale préservant les traditions du peuple Adja.',
          mets: ['Ablo', 'Gari foto', 'Sauce feuilles'],
          traditions: ['Vodoun', 'Artisanat Adja'],
          habillement: 'Pagnes Adja aux motifs géométriques.'
        },
      ],
    },
    {
      id: 'mono',
      name: 'Mono',
      chefLieu: 'Lokossa',
      path: 'M28,595 L58,615 78,635 68,675 18,665',
      labelPos: { x: 48, y: 640 },
      communes: [
        {
          id: 'athieme', name: 'Athiémé',
          specialites: ['Fleuve Mono', 'Pêche fluviale'],
          hotels: ['Campement d\'Athiémé'],
          lieuxHistoriques: ['Berges du Mono', 'Ancien comptoir'],
          histoire: 'Athiémé est située sur le fleuve Mono, qui marque la frontière avec le Togo. La ville a une longue tradition de pêche fluviale.',
          mets: ['Poisson du Mono', 'Akassa', 'Sauce de tilapia'],
          traditions: ['Pêche traditionnelle au Mono', 'Rituels du fleuve'],
          habillement: 'Pagnes simples, tenues de pêcheurs.'
        },
        {
          id: 'bopa', name: 'Bopa',
          specialites: ['Lac Ahémé', 'Pêche', 'Sel artisanal'],
          hotels: ['Écolodge du Lac Ahémé'],
          lieuxHistoriques: ['Lac Ahémé', 'Villages de sel'],
          histoire: 'Bopa borde le lac Ahémé, réputé pour sa pêche et la production artisanale de sel par évaporation.',
          mets: ['Poisson fumé du lac', 'Sel de Bopa', 'Akassa'],
          traditions: ['Production de sel artisanal', 'Pêche lacustre', 'Vodoun du lac'],
          habillement: 'Pagnes légers, tenues de salinières.'
        },
        {
          id: 'come', name: 'Comè',
          specialites: ['Lac Ahémé', 'Commerce'],
          hotels: ['Hôtel du Lac', 'Auberge de Comè'],
          lieuxHistoriques: ['Rives du Lac Ahémé', 'Marché de Comè'],
          histoire: 'Comè est une ville lacustre dynamique sur les rives du lac Ahémé.',
          mets: ['Poisson grillé', 'Crevettes du lac', 'Ablo'],
          traditions: ['Vodoun du lac', 'Pêche communautaire'],
          habillement: 'Pagnes colorés Xwla.'
        },
        {
          id: 'grand-popo', name: 'Grand-Popo',
          specialites: ['Station balnéaire', 'Embouchure du Mono', 'Tourisme'],
          hotels: ['Hôtel Awalé Plage', 'Auberge de Grand-Popo', 'Villa Karo'],
          lieuxHistoriques: ['Ancienne ville coloniale', 'Route des Esclaves', 'Bouche du Roy'],
          histoire: 'Grand-Popo est une ancienne ville coloniale et station balnéaire historique. La "Bouche du Roy", où le fleuve Mono rencontre l\'océan, offre un paysage spectaculaire.',
          mets: ['Poisson grillé de mer', 'Crabe farci', 'Crevettes sautées'],
          traditions: ['Nonvitcha (fête de la diaspora)', 'Vodoun maritime', 'Retour des Afro-Brésiliens'],
          habillement: 'Tenues balnéaires, pagnes Xwla, tenues afro-brésiliennes pour les cérémonies.'
        },
        {
          id: 'houeyogbe', name: 'Houéyogbé',
          specialites: ['Agriculture', 'Palmier'],
          hotels: ['Auberge locale'],
          lieuxHistoriques: ['Sites agricoles historiques'],
          histoire: 'Houéyogbé est une commune agricole entre Lokossa et la côte.',
          mets: ['Ablo', 'Sauce palmiste', 'Gari'],
          traditions: ['Vodoun', 'Agriculture traditionnelle'],
          habillement: 'Pagnes traditionnels.'
        },
        {
          id: 'lokossa', name: 'Lokossa',
          specialites: ['Chef-lieu du Mono', 'Administration', 'Commerce'],
          hotels: ['Hôtel Le Mono', 'Hôtel de Lokossa'],
          lieuxHistoriques: ['Préfecture', 'Grand marché de Lokossa'],
          histoire: 'Lokossa est le chef-lieu du département du Mono, centre administratif et commercial de la région.',
          mets: ['Ablo au poisson', 'Sauce de crabe', 'Amiwo'],
          traditions: ['Fêtes administratives', 'Vodoun', 'Commerce traditionnel'],
          habillement: 'Tenues variées, mix de styles traditionnels et modernes.'
        },
      ],
    },
    {
      id: 'atlantique',
      name: 'Atlantique',
      chefLieu: 'Ouidah',
      path: 'M88,585 L98,525 168,515 168,585 158,635 108,655 78,635',
      labelPos: { x: 125, y: 580 },
      communes: [
        {
          id: 'abomey-calavi', name: 'Abomey-Calavi',
          specialites: ['Plus grande commune du Bénin (population)', 'Université d\'Abomey-Calavi', 'Lac Nokoué'],
          hotels: ['Hôtel Bel Azur', 'Hôtel Golden Tulip', 'Bénin Royal Hôtel'],
          lieuxHistoriques: ['Université d\'Abomey-Calavi', 'Lac Nokoué', 'Ganvié (cité lacustre)'],
          histoire: 'Abomey-Calavi est la commune la plus peuplée du Bénin. Elle abrite l\'Université d\'Abomey-Calavi (la plus grande du pays) et Ganvié, la célèbre "Venise de l\'Afrique", cité entièrement construite sur pilotis sur le lac Nokoué.',
          mets: ['Poisson du lac Nokoué', 'Crevettes fumées', 'Gari au poisson', 'Sauce tomate maison'],
          traditions: ['Vie lacustre à Ganvié', 'Vodoun', 'Pêche sur le lac Nokoué'],
          habillement: 'Tenues modernes et traditionnelles, pagnes pour les cérémonies.'
        },
        {
          id: 'allada', name: 'Allada',
          specialites: ['Berceau de la civilisation Fon', 'Ananas', 'Histoire royale'],
          hotels: ['Hôtel d\'Allada', 'Auberge Royale'],
          lieuxHistoriques: ['Palais royal d\'Allada', 'Temple du Vodoun', 'Site de départ des royaumes Fon'],
          histoire: 'Allada est le berceau historique de la civilisation Fon et l\'origine des royaumes du Dahomey, d\'Abomey et de Porto-Novo. C\'est aussi la capitale de l\'ananas au Bénin.',
          mets: ['Ananas frais d\'Allada', 'Jus d\'ananas', 'Amiwo', 'Sauce vodoun'],
          traditions: ['Vodoun originel', 'Fête royale d\'Allada', 'Culture de l\'ananas'],
          habillement: 'Pagnes Fon royaux, tenues de cérémonie vodoun blanches.'
        },
        {
          id: 'kpomasse', name: 'Kpomassè',
          specialites: ['Agriculture', 'Pêche'],
          hotels: ['Auberge de Kpomassè'],
          lieuxHistoriques: ['Lac Toho'],
          histoire: 'Kpomassè est une commune rurale entre lagunes et terre ferme.',
          mets: ['Poisson fumé', 'Akassa', 'Sauce de gombo'],
          traditions: ['Pêche lacustre', 'Vodoun'],
          habillement: 'Pagnes Fon simples.'
        },
        {
          id: 'ouidah', name: 'Ouidah',
          specialites: ['Capitale spirituelle du Vodoun', 'Route des Esclaves', 'Porte du Non-Retour'],
          hotels: ['Casa del Papa', 'Hôtel Diaspora', 'Jardin Brésilien'],
          lieuxHistoriques: ['Porte du Non-Retour', 'Temple des Pythons', 'Forêt Sacrée de Kpassè', 'Route des Esclaves', 'Fort Portugais (musée)', 'Basilique de l\'Immaculée Conception'],
          histoire: 'Ouidah est la capitale spirituelle du Vodoun et un lieu de mémoire majeur de la traite négrière. La Route des Esclaves, longue de 4 km, mène à la Porte du Non-Retour sur la plage. Le Temple des Pythons abrite des dizaines de pythons royaux sacrés. Chaque 10 janvier, la Fête du Vodoun attire des milliers de fidèles du monde entier.',
          mets: ['Akassa au crabe des lagunes', 'Poisson grillé', 'Sauce dja', 'Amiwo festif'],
          traditions: ['Fête Nationale du Vodoun (10 janvier)', 'Temple des Pythons', 'Zangbéto (gardiens de nuit)', 'Cérémonie de la Porte du Non-Retour', 'Festival Ouidah'],
          habillement: 'Pagnes vodoun blancs et indigo, tenues de cérémonie avec parures de cauris, coiffures rituelles, tenues afro-brésiliennes des familles Aguda.'
        },
        {
          id: 'so-ava', name: 'Sô-Ava',
          specialites: ['Ganvié', 'Commune lacustre', 'Tourisme'],
          hotels: ['Chez M. Ganvié', 'Hôtel du Lac'],
          lieuxHistoriques: ['Ganvié - Venise de l\'Afrique', 'Marché flottant'],
          histoire: 'Sô-Ava abrite Ganvié, la plus grande cité lacustre d\'Afrique, construite au XVIIe siècle par les Tofinu pour échapper aux razzias esclavagistes du Dahomey.',
          mets: ['Poisson tilapia du lac', 'Crevettes fumées', 'Akassa sur pirogue'],
          traditions: ['Vie entière sur l\'eau', 'Marché flottant', 'Pêche à l\'acadja'],
          habillement: 'Tenues légères adaptées à la vie aquatique, pagnes colorés Tofinu.'
        },
        {
          id: 'toffo', name: 'Toffo',
          specialites: ['Agriculture', 'Ananas'],
          hotels: ['Auberge de Toffo'],
          lieuxHistoriques: ['Plantations d\'ananas'],
          histoire: 'Toffo est un centre de production d\'ananas, fruit phare de la région Atlantique.',
          mets: ['Ananas frais', 'Gari', 'Akassa'],
          traditions: ['Récolte de l\'ananas', 'Vodoun'],
          habillement: 'Pagnes Fon, tenues de travail agricole.'
        },
        {
          id: 'tori', name: 'Tori-Bossito',
          specialites: ['Agriculture périurbaine', 'Élevage'],
          hotels: ['Auberge de Tori'],
          lieuxHistoriques: ['Fermes traditionnelles'],
          histoire: 'Tori-Bossito est une commune en pleine expansion entre Cotonou et l\'intérieur.',
          mets: ['Poulet grillé', 'Igname frite', 'Sauce tomate'],
          traditions: ['Élevage traditionnel', 'Vodoun'],
          habillement: 'Tenues modernes et traditionnelles mixtes.'
        },
        {
          id: 'ze', name: 'Zè',
          specialites: ['Agriculture', 'Huile de palme'],
          hotels: ['Auberge de Zè'],
          lieuxHistoriques: ['Palmeraies traditionnelles'],
          histoire: 'Zè est une commune agricole connue pour ses palmeraies et la production traditionnelle d\'huile de palme.',
          mets: ['Sauce palmiste', 'Gari', 'Akassa'],
          traditions: ['Transformation de l\'huile de palme', 'Vodoun'],
          habillement: 'Pagnes Fon traditionnels.'
        },
      ],
    },
    {
      id: 'littoral',
      name: 'Littoral',
      chefLieu: 'Cotonou',
      path: 'M158,635 L188,635 198,665 158,675',
      labelPos: { x: 175, y: 655 },
      communes: [
        {
          id: 'cotonou', name: 'Cotonou',
          specialites: ['Capitale économique', 'Port autonome', 'Marché Dantokpa', 'Vie nocturne'],
          hotels: ['Sofitel Cotonou Marina', 'Bénin Marina Hôtel', 'Novotel Cotonou', 'Azalaï Hôtel', 'Golden Tulip Le Diplomate'],
          lieuxHistoriques: ['Marché Dantokpa (plus grand marché d\'Afrique de l\'Ouest)', 'Cathédrale Notre-Dame', 'Fondation Zinsou (art contemporain)', 'Place de l\'Étoile Rouge', 'Port de Cotonou', 'Plage de Fidjrossè'],
          histoire: 'Cotonou est la capitale économique et la plus grande ville du Bénin. Son marché Dantokpa est le plus grand marché à ciel ouvert d\'Afrique de l\'Ouest. La ville est le centre des affaires, de la culture et de la vie nocturne du pays. Le port autonome de Cotonou est vital pour l\'économie de toute la sous-région.',
          mets: ['Poisson braisé de Fidjrossè', 'Pâte rouge sauce crabe', 'Aloko (banane plantain frite)', 'Salade de papaye', 'Cocktails à la Paillotte'],
          traditions: ['Marché Dantokpa', 'Zémidjan (taxi-moto)', 'Vie nocturne de Cotonou', 'Art contemporain à la Fondation Zinsou'],
          habillement: 'Ville cosmopolite : mode africaine contemporaine, wax haute couture, tenues occidentales, stylistes locaux. Cotonou est le centre de la mode béninoise avec des créateurs comme Lolo Andoche et Gilles Touré.'
        },
      ],
    },
  ];
  
  export const getAllCommunes = (): (CommuneData & { departmentName: string; departmentId: string })[] => {
    return departments.flatMap(dept =>
      dept.communes.map(c => ({ ...c, departmentName: dept.name, departmentId: dept.id }))
    );
  };
  
  export const getDepartmentById = (id: string) => departments.find(d => d.id === id);
  export const getCommuneById = (communeId: string) => {
    for (const dept of departments) {
      const commune = dept.communes.find(c => c.id === communeId);
      if (commune) return { ...commune, departmentName: dept.name, departmentId: dept.id };
    }
    return null;
  };
  