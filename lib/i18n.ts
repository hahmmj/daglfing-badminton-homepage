export const locales = ["de", "en", "ko"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export const messages: Record<Locale, Record<string, string>> = {
  de: {
    brand: "Dagleping Kids Badminton",
    siteName: "Dagleping Kids Badminton",
    navPrograms: "Programme",
    navSchedule: "Trainingszeiten",
    navContact: "Kontakt",

    heroBadge: "Badmintontraining für Kinder",
    heroTitle1: "Kinder haben Spaß,",
    heroTitle2: "Eltern haben Vertrauen",
    heroTitle3: "in unser Training",
    heroDesc:
      "Unser Kinderprogramm ist klar strukturiert, sicher organisiert und altersgerecht aufgebaut. So finden Eltern schnell den passenden Kurs für ihr Kind.",
    ctaPrimary: "Kostenlose Probestunde",
    ctaSecondary: "Programme ansehen",

    trust1Value: "5–13 Jahre",
    trust1Label: "Altersgerechte Kurse",
    trust2Value: "Kleine Gruppen",
    trust2Label: "Individuelles Feedback",
    trust3Value: "Probe möglich",
    trust3Label: "Einfacher Einstieg",

    whyTitle: "Warum Dagleping?",
    whyCard1Label: "Motivierender Einstieg",
    whyCard1Title: "Spaß am ersten Badminton",
    whyCard1Desc:
      "Spielerische Übungen und Grundtechniken helfen Kindern, sich leicht an den Sport zu gewöhnen.",
    whyCard2Label: "Sichere Umgebung",
    whyCard2Title: "Training mit klarer Struktur",
    whyCard2Desc:
      "Abläufe, Intensität und Bewegungswege werden passend zum Alter gestaltet.",
    whyCard3Label: "Nachhaltige Entwicklung",
    whyCard3Title: "Technik und Selbstvertrauen wachsen gemeinsam",
    whyCard3Desc:
      "Kinder entwickeln Koordination, Grundtechnik und Freude an Bewegung Schritt für Schritt.",

    programsEyebrow: "Programme",
    programsTitle: "Kurse nach Alter und Niveau",
    programsDesc:
      "Eltern können die Kursstufen schnell vergleichen und direkt den passenden Kurs auswählen.",
    program1Name: "Starter",
    program1Age: "5–7 Jahre",
    program1Desc:
      "Spielerischer Einstieg mit Schlägergefühl, Shuttle-Koordination und Grundbewegungen.",
    program2Name: "Basic",
    program2Age: "8–10 Jahre",
    program2Desc:
      "Grundlagen wie Haltung, Aufschlag, Ballwechsel und Bewegung auf dem Feld.",
    program3Name: "Grow",
    program3Age: "11–13 Jahre",
    program3Desc:
      "Mehr Spielsicherheit, bessere Ausdauer und stärkeres Selbstvertrauen auf dem Feld.",
    chipPlay: "Spielerisch",
    chipBasics: "Grundtechnik",
    chipFocus: "Konzentration",
    chipGrowth: "Fortschritt",

    coreEyebrow: "Unsere Werte",
    coreTitle: "Spaß, Entwicklung und Sicherheit",
    coreDesc:
      "Ein gutes Kindertraining braucht nicht nur Energie, sondern auch Vertrauen, Struktur und klare Kommunikation.",

    scheduleEyebrow: "Trainingszeiten",
    scheduleTitle: "Trainingsplan auf einen Blick",
    scheduleDesc:
      "Die Zeiten sind klar gegliedert, damit Eltern schnell sehen, welcher Kurs passt.",
    class1: "Starter",
    class2: "Basic",
    class3: "Grow",
    time1: "Di · Do 16:00–16:50",
    time2: "Di · Do 17:00–18:00",
    time3: "Mo · Mi · Fr 18:00–19:00",

    contactEyebrow: "Kontakt",
    contactTitle: "Finden Sie den passenden Kurs für Ihr Kind",
    contactDesc:
      "Im nächsten Schritt können wir echte Kontaktdaten, Adresse, WhatsApp- oder KakaoTalk-Link und Anmeldeformular verbinden.",
    contactPrimary: "Probestunde anfragen",
    contactSecondary: "Beratung anfragen",
  },

  en: {
    brand: "Dagleping Kids Badminton",
    siteName: "Dagleping Kids Badminton",
    navPrograms: "Programs",
    navSchedule: "Schedule",
    navContact: "Contact",

    heroBadge: "Badminton training for children",
    heroTitle1: "Kids enjoy moving,",
    heroTitle2: "parents feel confident",
    heroTitle3: "about the program",
    heroDesc:
      "Our children’s program is structured, safe, and age-appropriate, helping parents find the right class quickly.",
    ctaPrimary: "Free Trial Class",
    ctaSecondary: "View Programs",

    trust1Value: "Ages 5–13",
    trust1Label: "Age-based classes",
    trust2Value: "Small groups",
    trust2Label: "Individual feedback",
    trust3Value: "Trial available",
    trust3Label: "Easy first step",

    whyTitle: "Why Dagleping?",
    whyCard1Label: "Fun first step",
    whyCard1Title: "A joyful introduction to badminton",
    whyCard1Desc:
      "Play-based activities and fundamentals help children get comfortable with the sport.",
    whyCard2Label: "Safe environment",
    whyCard2Title: "Structured and reliable training",
    whyCard2Desc:
      "Intensity, movement, and class flow are adjusted by age group.",
    whyCard3Label: "Steady growth",
    whyCard3Title: "Skills and confidence grow together",
    whyCard3Desc:
      "Children build coordination, technique, and confidence step by step.",

    programsEyebrow: "Programs",
    programsTitle: "Programs by age and level",
    programsDesc:
      "Parents can compare levels at a glance and choose the right class easily.",
    program1Name: "Starter",
    program1Age: "Ages 5–7",
    program1Desc:
      "A playful introduction with racket handling, shuttle coordination, and basic movement.",
    program2Name: "Basic",
    program2Age: "Ages 8–10",
    program2Desc:
      "Core foundations such as stance, serve, rally, and court movement.",
    program3Name: "Grow",
    program3Age: "Ages 11–13",
    program3Desc:
      "Stronger game sense, better stamina, and more confidence on court.",
    chipPlay: "Play-based",
    chipBasics: "Fundamentals",
    chipFocus: "Focus",
    chipGrowth: "Progress",

    coreEyebrow: "Core Value",
    coreTitle: "Fun, growth, and safety",
    coreDesc:
      "Great children’s training needs energy, trust, structure, and clear communication.",

    scheduleEyebrow: "Schedule",
    scheduleTitle: "Class schedule at a glance",
    scheduleDesc:
      "Timetable is organized clearly so parents can scan it quickly.",
    class1: "Starter",
    class2: "Basic",
    class3: "Grow",
    time1: "Tue · Thu 16:00–16:50",
    time2: "Tue · Thu 17:00–18:00",
    time3: "Mon · Wed · Fri 18:00–19:00",

    contactEyebrow: "Contact",
    contactTitle: "Find the right class for your child",
    contactDesc:
      "Next, we can connect real contact details, address, messaging links, and a registration form.",
    contactPrimary: "Book a Trial Class",
    contactSecondary: "Ask for Consultation",
  },

  ko: {
    brand: "Dagleping Kids Badminton",
    siteName: "다글핑 배드민턴 어린이 부서",
    navPrograms: "프로그램",
    navSchedule: "시간표",
    navContact: "문의",

    heroBadge: "어린이 배드민턴 클래스",
    heroTitle1: "아이는 즐겁게 뛰고,",
    heroTitle2: "부모는 안심하는",
    heroTitle3: "배드민턴 수업",
    heroDesc:
      "다글핑 어린이 프로그램은 연령별로 구조화되어 있고 안전하게 운영됩니다. 부모가 빠르게 우리 아이에게 맞는 반을 찾을 수 있도록 설계했습니다.",
    ctaPrimary: "무료 체험 신청",
    ctaSecondary: "프로그램 보기",

    trust1Value: "5–13세",
    trust1Label: "연령별 반 운영",
    trust2Value: "소수 정원",
    trust2Label: "밀도 있는 피드백",
    trust3Value: "체험 가능",
    trust3Label: "부담 없는 시작",

    whyTitle: "왜 다글핑인가요?",
    whyCard1Label: "즐거운 시작",
    whyCard1Title: "첫 배드민턴을 재미있게",
    whyCard1Desc:
      "놀이와 기본기를 함께 구성해 아이가 운동에 자연스럽게 익숙해지도록 돕습니다.",
    whyCard2Label: "안전한 환경",
    whyCard2Title: "구조가 명확한 수업",
    whyCard2Desc:
      "연령에 따라 수업 강도와 동선, 흐름을 다르게 설계합니다.",
    whyCard3Label: "지속적인 성장",
    whyCard3Title: "실력과 자신감이 함께 자라도록",
    whyCard3Desc:
      "기초 체력, 기술, 협동심을 단계적으로 키워갑니다.",

    programsEyebrow: "프로그램",
    programsTitle: "연령과 수준에 맞춘 프로그램",
    programsDesc:
      "부모가 반을 빠르게 비교하고, 우리 아이에게 맞는 수업을 쉽게 고를 수 있습니다.",
    program1Name: "스타터",
    program1Age: "5–7세",
    program1Desc:
      "라켓 잡기, 셔틀 감각, 기초 움직임을 놀이형으로 배우는 입문 수업.",
    program2Name: "베이직",
    program2Age: "8–10세",
    program2Desc:
      "자세, 서비스, 랠리, 코트 이동 등 핵심 기초를 다지는 수업.",
    program3Name: "그로우",
    program3Age: "11–13세",
    program3Desc:
      "경기 감각, 체력, 자신감을 함께 키우는 성장 단계 수업.",
    chipPlay: "놀이 중심",
    chipBasics: "기초 기술",
    chipFocus: "집중력",
    chipGrowth: "성장 단계",

    coreEyebrow: "핵심 가치",
    coreTitle: "재미, 성장, 안전의 균형",
    coreDesc:
      "좋은 어린이 수업은 에너지뿐 아니라 신뢰, 구조, 명확한 안내가 함께 있어야 합니다.",

    scheduleEyebrow: "시간표",
    scheduleTitle: "한눈에 보는 수업 시간",
    scheduleDesc:
      "부모가 빠르게 스캔할 수 있도록 시간표를 명확하게 정리했습니다.",
    class1: "스타터",
    class2: "베이직",
    class3: "그로우",
    time1: "화 · 목 16:00–16:50",
    time2: "화 · 목 17:00–18:00",
    time3: "월 · 수 · 금 18:00–19:00",

    contactEyebrow: "문의",
    contactTitle: "우리 아이에게 맞는 반을 찾아보세요",
    contactDesc:
      "다음 단계에서 실제 연락처, 주소, 메신저 링크, 신청 폼까지 연결하면 바로 운영 가능한 사이트가 됩니다.",
    contactPrimary: "체험 수업 신청",
    contactSecondary: "상담 문의",
  },
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}