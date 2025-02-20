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
            함께 성장하는 혁신가들의 커뮤니티를 만듭니다.<br />
            <span className="text-sky-400 mt-2 inline-block">작은 시작이지만, 큰 꿈을 향해 나아갑니다.</span>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        <section className="animate-fadeInUp">
          <h2 className="text-4xl font-bold gradient-text mb-12">Mission Statement</h2>
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <p className="text-2xl text-gray-800 leading-relaxed text-center">
              "우리는 AI 기술과 창업 역량의 융합을 통해<br />
              <span className="font-bold text-sky-700">실질적인 가치를 만들어가는</span><br />
              차세대 혁신가들의 커뮤니티입니다."
            </p>
            <p className="text-lg text-gray-600 mt-6 italic">
              2024년, 우리의 첫 걸음은 작지만<br />
              AI 창업 생태계를 이끄는 단체가 되겠습니다.
            </p>
          </div>
        </section>

        <section className="animate-fadeInUp">
          <h2 className="text-4xl font-bold gradient-text mb-8 leading-tight">Strategic Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center text-white font-bold text-xl">
                1Y
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">단기 목표</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>AI 서비스 운영을 위한 MLOps 구축</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>5개 이상 프로젝트 배출 및 실사용자 확보</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>분기별 Demo Day 개최 및 피드백 수렴</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center text-white font-bold text-xl">
                3Y
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">중기 목표</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>국내 AI·창업 커뮤니티와의 협업 강화</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>창업팀 10개+ 육성 및 성공 사례 창출</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>자체 컨퍼런스 개최로 지식 공유 확대</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center text-white font-bold text-xl">
                5Y+
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">장기 비전</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>Alumni 간 지속적 협업·투자 사례 확대</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>기술·비즈니스 전문가 네트워크 구축</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-sky-500">•</span>
                  <span>실무 중심의 AI·창업 교육 프로그램 운영</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="animate-fadeInUp">
          <h2 className="text-4xl font-bold gradient-text mb-12">Our Community</h2>
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-100">
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8">
              CREAI+IT는 단순한 프로젝트 모임을 넘어, 
              <span className="font-semibold text-navy"> 기술 혁신가들이 지식과 경험을 나누며 
              함께 성장하는 네트워크</span>를 지향합니다. 
              <span className="text-sky-700 font-medium">열정과 끝없는 도전정신으로 
              대한민국을 넘어 글로벌 AI 창업의 미래를 선도할 것입니다.</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-navy">지속적인 협력</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Alumni 간 스타트업 공동 창업</li>
                  <li>• 기업-학회 R&D 프로젝트 협업</li>
                  <li>• 공모전/해커톤 팀 구성</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-navy">실무 역량 강화</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• AI/MLOps 실전 노하우 공유</li>
                  <li>• 비즈니스 개발 경험 교류</li>
                  <li>• UX/마케팅 전문성 확보</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
