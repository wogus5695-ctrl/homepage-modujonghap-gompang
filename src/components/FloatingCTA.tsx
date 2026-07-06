"use client";

import React from "react";
import { Phone } from "lucide-react";
import { DynamicContent } from "@/lib/dynamicHome";
import { DEFAULT_OPERATOR } from "@/lib/operatorConfig";

const FloatingCTA = ({ dynamic }: { dynamic?: DynamicContent | null }) => {
  const operator = dynamic?.operator || DEFAULT_OPERATOR;

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col space-y-3">
      {/* 전화 상담 플로팅 (메인) */}
      <a
        href={`tel:${operator.contactPhone}`}
        className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 animate-bounce-slow"
        aria-label="전화 상담"
      >
        <Phone size={20} />
      </a>
    </div>
  );
};

export default FloatingCTA;
