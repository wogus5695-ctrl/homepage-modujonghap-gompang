import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "수도권 지역별 곰팡이제거·단열시공·결로방지 서비스 안내",
  description: "모두종합환경의 수도권(서울/경기/인천) 지역별 곰팡이제거, 결로방지 특수 도장, 아파트/빌라 단열시공 상세 서비스 안내 페이지 모음입니다.",
  alternates: {
    canonical: "https://modujonghap.co.kr/sitemap-seoul",
  },
};

import { areaData, moldServices } from "@/lib/areaData";

const services = moldServices;

export default function SitemapSeoul() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-32 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl font-black text-gray-900 mb-6 tracking-tighter">
              지역별 서비스 안내
            </h1>
            <p className="text-lg text-gray-500 font-medium tracking-tight">
              수도권 전 지역 곰팡이제거, 결로방지, 단열시공 관련 상세 안내를 확인하실 수 있습니다.<br />
              원하시는 시공 지역과 서비스를 선택하여 확인해 주세요.
            </p>
          </div>

          <div className="space-y-24">
            {areaData.map((area) => {
              // 구/시 이름에서 '구' 또는 '시' 제거
              const baseName = area.name.length > 2 ? area.name.replace(/[구시]$/, "") : area.name;
              const hasSuffix = area.name !== baseName;
              
              return (
                <div key={area.name} className="space-y-4">
                  <h2 className="text-2xl font-black text-gray-900 border-l-4 border-primary-blue pl-6 py-1">
                    {area.name}
                  </h2>
                  <p className="text-sm text-gray-400 font-medium pl-6 leading-relaxed">
                    {area.name} 지역 아파트, 빌라, 상가 주택의 결로 현상 차단 단열 공사 및 베란다/다용도실 곰팡이제거 솔루션 서비스 목록입니다.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pl-6">
                    {/* 1단계: 구/시 단위 키워드 (풀네임과 줄임말 둘 다 표시) */}
                    {services.map((service) => (
                      <React.Fragment key={`${area.name}-${service}-group`}>
                        {/* 1-1. 풀네임 버전 (ex. 강북구-곰팡이제거) */}
                        {hasSuffix && (
                          <Link
                            href={`/k/${encodeURIComponent(`${area.name}-${service}`)}`}
                            className="flex items-center justify-center px-4 py-5 bg-blue-50/50 border border-blue-200 rounded-lg text-[13px] font-black text-blue-800 hover:bg-primary-blue hover:text-white hover:border-primary-blue hover:shadow-md transition-all duration-200 text-center"
                          >
                            {area.name} {service}
                          </Link>
                        )}
                        
                        {/* 1-2. 줄임말 버전 (ex. 강북-곰팡이제거) */}
                        <Link
                          href={`/k/${encodeURIComponent(`${baseName}-${service}`)}`}
                          className="flex items-center justify-center px-4 py-5 bg-blue-50/30 border border-blue-100 rounded-lg text-[13px] font-black text-blue-700 hover:bg-primary-blue hover:text-white hover:border-primary-blue hover:shadow-md transition-all duration-200 text-center"
                        >
                          {baseName} {service}
                        </Link>
                      </React.Fragment>
                    ))}

                    {/* 2단계: 동 단위 키워드 */}
                    {area.dongs.map((dong) => 
                      services.map((service) => (
                        <Link
                          key={`${dong}-${service}`}
                          href={`/k/${encodeURIComponent(`${dong}-${service}`)}`}
                          className="flex items-center justify-center px-4 py-5 bg-white border border-gray-100 rounded-lg text-[13px] font-bold text-gray-600 hover:border-primary-blue hover:text-primary-blue hover:shadow-md transition-all duration-200 text-center"
                        >
                          {dong} {service}
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Bottom CTA Card */}
          <div className="mt-28 bg-gray-50 border border-gray-100 rounded-[2rem] p-10 md:p-16 text-center max-w-4xl mx-auto shadow-sm">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight">
              습기 결로와 곰팡이 해결이 필요하신가요?
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
              더 늦기 전에 원인을 진단하고 확실한 재발 방지 장벽을 세우세요. <br className="hidden md:block" />
              사진 상담을 요청하시면 현장 사진을 기준으로 빠른 1차 견적을 안내해 드립니다.
            </p>
            <a
              href="tel:050-7871-3550"
              className="inline-flex items-center space-x-3 bg-primary-blue text-white px-8 py-4 rounded-xl text-base font-bold shadow-md hover:bg-blue-700 transition-all hover:scale-105"
            >
              <span>곰팡이 원인 무료 전화 상담</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
