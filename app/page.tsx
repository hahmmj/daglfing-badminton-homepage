export default function DaglepingKidsBadmintonHomepage() {
  const programs = [
    {
      title: "유아반",
      age: "5~7세",
      desc: "놀이 중심으로 라켓 잡기, 셔틀콕 감각 익히기, 기본 움직임을 배워요.",
    },
    {
      title: "초등 기초반",
      age: "8~10세",
      desc: "기초 자세, 스텝, 서비스, 랠리의 기본을 차근차근 익혀요.",
    },
    {
      title: "초등 성장반",
      age: "11~13세",
      desc: "기초를 바탕으로 경기 감각, 체력, 협동심까지 함께 키워요.",
    },
  ];

  const features = [
    "아이 눈높이에 맞춘 즐거운 수업",
    "기초 체력과 운동 습관 형성",
    "예절·집중력·협동심을 함께 배우는 프로그램",
    "안전 중심의 훈련 환경",
  ];

  const schedule = [
    { cls: "유아반", time: "화·목 16:00~16:50" },
    { cls: "초등 기초반", time: "화·목 17:00~18:00" },
    { cls: "초등 성장반", time: "월·수·금 18:00~19:00" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-emerald-100" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-block rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700">
                다글핑 배드민턴 어린이 부서
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                즐겁게 뛰고,
                <br />
                건강하게 자라는
                <br />
                어린이 배드민턴
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
                다글핑 어린이 부서는 아이들이 배드민턴을 통해 체력, 자신감,
                협동심을 자연스럽게 키울 수 있도록 돕는 성장 중심 프로그램입니다.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]">
                  무료 체험 신청
                </button>
                <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                  수업 시간 보기
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200">
                <div className="text-sm text-slate-500">대상</div>
                <div className="mt-2 text-2xl font-bold">5세 ~ 13세</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  연령과 수준에 맞춘 맞춤형 클래스로 운영합니다.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-200">
                <div className="text-sm text-slate-500">핵심 가치</div>
                <div className="mt-2 text-2xl font-bold">재미 · 성장 · 안전</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  운동 실력만이 아니라 좋은 습관과 자신감까지 함께 키워요.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-lg shadow-slate-200 sm:col-span-2">
                <div className="text-sm text-slate-300">문의</div>
                <div className="mt-2 text-2xl font-bold">010-0000-0000</div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  카카오톡 채널 또는 전화로 상담 및 체험 수업 예약이 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">왜 다글핑 어린이 부서인가요?</h2>
          <p className="mt-3 text-slate-600">
            아이들이 오래 즐길 수 있도록, 재미와 기본기를 함께 설계했습니다.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <div key={item} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="text-lg font-semibold">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">프로그램 안내</h2>
              <p className="mt-2 text-slate-600">
                연령과 운동 경험에 따라 반을 선택할 수 있어요.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {programs.map((program) => (
              <div key={program.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-medium text-sky-700">{program.age}</div>
                <h3 className="mt-2 text-2xl font-bold">{program.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-sky-50 p-8">
            <h2 className="text-3xl font-bold">수업 시간</h2>
            <div className="mt-6 space-y-4">
              {schedule.map((item) => (
                <div key={item.cls} className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm">
                  <span className="font-semibold">{item.cls}</span>
                  <span className="text-slate-600">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-emerald-50 p-8">
            <h2 className="text-3xl font-bold">이렇게 신청하세요</h2>
            <ol className="mt-6 space-y-4 text-slate-700">
              <li className="rounded-2xl bg-white px-5 py-4 shadow-sm">1. 전화 또는 카카오톡으로 상담</li>
              <li className="rounded-2xl bg-white px-5 py-4 shadow-sm">2. 아이 연령과 수준에 맞는 반 추천</li>
              <li className="rounded-2xl bg-white px-5 py-4 shadow-sm">3. 무료 체험 수업 예약</li>
              <li className="rounded-2xl bg-white px-5 py-4 shadow-sm">4. 정규 등록 후 즐겁게 시작</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">우리 아이의 첫 라켓, 다글핑에서 시작하세요</h2>
          <p className="mt-4 text-slate-300">
            체험 수업과 상담을 통해 아이에게 맞는 반을 안내해드립니다.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">
              체험 신청하기
            </button>
            <button className="rounded-2xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white">
              문의하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
