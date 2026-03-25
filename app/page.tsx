export default function DaglepingKidsBadmintonHomepage() {
  const highlights = [
    {
      label: "체험 중심 수업",
      title: "즐겁게 시작하는 첫 배드민턴",
      desc: "놀이와 기본기를 균형 있게 구성해 아이가 자연스럽게 운동에 익숙해지도록 돕습니다.",
    },
    {
      label: "안전한 환경",
      title: "부모가 안심하는 수업 운영",
      desc: "수업 강도와 동선을 연령별로 조절하고, 무리 없는 훈련 흐름으로 진행합니다.",
    },
    {
      label: "성장 기록",
      title: "실력과 자신감을 함께 키우는 과정",
      desc: "기초 체력, 라켓 감각, 협동심까지 아이의 변화를 단계적으로 경험할 수 있습니다.",
    },
  ];

  const programs = [
    {
      name: "유아 스타터",
      age: "5–7세",
      description:
        "놀이형 프로그램으로 라켓 잡기, 셔틀 감각, 점프와 스텝의 기초를 배웁니다.",
      chips: ["놀이 중심", "50분 수업", "기초 움직임"],
    },
    {
      name: "초등 베이직",
      age: "8–10세",
      description:
        "기본 자세, 서비스, 랠리, 코트 이동을 익히며 배드민턴의 핵심 기초를 다집니다.",
      chips: ["기초 기술", "집중력 향상", "주 2회"],
    },
    {
      name: "초등 그로우",
      age: "11–13세",
      description:
        "기초를 바탕으로 경기 감각, 체력, 협동심을 강화하며 자신 있게 플레이할 수 있도록 돕습니다.",
      chips: ["성장 단계", "경기 감각", "주 3회"],
    },
  ];

  const schedule = [
    { className: "유아 스타터", time: "화·목 16:00–16:50" },
    { className: "초등 베이직", time: "화·목 17:00–18:00" },
    { className: "초등 그로우", time: "월·수·금 18:00–19:00" },
  ];

  const trust = [
    { value: "5–13세", label: "연령별 반 운영" },
    { value: "소수 정원", label: "밀도 있는 피드백" },
    { value: "체험 가능", label: "첫 방문 부담 완화" },
  ];

  return (
    <main className="min-h-screen bg-[#F4F4F4] text-[#1E1E1E]">
      <header className="sticky top-0 z-40 border-b border-[#D8E1EA]/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#3E5F87]">
              Dagleping Kids Badminton
            </div>
            <div className="mt-1 text-lg font-semibold">다글핑 배드민턴 어린이 부서</div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[#475569] md:flex">
            <a href="#programs" className="transition hover:text-[#1E1E1E]">
              프로그램
            </a>
            <a href="#schedule" className="transition hover:text-[#1E1E1E]">
              시간표
            </a>
            <a href="#contact" className="transition hover:text-[#1E1E1E]">
              상담 문의
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-[#6b97c5] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:shadow-md"
          >
            무료 체험 신청
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(107,151,197,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(175,195,218,0.28),_transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#AFC3DA] bg-[#E7EEF6] px-4 py-1.5 text-sm font-medium text-[#3E5F87]">
              키즈 스포츠를 위한 Material Design 기반 리디자인
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-[#1E1E1E] md:text-6xl md:leading-[1.08]">
              아이는 즐겁게 뛰고,
              <br />
              부모는 안심하는
              <br />
              어린이 배드민턴 클래스
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#475569]">
              다글핑 어린이 부서는 아이의 첫 운동 경험을 즐겁고 안정적으로 설계합니다.
              연령별 맞춤 수업과 명확한 안내 흐름으로 체험 신청까지 자연스럽게 이어집니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-[#6b97c5] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:shadow-md"
              >
                무료 체험 신청하기
              </a>
              <a
                href="#programs"
                className="rounded-full border border-[#C9D5E2] bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#F8FAFC]"
              >
                프로그램 살펴보기
              </a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {trust.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[28px] border border-[#D8E1EA] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.06)]"
                >
                  <div className="text-2xl font-semibold tracking-tight text-[#1E1E1E]">{item.value}</div>
                  <div className="mt-1 text-sm text-[#475569]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[32px] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-[#D8E1EA]">
              <div className="text-sm font-medium text-[#3E5F87]">Why Dagleping</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                체험부터 등록까지 이해하기 쉬운 구조
              </h2>
              <div className="mt-5 space-y-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] bg-[#F8FAFC] px-5 py-4 ring-1 ring-[#D8E1EA]"
                  >
                    <div className="text-xs font-medium uppercase tracking-[0.18em] text-[#3E5F87]">
                      {item.label}
                    </div>
                    <div className="mt-1 text-lg font-medium text-[#1E1E1E]">{item.title}</div>
                    <p className="mt-2 text-sm leading-6 text-[#475569]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-[#3E5F87]">Programs</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">연령과 수준에 맞춘 프로그램</h2>
          <p className="mt-4 text-base leading-7 text-[#475569]">
            Material Design의 정보 위계를 반영해 반 선택이 쉽도록 구성했습니다. 부모는 빠르게 비교하고,
            아이에게 맞는 수업을 바로 찾을 수 있습니다.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.name}
              className="rounded-[32px] bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.08)] ring-1 ring-[#D8E1EA] transition hover:shadow-[0_12px_28px_rgba(15,23,42,0.10)]"
            >
              <div className="inline-flex rounded-full bg-[#E7EEF6] px-3 py-1 text-sm font-medium text-[#3E5F87] ring-1 ring-[#D6E2EE]">
                {program.age}
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#1E1E1E]">{program.name}</h3>
              <p className="mt-4 text-sm leading-7 text-[#475569]">{program.description}</p>
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
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-[#DCE7F2]">Core Value</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">재미, 성장, 안전의 균형</h2>
            <p className="mt-4 text-sm leading-7 text-[#E7EEF6]">
              아이가 즐거워야 오래 다니고, 부모가 안심해야 등록이 이어집니다. 그래서 비주얼보다 먼저
              구조와 신뢰를 설계했습니다.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] border border-[#D8E1EA] bg-[#f8fafc] p-6 shadow-[0_1px_2px_rgba(15,23,42,0.05)]"
              >
                <div className="text-sm font-medium text-[#3E5F87]">{item.label}</div>
                <div className="mt-3 text-xl font-semibold tracking-tight">{item.title}</div>
                <p className="mt-3 text-sm leading-6 text-[#475569]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-[#3E5F87]">Schedule</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">한눈에 보는 수업 시간</h2>
            <p className="mt-4 text-base leading-7 text-[#475569]">
              시간표는 빠르게 스캔되도록 시각적 밀도를 낮추고, 카드 형태로 정리했습니다.
            </p>
          </div>
          <div className="rounded-[32px] bg-white p-4 shadow-[0_1px_3px_rgba(15,23,42,0.08)] ring-1 ring-[#D8E1EA]">
            <div className="space-y-3">
              {schedule.map((item) => (
                <div
                  key={item.className}
                  className="flex flex-col gap-2 rounded-[24px] border border-[#D8E1EA] bg-[#F8FAFC] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="text-base font-medium text-[#1E1E1E]">{item.className}</div>
                  <div className="text-sm text-[#475569]">{item.time}</div>
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
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-[#DCE7F2]">Contact</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                우리 아이에게 맞는 반을 함께 찾아보세요
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#EEF3F8]">
                지금은 예시 정보가 들어가 있으니, 다음 단계에서 실제 연락처·주소·카카오톡 채널·체험 신청 링크를
                연결하면 바로 운영 가능한 구조입니다.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="#"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-[#1E1E1E] transition hover:bg-slate-100"
              >
                체험 수업 신청
              </a>
              <a
                href="#"
                className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
              >
                카카오톡 상담
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
