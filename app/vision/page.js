// app/vision/page.js
export default function VisionPage() {
  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-r from-navy to-sky-900 py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold text-white mb-8 animate-fadeInUp">Our Vision</h1>
          <p className="text-xl text-white/90 leading-relaxed animate-fadeInUp delay-100">
            CREAI+IT는 AI와 창업의 융합을 통해<br />
            대한민국 AI 생태계의 새로운 패러다임을 주도합니다.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        <section className="animate-fadeInUp">
          <h2 className="text-4xl font-bold gradient-text mb-12">Mission Statement</h2>
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <p className="text-2xl text-gray-800 leading-relaxed text-center">
              "우리는 AI 기술과 창업 역량의 융합을 통해<br />
              <span className="font-bold text-sky-700">사회적 가치를 창출하는</span><br />
              차세대 혁신가들의 커뮤니티입니다."
            </p>
          </div>
        </section>

        <section className="animate-fadeInUp">
          <h2 className="text-4xl font-bold gradient-text mb-12">Strategic Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mb-8 flex items-center justify-center text-white font-bold text-xl">
                1Y
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">단기 목표</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>MLOps 고도화: Langfuse, W&B 활용 안정적 AI 서비스 운영</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>5개 이상 프로젝트 배출 및 각 1000+ MAU 달성</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>분기별 Demo Day 개최 및 시드 투자 유치</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mb-8 flex items-center justify-center text-white font-bold text-xl">
                3Y
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">중기 목표</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>글로벌 AI 연구소/액셀러레이터와 파트너십 구축</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>창업팀 10개+ 육성 및 누적 투자액 100억 달성</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>자체 AI+창업 컨퍼런스 개최 및 EdTech 솔루션 런칭</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mb-8 flex items-center justify-center text-white font-bold text-xl">
                5Y+
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">장기 비전</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>AI & 창업 융합 생태계의 중심지로 자리매김</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>오픈소스 기여 및 AI 연구 성과 글로벌 공유</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>교육/의료/환경 분야 임팩트 창업 지속 배출</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
