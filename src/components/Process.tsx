"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  MessageSquareText, 
  Camera, 
  FileText, 
  CheckCircle2, 
  SprayCan, 
  Paintbrush, 
  House, 
  Layers, 
  ChevronDown 
} from "lucide-react";
import { DynamicContent } from "@/lib/dynamicHome";

const Process = ({ dynamic }: { dynamic?: DynamicContent | null }) => {
  // 모바일에서 활성화(기본 펼침)할 서비스 카드를 설정합니다.
  // dynamic.service에 따라 강조할 시공 항목을 매핑합니다.
  const getActiveServiceId = () => {
    if (!dynamic) return "곰팡이제거";
    const svc = dynamic.service;
    if (svc.includes("단열시공")) return "단열시공";
    if (svc.includes("탄성코트")) return "탄성코트";
    if (svc.includes("결로방지") || svc.includes("페인트")) return "결로방지";
    return "곰팡이제거";
  };

  const activeServiceId = getActiveServiceId();
  const [openServiceId, setOpenServiceId] = useState<string | null>(activeServiceId);

  const steps = [
    { title: "상담 접수", icon: <MessageSquareText size={20} /> },
    { title: "사진/방문 진단", icon: <Camera size={20} /> },
    { title: "원인별 견적 안내", icon: <FileText size={20} /> },
    { title: "시공 및 사후 안내", icon: <CheckCircle2 size={20} /> }
  ];

  const services = [
    {
      id: "곰팡이제거",
      title: "곰팡이제거 및 방지코팅",
      icon: <SprayCan size={24} />,
      image: "/images/process/process-1.jpg",
      description: "벽지, 시멘트 속까지 침투한 곰팡이 균을 전문 약품으로 뿌리째 박멸하고, 재발하지 않도록 특수 항균 방지 코팅을 진행합니다."
    },
    {
      id: "결로방지",
      title: "결로 페인트 시공",
      icon: <Paintbrush size={24} />,
      image: "/images/process/process-2.jpg",
      description: "친환경 결로 방지 특수 페인트를 꼼꼼히 도포하여 실내 벽면에 결로 및 습기가 차는 현상을 근본적으로 차단합니다."
    },
    {
      id: "단열시공",
      title: "단열시공",
      icon: <House size={24} />,
      image: "/images/process/process-3.jpg",
      description: "아이소핑크, 이보드 등 고효율 정품 단열재와 빈틈없는 밀착 시공으로 외풍을 막고 결로 원인을 확실하게 해결합니다."
    },
    {
      id: "탄성코트",
      title: "탄성코트",
      icon: <Layers size={24} />,
      image: "/images/process/process-4.jpg",
      description: "베란다와 다용도실의 벽면을 오염과 습기로부터 영구 보호하는 프리미엄 친환경 세라믹/탄성코트를 도포합니다."
    }
  ];

  const toggleServiceAccordion = (id: string) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };

  return (
    <section id="process" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* 공통 헤더 */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl font-black mb-4 lg:mb-6">
            모두종합환경의<br className="lg:hidden" /> <span className="text-primary-blue">체계적인 시공 프로세스</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-blue mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-500 text-base lg:text-lg font-medium">
            문의부터 사후 관리까지, 모든 과정을 투명하고 정직하게 진행합니다.
          </p>
        </div>

        {/* 1. PC 화면 레이아웃 (기존 유지) */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            {/* Step 1 */}
            <ProcessBox 
              icon={<MessageSquareText size={28} />} 
              title="무료 상담 및 접수" 
            />
            
            <ConnectorLine />

            {/* Step 2 */}
            <ProcessBox 
              icon={<Camera size={28} />} 
              title="사진 및 현장 방문 진단" 
            />

            <ConnectorLine />

            {/* Step 3 */}
            <ProcessBox 
              icon={<FileText size={28} />} 
              title="시공 및 견적 안내" 
              active
            />

            {/* Branching SVG Lines (Desktop) */}
            <div className="w-full h-16 relative">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 64">
                <path d="M 500 0 L 500 32" stroke="#0046FF" strokeWidth="2" fill="none" />
                <path d="M 125 32 L 875 32" stroke="#0046FF" strokeWidth="2" fill="none" />
                <path d="M 125 32 L 125 64" stroke="#0046FF" strokeWidth="2" fill="none" />
                <path d="M 375 32 L 375 64" stroke="#0046FF" strokeWidth="2" fill="none" />
                <path d="M 625 32 L 625 64" stroke="#0046FF" strokeWidth="2" fill="none" />
                <path d="M 875 32 L 875 64" stroke="#0046FF" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Step 4: Diverging Grid (with images) */}
            <div className="grid grid-cols-4 gap-8 w-full">
              {services.map((svc) => (
                <ProcessBox 
                  key={svc.id}
                  title={svc.title} 
                  icon={svc.icon} 
                  image={svc.image}
                  small 
                />
              ))}
            </div>

            {/* Converging SVG Lines (Desktop) */}
            <div className="w-full h-16 relative">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 64">
                <path d="M 125 0 L 125 32" stroke="#0046FF" strokeWidth="1.5" fill="none" />
                <path d="M 375 0 L 375 32" stroke="#0046FF" strokeWidth="1.5" fill="none" />
                <path d="M 625 0 L 625 32" stroke="#0046FF" strokeWidth="1.5" fill="none" />
                <path d="M 875 0 L 875 32" stroke="#0046FF" strokeWidth="1.5" fill="none" />
                <path d="M 125 32 L 875 32" stroke="#0046FF" strokeWidth="1.5" fill="none" />
                <path d="M 500 32 L 500 64" stroke="#0046FF" strokeWidth="1.5" fill="none" />
              </svg>
            </div>

            {/* Step 5: Converge */}
            <ProcessBox 
              icon={<CheckCircle2 size={28} />} 
              title="검수 및 마무리" 
            />
          </div>
        </div>

        {/* 2. 모바일 화면 전용 레이아웃 (압축 및 시공 분리/강조) */}
        <div className="block lg:hidden max-w-md mx-auto space-y-8">
          {/* A. 진행 절차 4단계 가로 압축 리스트 */}
          <div>
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-4 text-center">
              쉽고 간편한 4단계 시공 절차
            </h3>
            <div className="grid grid-cols-4 gap-2 bg-gray-50 border border-gray-100 rounded-2xl p-4">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-primary-blue/10 text-primary-blue rounded-xl flex items-center justify-center mb-2">
                    {step.icon}
                  </div>
                  <span className="text-[9px] text-gray-400 font-bold block mb-0.5">0{idx + 1}단계</span>
                  <span className="text-[11px] font-black text-gray-900 tracking-tight leading-tight text-center break-keep">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* B. 가능 시공 항목 분리 및 동적 강조 */}
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-1">
                전문 시공 가능 서비스
              </h3>
              {dynamic && (
                <p className="text-[11px] font-bold text-primary-blue">
                  * {dynamic.region} 현장은 &apos;{services.find(s => s.id === activeServiceId)?.title}&apos; 집중 강조
                </p>
              )}
            </div>

            <div className="space-y-3">
              {services.map((svc) => {
                const isMatched = svc.id === activeServiceId;
                const isOpen = openServiceId === svc.id;
                
                return (
                  <div 
                    key={svc.id}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                      isMatched 
                        ? "border-primary-blue shadow-lg shadow-primary-blue/5 bg-white" 
                        : isOpen ? "border-gray-200 bg-white" : "border-gray-100 bg-gray-50"
                    }`}
                  >
                    {/* 아코디언 헤더 */}
                    <button
                      onClick={() => toggleServiceAccordion(svc.id)}
                      className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                          isMatched || isOpen 
                            ? "bg-primary-blue text-white" 
                            : "bg-primary-blue/10 text-primary-blue"
                        }`}>
                          {svc.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[14px] font-black text-gray-900 tracking-tight flex items-center">
                            {svc.title}
                            {isMatched && (
                              <span className="ml-2 bg-primary-blue/10 text-primary-blue text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0">
                                현재 현장 추천
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                      <ChevronDown 
                        size={18} 
                        className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                      />
                    </button>

                    {/* 아코디언 바디 (매칭된 것은 기본적으로 펼쳐지고 이미지 포함) */}
                    {isOpen && (
                      <div className="px-4 pb-5 pt-0 space-y-3">
                        {/* 강조 시공이거나 사용자가 펼쳤을 때 이미지를 보여줌 */}
                        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                          <Image 
                            src={svc.image}
                            alt={svc.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                        <p className="text-[13px] leading-relaxed text-gray-600 font-medium break-keep">
                          {svc.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const ProcessBox = ({ icon, title, active, small, image }: { icon: React.ReactNode, title: string, active?: boolean, small?: boolean, image?: string }) => (
  <div className={`
    flex flex-col items-center justify-center bg-white border-2 transition-all duration-300 overflow-hidden
    ${active ? "border-primary-blue shadow-lg shadow-primary-blue/10 scale-105 z-20" : "border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md"}
    ${small ? "rounded-3xl" : "rounded-[2.5rem] px-10 py-6 min-w-[300px]"}
  `}>
    {image && (
      <div className="w-full aspect-[4/3] relative mb-6">
        <Image 
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
    )}
    <div className={`flex flex-col items-center ${image ? "pb-8 px-6" : ""}`}>
      <div className={`${active || small ? "text-primary-blue" : "text-gray-400"} mb-3`}>
        {icon}
      </div>
      <h3 className={`font-black tracking-tight whitespace-nowrap text-center ${small ? "text-[17px] md:text-[18px]" : "text-xl md:text-2xl"}`}>
        {title}
      </h3>
    </div>
  </div>
);

const ConnectorLine = () => (
  <div className="w-0.5 h-12 bg-primary-blue/30 relative">
    <div className="absolute inset-0 bg-primary-blue animate-pulse opacity-50"></div>
  </div>
);

export default Process;
