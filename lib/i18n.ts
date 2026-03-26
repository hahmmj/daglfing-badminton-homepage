export const locales = ["de", "en", "ko"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}

export const messages: Record<Locale, Record<string, string>> = {
  de: {
    // NAV
    navPrograms: "Jugendabteilung",
    navSchedule: "Trainingszeiten",
    navContact: "Kontakt",

    // HERO
    heroBadge: "Badminton für jedes Alter",
    heroTitle1: "Training, Gemeinschaft",
    heroTitle2: "und Freude am Spiel",
    heroTitle3: "",
    heroDesc:
      "SV Helios Daglfing Badminton bietet Training für Kinder, Jugendliche und Erwachsene – mit klarer Struktur, passenden Gruppen und einer offenen Vereinskultur.",

    ctaPrimary: "Kontakt aufnehmen",
    ctaSecondary: "Mehr erfahren",

    // WHY
    whyTitle: "Warum Badminton bei SV Helios Daglfing?",

    whyCard1Label: "Erfolg als Team",
    whyCard1Title: "1. Platz in der Hobbyliga München Nord",
    whyCard1Desc:
      "Auch auf Einsteigerniveau zeigen wir, was als Team möglich ist. Unsere Mannschaft hat den 1. Platz in der Hobbyliga München Nord erreicht.",

    whyCard2Label: "Offene Atmosphäre",
    whyCard2Title: "Freundlich, respektvoll und unkompliziert",
    whyCard2Desc:
      "Neue Mitglieder finden schnell Anschluss. Bei uns steht ein offenes, unterstützendes Miteinander im Mittelpunkt.",

    whyCard3Label: "Für jedes Alter",
    whyCard3Title: "Vom Jugendtraining bis zu Erwachsenen",
    whyCard3Desc:
      "Seit Winter 2025 nehmen unsere Jugendspieler an Turnieren teil. Gleichzeitig trainieren bei uns Erwachsene aller Altersgruppen gemeinsam.",

    // PROGRAMS
    programsEyebrow: "Programme",
    programsTitle: "Training für jedes Niveau",
    programsDesc:
      "Wir bieten Trainingsmöglichkeiten für Kinder, Jugendliche und Erwachsene – angepasst an Alter und Spielniveau.",

    program1Name: "Einsteiger",
    program1Age: "Alle Altersgruppen",
    program1Desc:
      "Für alle, die neu mit Badminton beginnen und die Grundlagen lernen möchten.",

    program2Name: "Fortgeschrittene",
    program2Age: "Jugend & Erwachsene",
    program2Desc:
      "Für Spielerinnen und Spieler mit ersten Erfahrungen, die ihr Spiel verbessern möchten.",

    program3Name: "Vereinsspieler",
    program3Age: "Alle Altersgruppen",
    program3Desc:
      "Regelmäßiges Training für aktive Mitglieder mit Fokus auf Technik und Spielpraxis.",

    chipPlay: "Spiel",
    chipBasics: "Grundlagen",
    chipFocus: "Technik",
    chipGrowth: "Entwicklung",

    // CORE
    coreEyebrow: "Unsere Philosophie",
    coreTitle: "Gemeinsam besser werden",
    coreDesc:
      "Wir verbinden Training, Teamgeist und Spaß am Spiel – für nachhaltige Entwicklung im Verein.",

    // SCHEDULE
    scheduleEyebrow: "Trainingszeiten",
    scheduleTitle: "Unsere Trainingszeiten",
    scheduleDesc:
      "Alle Trainingszeiten auf einen Blick – angepasst an Altersgruppen und Spielniveau.",

    class1: "Erwachsene (O19)",
    time1: "Freitag · 20:00 – 22:30",

    class2: "Jugend (U19)",
    time2: "Dienstag · 18:30 – 21:30",

    class3: "",
    time3: "",

    // TRUST
    trust1Value: "1.",
    trust1Label: "Hobbyliga München Nord",

    trust2Value: "2025",
    trust2Label: "Start Jugendturniere",

    trust3Value: "Alle",
    trust3Label: "Altersgruppen",

    // CONTACT
    contactEyebrow: "Kontakt",
    contactTitle: "Jetzt Kontakt aufnehmen",
    contactDesc:
      "Interesse am Training? Kontaktiere uns und komm gerne zu einem Probetraining vorbei.",

    contactPrimary: "E-Mail senden",
    contactSecondary: "Mehr erfahren",

    contactPerson1Role:
      "Gesamtverantwortlicher der Badmintonabteilung sowie Ansprechpartner für den Erwachsenenbereich.",
    contactPerson2Role:
      "Ansprechpartner für das Leistungsteam der Jugendabteilung.",
    contactPerson3Role: "Ansprechpartner für die Jugendabteilung.",
    contactEmailButton: "E-Mail senden",
  },

  en: {
    navPrograms: "Youth Training",
    navSchedule: "Schedule",
    navContact: "Contact",

    heroBadge: "Badminton for all ages",
    heroTitle1: "Training, community",
    heroTitle2: "and joy in the game",
    heroTitle3: "",
    heroDesc:
      "SV Helios Daglfing Badminton offers training for children, youth, and adults — with clear structure, suitable groups, and an open club culture.",

    ctaPrimary: "Get in touch",
    ctaSecondary: "Learn more",

    whyTitle: "Why SV Helios Daglfing Badminton?",

    whyCard1Label: "Team success",
    whyCard1Title: "1st place in Hobbyliga München Nord",
    whyCard1Desc:
      "Even at beginner level, we show what is possible as a team. Our club achieved 1st place in the Hobbyliga München Nord.",

    whyCard2Label: "Open atmosphere",
    whyCard2Title: "Friendly, respectful and welcoming",
    whyCard2Desc:
      "New members quickly feel at home. We focus on a supportive and open club culture.",

    whyCard3Label: "All ages",
    whyCard3Title: "From youth to adults",
    whyCard3Desc:
      "Since winter 2025, our youth players participate in tournaments, while adults of all ages train together.",

    programsEyebrow: "Programs",
    programsTitle: "Training for every level",
    programsDesc:
      "We offer training opportunities for children, youth, and adults tailored to age and level.",

    program1Name: "Beginner",
    program1Age: "All ages",
    program1Desc: "For those starting badminton and learning the basics.",

    program2Name: "Intermediate",
    program2Age: "Youth & Adults",
    program2Desc:
      "For players with some experience who want to improve their skills.",

    program3Name: "Club Players",
    program3Age: "All ages",
    program3Desc:
      "Regular training for active members focusing on technique and gameplay.",

    chipPlay: "Play",
    chipBasics: "Basics",
    chipFocus: "Technique",
    chipGrowth: "Growth",

    coreEyebrow: "Our philosophy",
    coreTitle: "Growing together",
    coreDesc:
      "We combine training, team spirit, and enjoyment of the game for long-term development.",

    scheduleEyebrow: "Schedule",
    scheduleTitle: "Training Schedule",
    scheduleDesc: "All training times at a glance.",

    class1: "Adults (O19)",
    time1: "Friday · 20:00 – 22:30",

    class2: "Youth",
    time2: "Tuesday · 18:30 – 21:30",

    class3: "",
    time3: "",

    trust1Value: "1st",
    trust1Label: "Hobbyliga München Nord",

    trust2Value: "2025",
    trust2Label: "Youth tournaments",

    trust3Value: "All",
    trust3Label: "Age groups",

    contactEyebrow: "Contact",
    contactTitle: "Get in touch",
    contactDesc:
      "Interested in training? Contact us and join a trial session.",

    contactPrimary: "Send email",
    contactSecondary: "Learn more",

    contactPerson1Role:
      "Head of the badminton department and contact person for the adult section.",
    contactPerson2Role:
      "Contact person for the youth department performance team.",
    contactPerson3Role: "Contact person for the youth department.",
    contactEmailButton: "Send email",
  },

  ko: {
    navPrograms: "유소년 훈련",
    navSchedule: "시간표",
    navContact: "문의",

    heroBadge: "전 연령을 위한 배드민턴",
    heroTitle1: "훈련과 커뮤니티,",
    heroTitle2: "그리고 배드민턴의 즐거움",
    heroTitle3: "",
    heroDesc:
      "SV Helios Daglfing Badminton은 어린이, 청소년, 성인을 위한 훈련을 제공합니다.",

    ctaPrimary: "문의하기",
    ctaSecondary: "더 알아보기",

    whyTitle: "왜 SV Helios Daglfing인가요?",

    whyCard1Label: "팀 성과",
    whyCard1Title: "Hobbyliga München Nord 1위",
    whyCard1Desc: "초급 리그지만 팀으로서 1위를 달성했습니다.",

    whyCard2Label: "친근한 분위기",
    whyCard2Title: "누구나 쉽게 적응",
    whyCard2Desc:
      "친절하고 열린 분위기로 누구나 쉽게 클럽에 적응할 수 있습니다.",

    whyCard3Label: "전 연령 참여",
    whyCard3Title: "유소년부터 성인까지",
    whyCard3Desc: "유소년 선수부터 성인까지 함께 활동하는 클럽입니다.",

    programsEyebrow: "프로그램",
    programsTitle: "모든 수준을 위한 훈련",
    programsDesc: "연령과 수준에 맞춘 훈련을 제공합니다.",

    program1Name: "입문",
    program1Age: "전 연령",
    program1Desc: "배드민턴을 처음 시작하는 분들을 위한 과정.",

    program2Name: "중급",
    program2Age: "청소년/성인",
    program2Desc: "기본기를 갖춘 플레이어를 위한 과정.",

    program3Name: "클럽 선수",
    program3Age: "전 연령",
    program3Desc: "정기적으로 훈련하는 회원 대상.",

    chipPlay: "플레이",
    chipBasics: "기초",
    chipFocus: "기술",
    chipGrowth: "성장",

    coreEyebrow: "철학",
    coreTitle: "함께 성장하는 클럽",
    coreDesc: "훈련과 팀워크, 즐거움을 동시에 추구합니다.",

    scheduleEyebrow: "훈련 시간",
    scheduleTitle: "훈련 시간표",
    scheduleDesc: "모든 훈련 시간을 한눈에 확인하세요.",

    class1: "성인 (O19)",
    time1: "금요일 · 20:00 – 22:30",

    class2: "유소년",
    time2: "화요일 · 18:30 – 21:30",

    class3: "",
    time3: "",

    trust1Value: "1위",
    trust1Label: "Hobbyliga München Nord",

    trust2Value: "2025",
    trust2Label: "유소년 대회 시작",

    trust3Value: "전 연령",
    trust3Label: "참여",

    contactEyebrow: "문의",
    contactTitle: "문의하기",
    contactDesc: "훈련에 관심이 있으시면 연락 주세요.",

    contactPrimary: "이메일 보내기",
    contactSecondary: "더 알아보기",

    contactPerson1Role: "배드민턴 부서 총 책임자 및 성인부 담당자",
    contactPerson2Role: "유소년 부서 Leistungsteam 담당자",
    contactPerson3Role: "유소년 부서 담당자",
    contactEmailButton: "이메일 보내기",
  },
};