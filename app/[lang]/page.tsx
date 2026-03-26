import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidLocale, messages, type Locale } from "@/lib/i18n";

function LanguageSwitcher({ lang }: { lang: Locale }) {
  const items: { code: Locale; label: string }[] = [
    { code: "de", label: "DE" },
    { code: "en", label: "EN" },
    { code: "ko", label: "KO" },
  ];

  return (
    <div className="flex items-center gap-2">
      {items.map((item) => {
        const active = item.code === lang;

        return (
          <Link
            key={item.code}
            href={`/${item.code}`}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
              active
                ? "bg-[#6b97c5] text-white"
                : "border border-[#D8E1EA] bg-white text-[#3E5F87] hover:bg-[#F8FAFC]"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const t = messages[lang] ?? messages.de;

  const highlights = [
    {
      label: t.whyCard1Label,
      title: t.whyCard1Title,
      desc: t.whyCard1Desc,
    },
    {
      label: t.whyCard2Label,
      title: t.whyCard2Title,
      desc: t.whyCard2Desc,
    },
    {
      label: t.whyCard3Label,
      title: t.whyCard3Title,
      desc: t.whyCard3Desc,
    },
  ];

  const programs = [
    {
      name: t.program1Name,
      age: t.program1Age,
      description: t.program1Desc,
      chips: [t.chipPlay, t.chipBasics],
    },
    {
      name: t.program2Name,
      age: t.program2Age,
      description: t.program2Desc,
      chips: [t.chipBasics, t.chipFocus],
    },
    {
      name: t.program3Name,
      age: t.program3Age,
      description: t.program3Desc,
      chips: [t.chipGrowth, t.chipFocus],
    },
  ];

  const schedule = [
    { className: t.class1, time: t.time1 },
    { className: t.class2, time: t.time2 },
    { className: t.class3, time: t.time3 },
  ];

  const trust = [
    { value: t.trust1Value, label: t.trust1Label },
    { value: t.trust2Value, label: t.trust2Label },
    { value: t.trust3Value, label: t.trust3Label },
  ];

  return (
    <main className="min-h-screen bg-[#F4F4F4] text-[#1E1E1E]">
      <header className="sticky top-0 z-40 border-b border-[#D8E1EA] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="SV Helios Daglfing Badminton Club"
              width={200}
              height={200}
              className="h-12 w-auto object-contain md:h-14 lg:h-16"
            />

            <div className="leading-tight">
              <div className="text-[10px] font-medium tracking-[0.24em] text-[#3E5F87] md:text-xs">
                SV HELIOS DAGLFING
              </div>
              <div className="text-base font-semibold text-[#1E1E1E] md:text-lg">
                BADMINTON CLUB
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#schedule" className="transition hover:text-[#1E1E1E]">
                {t.navSchedule}
              </a>
              <a href="#jugend" className="transition hover:text-[#1E1E1E]">
                {t.navPrograms}
              </a>
              <a href="#contact" className="transition hover:text-[#1E1E1E]">
                {t.navContact}
              </a>
            </nav>

            <LanguageSwitcher lang={lang} />
          </div>

          <details className="md:hidden">
            <summary className="flex cursor-pointer list-none items-center rounded-full border border-[#D8E1EA] bg-white px-4 py-2 text-sm font-medium text-[#3E5F87]">
              Menu
            </summary>

            <div className="absolute right-6 top-[84px] w-[290px] rounded-[28px] border border-[#D8E1EA] bg-white p-5 shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
              <div className="mb-4">
                <LanguageSwitcher lang={lang} />
              </div>

              <nav className="flex flex-col gap-2 text-sm text-slate-700">
                <a
                  href="#schedule"
                  className="rounded-2xl px-3 py-2 transition hover:bg-[#F8FAFC]"
                >
                  {t.navSchedule}
                </a>
                <a
                  href="#jugend"
                  className="rounded-2xl px-3 py-2 transition hover:bg-[#F8FAFC]"
                >
                  {t.navPrograms}
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl px-3 py-2 transition hover:bg-[#F8FAFC]"
                >
                  {t.navContact}
                </a>
              </nav>
            </div>
          </details>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(107,151,197,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(175,195,218,0.28),_transparent_28%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#AFC3DA] bg-[#E7EEF6] px-4 py-1.5 text-sm font-medium text-[#3E5F87]">
              {t.heroBadge}
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-[#1E1E1E] md:text-6xl md:leading-[1.05]">
              {t.heroTitle1}
              <br />
              {t.heroTitle2}
              {t.heroTitle3 ? (
                <>
                  <br />
                  {t.heroTitle3}
                </>
              ) : null}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {t.heroDesc}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-[#6b97c5] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {t.ctaPrimary}
              </a>

              <a
                href="#jugend"
                className="rounded-full border border-[#C9D5E2] bg-white px-6 py-3 text-sm font-medium text-[#3E5F87] transition hover:bg-[#F8FAFC]"
              >
                {t.ctaSecondary}
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {trust.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[28px] border border-[#D8E1EA] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.06)]"
                >
                  <div className="text-2xl font-semibold tracking-tight text-[#1E1E1E]">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[32px] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-[#D8E1EA]">
              <div className="text-sm font-medium text-[#3E5F87]">
                {t.whyTitle}
              </div>

              <div className="mt-5 space-y-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] bg-[#F8FAFC] px-5 py-4 ring-1 ring-[#D8E1EA]"
                  >
                    <div className="text-xs font-medium uppercase tracking-[0.18em] text-[#3E5F87]">
                      {item.label}
                    </div>
                    <div className="mt-1 text-lg font-medium text-[#1E1E1E]">
                      {item.title}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="jugend" className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-[#3E5F87]">
            {t.programsEyebrow}
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {t.programsTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {t.programsDesc}
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.name}
              className="rounded-[32px] bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.08)] ring-1 ring-[#D8E1EA] transition hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,23,42,0.10)]"
            >
              <div className="inline-flex rounded-full bg-[#E7EEF6] px-3 py-1 text-sm font-medium text-[#3E5F87] ring-1 ring-[#D6E2EE]">
                {program.age}
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#1E1E1E]">
                {program.name}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {program.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {program.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[#D8E1EA] bg-[#F8FAFC] px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div className="rounded-[32px] bg-[#3E5F87] p-8 text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-[#DCE7F2]">
              {t.coreEyebrow}
            </div>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              {t.coreTitle}
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#E7EEF6]">
              {t.coreDesc}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] border border-[#D8E1EA] bg-[#F8FAFC] p-6 shadow-[0_1px_2px_rgba(15,23,42,0.05)]"
              >
                <div className="text-sm font-medium text-[#3E5F87]">
                  {item.label}
                </div>

                <div className="mt-3 text-xl font-semibold tracking-tight text-[#1E1E1E]">
                  {item.title}
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-[#3E5F87]">
              {t.scheduleEyebrow}
            </div>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {t.scheduleTitle}
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              {t.scheduleDesc}
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.08)] ring-1 ring-[#D8E1EA]">
            <div className="space-y-3">
              {schedule.map((item) => (
                <div
                  key={item.className}
                  className="flex flex-col gap-2 rounded-[24px] border border-[#D8E1EA] bg-[#F8FAFC] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="text-base font-medium text-[#1E1E1E]">
                    {item.className}
                  </div>
                  <div className="text-sm text-slate-600">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[linear-gradient(135deg,#3E5F87_0%,#6b97c5_100%)] px-8 py-12 text-white shadow-[0_24px_60px_rgba(15,23,42,0.24)] lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-[#DCE7F2]">
                {t.contactEyebrow}
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {t.contactTitle}
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#EEF3F8]">
                {t.contactDesc}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="#"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-[#1E1E1E] transition hover:bg-slate-100"
              >
                {t.contactPrimary}
              </a>

              <a
                href="#"
                className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t.contactSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}