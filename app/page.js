// app/page.js
import Image from "next/image";
import heroBg from "../public/background_V4.jpg";

export default function HomePage() {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative w-full h-[120vh] overflow-hidden">
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-top filter brightness-[0.85] scale-105 transform transition-transform duration-[20s] hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <span className="text-white/90 font-light tracking-[0.2em] uppercase text-sm mb-8 animate-fadeIn">연세대학교 AI/IT 창업 학회</span>
          <h1 className="text-7xl md:text-9xl font-extrabold text-white tracking-tight leading-tight animate-slideUp bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-200 to-white">
            Learn<span className="text-sky-400">.</span><br/>
            Create<span className="text-sky-400">.</span><br/>
            Innovate<span className="text-sky-400">.</span>
          </h1>
          <p className="mt-12 text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed animate-fadeIn delay-200 tracking-wide">
            최신의 AI/IT 기술과 당신의 아이디어가 만나는 곳.<br/>
            혁신적인 아이디어가 현실이 되는 곳.
          </p>
          <p className="mt-6 text-lg md:text-xl text-white/80 font-medium max-w-3xl leading-relaxed animate-fadeIn delay-200 tracking-wider">
            AI를 이해하고 활용하여 경계를 뛰어넘는 혁신을 추구합니다
          </p>
          <div className="mt-16 space-x-8 animate-fadeIn delay-300">
            <a
              href="/join"
              className="inline-block bg-white/10 backdrop-blur-sm text-white font-medium px-14 py-5 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-white/20"
            >
              지원하기
            </a>
            <a
              href="/about"
              className="inline-block bg-sky-500/10 backdrop-blur-sm text-white font-medium px-14 py-5 rounded-full hover:bg-sky-500/20 transition-all duration-300 border border-sky-400/20 shadow-lg hover:shadow-sky-400/20"
            >
              더 알아보기
            </a>
          </div>
          <a
            href="/faq"
            className="mt-12 text-white/60 hover:text-white text-lg animate-fadeIn delay-400 transition-all duration-300 hover:tracking-wider"
          >
            인공지능을 잘 몰라도 따라갈 수 있을까요?
          </a>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="max-w-7xl mx-auto px-8 py-40 bg-gradient-to-b from-white via-gray-50 to-white">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-24">
          <span className="gradient-text mb-12">Our Philosophy</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="group bg-white/50 backdrop-blur rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-sky-100">
            <h3 className="text-2xl font-bold text-navy mb-6 group-hover:text-sky-700 transition-colors">Quick Adaptation</h3>
            <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors">
            오늘의 최첨단은 내일의 구식입니다. 하루에도 수백 개의 모델 논문 프로덕트가 쏟아지고, 기획된 서비스가 하루 아침에 백지화가 되곤 합니다. <br/><br/>
            우린 그 빠른 흐름을 지속적으로 학습하고 추적하여 남들보다 한 발 앞서 나가는 경험을 만들어 나갑니다. 
            </p>
          </div>
          <div className="group bg-white/50 backdrop-blur rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-sky-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-sky-700 transition-colors">Sensitivity</h3>
            <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors">
              변화를 읽지 못하면, 아무리 좋은 기술도 무용지물입니다. 우리는 최신 AI 지식 뿐 아니라, 시장 동향과 사용자 니즈를 관찰·분석하는 감각을 키웁니다. <br/><br/>
              남들보다 빠르고 예민하게 변화를 읽고 따라가며 다음의 변화를 만들어 나갑니다.
            </p>
          </div>
          <div className="group bg-white/50 backdrop-blur rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 hover:border-sky-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-sky-700 transition-colors">Value Creation</h3>
            <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-800 transition-colors">
            Lean StartUp 방법론을 기반으로 아이디어를 빠르게 검증하고 실패하기를 반복해 나가는 과정을 직접 수행합니다. 이 과정에서 쌓인 경험은 커다란 성장을 가져다줄 자양분이 될 것입니다. <br/><br/>
            우리는 그 경험을 바탕으로 더 나은 아이디어를 만들어 나가고, 그 아이디어를 실현시키며 가치를 창출합니다. 
            </p>
          </div>
        </div>
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-blue-50 rounded-3xl transform -skew-y-2"></div>
          <div className="relative max-w-4xl mx-auto p-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-gray-800 font-bold mb-6">
                Where Technology Turns into Value
              </h2>
              <p className="text-xl text-gray-600 font-medium">
                우리는 AI를 이해하고 활용하여 경계를 뛰어넘는 혁신을 추구합니다.
              </p>
            </div>

            <div className="space-y-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sky-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">기술 이해의 중요성</h3>
                    <p className="text-gray-500 leading-relaxed">
                      <strong className="text-gray-600">기술에 대한 깊은 이해 없이는 혁신을 이루기 어렵습니다.</strong> 단순한 아이디어만으로는 지속적인 변화를 만들어낼 수 없으며, AI가 무엇을 할 수 있고, 무엇을 할 수 없는지를 아는 것이야말로 혁신의 출발점이기 때문입니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sky-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">경계를 뛰어넘는 혁신</h3>
                    <p className="text-gray-500 leading-relaxed">
                      우리가 말하는 '경계를 뛰어넘는 혁신'이란 AI에 대한 깊은 이해를 바탕으로, 기술 변화 속에서 작은 틈을 발견하고 빠르게 실행하는 것입니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-sky-100/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">우리의 접근 방식</h3>
                    <p className="text-gray-500 leading-relaxed">
                      우리는 Microsoft나 Apple처럼 혁명을 이끄는 기업이 되려는 것이 아닙니다. 대신, 그러한 변화 속에서 새로운 가치를 창출한 네이버, 카카오, 배달의민족처럼 작은 혁신을 만들어가고자 합니다. 마찬가지로, 우리는 OpenAI가 되고자 하지 않습니다. OpenAI가 만들어낸 생성형 AI 혁명을 발판 삼아, 새로운 기회를 포착하고 혁신을 이루고자 합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-xl text-gray-600 font-medium">
                  "GPT가 탄생한 지 3년이 지난 지금, 우리에게 네이버, 카카오, 배달의민족처럼 당연한 AI 기반 서비스가 존재하나요? 우리는 그 빈자리를 채울 혁신을 만들어가고자 합니다."
                </p>
              </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
