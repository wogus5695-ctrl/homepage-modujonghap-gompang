"use client";

import React from "react";
import { Phone } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col space-y-3">
      {/* 전화 상담 플로팅 (메인) */}
      <a
        href="tel:050-7871-3550"
        className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 animate-bounce-slow"
        aria-label="전화 상담"
      >
        <Phone size={20} />
      </a>
    </div>
  );
};

export default FloatingCTA;
