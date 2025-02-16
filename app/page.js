// app/page.js
import Image from "next/image";
import heroBg from "../public/hero-bg.jpg";

export default function HomePage() {
  return (
    <section>
      {/* Hero 섹션 */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center filter brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <span className="text-sky-400 font-semibold mb-4 animate-slideUp">연세대학교 AI/IT 창업 학회</span>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-xl animate-slideUp">
            Create.<br/>Innovate.<br/>Transform.
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-white/90 font-light max-w-3xl animate-slideUp delay-200">
            최첨단 AI/IT 기술과 창업 전문성이 만나는 곳.<br/>
            당신의 혁신적인 아이디어가 현실이 되는 순간.
          </p>
          <div className="mt-12 space-x-6 animate-slideUp delay-300">
            <a
              href="/join"
              className="inline-block bg-white/10 backdrop-blur-md text-white font-semibold px-10 py-4 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              지원하기 
            </a>
            <a
              href="/about"
              className="inline-block bg-white/10 backdrop-blur-md text-white font-semibold px-10 py-4 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              더 알아보기
            </a>
          </div>
        </div>
      </div>

      {/* 특징 섹션 */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">왜 CREAI+IT인가?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-lg card-hover border border-gray-100">
            <div className="bg-gradient-to-br from-sky-500 to-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              {/* Icon here */}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">최첨단 AI 전문성</h3>
            <p className="text-gray-600 leading-relaxed">
              현업 AI 전문가들과 함께하는 실전 프로젝트와 심층 연구를 통해 
              실무에서 즉시 활용 가능한 전문성을 획득하세요.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-navy mb-4">창업 중심 실무</h3>
            <p className="text-charcoal text-lg">
              단순 학습을 넘어서 아이디어 발굴부터 MVP 개발, 시장 검증까지<br />
              실제 창업까지 연결되는 전 과정을 경험합니다.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-navy mb-4">강력한 네트워크</h3>
            <p className="text-charcoal text-lg">
              VC, 스타트업 대표, 액셀러레이터 등 다양한 업계 전문가와의<br />
              긴밀한 교류를 통해 성장의 발판을 마련합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
