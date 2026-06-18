export type Language = 'fr' | 'en' | 'ja'

export type DestinationItem = {
  name: string
  subtitle: string
  specialty: string
  description: string
}

export type NihongoTimelineEvent = {
  year: string
  title: string
  description: string
}

export type NihongoProfessor = {
  years: string
  name: string
  role: string
  description: string
}

export type DestinationSpot = {
  eyebrow: string
  title: string
  paragraphs: string[]
  imageAlt: string
}

export type Translation = {
  brand: {
    main: string
    accent: string
  }
  header: {
    tagline: string
  }
  language: {
    fr: string
    en: string
    ja: string
    choose: string
  }
  nav: {
    home: string
    education: string
    aafa: string
    socialWelfare: string
    environment: string
    sub: {
      japaneseSchool: string
      primarySchool: string
      beninPresentation: string
      tourism: string
    }
  }
  footer: {
    tagline: string
    navigation: string
    destinations: string
    contact: string
    address: string
    copyright: string
    privacy: string
    terms: string
  }
  hero: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    ctaExplore: string
    ctaLearnMore: string
    imageAlt: string
  }
  about: {
    eyebrow: string
    title: string
    text1: string
    text2: string
    stats: {
      area: string
      population: string
      unesco: string
      parks: string
    }
  }
  school: {
    eyebrow: string
    title: string
    subtitleJp: string
    text1: string
    text2: string
    badgeYears: string
    badgeLabel: string
    imageAlt: string
    features: Array<{ title: string; text: string }>
    ctaEnroll: string
    ctaPrograms: string
  }
  destinations: {
    eyebrow: string
    title: string
    subtitle: string
    discover: string
    viewAll: string
    items: DestinationItem[]
  }
  pages: {
    primarySchool: { title: string; description: string }
    socialWelfare: { title: string; description: string }
    environment: { title: string; description: string }
  }
  nihongoPage: {
    intro: {
      eyebrow: string
      title: string
      subtitle: string
      paragraphs: string[]
    }
    history: {
      eyebrow: string
      title: string
      subtitle: string
      events: NihongoTimelineEvent[]
    }
    professors: {
      eyebrow: string
      title: string
      subtitle: string
      list: NihongoProfessor[]
    }
  }
  beninPage: {
    eyebrow: string
    title: string
    subtitle: string
    mapHint: string
    labels: {
      specialties: string
      historicalPlaces: string
      communes: string
      clothing: string
      gastronomy: string
      traditions: string
    }
    stats: {
      departments: string
      communes: string
      inhabitants: string
      area: string
    }
  }
  destinationsPage: {
    eyebrow: string
    title: string
    titleHighlight: string
    introLink: string
    intro: string
    spots: DestinationSpot[]
  }
  common: {
    comingSoon: string
    backHome: string
  }
}
