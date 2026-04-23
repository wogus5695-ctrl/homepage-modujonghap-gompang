"use client";

import React from "react";
import { Sparkles, ScanLine, Layers, Droplets, ThermometerSnowflake, Ruler } from "lucide-react";

const ServiceIntro = () => {
  const services = [
    {
      icon: <Sparkles className="text-primary-light" size={28} />,
      title: "곰팡이 완벽 제거",
      description: "벽지, 시멘트 속까지 침투한 곰팡이 균을 전문 약품으로 뿌리째 박멸합니다.",
    },
    {
      icon: <ScanLine className="text-primary-light" size={28} />,
      title: "근본 원인 정밀 진단",
      description: "열화상 카메라 및 장비를 활용하여 결로, 누수 등 곰팡이 발생 원인을 분석합니다.",
    },
    {
      icon: <Layers className="text-primary-light" size={28} />,
      title: "재발 방지 항균 코팅",
      description: "제거 후 곰팡이가 다시는 서식할 수 없도록 특수 항균 코팅 처리로 마무리합니다.",
    },
    {
      icon: <Droplets className="text-primary-light" size={28} />,
      title: "결로 및 습기 조절",
      description: "실내 습도와 결로 발생 지점을 파악하여 최적의 환경 관리 솔루션을 가이드합니다.",
    },
    {
      icon: <ThermometerSnowflake className="text-primary-light" size={28} />,
      title: "단열 보완 및 연계",
      description: "단열 부족이 원인일 경우, 효과적인 단열재 보강 및 시공 방안을 함께 안내해 드립니다.",
    },
    {
      icon: <Ruler className="text-primary-light" size={28} />,
      title: "공간별 맞춤 케어",
      description: "베란다, 안방, 붙박이장 등 각 공간의 특성과 활용도에 맞는 시공법을 적용합니다.",
    },
  ];

  return (
    <section id="service" className="py-24 bg-secondary-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            단순 청소가 아닌<br className="md:hidden" /> <span className="text-primary-light">환경 개선 솔루션</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-light mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            모두종합환경은 눈에 보이는 오염을 넘어, 다시는 같은 문제가 반복되지 않도록 과학적으로 접근합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className="bg-primary-blue/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
