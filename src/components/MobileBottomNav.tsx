"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const MobileBottomNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-gray-100 shadow-[0_-10px_20px_rgba(0,0,0,0.1)] p-3">
      <div className="flex gap-3 h-14">
        <a
          href="tel:010-4861-3226"
          className="flex-1 bg-primary-dark text-white rounded-xl flex items-center justify-center space-x-2 shadow-lg active:scale-95 transition-transform"
        >
          <Phone size={20} />
          <span className="font-bold">전화상담</span>
        </a>
        <a
          href="https://pf.kakao.com/_xxxx"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#FEE500] text-[#3c1e1e] rounded-xl flex items-center justify-center space-x-2 shadow-lg active:scale-95 transition-transform"
        >
          <MessageCircle size={20} fill="#3c1e1e" />
          <span className="font-bold">카톡문의</span>
        </a>
      </div>
    </div>
  );
};

export default MobileBottomNav;
