"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { DynamicContent } from "@/lib/dynamicHome";
import { DEFAULT_OPERATOR } from "@/lib/operatorConfig";

const Hero = ({ dynamic }: { dynamic?: DynamicContent | null }) => {
  const operator = dynamic?.operator || DEFAULT_OPERATOR;

  const getHeroImage = () => {
    if (!dynamic) return "/images/hero-main.jpg";
    if (dynamic.service.includes("줄눈시공") || dynamic.service.includes("줄눈")) {
      return "/images/hero-grout.jpg";
    }
    if (dynamic.service.includes("탄성코트")) {
      return "/images/hero-elastic.jpg";
    }
    if (dynamic.templateType === "finish") {
      return "/images/hero-elastic.jpg";
    }
    return "/images/hero-main.jpg";
  };

  const getHeroAlt = () => {
    if (!dynamic) return "곰팡이 시공 현장 메인 사진";
    if (dynamic.service.includes("줄눈시공") || dynamic.service.includes("줄눈")) {
      return "욕실 타일 줄눈시공 완료 사진";
    }
    if (dynamic.service.includes("탄성코트")) {
      return "베란다 탄성코트 시공 완료 사진";
    }
    return `${dynamic.service} 시공 완료 사진`;
  };

  return (
    <section className="relative lg:min-h-[90vh] min-h-0 flex items-center bg-white pt-24 pb-12 lg:pt-20 lg:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 items-center gap-8 lg:gap-16">
        {/* 텍스트 영역 */}
        <div className="z-10 text-center lg:text-left">
          <div className="inline-block px-6 py-2 border border-primary-blue/30 text-primary-blue rounded-full text-sm lg:text-base font-bold mb-6 lg:mb-8 tracking-wider bg-primary-blue/5">
            {dynamic?.templateType === "finish" 
              ? "탄성코트 / 줄눈시공 / 상가 및 베란다 리모델링" 
              : "곰팡이제거 / 결로방지 페인트 / 단열시공 / 탄성코트"}
          </div>
          
          {/* PC H1 영역 */}
          <h1 className="hidden lg:block text-5xl lg:text-7xl font-black text-gray-900 leading-[1.3] mb-8 tracking-tighter">
            {dynamic ? (
              dynamic.templateType === "finish" ? (
                <>
                  <span className="text-gray-900 block">{dynamic.h1}</span>
                  <span className="text-primary-blue">친환경 프리미엄 마감</span>으로 완벽하게
                </>
              ) : (
                <>
                  <span className="text-gray-900 block">{dynamic.h1}</span>
                  <span className="text-primary-blue">원인 분석</span>부터 맞춤 시공까지 확실하게
                </>
              )
            ) : (
              <>
                곰팡이, 지우면 끝?!<br />
                <span className="text-primary-blue">원인</span>을 해결해야<br />
                진짜 <span className="text-primary-blue">[끝]</span> 입니다.
              </>
            )}
          </h1>

          {/* 모바일 H1 영역 */}
          <h1 className="block lg:hidden text-3xl font-black text-gray-900 leading-[1.35] mb-5 tracking-tight break-keep [word-break:keep-all]">
            {dynamic ? (
              <>
                <span className="text-primary-blue block text-2xl mb-1">{dynamic.h1}</span>
                <span className="text-gray-900 block text-xl font-bold">
                  {dynamic.service.includes("곰팡이제거") && "원인 진단부터 재발 방지까지"}
                  {dynamic.service.includes("단열시공") && "결로 원인부터 먼저 확인합니다"}
                  {dynamic.service.includes("탄성코트") && "습기와 오염을 줄이는 맞춤 시공"}
                  {dynamic.service.includes("줄눈시공") && "욕실과 베란다 타일을 쾌적하게"}
                  {(dynamic.service.includes("결로방지") || dynamic.service.includes("페인트")) && "결로와 습기 원인을 함께 점검합니다"}
                  {!dynamic.service.includes("곰팡이제거") && !dynamic.service.includes("단열시공") && !dynamic.service.includes("탄성코트") && !dynamic.service.includes("줄눈시공") && !dynamic.service.includes("결로방지") && !dynamic.service.includes("페인트") && "현장 상태에 맞춰 해결합니다"}
                </span>
              </>
            ) : (
              <>
                곰팡이, 지우면 끝?!<br />
                <span className="text-primary-blue">원인</span>을 해결해야 진짜 끝입니다.
              </>
            )}
          </h1>

          {/* PC 보조 문구 영역 */}
          <p className="hidden lg:block text-lg lg:text-xl text-gray-500 mb-10 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
            {dynamic ? (
              <span className="text-gray-900 font-extrabold block mb-2">{dynamic.subtitle}</span>
            ) : (
              <>
                곰팡이는 결코 단순한 문제가 아닙니다.<br />
                지우기만 하면 또 생기며 반복되는 경우가 많습니다.<br />
              </>
            )}
            {dynamic?.templateType === "finish" ? (
              <>
                {operator.operatorName}은 <span className="font-bold text-gray-900">[고품질 친환경 자재]</span>와 <span className="font-bold text-gray-900">[숙련된 기술자 직접 시공]</span>으로<br />
                <span className="underline decoration-primary-blue/30 underline-offset-4 decoration-2 text-gray-900">들뜸 없고 오염에 강한 프리미엄 마감</span>을 약속드립니다.
              </>
            ) : (
              <>
                {operator.operatorName}은 <span className="font-bold text-gray-900">[근본적인 원인 점검]</span>과 <span className="font-bold text-gray-900">[현장 맞춤 시공]</span>으로<br />
                <span className="underline decoration-primary-blue/30 underline-offset-4 decoration-2 text-gray-900">재발하지 않는 &apos;해결&apos;을 제공</span>해드립니다.
              </>
            )}
          </p>

          {/* 모바일 보조 문구 영역 (2문장 이내) */}
          <p className="block lg:hidden text-[14px] sm:text-base text-gray-500 mb-8 leading-relaxed font-medium max-w-md mx-auto text-center break-keep [word-break:keep-all]">
            {dynamic ? (
              <>
                {dynamic.service.includes("곰팡이제거") && "곰팡이는 지우는 것보다 원인을 찾는 것이 먼저입니다. 사진 상담으로 발생 부위와 재발 가능성을 먼저 확인해보세요."}
                {dynamic.service.includes("단열시공") && "결로와 냉기 문제는 단순 도장만으로 해결되지 않을 수 있습니다. 벽면 상태와 습기 원인을 기준으로 시공 방향을 안내드립니다."}
                {dynamic.service.includes("탄성코트") && "베란다와 다용도실의 습기, 오염, 곰팡이 문제는 바탕면 상태에 따라 시공 방식이 달라집니다."}
                {dynamic.service.includes("줄눈시공") && "욕실과 베란다 타일 틈새 오염을 방지하고 인테리어 효과까지! 숙련된 정밀 시공으로 보답합니다."}
                {(dynamic.service.includes("결로방지") || dynamic.service.includes("페인트")) && "결로와 곰팡이 방지를 위해서는 페인트 도포 전 바탕면 건조와 원인 해결이 중요합니다. 사진 상담으로 시공 가능 여부부터 확인해보세요."}
                {!dynamic.service.includes("곰팡이제거") && !dynamic.service.includes("단열시공") && !dynamic.service.includes("탄성코트") && !dynamic.service.includes("줄눈시공") && !dynamic.service.includes("결로방지") && !dynamic.service.includes("페인트") && "모든 현장은 저마다 다른 상태를 가지고 있습니다. 전문가의 꼼꼼한 진단과 시공으로 공간의 쾌적함을 되찾아 드립니다."}
              </>
            ) : (
              <>
                곰팡이는 지우는 것보다 원인을 찾는 것이 중요합니다.<br />
                전문가의 원인 분석과 맞춤 시공으로 재발을 확실히 방지합니다.
              </>
            )}
          </p>

          {/* CTA 버튼 */}
          <div className="flex justify-center lg:justify-start mb-4 lg:mb-0">
            <a
              href={`tel:${operator.contactPhone}`}
              className="group flex items-center space-x-3 bg-primary-blue text-white px-8 py-4 rounded-xl text-base font-bold shadow-2xl shadow-primary-blue/30 hover:bg-blue-700 transition-all transform hover:-translate-y-1 w-full sm:w-fit justify-center"
            >
              <Phone size={20} />
              <span>무료상담 전화하기</span>
            </a>
          </div>
        </div>

        {/* 이미지 영역 */}
        <div className="relative z-10 p-4 lg:p-0 max-w-md mx-auto lg:max-w-none w-full">
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,70,255,0.15)] border-8 border-gray-50">
            <Image
              src={getHeroImage()}
              alt={getHeroAlt()}
              fill
              className="object-cover"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/hero-main.jpg";
              }}
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
