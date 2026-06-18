import type { Translation } from './types'
import { beninPageEn } from './content/benin.en'
import { destinationsPageEn } from './content/destinations.en'
import { nihongoPageEn } from './content/nihongo.en'

const english: Translation = {
  brand: {
    main: 'Discover',
    accent: ' Benin',
  },
  header: {
    tagline:
      'Information portal about Benin and education, in partnership with NIHONGO GAKKOU.',
  },
  language: {
    fr: 'Français',
    en: 'English',
    ja: '日本語',
    choose: 'Choose language',
  },
  nav: {
    home: 'Home',
    education: 'Education',
    aafa: 'African Asian Friendship',
    socialWelfare: 'Social Welfare',
    environment: 'Environment Protection',
    sub: {
      japaneseSchool: 'Japanese Language School',
      primarySchool: 'Primary School',
      beninPresentation: 'Discover Benin',
      tourism: 'Tourism',
    },
  },
  footer: {
    tagline:
      'Your gateway to the wonders of Benin, in partnership with NIHONGO GAKKOU.',
    navigation: 'Navigation',
    destinations: 'Destinations',
    contact: 'Contact',
    address: 'Cotonou, Benin\nSainte-Rita District',
    copyright: 'Discover Benin. All rights reserved.',
    privacy: 'Privacy',
    terms: 'Terms',
  },
  hero: {
    badge: 'In partnership with NIHONGO GAKKOU',
    title: 'Discover',
    titleHighlight: ' Benin',
    subtitle:
      'Explore the hidden treasures of West Africa and discover the only Japanese language school in the sub-region.',
    ctaExplore: 'Explore destinations',
    ctaLearnMore: 'Learn more',
    imageAlt: 'Benin landscape',
  },
  about: {
    eyebrow: 'About',
    title: 'Benin, birthplace of Vodun',
    text1:
      'Located in West Africa, Benin is a land of contrasts where ancient history meets preserved nature. From the golden beaches of the Atlantic coast to the savannas of Pendjari Park, and the lakeside villages of Ganvié, every corner of the country tells a unique story.',
    text2:
      'Former kingdom of Dahomey, Benin is the birthplace of Vodun, a traditional religion officially recognized since 1996. It is also a sought-after destination for its historical heritage, rich cuisine, and the legendary hospitality of its people.',
    stats: {
      area: 'km² of area',
      population: 'Inhabitants',
      unesco: 'UNESCO Sites',
      parks: 'National Parks',
    },
  },
  school: {
    eyebrow: 'Partner School',
    title: 'NIHONGO GAKKOU',
    subtitleJp: '日本語学校',
    text1:
      'Founded with the vision of creating a cultural bridge between Japan and West Africa, NIHONGO GAKKOU is the first and only Japanese language school in Benin and the entire sub-region.',
    text2:
      'Our institution offers comprehensive programs for all levels, from beginners to JLPT candidates. With native teachers and an immersive methodology, we prepare our students to excel in mastering Japanese.',
    badgeYears: '10+',
    badgeLabel: 'Years of excellence',
    imageAlt: 'Nihongo Gakkou School',
    features: [
      { title: 'Certified Training', text: 'JLPT preparation' },
      { title: 'Native Teachers', text: 'Japanese instructors' },
      { title: 'Intensive Courses', text: 'All levels' },
      { title: 'Unique in Africa', text: 'Only school in the region' },
    ],
    ctaEnroll: 'Enroll in courses',
    ctaPrograms: 'View programs',
  },
  destinations: {
    eyebrow: 'Popular Destinations',
    title: 'Must-see places in Benin',
    subtitle:
      'Discover the country\'s most iconic sites, between ancient history and preserved nature.',
    discover: 'Discover',
    viewAll: 'View all destinations',
    items: [
      {
        name: 'Ouidah',
        subtitle: 'Door of No Return',
        specialty: 'History & Vodun spirituality',
        description:
          'Historic city and spiritual center of Vodun, home to the famous Door of No Return.',
      },
      {
        name: 'Abomey',
        subtitle: 'Royal Palaces',
        specialty: 'UNESCO Heritage',
        description:
          'Former capital of the Kingdom of Dahomey, its royal palaces are a World Heritage site.',
      },
      {
        name: 'Pendjari',
        subtitle: 'National Park',
        specialty: 'Safari & wildlife',
        description:
          'One of the last refuges for elephants and lions in West Africa.',
      },
    ],
  },
  pages: {
    primarySchool: {
      title: 'Primary School',
      description:
        'Discover our primary school built under the African Asian Friendship initiative — coming soon.',
    },
    socialWelfare: {
      title: 'Social Welfare',
      description:
        'Our social welfare and community support programs will be presented here soon.',
    },
    environment: {
      title: 'Environment Protection',
      description:
        'Our environmental protection initiatives will be detailed on this page soon.',
    },
  },
  nihongoPage: nihongoPageEn,
  beninPage: beninPageEn,
  destinationsPage: destinationsPageEn,
  common: {
    comingSoon: 'Coming soon',
    backHome: 'Back to home',
  },
}

export default english
