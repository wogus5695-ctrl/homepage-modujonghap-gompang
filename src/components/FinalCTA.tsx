"use client";

import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { DynamicContent } from "@/lib/dynamicHome";

const FinalCTA = ({ dynamic }: { dynamic?: DynamicContent | null }) => {
  return (
    <section id="contact" className="py-32 bg-gray-950 relative overflow-hidden">
      {/* 배경 디자인 요소 */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-primary-blue/10 border border-primary-blue/20 rounded-full text-primary-blue text-[10px] font-black uppercase tracking-[0.3em] mb-10">
            Get a Quote
          </div>
           <h2 className="relative z-20 text-4xl md:text-6xl font-black !text-white mb-10 tracking-tighter leading-tight">
            {dynamic ? (
              <>{dynamic.region} {dynamic.service},<br />전문가 진단이 가장 빠른 해결책입니다.</>
            ) : (
              <>전문가의 진단이<br />가장 빠른 해결책입니다.</>
            )}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-16 font-medium leading-relaxed">
            더 이상 고민하지 마세요. 지금 상담을 신청하시면<br className="hidden md:block" />
            {dynamic ? `${dynamic.region} 지역 담당 ` : ""}전문가가 직접 방문하여 고객님 댁의 정확한 원인을 분석해 드립니다.
          </p>
          
          {/* 3번 CTA: 하단 메인 버튼 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="tel:050-7871-3550" 
              className="w-full md:w-auto bg-primary-blue text-white px-10 py-5 rounded-2xl font-black text-xl shadow-[0_20px_50px_-10px_rgba(0,70,255,0.4)] hover:bg-blue-700 transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-3 group"
            >
              <Phone size={24} />
              <span>무료상담 전화하기</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="mt-16 pt-16 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-8 text-xs font-black text-gray-500 uppercase tracking-widest">
            <div>Fast Service</div>
            <div>Professional Team</div>
            <div>No Recurrence</div>
            <div>Free Inspection</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
