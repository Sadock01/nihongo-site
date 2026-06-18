import type { Translation } from './types'
import { beninPageFr } from './content/benin.fr'
import { destinationsPageFr } from './content/destinations.fr'
import { nihongoPageFr } from './content/nihongo.fr'

const french: Translation = {
  brand: {
    main: 'Découvrir',
    accent: ' Bénin',
  },
  header: {
    tagline:
      'Portail d\'information sur le Bénin et l\'éducation, en partenariat avec NIHONGO GAKKOU.',
  },
  language: {
    fr: 'Français',
    en: 'English',
    ja: '日本語',
    choose: 'Choisir la langue',
  },
  nav: {
    home: 'Accueil',
    education: 'Éducation',
    aafa: 'Amitié Afrique-Asie',
    socialWelfare: 'Action sociale',
    environment: 'Environnement',
    sub: {
      japaneseSchool: 'École de langue japonaise',
      primarySchool: 'École primaire',
      beninPresentation: 'Présentation du Bénin',
      tourism: 'Tourisme',
    },
  },
  footer: {
    tagline:
      'Votre portail vers les merveilles du Bénin, en partenariat avec NIHONGO GAKKOU.',
    navigation: 'Navigation',
    destinations: 'Destinations',
    contact: 'Contact',
    address: 'Cotonou, Bénin\nQuartier Sainte-Rita',
    copyright: 'Découvrir Bénin. Tous droits réservés.',
    privacy: 'Confidentialité',
    terms: 'Conditions',
  },
  hero: {
    badge: 'En partenariat avec NIHONGO GAKKOU',
    title: 'Découvrez le',
    titleHighlight: ' Bénin',
    subtitle:
      "Explorez les trésors cachés de l'Afrique de l'Ouest et découvrez la seule école de langue japonaise de la sous-région.",
    ctaExplore: 'Explorer les destinations',
    ctaLearnMore: 'En savoir plus',
    imageAlt: 'Paysage du Bénin',
  },
  about: {
    eyebrow: 'À propos',
    title: 'Le Bénin, berceau du Vodoun',
    text1:
      "Situé en Afrique de l'Ouest, le Bénin est une terre de contrastes où l'histoire millénaire côtoie une nature préservée. Des plages dorées de la côte atlantique aux savanes du Parc de la Pendjari, en passant par les villages lacustres de Ganvié, chaque coin du pays raconte une histoire unique.",
    text2:
      "Ancien royaume du Dahomey, le Bénin est le berceau du Vodoun, une religion traditionnelle reconnue officiellement depuis 1996. C'est aussi une destination prisée pour son patrimoine historique, sa gastronomie riche et l'hospitalité légendaire de ses habitants.",
    stats: {
      area: 'km² de superficie',
      population: 'Habitants',
      unesco: 'Sites UNESCO',
      parks: 'Parcs nationaux',
    },
  },
  school: {
    eyebrow: 'École partenaire',
    title: 'NIHONGO GAKKOU',
    subtitleJp: '日本語学校',
    text1:
      "Fondée avec la vision de créer un pont culturel entre le Japon et l'Afrique de l'Ouest, NIHONGO GAKKOU est la première et unique école de langue japonaise au Bénin et dans toute la sous-région.",
    text2:
      'Notre établissement offre des programmes complets pour tous les niveaux, des débutants aux candidats au JLPT. Avec des professeurs natifs et une méthodologie immersive, nous préparons nos étudiants à exceller dans la maîtrise du japonais.',
    badgeYears: '10+',
    badgeLabel: "Années d'excellence",
    imageAlt: 'École Nihongo Gakkou',
    features: [
      { title: 'Formation certifiée', text: 'Préparation au JLPT' },
      { title: 'Professeurs natifs', text: 'Enseignants japonais' },
      { title: 'Cours intensifs', text: 'Tous les niveaux' },
      { title: 'Unique en Afrique', text: 'Seule école de la région' },
    ],
    ctaEnroll: 'S\'inscrire aux cours',
    ctaPrograms: 'Voir les programmes',
  },
  destinations: {
    eyebrow: 'Destinations populaires',
    title: 'Les incontournables du Bénin',
    subtitle:
      'Découvrez les sites les plus emblématiques du pays, entre histoire millénaire et nature préservée.',
    discover: 'Découvrir',
    viewAll: 'Voir toutes les destinations',
    items: [
      {
        name: 'Ouidah',
        subtitle: 'Porte du Non-Retour',
        specialty: 'Histoire & spiritualité Vodoun',
        description:
          'Ville historique et centre spirituel du Vodoun, avec sa célèbre Porte du Non-Retour.',
      },
      {
        name: 'Abomey',
        subtitle: 'Palais royaux',
        specialty: 'Patrimoine UNESCO',
        description:
          'Ancienne capitale du royaume du Dahomey, ses palais royaux sont classés au patrimoine mondial.',
      },
      {
        name: 'Pendjari',
        subtitle: 'Parc national',
        specialty: 'Safari & faune sauvage',
        description:
          "L'un des derniers refuges d'éléphants et de lions en Afrique de l'Ouest.",
      },
    ],
  },
  pages: {
    primarySchool: {
      title: 'École primaire',
      description:
        'Découvrez bientôt notre école primaire construite dans le cadre de l\'Amitié Afrique-Asie.',
    },
    socialWelfare: {
      title: 'Action sociale',
      description:
        'Nos programmes de bien-être social et d\'aide communautaire seront bientôt présentés ici.',
    },
    environment: {
      title: 'Environnement',
      description:
        'Nos initiatives de protection de l\'environnement seront bientôt détaillées sur cette page.',
    },
  },
  nihongoPage: nihongoPageFr,
  beninPage: beninPageFr,
  destinationsPage: destinationsPageFr,
  common: {
    comingSoon: 'Bientôt disponible',
    backHome: 'Retour à l\'accueil',
  },
}

export default french
