"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-500 py-16 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* 브랜드 정보 */}
          <div className="md:w-1/2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xl font-black text-blue-600">모두종합환경</span>
            </div>
            <p className="text-[15px] leading-relaxed max-w-md text-gray-600">
              모두종합환경은 곰팡이제거, 단열시공, 탄성코트 전문 브랜드입니다. 
              노하우와 전문 장비를 통한 정밀 진단으로 
              쾌적하고 건강한 주거 환경을 약속합니다.
            </p>
          </div>

          {/* 고객센터 정보 */}
          <div className="md:text-right">
            <h4 className="text-gray-900 font-bold mb-4">고객센터</h4>
            <a 
              href="tel:010-4861-3226" 
              className="text-3xl md:text-4xl font-black text-blue-600 block mb-2"
            >
              010-4861-3226
            </a>
            <p className="text-sm font-medium text-gray-400">
              평일/주말 09:00 ~ 20:00 (연중무휴)
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <div className="text-[13px] text-gray-400">
              대표: 김재현 | 사업자등록번호: 405-15-02677
            </div>
            <div className="text-[13px] text-gray-400">
              * 서울·경기·인천 지역 곰팡이제거 및 단열시공 상담 가능
            </div>
          </div>
          <p className="text-[13px] text-gray-300">
            &copy; 2026 모두종합환경. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
