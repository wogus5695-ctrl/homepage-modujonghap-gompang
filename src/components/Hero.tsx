import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { DynamicContent } from "@/lib/dynamicHome";

const Hero = ({ dynamic }: { dynamic?: DynamicContent | null }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white pt-20 overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 items-center gap-16">
        {/* 텍스트 영역 */}
        <div className="z-10 text-center lg:text-left">
          <div className="inline-block px-6 py-2 border border-primary-blue/30 text-primary-blue rounded-full text-base font-bold mb-8 tracking-wider bg-primary-blue/5">
            {dynamic?.service ?? "곰팡이제거 / 결로방지 페인트 / 단열시공 / 탄성코트"}
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.3] mb-8 tracking-tighter">
            {dynamic && (
              <span className="block text-2xl lg:text-3xl text-primary-blue mb-4 font-bold tracking-normal">
                {dynamic.region} {dynamic.service} 전문 시공 안내
              </span>
            )}
            곰팡이, 지우면 끝?!<br />
            <span className="text-primary-blue">원인</span>을 해결해야<br />
            진짜 <span className="text-primary-blue">[끝]</span> 입니다.
          </h1>

          <p className="text-lg lg:text-xl text-gray-500 mb-10 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
            {dynamic ? (
              <>
                <span className="text-gray-900 font-bold">{dynamic.region} {dynamic.service}</span>는 결코 단순한 문제가 아닙니다.<br />
                지우기만 하면 또 생기며 반복되는 경우가 많습니다.<br />
                모두종합환경은 <span className="font-bold text-gray-900">[근본적인 원인 점검]</span>과 <span className="font-bold text-gray-900">[현장 맞춤 시공]</span>으로<br />
                <span className="underline decoration-primary-blue/30 underline-offset-4 decoration-2 text-gray-900">재발하지 않는 &apos;해결&apos;을 제공</span>해드립니다.
              </>
            ) : (
              <>
                곰팡이는 결코 단순한 문제가 아닙니다.<br />
                지우기만 하면 또 생기며 반복되는 경우가 많습니다.<br />
                모두종합환경은 <span className="font-bold text-gray-900">[근본적인 원인 점검]</span>과 <span className="font-bold text-gray-900">[현장 맞춤 시공]</span>으로<br />
                <span className="underline decoration-primary-blue/30 underline-offset-4 decoration-2 text-gray-900">재발하지 않는 &apos;해결&apos;을 제공</span>해드립니다.
              </>
            )}
          </p>

          {/* 1번 CTA: 상단 소형 버튼 */}
          <div className="flex justify-center lg:justify-start">
            <a
              href="#contact"
              className="group flex items-center space-x-3 bg-primary-blue text-white px-8 py-4 rounded-xl text-base font-bold shadow-2xl shadow-primary-blue/30 hover:bg-blue-700 transition-all transform hover:-translate-y-1 w-fit"
            >
              <Phone size={20} />
              <span>무료 상담 바로가기</span>
            </a>
          </div>
        </div>

        {/* 이미지 영역 */}
        <div className="relative z-10 p-4 lg:p-0">
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,70,255,0.15)] border-8 border-gray-50">
            <Image
              src="/images/hero-main.jpg"
              alt="곰팡이 시공 현장 메인 사진"
              fill
              className="object-cover"
              priority
            />
            {/* 오버레이 효과 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-primary-blue shadow-lg uppercase tracking-widest">
              Actual Inspection Site
            </div>
          </div>
          {/* 장식 요소 */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl z-0"></div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-blue/5 rounded-full blur-2xl z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
