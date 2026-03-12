export interface DepartmentInfo {
    id: string;
    name: string;
    capital: string;
    communes: string[];
    specialities: string;
    hotels: string[];
    landmarks: string[];
    gastronomy: string;
    traditions: string;
    clothing: string;
    color: string;
  }
  
  export const beninData: Record<string, DepartmentInfo> = {
    atacora: {
      id: "atacora",
      name: "Atacora",
      capital: "Natitingou",
      communes: ["Natitingou", "Boukoumbé", "Tanguiéta", "Kouandé", "Matéri", "Cobly", "Péhunco", "Kérou", "Toucountouna"],
      specialities: "Beurre de Karité, Fonio, igname pilée.",
      hotels: ["Hôtel Tata Somba", "Pendjari Lodge", "Hôtel de la Pendjari"],
      landmarks: ["Chutes de Kota", "Parc National de la Pendjari", "Koutammakou (Pays Somba)"],
      gastronomy: "Wagassi frit (fromage peulh), Pâte de sorgho, Tchoukoutou (bière locale).",
      traditions: "Rites d'initiation (Dikountri), Fête de la Gaani.",
      clothing: "Boubou traditionnel en coton tissé, chapeaux artisanaux.",
      color: "#c12737"
    },
    alibori: {
      id: "alibori",
      name: "Alibori",
      capital: "Kandi",
      communes: ["Kandi", "Banikoara", "Malanville", "Gogounou", "Segbana", "Karimama"],
      specialities: "Coton, élevage bovin, oignons de Malanville.",
      hotels: ["Hôtel Sota", "Campement de la Sota", "Hôtel de l'Alibori"],
      landmarks: ["Parc W", "Fleuve Niger (frontière Niger)", "Marché international de Malanville"],
      gastronomy: "Viande grillée (Chichinga), Couscous de mil.",
      traditions: "Courses hippiques, Fête du coton.",
      clothing: "Grands boubous sahéliens, turbans.",
      color: "#2ecc71"
    },
    atlantique: {
      id: "atlantique",
      name: "Atlantique",
      capital: "Allada",
      communes: ["Abomey-Calavi", "Ouidah", "Allada", "Zè", "Kpomassè", "Toffo", "Tori-Bossito", "Sô-Ava"],
      specialities: "Ananas d'Allada, produits de pêche, tourisme mémoriel.",
      hotels: ["La Casa del Papa", "Hôtel de la Cité Historique", "Résidences Calavi"],
      landmarks: ["Route des Esclaves (Ouidah)", "Temple des Pythons", "Cité lacustre de Ganvié"],
      gastronomy: "Dakouin (poisson et galette de manioc), Ananas pain de sucre.",
      traditions: "Culte Vaudou (Fête du 10 Janvier), Intronisation des rois d'Allada.",
      clothing: "Loin d'ancêtre, tenues en pagne wax et dentelle.",
      color: "#3498db"
    },
    littoral: {
      id: "littoral",
      name: "Littoral",
      capital: "Cotonou",
      communes: ["Cotonou (13 arrondissements)"],
      specialities: "Commerce international, services bancaires, tech.",
      hotels: ["Novotel Orisha", "Azalaï Hôtel", "Golden Tulip"],
      landmarks: ["Place de l'Amazone", "Marché Dantokpa", "Etoile Rouge"],
      gastronomy: "Atassi (riz au haricot), Amiwo au poulet.",
      traditions: "Festivals d'art contemporain, vie nocturne urbaine.",
      clothing: "Mixte moderne et traditionnel (Ensemble Dashiki).",
      color: "#e67e22"
    },
    kouffo: {
      id: "kouffo",
      name: "Couffo",
      capital: "Aplahoué",
      communes: ["Aplahoué", "Djakotomey", "Dogbo", "Klouékanmè", "Lalo", "Toviklin"],
      specialities: "Agriculture (Maïs, Manioc), artisanat de poterie.",
      hotels: ["Hôtel de la préfecture", "Auberge du Couffo"],
      landmarks: ["Montagnes de Djakotomey", "Marché de Dogbo"],
      gastronomy: "Pâte rouge (Amiwo), Sodabi (liqueur locale).",
      traditions: "Danses folkloriques Adja.",
      clothing: "Pagne tissé Adja.",
      color: "#9b59b6"
    }
    // Tu peux ajouter le Borgou, la Donga, le Zou, etc., sur le même modèle.
  };