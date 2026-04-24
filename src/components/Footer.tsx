"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          {/* 업체 정보 */}
          <div className="lg:w-1/3">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary-light p-1.5 rounded-lg">
                <ShieldCheck size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                모두종합환경
              </span>
            </div>
            <p className="mb-6 leading-relaxed">
              모두종합환경은 곰팡이 해결 전문가 그룹입니다. 
              단순히 지워내기보다 원인을 분석하고 다시는 생기지 않도록 
              환경을 개선하는 데 모든 역량을 집중합니다.
            </p>
            <div className="flex space-x-4">
              <a href="tel:010-4861-3226" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-light hover:text-white transition-all">
                <Phone size={18} />
              </a>
              <a href="https://pf.kakao.com/_xxxx" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#FEE500] hover:text-[#3c1e1e] transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* 주요 메뉴 */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 lg:w-1/3">
            <div>
              <h4 className="text-white font-bold mb-4">서비스 영역</h4>
              <ul className="space-y-2 text-sm">
                <li>곰팡이 완벽 제거</li>
                <li>결로 원인 분석</li>
                <li>재발 방지 코팅</li>
                <li>단열 보강 연계</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">고객 지원</h4>
              <ul className="space-y-2 text-sm">
                <li>고객 센터: 010-4861-3226</li>
                <li>운영시간: 연중무휴</li>
                <li>오전 09:00 - 오후 22:00</li>
                <li>(야간 상담은 카톡 접수)</li>
              </ul>
            </div>
          </div>

          {/* 사업자 정보 */}
          <div className="lg:w-1/4">
            <h4 className="text-white font-bold mb-4">사업자 정보</h4>
            <div className="text-sm space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>주소: 서울특별시/경기도 시공 가능 지역</span>
              </div>
              <p>업체명: 모두종합환경 | 대표자: 홍길동</p>
              <p>사업자등록번호: 000-00-00000</p>
              <p className="pt-2 text-xs text-gray-600">
                &copy; 2024 Modu Environmental. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-xs">
          <p>
            심플하고 직관적인 단일형 랜딩페이지 | 최적화된 문의 동선 설계 by Antigravity Expert
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
