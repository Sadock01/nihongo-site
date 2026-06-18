import type { Translation } from './types'
import { beninPageJa } from './content/benin.ja'
import { destinationsPageJa } from './content/destinations.ja'
import { nihongoPageJa } from './content/nihongo.ja'

const japanese: Translation = {
  brand: {
    main: 'ベナンを',
    accent: '発見',
  },
  header: {
    tagline:
      'NIHONGO GAKKOUと提携した、ベナンと教育に関する情報ポータルサイトです。',
  },
  language: {
    fr: 'Français',
    en: 'English',
    ja: '日本語',
    choose: '言語を選択',
  },
  nav: {
    home: 'ホーム',
    education: '教育',
    aafa: 'アフリカ・アジア友好',
    socialWelfare: '社会福祉',
    environment: '環境保護',
    sub: {
      japaneseSchool: '日本語学校',
      primarySchool: '小学校',
      beninPresentation: 'ベナン紹介',
      tourism: '観光',
    },
  },
  footer: {
    tagline:
      'NIHONGO GAKKOUと提携し、ベナンの魅力をお届けするポータルサイトです。',
    navigation: 'ナビゲーション',
    destinations: '観光地',
    contact: 'お問い合わせ',
    address: 'ベナン・コトヌ\nサント・リタ地区',
    copyright: 'ベナンを発見. All rights reserved.',
    privacy: 'プライバシー',
    terms: '利用規約',
  },
  hero: {
    badge: 'NIHONGO GAKKOUと提携',
    title: 'ベナンを',
    titleHighlight: '発見しよう',
    subtitle:
      '西アフリカの隠れた宝物を探検し、この地域唯一の日本語学校をご覧ください。',
    ctaExplore: '観光地を探す',
    ctaLearnMore: '詳しく見る',
    imageAlt: 'ベナンの風景',
  },
  about: {
    eyebrow: '概要',
    title: 'ヴードゥンの故郷、ベナン',
    text1:
      '西アフリカに位置するベナンは、悠久の歴史と保全された自然が共存する対照的な国です。大西洋沿岸の黄金のビーチからペンジャリ国立公園のサバンナ、ガンビエの湖上村落まで、国のあらゆる場所が独自の物語を語ります。',
    text2:
      'かつてのダホメ王国、ベナンはヴードゥンの発祥地であり、1996年から公式に認められた伝統宗教です。歴史的遺産、豊かな食文化、そして伝説的なおもてなしの精神でも知られる観光地です。',
    stats: {
      area: 'km² の面積',
      population: '人口',
      unesco: 'ユネスコ遺産',
      parks: '国立公園',
    },
  },
  school: {
    eyebrow: '提携校',
    title: 'NIHONGO GAKKOU',
    subtitleJp: '日本語学校',
    text1:
      '日本と西アフリカの文化的架け橋を築くというビジョンのもと設立されたNIHONGO GAKKOUは、ベナンおよびこの地域で唯一の日本語学校です。',
    text2:
      '初心者からJLPT受験者まで、すべてのレベルに対応した充実したプログラムを提供しています。ネイティブ講師と没入型の教授法で、日本語習得をサポートします。',
    badgeYears: '10+',
    badgeLabel: '年の実績',
    imageAlt: '日本語学校 NIHONGO GAKKOU',
    features: [
      { title: '認定コース', text: 'JLPT対策' },
      { title: 'ネイティブ講師', text: '日本人教師' },
      { title: '集中コース', text: '全レベル対応' },
      { title: 'アフリカ唯一', text: '地域で唯一の学校' },
    ],
    ctaEnroll: 'コースに申し込む',
    ctaPrograms: 'プログラムを見る',
  },
  destinations: {
    eyebrow: '人気の観光地',
    title: 'ベナンの必見スポット',
    subtitle:
      '悠久の歴史と保全された自然が息づく、国を代表する名所をご紹介します。',
    discover: '詳しく見る',
    viewAll: 'すべての観光地を見る',
    items: [
      {
        name: 'ウィダ',
        subtitle: 'ノーリターンの門',
        specialty: '歴史とヴードゥン',
        description:
          '歴史的な街でありヴードゥンの精神的中心地。有名なノーリターンの門があります。',
      },
      {
        name: 'アボメイ',
        subtitle: '王宮',
        specialty: 'ユネスコ遺産',
        description:
          'ダホメ王国の旧都。王宮は世界遺産に登録されています。',
      },
      {
        name: 'ペンジャリ',
        subtitle: '国立公園',
        specialty: 'サファリと野生動物',
        description:
          '西アフリカでゾウやライオンが生息する数少ない保護区のひとつです。',
      },
    ],
  },
  pages: {
    primarySchool: {
      title: '小学校',
      description:
        'アフリカ・アジア友好のもと建設された小学校の情報は、近日公開予定です。',
    },
    socialWelfare: {
      title: '社会福祉',
      description:
        '社会福祉および地域支援プログラムは、近日このページでご紹介します。',
    },
    environment: {
      title: '環境保護',
      description:
        '環境保護に関する取り組みは、近日このページで詳しくご案内します。',
    },
  },
  nihongoPage: nihongoPageJa,
  beninPage: beninPageJa,
  destinationsPage: destinationsPageJa,
  common: {
    comingSoon: '近日公開',
    backHome: 'ホームに戻る',
  },
}

export default japanese
