"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const SectionCTA = () => {
  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 text-center shadow-2xl backdrop-blur-sm">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            방치할수록 곰팡이는 번지고,<br />
            <span className="text-primary-light">시공 비용은 커지기만 합니다.</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
            더 늦기 전에 전문가에게 무료로 진단 받으세요.<br className="hidden md:block" />
            사진만 보내주셔도 정확한 해결책을 찾아드립니다.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:010-4861-3226" 
              className="w-full sm:w-auto bg-primary-light text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-lg shadow-primary-light/20 hover:scale-105 transition-all flex items-center justify-center space-x-3"
            >
              <Phone size={24} />
              <span>전화로 즉시 견적 확인</span>
            </a>
            <a 
              href="https://pf.kakao.com/_xxxx" 
              className="w-full sm:w-auto bg-[#FEE500] text-[#3c1e1e] px-10 py-5 rounded-2xl font-bold text-xl shadow-lg hover:scale-105 transition-all flex items-center justify-center space-x-3"
            >
              <MessageCircle size={24} fill="#3c1e1e" />
              <span>카톡으로 사진 상담</span>
            </a>
          </div>
          
          <p className="mt-8 text-gray-400 text-sm">
            상담은 평일/주말 관계없이 24시간 열려있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionCTA;
