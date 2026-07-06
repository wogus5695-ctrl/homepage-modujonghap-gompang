"use client";

import React from "react";
import Link from "next/link";
import { DynamicContent } from "@/lib/dynamicHome";
import { DEFAULT_OPERATOR } from "@/lib/operatorConfig";

const Footer = ({ dynamic }: { dynamic?: DynamicContent | null }) => {
  const isFinish = dynamic?.templateType === "finish";
  const operator = dynamic?.operator || DEFAULT_OPERATOR;

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
              {isFinish ? (
                <>
                  모두종합환경은 탄성코트 및 줄눈시공 전문 브랜드입니다. {dynamic && <>{dynamic.region} 현장의 베란다 벽면과 타일 틈새의 오염 방지 및 공간 미관 개선을 위해 최적화된 {dynamic.service} 솔루션을 제공합니다. </>}노하우와 친환경 고급 자재로 쾌적하고 깔끔한 주거 가치를 선사합니다.
                </>
              ) : (
                <>
                  모두종합환경은 곰팡이제거, 단열시공, 탄성코트 전문 브랜드입니다. {dynamic && <>{dynamic.region} 현장의 결로·곰팡이 등 다양한 환경 문제 해결을 위해 맞춤형 {dynamic.service} 솔루션을 제공합니다. </>}노하우와 전문 장비를 통한 정밀 진단으로 쾌적하고 건강한 주거 환경을 약속합니다.
                </>
              )}
            </p>
          </div>

          {/* 고객센터 정보 */}
          <div className="md:text-right">
            <h4 className="text-gray-900 font-bold mb-4">고객센터</h4>
            <a 
              href={`tel:${operator.contactPhone}`} 
              className="text-3xl md:text-4xl font-black text-blue-600 block mb-2"
            >
              {operator.contactPhone}
            </a>
            <p className="text-sm font-medium text-gray-400">
              {operator.operatingHours}
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <div className="text-[13px] text-gray-400">
              대표: {operator.representative} | 사업자등록번호: {operator.businessNumber}
            </div>
            <div className="text-[13px] text-gray-400">
              * {dynamic ? (
                <>{dynamic.region} {dynamic.service} 관련 상담 및 수도권 전 지역 출장 시공 가능</>
              ) : (
                isFinish ? "서울·경기·인천 지역 탄성코트 및 줄눈시공 상담 가능" : "서울·경기·인천 지역 곰팡이제거 및 단열시공 상담 가능"
              )}
            </div>
          </div>
          <p className="text-[13px] text-gray-300">
            &copy; 2026 {operator.operatorName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
