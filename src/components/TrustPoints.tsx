"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, ShieldCheck, Wrench, ClipboardCheck, ChevronDown, Phone, Sparkles, Layers } from "lucide-react";
import { DynamicContent } from "@/lib/dynamicHome";
import { DEFAULT_OPERATOR } from "@/lib/operatorConfig";

const TrustPoints = ({ dynamic }: { dynamic?: DynamicContent | null }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isFinish = dynamic?.templateType === "finish";
  const operator = dynamic?.operator || DEFAULT_OPERATOR;

  const moldPoints = [
    {
      image: "/images/trust/trust-1.jpg",
      icon: <Search size={20} />,
      title: "정밀한 원인 진단",
      description: "단순히 지우는 것은 임시방편입니다. 곰팡이가 생기는 근본 원인(결로, 습도, 누수)을 먼저 파악합니다.",
    },
    {
      image: "/images/trust/trust-2.jpg",
      icon: <ShieldCheck size={20} />,
      title: "재발 방지 시스템",
      description: "특수 코팅과 단열 보완 시공을 통해 곰팡이가 다시는 자랄 수 없는 환경을 만드는 데 집중합니다.",
      position: "object-top",
    },
    {
      image: "/images/trust/trust-3.jpg",
      icon: <Wrench size={20} />,
      title: "현장 맞춤 시공",
      description: "다양한 곰팡이 발생 원인, 그렇기 때문에 무조건 비싼 시공이 정답은 아닙니다. 현장에 맞는 시공을 진단해드립니다.",
      position: "object-top",
    },
    {
      image: "/images/trust/trust-4.jpg",
      icon: <ClipboardCheck size={20} />,
      title: "투명한 책임 시공",
      description: "모든 공정은 사진으로 기록하며, 상담부터 사후 관리까지 현장 작업자가 직접 책임지고 관리합니다.",
    },
  ];

  const finishPoints = [
    {
      image: "/images/trust/trust-1.jpg",
      icon: <Wrench size={20} />,
      title: "정밀한 밑작업",
      description: "오래 가는 시공의 비결은 기초입니다. 페인트 부식층 탈거 및 타일 틈새 깊이 확보 등 기초 공정을 최우선으로 합니다.",
    },
    {
      image: "/images/trust/trust-2.jpg",
      icon: <Sparkles size={20} />,
      title: "친환경 프리미엄 자재",
      description: "냄새와 유해물질이 없는 최고급 친수성 세라믹 도료와 내오염성이 보장된 정품 친환경 줄눈재만 사용합니다.",
      position: "object-top",
    },
    {
      image: "/images/trust/trust-3.jpg",
      icon: <ShieldCheck size={20} />,
      title: "완벽한 오염 차단",
      description: "수분 흡수를 원천적으로 차단해 타일 사이 물때와 베란다 결로로 인한 오염이 고착화되지 않고 청소가 쉬워집니다.",
      position: "object-top",
    },
    {
      image: "/images/trust/trust-4.jpg",
      icon: <Layers size={20} />,
      title: "숙련 전문팀 직접 시공",
      description: "하도급 없는 직영 책임 시공을 원칙으로 삼아, 수많은 신축 및 구축 현장에서 검증된 장인이 섬세하게 마감합니다.",
    },
  ];

  const points = isFinish ? finishPoints : moldPoints;

  // 모바일 전용 단축 설명 (2줄 내외)
  const moldMobileDescriptions = [
    "단순 청소가 아닌 곰팡이 발생 근본 원인(결로, 누수 등)을 정확히 진단합니다.",
    "특수 코팅 및 단열 보완을 적용해 곰팡이가 다시 재발하지 않도록 시공합니다.",
    "현장 오염 상태에 꼭 필요한 합리적인 맞춤 시공만을 투명하게 제안합니다.",
    "상담부터 사후 관리까지 전 과정을 사진으로 기록하며 투명하게 책임집니다."
  ];

  const finishMobileDescriptions = [
    "밀착 시공을 위해 바탕면 연마 및 줄눈 틈 파내기 등 밑작업을 정교하게 진행합니다.",
    "유해물질 없는 최고급 친환경 바이오 세라믹 및 고밀도 정품 줄눈재만 사용합니다.",
    "수분과 먼지가 스며들지 못하게 원천 차단하여 가벼운 물청소만으로 유지됩니다.",
    "시공팀이 직접 상담 내용과 동일하게 책임지고 균일하고 반듯하게 마감합니다."
  ];

  const mobileDescriptions = isFinish ? finishMobileDescriptions : moldMobileDescriptions;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="trust" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* 공통 헤더 */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-black mb-4 lg:mb-6">
            {operator.operatorName}이<br className="lg:hidden" /> <span className="text-primary-blue">특별한 4가지 이유</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-blue mx-auto mb-6 lg:mb-8 rounded-full"></div>
          <p className="text-gray-500 text-base lg:text-lg font-medium">
            {isFinish 
              ? "오랫동안 유지되는 깨끗하고 쾌적한 공간을 선사해 드립니다." 
              : "단순 청소 업체와 비교를 거부합니다. 우리는 고객님의 주거 환경을 연구합니다."}
          </p>
        </div>

        {/* 1. PC 화면 레이아웃 */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-primary-blue/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={point.image}
                  alt={point.title}
                  fill
                  className={`object-cover ${point.position || "object-center"} group-hover:scale-110 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-blue/10 rounded-xl flex items-center justify-center text-primary-blue">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">
                    {point.title}
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed text-[15px] font-medium">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. 모바일 화면 전용 레이아웃 */}
        <div className="block lg:hidden max-w-md mx-auto space-y-6">
          {/* 4가지 이유 요약 뱃지 리스트 */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {points.map((point, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5"
              >
                <div className="w-6 h-6 bg-primary-blue/10 rounded-lg flex items-center justify-center text-primary-blue shrink-0">
                  {React.cloneElement(point.icon as React.ReactElement<{ size?: number }>, { size: 14 })}
                </div>
                <span className="text-xs font-black text-gray-900 tracking-tight">{point.title}</span>
              </div>
            ))}
          </div>

          {/* 첫 번째 카드: 이미지 포함 강조 카드 (정밀한 밑작업/진단) */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={points[0].image}
                alt={points[0].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                <div className="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center">
                  {points[0].icon}
                </div>
                <h3 className="text-lg font-black tracking-tight">{points[0].title}</h3>
              </div>
            </div>
            <div className="p-5">
              <p className="text-[14px] leading-relaxed text-gray-600 font-medium break-keep">
                {mobileDescriptions[0]}
              </p>
            </div>
          </div>

          {/* 나머지 3개 아코디언 카드 */}
          <div className="space-y-3">
            {points.slice(1).map((point, index) => {
              const pointIndex = index + 1;
              const isOpen = openIndex === pointIndex;
              return (
                <div 
                  key={pointIndex}
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen ? "border-primary-blue bg-white shadow-sm" : "border-gray-100 bg-gray-50"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(pointIndex)}
                    className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        isOpen ? "bg-primary-blue text-white" : "bg-primary-blue/10 text-primary-blue"
                      }`}>
                        {React.cloneElement(point.icon as React.ReactElement<{ size?: number }>, { size: 16 })}
                      </div>
                      <span className="text-[15px] font-black text-gray-900 tracking-tight">{point.title}</span>
                    </div>
                    <ChevronDown 
                      size={18} 
                      className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary-blue" : ""}`} 
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-0 text-[14px] leading-relaxed text-gray-600 font-medium break-keep">
                      <p className="pl-10 border-l-2 border-primary-blue/10">
                        {mobileDescriptions[pointIndex]}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 모바일 하단 CTA */}
          <div className="pt-4">
            <a
              href={`tel:${operator.contactPhone}`}
              className="w-full h-12 flex items-center justify-center space-x-2 bg-primary-blue text-white rounded-xl font-bold text-[15px] shadow-lg shadow-primary-blue/20 hover:bg-blue-700 transition-colors"
            >
              <Phone size={18} />
              <span>{isFinish ? "친환경 마감 무료 견적 받기" : "사진으로 원인 상담받기"}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustPoints;
