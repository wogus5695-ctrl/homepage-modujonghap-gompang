"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col space-y-3">
      {/* 카카오톡 상담 플로팅 (작게) */}
      <a
        href="https://pf.kakao.com/_xxxx"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#FEE500] text-[#3c1e1e] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95"
        aria-label="카카오톡 상담"
      >
        <MessageCircle size={20} fill="#3c1e1e" />
      </a>

      {/* 전화 상담 플로팅 (메인) */}
      <a
        href="tel:010-4861-3226"
        className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 animate-bounce-slow"
        aria-label="전화 상담"
      >
        <Phone size={20} />
      </a>
    </div>
  );
};

export default FloatingCTA;
